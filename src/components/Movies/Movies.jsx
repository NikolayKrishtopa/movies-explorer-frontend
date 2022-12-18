import MoviesCardList from "../MoviesCardList/MoviesCardList"
import SearchForm from "../SearchForm/SearchForm"
import cardsTemplate from "../../utils/DEV_ONLY_REMOVE"

export default function Movies(props) {
  const { onNotFound } = props
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList cards={cardsTemplate} />
      <button className="movies__extend-button clickable" onClick={onNotFound}>
        Ещё
      </button>
    </section>
  )
}
