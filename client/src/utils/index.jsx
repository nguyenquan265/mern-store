import axios from 'axios'

const localURL = 'http://localhost:8000/api/v1'
// const prodURL = 'https://api.example.com/api/v1'

// create custom axios instance
export const customAxios = axios.create({
  baseURL: localURL
})

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
