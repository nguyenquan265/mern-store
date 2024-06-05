import { Form, Link } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../components'

export const action = async () => { }

const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
        method='POST'
      >
        <h4 className='text-center text-3xl font-bold'>Register</h4>
        <FormInput type='text' name='username' label='username' />
        <FormInput type='email' name='identifier' label='email' />
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
