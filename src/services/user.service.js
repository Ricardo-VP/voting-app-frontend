import axios from 'axios'
import router from 'next/router'

export const login = async (cedula, password) => {
  try {
    const res = await axios.post('http://localhost:3001/auth/login', {
      cedula,
      password
    })
    handleUserLogin(res.data)

    return true
  } catch (error) {
    return false
  }
}

const handleUserLogin = data => {
  localStorage.setItem('user', JSON.stringify(data.user))
  if (data.user?.admin) {
    router.push('/pages/admin/inicio')
  } else {
    router.push('/pages/user/listas')
  }
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
    const res = await axios.post('http://localhost:3001/auth/register', {
      cedula,
      password,
      esAdmin: false
    })
    handleUserRegister(res.data)

    return true
  } catch (error) {
    return false
  }
}

const handleUserRegister = data => {
  localStorage.setItem('user', JSON.stringify(data))
  router.push('/pages/user/listas')
}