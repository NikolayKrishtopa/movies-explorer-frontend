import logo from "../../images/logo.png";
import profileIcon from "../../images/profile-icon.svg";
import burgerIcon from "../../images/burger-menu-icon.svg";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import { useState } from "react";

export default function Header(props) {
  const { isLogged } = props;
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const openSideBar = () => {
    setIsSideBarOpen(true);
  };
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/">
          <img src={logo} alt="Логотип сайта." className="header__logo" />
        </Link>
        <div className="header__nav-container">
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
              <>
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
                <button className="header__burger-button" onClick={openSideBar}>
                  <img
                    src={burgerIcon}
                    alt="Кнопка разворачивания меню."
                    className="header__burger-icon"
                  />
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
      <SideBar isOpen={isSideBarOpen} onClose={closeSideBar} />
    </header>
  );
}
