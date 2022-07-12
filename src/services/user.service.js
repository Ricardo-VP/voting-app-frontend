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

export const login = async (cedula, password) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/auth/login`, {
      cedula,
      password
    })
    handleUserLogin(res.data.user)

    return true
  } catch (error) {
    return false
  }
}

const handleUserLogin = async data => {
  await setLocalStorageUser(data).then(() => {
    if (data.user?.admin) {
      router.push('/pages/admin/inicio')
    } else {
      router.push('/pages2/user/listas')
    }
  })
}

export const logout = () => {
  localStorage.removeItem('user')
  router.push('/pages/admin/login')
}

export const isUserAdmin = () => {
  if (!(typeof window === 'undefined')) {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user?.admin) {
      return true
    } else {
      return false
    }
  }
}

export const getUserEmail = () => {
  if (!(typeof window === 'undefined')) {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user?.admin) {
      return 'Administrador'
    } else {
      return 'Usuario'
    }
  }
}

export const register = async (cedula, password) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/auth/register`, {
      cedula,
      password,
      esAdmin: false,
      votoRegistrado: false
    })

    handleUserRegister(res.data)

    return true
  } catch (error) {
    return false
  }
}

const handleUserRegister = async data => {
  await setLocalStorageUser(data).then(() => {
    router.push('/pages2/user/listas')
  })
}

const setLocalStorageUser = async data => {
  await localStorage.setItem('user', JSON.stringify(data))
}

export const registrarVoto = async (listaId, token) => {
  try {
    await api.post(
      `/listas/votar/${listaId}`,
      {
        userId: userId()
      },
      {
        headers: {
          Authorization: token
        }
      }
    )
    router.push('/pages2/user/screen')
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
