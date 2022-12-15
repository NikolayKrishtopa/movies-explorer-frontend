import icon from "../../images/link-icon.svg";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <p className="portfolio__heading">Портфолио</p>
      <div className="portfolio__item">
        <p className="portfolio__item-text">Статичный сайт</p>
        <a href="https://nikolaykrishtopa.github.io/woodies/" target="_blank">
          <img
            src={icon}
            alt="Перейти на страницу проекта"
            className="portfolio__item-icon"
          />
        </a>
      </div>
      <div className="portfolio__item">
        <p className="portfolio__item-text">Адаптивный сайт</p>
        <a
          href="https://maksimnikolaev.github.io/Lubimovka/index.html"
          target="_blank"
        >
          <img
            src={icon}
            alt="Перейти на страницу проекта"
            className="portfolio__item-icon"
          />
        </a>
      </div>
      <div className="portfolio__item">
        <p className="portfolio__item-text">Одностраничное приложение</p>
        <a href="https://nikolaykrishtopa.github.io/sign-in" target="_blank">
          <img
            src={icon}
            alt="Перейти на страницу проекта"
            className="portfolio__item-icon"
          />
        </a>
      </div>
    </div>
  );
}
