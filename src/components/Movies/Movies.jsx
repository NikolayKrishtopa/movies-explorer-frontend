import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'
import getInitialMovies from '../../utils/moviesApi'
import { useState } from 'react'

export default function Movies(props) {
  const [initialMovies, setInitialMovies] = useState([])
  const [page, setPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(12)
  const [isShortMeterChecked, setIsShortMeterChecked] = useState(false)
  const [searchRequestText, setSearchRequestText] = useState('')
  const [submittedSearch, setSubmittedSearch] = useState('')

  const getMovies = async () => {
    try {
      const initialMovies = await getInitialMovies()
      setInitialMovies(initialMovies)
    } catch (err) {
      console.log(err)
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
    .slice(0, itemsPerPage * page)

  return (
    <section className='movies'>
      <SearchForm
        onSearchSubmit={submitSearch}
        isShortMeterChecked={isShortMeterChecked}
        setIsShortMeterChecked={setIsShortMeterChecked}
        searchRequestText={searchRequestText}
        setSearchRequestText={setSearchRequestText}
      />
      <MoviesCardList cards={moviesToShow} />
      <button
        className={`movies__extend-button clickable ${
          moviesToShow.length <= itemsPerPage &&
          'movies__extend-button_state_hidden'
        }`}
        onClick={() => setPage((prev) => prev + 1)}
      >
        Ещё
      </button>
    </section>
  )
}
