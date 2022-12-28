import { useEffect, useState } from 'react'
import getInitialMovies from '../utils/moviesApi'

export default function useMoviesState(setIsLoading, setSystemMessage) {
  const [initialMovies, setInitialMovies] = useState([])
  const [page, setPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(3)
  const [initialItemsQty, setInitialItemsQty] = useState(12)
  const [isShortMeterChecked, setIsShortMeterChecked] = useState(false)
  const [submittedSearch, setSubmittedSearch] = useState('')
  const [searchRequestText, setSearchRequestText] = useState('')
  const didUserSearch = !!submittedSearch

  const getMovies = async () => {
    setIsLoading(true)
    try {
      const initialMovies = await getInitialMovies()
      localStorage.setItem('movies', JSON.stringify(initialMovies))
    } catch (err) {
      setSystemMessage(err)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    if (!localStorage.getItem('movies')) return
    setInitialMovies(JSON.parse(localStorage.getItem('movies')))
  }, [localStorage.getItem('movies')])

  const submitSearch = () => {
    if (initialMovies.length === 0) {
      getMovies()
    }
    localStorage.setItem('search', searchRequestText)
    setSubmittedSearch(searchRequestText)
  }

  useEffect(() => {
    setSubmittedSearch(localStorage.getItem('search'))
    setSearchRequestText(localStorage.getItem('search') || '')
  }, [localStorage.getItem('search')])

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
    initialItemsQty,
    setInitialItemsQty,
    page,
    didUserSearch,
  }
}
