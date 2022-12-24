import mainApi from '../utils/mainApi'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useAuth() {
  const [isLogged, setIsLogged] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const navigate = useNavigate()

  const setUser = (user) => {
    setCurrentUser({ name: user.name, email: user.email })
  }

  const checkAuth = async () => {
    try {
      const res = await mainApi.getMyProfile()
      res.email ? setIsLogged(true) : setIsLogged(false)
      setUser(res)
    } catch (err) {
      console.log(err)
    }
  }

  const submitLogin = async (userData) => {
    try {
      const res = await mainApi.handleLogin(userData)
      res.email ? setIsLogged(true) : setIsLogged(false)
      setUser(res)
      navigate('/movies')
    } catch (err) {
      console.log(err)
    }
  }
  const submitRegister = async (userData) => {
    try {
      const res = await mainApi.handleRegister(userData)
      res.email
        ? submitLogin({ email: userData.email, password: userData.password })
        : setIsLogged(false)
    } catch (err) {
      console.log(err)
    }
  }

  const handleLogout = async () => {
    try {
      const res = await mainApi.handleLogout()
      if (res.message === 'Пользователь успешно вышел из аккаунта') {
        setIsLogged(false)
        navigate('/')
      }
    } catch (err) {
      console.log(err)
    }
  }

  const submitProfileUpdate = async (newUserData) => {
    try {
      const newProfile = await mainApi.updateMyProfile(newUserData)
      setUser(newProfile)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    checkAuth()
  }, [])

  return {
    currentUser,
    isLogged,
    submitLogin,
    handleLogout,
    submitRegister,
    submitProfileUpdate,
  }
}
