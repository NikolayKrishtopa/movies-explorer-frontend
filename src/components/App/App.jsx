import AboutMe from '../AboutMe/AboutMe'
import AboutProject from '../AboutProject/AboutProject'
import NavTab from '../NavTab/NavTab'
import Promo from '../Promo/Promo'
import Techs from '../Techs/Techs'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../EntryForm/Register'
import Login from '../EntryForm/Login'
import NotFoundError from '../NotFoundError/NotFoundError'
import useMoviesState from '../../hooks/useMoviesState'
import CurrentUserContext from '../../contexts/CurrentUserContext'
import useAuth from '../../hooks/useAuth'
import useSavedMoviesState from '../../hooks/useSavedMoviesState'
import { useState, useEffect } from 'react'
import ProtectedRoute from '../../hok/ProtectedRoute'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import PopupLoading from '../PopupLoading/PopupLoading'
import PopupSystemMessage from '../PopupSystemMessage/PopupSystemMessage'
import { useRef } from 'react'
import useScreenWidth from '../../hooks/useScreenWidth'

function App() {
  const [systemMessage, setSystemMessage] = useState('')

  const [isLoading, setIsLoading] = useState(true)

  // **Хук состояния страницы Фильмы**
  const moviesState = useMoviesState(setIsLoading, setSystemMessage)

  // **Хук состояния авторизации пользователя**
  const {
    currentUser,
    isLogged,
    submitLogin,
    handleLogout,
    submitRegister,
    submitProfileUpdate,
  } = useAuth(setIsLoading, setSystemMessage)

  // **Хук состояния страницы Сохраненные фильмы**
  const { userMovies, addMovieToSaved, removeMovieFromSaved, setSavedMovies } =
    useSavedMoviesState(setIsLoading, setSystemMessage)

  // *** Загрузка фильмов из коллекции пользователя после входа в учетную запись ***
  useEffect(() => {
    if (!isLogged) return
    setSavedMovies()
  }, [isLogged])

  // ***  Отслеживание ширины экрана ***

  const page = useRef()

  useScreenWidth(page, moviesState)

  return (
    <div className='page' ref={page}>
      <PopupSystemMessage
        message={systemMessage}
        setSystemMessage={setSystemMessage}
      />
      {isLoading ? (
        <PopupLoading />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Header isLogged={isLogged} />
                  <main>
                    <Promo />
                    <NavTab />
                    <AboutProject />
                    <Techs />
                    <AboutMe />
                    <Footer />
                  </main>
                </>
              }
            />
            <Route
              path='/movies'
              element={
                <ProtectedRoute
                  component={Movies}
                  condition={isLogged}
                  isLogged={isLogged}
                  state={moviesState}
                  onAdd={addMovieToSaved}
                  onRemove={removeMovieFromSaved}
                  collection={userMovies}
                />
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute
                  isLogged={isLogged}
                  component={SavedMovies}
                  userMovies={userMovies}
                  onRemove={removeMovieFromSaved}
                  condition={isLogged}
                />
              }
            />
            <Route
              path='/profile'
              element={
                <ProtectedRoute
                  isLogged={isLogged}
                  component={Profile}
                  condition={isLogged}
                  onLogout={handleLogout}
                  onSubmit={submitProfileUpdate}
                />
              }
            />
            <Route
              path='/signup'
              element={
                <ProtectedRoute
                  condition={!isLogged}
                  onSubmit={submitRegister}
                  component={Register}
                />
              }
            />
            <Route
              path='/signin'
              element={
                <ProtectedRoute
                  condition={!isLogged}
                  onSubmit={submitLogin}
                  component={Login}
                />
              }
            />
            <Route path='/*' element={<NotFoundError />} />
          </Routes>
        </CurrentUserContext.Provider>
      )}
    </div>
  )
}

export default App
