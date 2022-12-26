import { useState } from 'react'
import { useEffect } from 'react'
import mainApi from '../utils/mainApi'

export default function useSavedMoviesState(setIsLoading, setSystemMessage) {
  const [userMovies, setUserMovies] = useState([])

  const setSavedMovies = async () => {
    setIsLoading(true)
    try {
      const movies = await mainApi.getUserMovies()
      setUserMovies(movies)
    } catch (err) {
      setSystemMessage(err)
    } finally {
      setIsLoading(false)
    }
  }

  const addMovieToSaved = async (movie) => {
    try {
      const res = await mainApi.addMovie(movie)
      if (res.movieId) {
        setUserMovies([...userMovies, res])
      }
    } catch (err) {
      setSystemMessage(err)
    }
  }
  const removeMovieFromSaved = async (id) => {
    try {
      const res = await mainApi.deleteMovie(id)
      if (res._id) {
        setUserMovies(userMovies.filter((e) => e._id !== id))
      }
    } catch (err) {
      setSystemMessage(err)
    }
  }

  return { userMovies, addMovieToSaved, removeMovieFromSaved, setSavedMovies }
}
