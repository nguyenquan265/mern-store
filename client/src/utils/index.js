import axios from 'axios'

const localURL = 'http://localhost:8000/api/v1'
// const prodURL = 'https://api.example.com/api/v1'

export const customAxios = axios.create({
  baseURL: localURL
})
