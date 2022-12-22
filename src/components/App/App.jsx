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

function App() {
  const [isLogged, setIsLogged] = useState(true)
  const [notFound, setNotFound] = useState(false)

  const {
    submitSearch,
    isShortMeterChecked,
    setIsShortMeterChecked,
    searchRequestText,
    setSearchRequestText,
    moviesToShow,
    itemsPerPage,
    setPage,
    setItemsPerPage,
  } = useMoviesState()

  return (
    <div className='page'>
      {notFound ? (
        <NotFoundError onBackCkick={() => setNotFound(false)} />
      ) : (
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
                <Movies
                  submitSearch={submitSearch}
                  isShortMeterChecked={isShortMeterChecked}
                  setIsShortMeterChecked={setIsShortMeterChecked}
                  searchRequestText={searchRequestText}
                  setSearchRequestText={setSearchRequestText}
                  moviesToShow={moviesToShow}
                  itemsPerPage={itemsPerPage}
                  setPage={setPage}
                  setItemsPerPage={setItemsPerPage}
                />
                <Footer />
              </>
            }
          />
          <Route
            path='/saved-movies'
            element={
              <>
                <Header isLogged={isLogged} />
                <SavedMovies />
                <Footer />
              </>
            }
          />
          <Route
            path='/profile'
            element={
              <>
                <Header isLogged={isLogged} />
                <Profile />
              </>
            }
          />
          <Route path='/signup' element={<Register />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/*' element={<NotFoundError />} />
        </Routes>
      )}
    </div>
  )
}

export default App
