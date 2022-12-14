import { useNavigate } from 'react-router-dom'

export default function NotFoundError() {
  const navigate = useNavigate()
  return (
    <section className='not-found-error'>
      <div className='not-found-error__container'>
        <p className='not-found-error__main-text'>404</p>
        <p className='not-found-error__sub-text'>Станица не найдена</p>
        <button
          className='not-found-error__button clickable'
          onClick={() => navigate(-1)}
        >
          Назад
        </button>
      </div>
    </section>
  )
}
