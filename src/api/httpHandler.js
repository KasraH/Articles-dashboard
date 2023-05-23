import axios from 'axios'
import { redirect } from 'react-router-dom'

const instance = axios.create({
  baseURL: 'https://api.realworld.io/api',
})

instance.interceptors.request.use(config => {
  const token = window.localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    const { response } = error
    if (response.status === 401) {
      return Promise.reject(redirect('/register'))
    }
    return Promise.reject(error)
  }
)
export default instance
