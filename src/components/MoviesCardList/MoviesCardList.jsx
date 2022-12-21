import MoviesCard from "../MoviesCard/MoviesCard"

export default function MoviesCardList(props) {
  const { cards } = props
  return (
    <ul className="movies-card-list">
      {cards.map((e, i) => (
        <MoviesCard card={e} key={i} mode={props.mode} />
      ))}
    </ul>
  )
}
