import { Link, NavLink } from "react-router-dom";
import profileIcon from "../../images/profile-icon.svg";
import closeIcon from "../../images/close-icon.svg";

export default function SideBar(props) {
  const { isOpen, onClose } = props;
  return (
    <div className={`sidebar ${isOpen && "sidebar_shown"}`}>
      <nav className="sidebar__nav">
        <button className="sidebar__close-button" onClick={onClose}>
          <img
            src={closeIcon}
            alt="кнопка закрытия бокового меню."
            className="sidebar__close-icon"
          />
        </button>
        <div className="sidebar__links">
          <NavLink className="sidebar__link" to="/" onClick={onClose}>
            Главная
          </NavLink>
          <NavLink className="sidebar__link" to="/movies" onClick={onClose}>
            Фильмы
          </NavLink>
          <NavLink
            className="sidebar__link"
            to="/saved-movies"
            onClick={onClose}
          >
            Сохранённые фильмы
          </NavLink>
        </div>
        <div className="sidebar__profile-container">
          <Link to="/profile" className="sidebar__buttton" onClick={onClose}>
            Аккаунт
          </Link>
          <img
            className="sidebar__profile-icon"
            src={profileIcon}
            alt="иконка кнопки профиля пользователя."
          />
        </div>
      </nav>
    </div>
  );
}
