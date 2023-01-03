import { useState } from 'react'
import searchButtonIcon from '../../images/search-button-icon.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

export default function SearchForm(props) {
  const {
    onSearchSubmit,
    isShortMeterChecked,
    setIsShortMeterChecked,
    searchRequestText,
    setSearchRequestText,
  } = props

  const [showValidationError, setShowValidationError] = useState(false)

  return (
    <form className='search-form' noValidate>
      <div className='search-form__field-container'>
        <input
          type='text'
          className='search-form__field'
          required
          name='movie'
          id='movie'
          placeholder='Фильм'
          value={searchRequestText}
          onChange={(e) => {
            if (showValidationError) {
              setShowValidationError(false)
            }
            setSearchRequestText(e.target.value)
          }}
        />
        <button
          className='search-form__submit-button clickable'
          // disabled={!searchRequestText}
          onClick={(e) => {
            e.preventDefault()
            if (searchRequestText.length > 0) {
              setShowValidationError(false)
              onSearchSubmit(searchRequestText)
            } else {
              setShowValidationError(true)
            }
          }}
        >
          <img src={searchButtonIcon} alt='кнопка поиска.' />
        </button>
        <p
          className={`search-form__validation-error ${
            showValidationError && 'search-form__validation-error_state_shown'
          }`}
        >
          Нужно ввести ключевое слово
        </p>
      </div>
      <FilterCheckbox
        isChecked={isShortMeterChecked}
        onCheck={setIsShortMeterChecked}
      />
    </form>
  )
}
