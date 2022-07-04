import axios from 'axios'
import router from 'next/router'

const token = () => {
  if (!(typeof window === 'undefined')) {
    const user = JSON.parse(localStorage.getItem('user'))

    return user?.token.token
  }
}

const userId = () => {
  if (!(typeof window === 'undefined')) {
    const user = JSON.parse(localStorage.getItem('user'))

    return user?._id
  }
}

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_HOST,
  timeout: 2000,
  headers: { Authorization: token() }
})

// -------- FUNCIONES -------

export const obtenerListas = async () => {
  try {
    return await api.get(`/listas`)
  } catch (error) {
    return error
  }
}

export const registrarVoto = async listaId => {
  try {
    await api.post(`/listas/votar/${listaId}`, {
      userId: userId()
    })
    router.push('/pages/user/screen')
  } catch (error) {
    return error
  }
}

export const estadoVoto = async () => {
  try {
    return await api.get(`/auth/voto-estado/${userId()}`, {})
  } catch (error) {
    return error
  }
}
