import { Form, Link, redirect, Navigate, useNavigate } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../components'
import { customAxios } from '../utils'
import { toast } from 'react-toastify'
import { loginUser } from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    try {
      const res = await customAxios.post('/users/login', data)
      store.dispatch(loginUser(res.data))
      toast.success('Login successfully')
      return redirect('/')
    } catch (error) {
      toast.error(
        error?.response?.data?.message || 'please double check your credentials'
      )
      return null
    }
  }

const Login = () => {
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginAsGuestUser = async () => {
    try {
      const res = await customAxios.post('/users/login', {
        email: 'test@test.com',
        password: 'secret'
      })

      dispatch(loginUser(res.data))
      toast.success('welcome guest user')
      return navigate('/')
    } catch (error) {
      toast.error('Guest user login error. Please try later.')
      console.log(error)
    }
  }

  if (user) {
    return <Navigate to='/' />
  }

  return (
    <section className='h-screen grid place-items-center'>
      <Form
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
        method='POST'
      >
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <FormInput
          type='email'
          name='email'
          label='email'
          defaultValue='test@test.com'
        />
        <FormInput
          type='password'
          name='password'
          label='password'
          defaultValue='secret'
        />
        <div className='mt-4'>
          <SubmitBtn text='Login' />
        </div>
        <button
          className='btn btn-secondary btn-block'
          type='button'
          onClick={loginAsGuestUser}
        >
          Guest user
        </button>
        <p>
          Not a member yet?
          <Link
            className='ml-2 link link-hover link-primary capitalize'
            to='/register'
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  )
}

export default Login
