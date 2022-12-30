import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { useState } from 'react'

export default function SavedMovies(props) {
  const { userMovies, isLogged } = props
  const [isShortMeterChecked, setIsShortMeterChecked] = useState(false)
  const [submittedSearch, setSubmittedSearch] = useState('')
  const [searchRequestText, setSearchRequestText] = useState('')
  const didUserSearch = !!submittedSearch
  const userMoviesToRender = [...userMovies]
    .filter((e) =>
      e.nameRU.toLowerCase().includes(submittedSearch.toLowerCase())
    )
    .filter((n) => (isShortMeterChecked ? n.duration < 41 : n))
  return (
    <>
      <Header isLogged={isLogged} />
      <main className='main'>
        <section className='saved-movies'>
          <SearchForm
            onSearchSubmit={setSubmittedSearch}
            isShortMeterChecked={isShortMeterChecked}
            setIsShortMeterChecked={setIsShortMeterChecked}
            searchRequestText={searchRequestText}
            setSearchRequestText={setSearchRequestText}
          />
          <MoviesCardList
            cards={userMoviesToRender}
            mode='collection'
            onAdd={props.onAdd}
            onRemove={props.onRemove}
            didUserSearch={didUserSearch}
          />
        </section>
      </main>
      <Footer />
    </>
  )
}
