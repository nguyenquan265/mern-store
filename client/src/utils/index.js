import axios from 'axios'

const localURL = 'http://localhost:8000/api/v1'
// const prodURL = 'https://api.example.com/api/v1'

export const customAxios = axios.create({
  baseURL: localURL
})

export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format((price / 100).toFixed(2))
  
  return dollarsAmount
}
