import { useState } from 'react'
import { useEffect } from 'react'
import mainApi from '../utils/mainApi'

export default function useMoviesState() {
  const [userMovies, setUserMovies] = useState([])

  const setSavedMovies = async () => {
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
  const removeMovieFromSaved = async (id) => {
    try {
      const res = await mainApi.deleteMovie(id)
      if (res._id) {
        setUserMovies(userMovies.filter((e) => e._id !== id))
      }
    } catch (err) {
      console.log(err)
    }
  }

  return { userMovies, addMovieToSaved, removeMovieFromSaved, setSavedMovies }
}
