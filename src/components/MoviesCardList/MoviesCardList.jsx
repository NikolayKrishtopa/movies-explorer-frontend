import MoviesCard from '../MoviesCard/MoviesCard'

export default function MoviesCardList(props) {
  const { cards } = props
  return (
    <ul className='movies-card-list'>
      {cards?.map((e) => (
        <MoviesCard card={e} key={e.id} mode={props.mode} />
      ))}
    </ul>
  )
}
