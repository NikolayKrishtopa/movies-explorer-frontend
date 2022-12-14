import likedIcon from '../../images/liked-card-icon.svg'
import removeIcon from '../../images/remove-card-icon.svg'
import { BASE_URL_MOVIES } from '../../utils/config'

export default function MoviesCard(props) {
  const { card, mode, onAdd, onRemove } = props
  const { nameRU, duration, image, isAdded, idInCollection } = card
  const imgUrl = mode === 'collection' ? image : BASE_URL_MOVIES + image.url
  const addCard = (card) => {
    const cardToAdd = {
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      image: BASE_URL_MOVIES + card.image.url,
      trailerLink: card.trailerLink,
      thumbnail: BASE_URL_MOVIES + card.image.formats.thumbnail.url,
      movieId: card.id,
      nameRU: card.nameRU,
      nameEN: card.nameEN,
    }
    // console.log(cardToAdd)
    onAdd(cardToAdd)
  }

  return (
    <li className='movies-card'>
      {mode === 'collection' || isAdded ? (
        <button
          className={`movies-card__remove-button clickable ${
            mode === 'collection' && 'movies-card__remove-button_in-collection'
          }`}
          onClick={
            mode === 'collection'
              ? () => onRemove(card._id)
              : () => onRemove(idInCollection)
          }
        >
          <img
            src={mode !== 'collection' ? likedIcon : removeIcon}
            alt={mode !== 'collection' ? 'галочка.' : 'крестик.'}
            className='movies-card__icon'
          />
        </button>
      ) : (
        <button
          className='movies-card__add-button clickable'
          onClick={() => addCard(card)}
        >
          Сохранить
        </button>
      )}
      <a href={card.trailerLink} target='_blank'>
        <img
          src={imgUrl}
          alt='Изображение постера фильма.'
          className='movies-card__picture'
        />
      </a>
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
