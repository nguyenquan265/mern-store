import { Form, Link, Navigate, redirect } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../components'
import { customAxios } from '../utils'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    await customAxios.post('/users/register', data)
    toast.success('account created successfully')
    return redirect('/login')
  } catch (error) {
    toast.error(
      error?.response?.data?.message || 'please double check your credentials'
    )
    return null
  }
}

const Register = () => {
  const { user } = useSelector((state) => state.user)

  if (user) {
    return <Navigate to='/' />
  }

  return (
    <section className='h-screen grid place-items-center'>
      <Form
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
        method='POST'
      >
        <h4 className='text-center text-3xl font-bold'>Register</h4>
        <FormInput type='text' name='username' label='username' />
        <FormInput type='email' name='email' label='email' />
        <FormInput type='password' name='password' label='password' />
        <div className='mt-4'>
          <SubmitBtn text='Register' />
        </div>
        <button className='btn btn-secondary btn-block' type='button'>
          Guest user
        </button>
        <p>
          Already a member?
          <Link
            className='ml-2 link link-hover link-primary capitalize'
            to='/login'
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  )
}

export default Register
