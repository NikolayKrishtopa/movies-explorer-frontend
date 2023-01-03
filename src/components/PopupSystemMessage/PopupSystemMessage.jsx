import { useEffect } from 'react'
// import closeIcon from '../../images/close-icon.svg'

export default function PopupSystemMessage(props) {
  const { message, setSystemMessage } = props
  useEffect(() => {
    if (!message) return
    const timer = setTimeout(() => {
      setSystemMessage('')
    }, 1500)
    return () => {
      clearTimeout(timer)
    }
  }, [message])
  return (
    <div
      className={`message-popup ${message && 'message-popup_state_active'}`}
      onClick={() => setSystemMessage('')}
    >
      <div
        className='message-popup__container'
        onClick={(e) => e.stopPropagation()}
      >
        <p className='message-popup__text'>{message}</p>
      </div>
    </div>
  )
}
