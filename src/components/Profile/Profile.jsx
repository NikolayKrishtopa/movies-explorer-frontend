import { useState } from 'react'
import { useContext } from 'react'
import CurrentUserContext from '../../contexts/CurrentUserContext'
import useFormAndValidation from '../../hooks/useFormAndValidation'
import Header from '../Header/Header'

export default function Profile(props) {
  const { onSubmit, onLogout, isLogged } = props
  const [matchError, setMatchError] = useState('')
  const currentUser = useContext(CurrentUserContext)
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation(currentUser)
  const credentialsMatch =
    (values.name === currentUser.name) & (values.email === currentUser.email)
  const submitUpdateProfile = (userData) => {
    credentialsMatch
      ? setMatchError('Все поля совпадают с текущими данными пользователя')
      : onSubmit(userData)
  }
  return (
    <>
      <Header isLogged={isLogged} />
      <main>
        <section className='profile'>
          <form className='profile__form' noValidate>
            <p className='profile__heading'>{`Привет, ${currentUser.name}!`}</p>
            <div className='profile__info'>
              <div className='profile__info-item'>
                <p className='profile__info-item-text'>Имя</p>
                <input
                  type='text'
                  className='profile__info-item-text profile__input'
                  name='name'
                  value={values.name ? values.name : ''}
                  onChange={handleChange}
                  minLength={2}
                  maxLength={40}
                  required
                />
                <p className='profile__input-error'>{errors.name}</p>
              </div>
              <div className='profile__info-item'>
                <p className='profile__info-item-text'>E-mail</p>
                <input
                  type='email'
                  className='profile__info-item-text profile__input'
                  name='email'
                  value={values.email ? values.email : ''}
                  onChange={handleChange}
                  minLength={2}
                  maxLength={50}
                  required
                />
                <p className='profile__input-error'>{errors.email}</p>
                <p className='profile__input-error'>{matchError}</p>
              </div>
            </div>
            <div className='profile__nav'>
              <button
                className={`profile__nav-button profile__nav-button_type_edit clickable ${
                  !isValid && 'profile__nav-button_state_disabled'
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  submitUpdateProfile({
                    name: values.name,
                    email: values.email,
                  })
                }}
                disabled={!isValid}
              >
                Редактировать
              </button>
              <button
                className='profile__nav-button profile__nav-button_type_quit clickable'
                onClick={(e) => {
                  e.preventDefault()
                  onLogout()
                }}
              >
                Выйти из аккаунта
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}
