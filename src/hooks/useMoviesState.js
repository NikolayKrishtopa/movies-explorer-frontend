import { useState } from 'react'
import getInitialMovies from '../utils/moviesApi'

export default function useMoviesState(setIsLoading) {
  const [initialMovies, setInitialMovies] = useState([])
  const [page, setPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(12)
  const [isShortMeterChecked, setIsShortMeterChecked] = useState(false)
  const [searchRequestText, setSearchRequestText] = useState('')
  const [submittedSearch, setSubmittedSearch] = useState('')
  const didUserSearch = !!submittedSearch

  const getMovies = async () => {
    setIsLoading(true)
    try {
      const initialMovies = await getInitialMovies()
      setInitialMovies(initialMovies)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }
  const submitSearch = () => {
    if (!initialMovies.length > 0) {
      getMovies()
    }
    setSubmittedSearch(searchRequestText)
  }
  let moviesToShow = initialMovies
    .filter((e) => e.nameRU.includes(submittedSearch))
    .filter((n) => (isShortMeterChecked ? n.duration < 41 : n))
  return {
    submitSearch,
    isShortMeterChecked,
    setIsShortMeterChecked,
    searchRequestText,
    setSearchRequestText,
    moviesToShow,
    setPage,
    itemsPerPage,
    setItemsPerPage,
    page,
    didUserSearch,
  }
}
