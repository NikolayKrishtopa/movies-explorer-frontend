import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import cardsTemplate from "../../utils/DEV_ONLY_REMOVE";

export default function SavedMovies() {
  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList
        cards={cardsTemplate.filter((e) => e.isAdded)}
        mode="collection"
      />
    </section>
  );
}
