import { NavLink } from 'react-router-dom'
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FaBarsStaggered } from 'react-icons/fa6'
import NavLinks from './NavLinks'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../features/user/userSlice'

const Navbar = () => {
  const { theme } = useSelector(state => state.user)
  const { numItemsInCart } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <nav className='bg-base-200'>
      <div className='navbar align-element'>
        <div className='navbar-start'>
          <NavLink
            className='hidden lg:flex btn btn-primary text-3xl items-center'
            to='/'
          >
            C
          </NavLink>
          <div className='dropdown'>
            <label className='btn btn-ghost lg:hidden' tabIndex={0}>
              <FaBarsStaggered className='h-6 w-6' />
            </label>
            <ul
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'
              tabIndex={0}
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal'>
            <NavLinks />
          </ul>
        </div>
        <div className='navbar-end'>
          <label className='swap swap-rotate' onClick={handleTheme}>
            {
              theme === 'winter' ? (
                <BsMoonFill className='fill-current w-6 h-6' />
              ) : (
                <BsSunFill className='fill-current w-6 h-6' />
              )
            }
          </label>
          <NavLink className='btn btn-ghost btn-circle btn-md ml-4'>
            <div className='indicator'>
              <BsCart3 className='h-6 w-6' />
              <span className='badge badge-sm badge-primary indicator-item'>
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
