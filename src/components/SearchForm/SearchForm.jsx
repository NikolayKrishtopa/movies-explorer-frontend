import { useState } from "react"
import searchButtonIcon from "../../images/search-button-icon.svg"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"

export default function SearchForm() {
  const [isShortMeterChecked, setIsShortMeterChecked] = useState(false)

  return (
    <form className="search-form">
      <div className="search-form__field-container">
        <input type="text" className="search-form__field" placeholder="Фильм" />
        <button className="search-form__submit-button clickable">
          <img src={searchButtonIcon} alt="кнопка поиска." />
        </button>
      </div>
      <FilterCheckbox
        isChecked={isShortMeterChecked}
        onCheck={setIsShortMeterChecked}
      />
    </form>
  )
}
