import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

export default function Register() {
  return (
    <section className="entry-form">
      <div className="entry-form__container">
        <Link to="/">
          <img src={logo} alt="Логотип сайта." className="entry-form__logo" />
        </Link>
        <h2 className="entry-form__heading">Добро пожаловать!</h2>
        <form className="entry-form__form">
          <label htmlFor="name" className="entry-form__input-label">
            Имя
            <input
              type="text"
              className="entry-form__input"
              name="name"
              id="name"
            />
            <p className="entry-form__input-error entry-form__input-error_type_name"></p>
          </label>
          <label htmlFor="name" className="entry-form__input-label">
            E-mail
            <input
              type="email"
              className="entry-form__input"
              name="email"
              id="email"
            />
            <p className="entry-form__input-error entry-form__input-error_type_email"></p>
          </label>
          <label htmlFor="password" className="entry-form__input-label">
            Пароль
            <input
              type="password"
              className="entry-form__input"
              name="password"
              id="password"
            />
            <p className="entry-form__input-error entry-form__input-error_type_password"></p>
          </label>
          <button className="entry-form__submit-btn">Зарегистрироваться</button>
          <p className="entry-form__mode-switch">
            Уже зарегистрированы?{" "}
            <Link to="/signin" className="entry-form__mode-switch-link">
              Войти
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
