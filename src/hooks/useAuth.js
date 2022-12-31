import mainApi from '../utils/mainApi'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useAuth(setIsLoading, isFetching, setSystemMessage) {
  const [isLogged, setIsLogged] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const navigate = useNavigate()

  const setUser = (user) => {
    setCurrentUser({ name: user.name, email: user.email })
  }

  const checkAuth = async () => {
    setIsLoading(true)
    try {
      const res = await mainApi.getMyProfile()
      res.email ? setIsLogged(true) : setIsLogged(false)
      setUser(res)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  const submitLogin = async (userData) => {
    isFetching(true)
    try {
      const res = await mainApi.handleLogin(userData)
      res.email ? setIsLogged(true) : setIsLogged(false)
      setUser(res)
      navigate('/movies')
      setSystemMessage('Пользователь успешно вошёл в учетную запись')
      navigate('/movies')
    } catch (err) {
      setSystemMessage(err)
    } finally {
      isFetching(false)
    }
  }
  const submitRegister = async (userData) => {
    isFetching(true)
    try {
      const res = await mainApi.handleRegister(userData)
      res.email
        ? submitLogin({ email: userData.email, password: userData.password })
        : setIsLogged(false)
    } catch (err) {
      setSystemMessage(err)
    } finally {
      isFetching(false)
    }
  }

  const handleLogout = async () => {
    setIsLoading(true)
    try {
      const res = await mainApi.handleLogout()
      if (res.message === 'Пользователь успешно вышел из аккаунта') {
        setIsLogged(false)
        navigate('/')
        setSystemMessage('Пользователь успешно вышел из учетной записи')
        localStorage.clear()
      }
    } catch (err) {
      setSystemMessage(err)
    } finally {
      setIsLoading(false)
    }
  }

  const submitProfileUpdate = async (newUserData) => {
    setIsLoading(true)
    try {
      const newProfile = await mainApi.updateMyProfile(newUserData)
      setUser(newProfile)
      setSystemMessage('Данные пользователя успешно обновлены')
    } catch (err) {
      setSystemMessage(err)
    } finally {
      setIsLoading(false)
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
