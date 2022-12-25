import MoviesCard from '../MoviesCard/MoviesCard'

export default function MoviesCardList(props) {
  const { cards } = props
  return (
    <ul className='movies-card-list'>
      {cards?.map((e) => (
        <MoviesCard
          card={e}
          key={e.id ? e.id : e._id}
          mode={props.mode}
          onAdd={props.onAdd}
          onRemove={props.onRemove}
        />
      ))}
    </ul>
  )
}
