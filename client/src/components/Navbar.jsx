import { NavLink } from 'react-router-dom'
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FaBarsStaggered } from 'react-icons/fa6'
import NavLinks from './NavLinks'
import { useEffect, useState } from 'react'

const themes = {
  winter: 'winter',
  dracula: 'dracula'
}

const getThemeFromLocalStorage = () => {
  return localStorage.getItem('theme') || themes.winter
}

const Navbar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage())

  const handleTheme = () => {
    if (theme === themes.winter) {
      setTheme(themes.dracula)
    } else {
      setTheme(themes.winter)
    }
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <nav className='bg-base-200'>
      <div className='navbar align-element'>
        <div className='navbar-start'>
          <NavLink
            className='hidden lg:flex btn btn-primary text-3xl items-center'
            to='/'
          >
            Q
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
          <label className='swap swap-rotate'>
            <input type='checkbox' onClick={handleTheme} />
            <BsSunFill className={`swap-${theme === 'winter' ? 'on' : 'off'} fill-current w-6 h-6`} />
            <BsMoonFill className={`swap-${theme === 'winter' ? 'off' : 'on'} fill-current w-6 h-6`} />
          </label>
          <NavLink className='btn btn-ghost btn-circle btn-md ml-4'>
            <div className='indicator'>
              <BsCart3 className='h-6 w-6' />
              <span className='badge badge-sm badge-primary indicator-item'>
                8
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
