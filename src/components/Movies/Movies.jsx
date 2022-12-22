import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'
import useMoviesState from '../../hooks/useMoviesState'

export default function Movies(props) {
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
