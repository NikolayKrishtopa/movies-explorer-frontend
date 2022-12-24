import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'

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
    page,
  } = props.state

  // *** Local state for this component - shown at the moment cards ***
  const shownMovies = moviesToShow.slice(0, itemsPerPage * page)
  return (
    <section className='movies'>
      <SearchForm
        onSearchSubmit={submitSearch}
        isShortMeterChecked={isShortMeterChecked}
        setIsShortMeterChecked={setIsShortMeterChecked}
        searchRequestText={searchRequestText}
        setSearchRequestText={setSearchRequestText}
      />
      <MoviesCardList cards={shownMovies} onAdd={props.onAdd} />
      <button
        className={`movies__extend-button clickable ${
          shownMovies.length === moviesToShow.length &&
          'movies__extend-button_state_hidden'
        }`}
        onClick={() => setPage((prev) => prev + 1)}
      >
        Ещё
      </button>
    </section>
  )
}
