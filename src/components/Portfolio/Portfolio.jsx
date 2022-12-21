import icon from "../../images/link-icon.svg"

export default function Portfolio() {
  return (
    <div className="portfolio">
      <p className="portfolio__heading">Портфолио</p>
      <ul className="potfolio__items-list">
        <li className="potfolio__list-item">
          <a
            href="https://nikolaykrishtopa.github.io/woodies/"
            className="portfolio__link clickable"
            target="_blank"
          >
            <div className="portfolio__item">
              <p className="portfolio__item-text">Статичный сайт</p>
              <img
                src={icon}
                alt="Перейти на страницу проекта"
                className="portfolio__item-icon"
              />
            </div>
          </a>
        </li>
        <li className="potfolio__list-item">
          {" "}
          <a
            href="https://maksimnikolaev.github.io/Lubimovka/index.html"
            className="portfolio__link clickable"
            target="_blank"
          >
            <div className="portfolio__item">
              <p className="portfolio__item-text">Адаптивный сайт</p>
              <img
                src={icon}
                alt="Перейти на страницу проекта"
                className="portfolio__item-icon"
              />
            </div>
          </a>
        </li>
        <li className="potfolio__list-item">
          <a
            href="https://nikolaykrishtopa.github.io/mesto-react/"
            className="portfolio__link clickable"
            target="_blank"
          >
            <div className="portfolio__item">
              <p className="portfolio__item-text">Одностраничное приложение</p>
              <img
                src={icon}
                alt="Перейти на страницу проекта"
                className="portfolio__item-icon"
              />
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}
