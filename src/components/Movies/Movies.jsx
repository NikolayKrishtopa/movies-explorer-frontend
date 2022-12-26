import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function Movies(props) {
  const { state, collection, isLogged } = props
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
    didUserSearch,
  } = state

  // *** Local state for this component - shown at the moment cards ***
  const shownMovies = [...moviesToShow]
    .slice(0, itemsPerPage * page)
    .map((e) => {
      return collection.some((n) => n.movieId === e.id)
        ? {
            ...e,
            isAdded: true,
            idInCollection: collection.find((m) => m.movieId === e.id)._id,
          }
        : { ...e, isAdded: false, idInCollection: null }
    })
  return (
    <>
      <Header isLogged={isLogged} />
      <main>
        <section className='movies'>
          <SearchForm
            onSearchSubmit={submitSearch}
            isShortMeterChecked={isShortMeterChecked}
            setIsShortMeterChecked={setIsShortMeterChecked}
            searchRequestText={searchRequestText}
            setSearchRequestText={setSearchRequestText}
          />
          <MoviesCardList
            cards={shownMovies}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
            didUserSearch={didUserSearch}
          />
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
      </main>
      <Footer />
    </>
  )
}
