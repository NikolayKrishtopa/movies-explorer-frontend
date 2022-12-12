import searchButtonIcon from "../../images/search-button-icon.png";

export default function SearchForm() {
  return (
    <form className="search-form">
      <div className="search-form__field-container">
        <input type="text" className="search-form__field" placeholder="Фильм" />
        <button className="search-form__submit-button">
          <img src={searchButtonIcon} alt="кнопка поиска." />
        </button>
      </div>
      <div className="search-form__checkbox-container">
        <input type="checkbox" className="search-form__checkbox" id="short" />
        <label htmlFor="short" className="search-form__checkbox-label">
          Короткометражки
        </label>
      </div>
    </form>
  );
}
