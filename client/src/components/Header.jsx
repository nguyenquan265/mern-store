import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../features/user/userSlice'
import { clearCart } from '../features/cart/cartSlice'
import { customAxios } from '../utils'
import { toast } from 'react-toastify'
import { useQueryClient } from '@tanstack/react-query'

const Header = () => {
  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const handleLogout = async () => {
    await customAxios.post('/users/logout')
    navigate('/')
    dispatch(clearCart())
    dispatch(logoutUser())
    queryClient.removeQueries()
    toast.success('Logged out successfully')
  }

  return (
    <header className='bg-neutral py-2 text-neutral-content'>
      <div className='align-element flex justify-center sm:justify-end'>
        {
          user ? (
            <div className='flex gap-x-2 sm:gap-x-8 items-center'>
              <p className='text-xs sm:text-sm'>Hello, {user.username}</p>
              <button
                className='btn btn-xs btn-outline btn-primary '
                onClick={handleLogout}
              >
                logout
              </button>
            </div>
          ) : (
            <div className='flex gap-x-6 justify-center items-center'>
              <Link className='link link-hover text-xs sm:text-sm' to='/login'>
                Sign in / Guest
              </Link>
              <Link className='link link-hover text-xs sm:text-sm' to='/register'>
                Create an Account
              </Link>
            </div>
          )
        }
      </div>
    </header>
  )
}

export default Header
