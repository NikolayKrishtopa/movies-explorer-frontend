import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'

export default function SavedMovies(props) {
  const { userMovies } = props
  console.log(userMovies[0])
  return (
    <section className='saved-movies'>
      <SearchForm />
      <MoviesCardList
        cards={userMovies}
        mode='collection'
        onAdd={props.onAdd}
      />
    </section>
  )
}
