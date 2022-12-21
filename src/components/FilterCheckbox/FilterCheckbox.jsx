export default function FilterCheckbox(props) {
  const { isChecked, onCheck } = props
  return (
    <div className="filter-checkbox">
      <div className="filter-checkbox__checkbox-container">
        <input
          type="checkbox"
          className="filter-checkbox__checkbox"
          id="short"
          checked={isChecked}
          onChange={() => onCheck(!isChecked)}
        />
        <div
          className={`filter-checkbox__checkbox-pseudo ${
            isChecked && "filter-checkbox__checkbox-pseudo_checked"
          }`}
        >
          <div className="filter-checkbox__checkbox-pseudo-mark"></div>
        </div>
      </div>
      <label htmlFor="short" className="filter-checkbox__checkbox-label">
        Короткометражки
      </label>
    </div>
  )
}
