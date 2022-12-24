import AboutMe from '../AboutMe/AboutMe'
import AboutProject from '../AboutProject/AboutProject'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import NavTab from '../NavTab/NavTab'
import Promo from '../Promo/Promo'
import Techs from '../Techs/Techs'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import { useState } from 'react'
import Register from '../EntryForm/Register'
import Login from '../EntryForm/Login'
import NotFoundError from '../NotFoundError/NotFoundError'
import useMoviesState from '../../hooks/useMoviesState'
import { useEffect } from 'react'
import mainApi from '../../utils/mainApi'
import CurrentUserContext from '../../contexts/CurrentUserContext'
import useAuth from '../../hooks/useAuth'

function App() {
  // **Хук состояния страницы Фильмы**
  const moviesState = useMoviesState()

  // **Хук состояния авторизации пользователя**
  const {
    currentUser,
    isLogged,
    submitLogin,
    handleLogout,
    submitRegister,
    submitProfileUpdate,
  } = useAuth()

  // **Хук состояния страницы Сохраненные фильмы**
  const [userMovies, setUserMovies] = useState([])

  const getSavedMovies = async () => {
    try {
      const movies = await mainApi.getUserMovies()
      setUserMovies(movies)
    } catch (err) {
      console.log(err)
    }
  }

  const addMovieToSaved = async (movie) => {
    try {
      const res = await mainApi.addMovie(movie)
      if (res.movieId) {
        setUserMovies([...userMovies, res])
      }
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    if (isLogged) return
    getSavedMovies()
  }, [isLogged])

  return (
    <div className='page'>
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
              <>
                <Header isLogged={isLogged} />
                <Movies state={moviesState} onAdd={addMovieToSaved} />
                <Footer />
              </>
            }
          />
          <Route
            path='/saved-movies'
            element={
              <>
                <Header isLogged={isLogged} />
                <SavedMovies userMovies={userMovies} />
                <Footer />
              </>
            }
          />
          <Route
            path='/profile'
            element={
              <>
                <Header isLogged={isLogged} />
                <Profile
                  onLogout={handleLogout}
                  onSubmit={submitProfileUpdate}
                />
              </>
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
