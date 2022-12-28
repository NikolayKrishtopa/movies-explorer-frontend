import { useEffect } from 'react'
import closeIcon from '../../images/close-icon.svg'

export default function PopupSystemMessage(props) {
  const { message, setSystemMessage } = props
  useEffect(() => {
    setTimeout(() => {
      setSystemMessage('')
    }, 1000)
  }, [])
  return (
    <div className='message-popup' onClick={() => setSystemMessage('')}>
      <div
        className='message-popup__container'
        onClick={(e) => e.stopPropagation()}
      >
        <button className='message-popup__close-button'>
          <img
            src={closeIcon}
            alt='Кнопка закрытия окна.'
            className='message-popup__close-icon'
          />
        </button>
        <p className='message-popup__text'>{message}</p>
      </div>
    </div>
  )
}
