import likedIcon from '../../images/liked-card-icon.svg'
import removeIcon from '../../images/remove-card-icon.svg'
import { BASE_URL_MOVIES } from '../../utils/config'

export default function MoviesCard(props) {
  const { card, mode } = props
  const { nameRU, duration, isAdded, image } = card
  const imgUrl = BASE_URL_MOVIES + image.url
  return (
    <li className='movies-card'>
      {!isAdded ? (
        <button className='movies-card__add-button clickable'>Сохранить</button>
      ) : (
        <button
          className={`movies-card__remove-button clickable ${
            mode === 'collection' && 'movies-card__remove-button_in-collection'
          }`}
        >
          <img
            src={mode !== 'collection' ? likedIcon : removeIcon}
            alt={mode !== 'collection' ? 'галочка.' : 'крестик.'}
            className='movies-card__icon'
          />
        </button>
      )}
      <img
        src={imgUrl}
        alt='Изображение постера фильма.'
        className='movies-card__picture'
        onClick={() => console.log(imgUrl)}
      />
      <div className='movies-card__annotation-container'>
        <p className='movies-card__name'>{nameRU}</p>
        <p className='movies-card__duration'>
          {duration > 60
            ? `${Math.floor(duration / 60)}ч ${duration % 60}м`
            : `${duration}м`}
        </p>
      </div>
    </li>
  )
}
