import moviewPicture from "../../images/movie-picture.png";

export default function MoviesCard(props) {
  return (
    <div className="movies-card">
      <button className="movies-card__add-button">Сохранить</button>
      <img
        src={moviewPicture}
        alt="Изображение постера фильма."
        className="movies-card__picture"
      />
      <div className="movies-card__annotation-container">
        <p className="movies-card__name">33 слова о дизайне</p>
        <p className="movies-card__duration">1ч 17м</p>
      </div>
    </div>
  );
}
