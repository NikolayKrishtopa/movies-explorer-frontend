import { Link } from "react-router-dom"
import useFormAndValidation from "../../hooks/useFormAndValidation"
import logo from "../../images/logo.png"

export default function Login() {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation()
  return (
    <section className="entry-form">
      <div className="entry-form__container entry-form__container_type_login">
        <Link to="/" className="entry-form__link clickable">
          <img src={logo} alt="Логотип сайта." className="entry-form__logo" />
        </Link>
        <h2 className="entry-form__heading">Рады видеть!</h2>
        <form className="entry-form__form" noValidate>
          <label htmlFor="name" className="entry-form__input-label">
            E-mail
            <input
              type="email"
              minLength={2}
              maxLength={40}
              className={`entry-form__input ${
                errors.email && "entry-form__input_state_error"
              }`}
              name="email"
              id="email"
              placeholder="Введите email"
              value={values.email}
              onChange={handleChange}
            />
            <p className="entry-form__input-error entry-form__input-error_type_email">
              {errors.email}
            </p>
          </label>
          <label htmlFor="password" className="entry-form__input-label">
            Пароль
            <input
              type="password"
              minLength={2}
              maxLength={40}
              className={`entry-form__input ${
                errors.password && "entry-form__input_state_error"
              }`}
              name="password"
              id="password"
              placeholder="Введите ваш пароль"
              value={values.password}
              onChange={handleChange}
            />
            <p className="entry-form__input-error entry-form__input-error_type_password">
              {errors.password}
            </p>
          </label>
          <button
            className={`entry-form__submit-btn clickable entry-form__submit-btn_type_login ${
              !isValid && "entry-form__submit-btn_state_inactive"
            }`}
            disabled={!isValid}
          >
            Войти
          </button>
          <p className="entry-form__mode-switch">
            Еще не зарегистрированы?{" "}
            <Link
              to="/signup"
              className="entry-form__mode-switch-link clickable"
            >
              Регистрация
            </Link>
          </p>
        </form>
      </div>
    </section>
  )
}
