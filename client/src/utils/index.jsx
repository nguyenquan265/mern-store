import axios from 'axios'
import { toast } from 'react-toastify'
import { store } from '../store'
import { logoutUser } from '../features/user/userSlice'

const localURL = 'http://localhost:8000/api/v1'
const url = ''

// create custom axios instance
axios.defaults.withCredentials = true

export const customAxios = axios.create({
  baseURL: localURL
})

customAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => Promise.reject(error)
)

customAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const res = await axios.post(`${url}/api/v1/users/refresh-token`)
        const { token } = res.data

        localStorage.setItem('token', token)

        originalRequest.headers.Authorization = `Bearer ${token}`
        return axios(originalRequest)
      } catch (error) {
        await axios.post(`${url}/api/v1/users/logout`)
        store.dispatch(logoutUser())
        toast.warn('Please log in to access this page.')
      }
    }

    return Promise.reject(error)
  }
)

// convert cents to dollars
export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format((price / 100).toFixed(2))

  return dollarsAmount
}

// convert colors string to object
export const formatColors = (colors) => {
  return JSON.parse(colors)
}

// convert sizes string to array
export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1

    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    )
  })
}
