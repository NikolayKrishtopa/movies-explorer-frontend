import logo from "../../images/logo.png";
import profileIcon from "../../images/profile-icon.png";
import { Link } from "react-router-dom";

export default function Header(props) {
  const { isLogged } = props;
  return (
    <header className="header">
      <a href="#about-project">
        <img src={logo} alt="Логотип сайта." className="header__logo" />
      </a>
      <div className="header__nav">
        <div className="header__buttons header__buttons_left">
          <Link
            to="/movies"
            className={`header__buttton ${
              !isLogged && "header__button_hidden"
            }`}
          >
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            className={`header__buttton ${
              !isLogged && "header__button_hidden"
            }`}
          >
            Сохранённые фильмы
          </Link>
        </div>
        <div className="header__buttons header__buttons_right">
          {!isLogged ? (
            <>
              <Link
                to="/signup"
                className="header__buttton header__buttton_text_small"
              >
                Регистрация
              </Link>
              <Link
                to="/signin"
                className="header__buttton header__buttton_text_small header__buttton_style_green"
              >
                Войти
              </Link>
            </>
          ) : (
            <div className="header__profile-container">
              <Link to="/profile" className="header__buttton">
                Аккаунт
              </Link>
              <img
                className="header__profile-icon"
                src={profileIcon}
                alt="иконка кнопки профиля пользователя."
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
