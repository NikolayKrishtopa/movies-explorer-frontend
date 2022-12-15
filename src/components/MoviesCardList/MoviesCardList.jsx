import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList(props) {
  const { cards } = props;
  return (
    <div className="movies-card-list">
      {cards.map((e, i) => (
        <MoviesCard card={e} key={i} mode={props.mode} />
      ))}
    </div>
  );
}
