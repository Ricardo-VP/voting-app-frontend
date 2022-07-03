import axios from 'axios'

const token = () => {
  if (!(typeof window === 'undefined')) {
    const user = JSON.parse(localStorage.getItem('user'))

    return user?.token.token
  }
}

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_HOST,
  timeout: 2000,
  headers: { Authorization: token() }
})

export const obtenerListas = async () => {
  try {
    return await api.get(`/listas`)
  } catch (error) {
    return error
  }
}
