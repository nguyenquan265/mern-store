import { createSlice } from '@reduxjs/toolkit'

const themes = {
  winter: 'winter',
  dracula: 'dracula'
}

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.winter
  document.documentElement.setAttribute('data-theme', theme)
  return theme
}

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user')) || null
}

const getTokenFromLocalStorage = () => {
  return localStorage.getItem('token') || null
}

// set default state
const defaultState = {
  user: getUserFromLocalStorage(),
  token: getTokenFromLocalStorage(),
  theme: getThemeFromLocalStorage()
}

const userSlice = createSlice({
  name: 'user',
  initialState: defaultState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload.user
      localStorage.setItem('user', JSON.stringify(action.payload.user))
      localStorage.setItem('token', action.payload.token)
    },
    logoutUser: (state) => {
      state.user = null
      localStorage.removeItem('user')
      localStorage.removeItem('token')
    },
    toggleTheme: (state) => {
      const { winter, dracula } = themes
      state.theme = state.theme === dracula ? winter : dracula

      document.documentElement.setAttribute('data-theme', state.theme)
      localStorage.setItem('theme', state.theme)
    }
  }
})

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions

export default userSlice.reducer
