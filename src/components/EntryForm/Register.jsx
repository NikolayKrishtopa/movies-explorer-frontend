import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import useFormAndValidation from '../../hooks/useFormAndValidation'

export default function Register(props) {
  const { onSubmit, isFetching } = props
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation()
  return (
    <section className='entry-form'>
      <div className='entry-form__container entry-form__container_type_register'>
        <Link to='/' className='entry-form__link clickable'>
          <img src={logo} alt='Логотип сайта.' className='entry-form__logo' />
        </Link>
        <h2 className='entry-form__heading'>Добро пожаловать!</h2>
        <form className='entry-form__form' noValidate>
          <div className='entry-form__input-container'>
            <label htmlFor='name' className='entry-form__input-label'>
              Имя
              <input
                required
                type='text'
                minLength={2}
                maxLength={40}
                className={`entry-form__input ${
                  errors.email && 'entry-form__input_state_error'
                }`}
                name='name'
                id='name'
                value={values.name ? values.name : ''}
                onChange={handleChange}
                placeholder='Введите имя пользователя'
                disabled={isFetching}
              />
              <p className='entry-form__input-error entry-form__input-error_type_name'>
                {errors.name}
              </p>
            </label>
            <label htmlFor='name' className='entry-form__input-label'>
              E-mail
              <input
                required
                type='email'
                minLength={2}
                maxLength={40}
                className={`entry-form__input ${
                  errors.email && 'entry-form__input_state_error'
                }`}
                name='email'
                id='email'
                placeholder='Введите email'
                value={values.email ? values.email : ''}
                onChange={handleChange}
                disabled={isFetching}
              />
              <p className='entry-form__input-error entry-form__input-error_type_email'>
                {errors.email}
              </p>
            </label>
            <label htmlFor='password' className='entry-form__input-label'>
              Пароль
              <input
                required
                type='password'
                minLength={2}
                maxLength={40}
                className={`entry-form__input ${
                  errors.password && 'entry-form__input_state_error'
                }`}
                name='password'
                id='password'
                placeholder='Введите ваш пароль'
                value={values.password ? values.password : ''}
                onChange={handleChange}
                disabled={isFetching}
              />
              <p className='entry-form__input-error entry-form__input-error_type_password'>
                {errors.password}
              </p>
            </label>
          </div>
          <div className='entry-form__button-container'>
            <button
              className={`entry-form__submit-btn clickable entry-form__submit-btn_type_login ${
                (!isValid || isFetching) &&
                'entry-form__submit-btn_state_inactive'
              }`}
              disabled={!isValid || isFetching}
              onClick={(e) => {
                e.preventDefault()
                onSubmit({
                  email: values.email,
                  password: values.password,
                  name: values.name,
                })
              }}
            >
              {isFetching
                ? 'Отправка данных на сервер...'
                : 'Зарегистрироваться'}
            </button>
            <p className='entry-form__mode-switch'>
              Уже зарегистрированы?{' '}
              <Link
                to='/signin'
                className='entry-form__mode-switch-link clickable'
              >
                Войти
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
