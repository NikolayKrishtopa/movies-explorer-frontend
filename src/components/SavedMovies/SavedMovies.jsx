import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'

export default function SavedMovies(props) {
  const { userMovies } = props
  return (
    <section className='saved-movies'>
      <SearchForm />
      <MoviesCardList
        cards={userMovies}
        mode='collection'
        onAdd={props.onAdd}
        onRemove={props.onRemove}
      />
    </section>
  )
}
