export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__heading'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__bottom'>
        <p className='footer__year'>{`©Николай Криштопа ${new Date().getFullYear()} `}</p>
        <div className='footer__links'>
          <a
            href='https://practicum.yandex.ru/'
            target='_blank'
            className='footer__link clickable'
          >
            Яндекс.Практикум
          </a>
          <a
            href='https://github.com/NikolayKrishtopa'
            target='_blank'
            className='footer__link clickable'
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  )
}
