import { sign } from 'jsonwebtoken'
import { env } from '~/config/env'
import User from '~/models/user'
import { ApiError } from '~/utils/ApiError'
import { catchAsync } from '~/utils/catchAsync'

const signToken = (id) => {
  return sign({ id }, env.jwt.SECRET, {
    expiresIn: env.jwt.EXPIRES_IN
  })
}

export const register = catchAsync(async (req, res, next) => {
  const { username, email, password } = req.body

  // Check if all fields are provided
  if (!username || !email || !password) {
    throw new ApiError(400, 'All fields are required')
  }

  // Check if user already exists
  const user = await User.findOne({ where: { email } })

  if (user) {
    throw new ApiError(400, 'User already exists')
  }

  // Create new user
  const newUser = await User.create({ username, email, password })

  const { password: pass, ...rest } = newUser.toJSON()

  res.status(200).json({ status: 'success', user: rest })
})

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body

  // Check if all fields are provided
  if (!email || !password) {
    throw new ApiError(400, 'All fields are required')
  }

  // Check if user already exists or password is incorrect
  const user = await User.scope('withPassword').findOne({ where: { email } })

  if (!user || !user.isValidPassword(password)) {
    throw new ApiError(400, 'Invalid email or password')
  }

  const { password: pass, ...rest } = user.toJSON()

  const token = signToken(user.id)

  res.status(200).json({ status: 'success', token, user: rest })
})
