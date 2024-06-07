import { sign, verify } from 'jsonwebtoken'
import { env } from '~/config/env'
import User from '~/models/user'
import { ApiError } from '~/utils/ApiError'
import { catchAsync } from '~/utils/catchAsync'

const signAccessToken = (id) => {
  return sign({ id }, env.jwt.ACCESS_TOKEN_SECRET, {
    expiresIn: '30s'
    // expiresIn: env.jwt.ACCESS_TOKEN_EXPIRY,
  })
}

const signRefreshToken = (id) => {
  return sign({ id }, env.jwt.REFRESH_TOKEN_SECRET, {
    expiresIn: env.jwt.REFRESH_TOKEN_EXPIRY
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

  const token = signAccessToken(user.id)
  const refreshToken = signRefreshToken(user.id)

  res
    .status(200)
    .cookie('refreshToken', refreshToken, {
      expires: new Date(
        Date.now() + env.jwt.COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      secure: true,
      sameSite: 'none'
    })
    .json({ status: 'success', token, user: rest })
})

export const logout = catchAsync(async (req, res, next) => {
  res.clearCookie('refreshToken')

  res.status(200).json({ status: 'success' })
})

export const getMe = catchAsync(async (req, res, next) => {
  const { user } = req

  if (!user) {
    throw new ApiError(404, 'User not found')
  }

  res.status(200).json({ status: 'success', user })
})

export const refreshToken = catchAsync(async (req, res, next) => {
  const refreshToken = req.cookies?.refreshToken

  if (!refreshToken) {
    throw new ApiError(401, 'RefreshToken not found')
  }

  const decoded = verify(refreshToken, env.jwt.REFRESH_TOKEN_SECRET)

  const user = await User.findByPk(decoded.id)

  if (!user) {
    throw new ApiError(404, 'User not found')
  }

  const { password: pass, ...rest } = user.toJSON()

  const token = signAccessToken(user.id)

  res.status(200).json({ status: 'success', token, user: rest })
})
