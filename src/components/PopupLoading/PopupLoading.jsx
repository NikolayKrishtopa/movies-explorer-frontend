export default function PopupLoading(props) {
  return (
    <div className='loading-popup'>
      <img
        src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/b6e0b072897469.5bf6e79950d23.gif'
        alt='Идет загрузка'
        className='loading-popup__spinner'
      />
      <p className='loading-popup__text'>Загрузка...</p>
    </div>
  )
}
