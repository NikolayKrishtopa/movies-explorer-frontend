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

function App() {
  console.log('rerendered')
  const [systemMessage, setSystemMessage] = useState('')

  const [isLoading, setIsLoading] = useState(false)

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

  const layoutPagePerWidth = (width) => {
    if (width < 480) {
      moviesState.setInitialItemsQty(5)
      moviesState.setItemsPerPage(1)
    } else if ((width > 480) & (width < 800)) {
      moviesState.setInitialItemsQty(8)
      moviesState.setItemsPerPage(2)
    } else if (width > 800) {
      moviesState.setInitialItemsQty(12)
      moviesState.setItemsPerPage(3)
    }
  }

  useEffect(() => {
    if (!isLogged) return
    setSavedMovies()
  }, [isLogged])

  const page = useRef()

  const observer = useRef(
    new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect
      layoutPagePerWidth(width)
      // console.log(width)
    })
  )

  useEffect(() => {
    observer.current.observe(page.current)
  }, [page, observer])

  return (
    <div className='page' ref={page}>
      {isLoading && <PopupLoading />}

      <PopupSystemMessage
        message={systemMessage}
        setSystemMessage={setSystemMessage}
      />
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
                component={SavedMovies}
                userMovies={userMovies}
                onRemove={removeMovieFromSaved}
                isLogged={isLogged}
              />
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute
                component={Profile}
                isLogged={isLogged}
                onLogout={handleLogout}
                onSubmit={submitProfileUpdate}
              />
            }
          />
          <Route
            path='/signup'
            element={<Register onSubmit={submitRegister} />}
          />
          <Route path='/signin' element={<Login onSubmit={submitLogin} />} />
          <Route path='/*' element={<NotFoundError />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  )
}

export default App
