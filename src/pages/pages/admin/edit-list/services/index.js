import axios from 'axios'

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

export const editarLista = async listaId => {
  try {
    return await api.put(`/listas/${listaId}`)
  } catch (error) {
    return error
  }
}

export const obtenerLista = async listaId => {
  try {
    return await api.get(`/listas/${listaId}`)
  } catch (error) {
    return error
  }
}
