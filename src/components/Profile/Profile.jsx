export default function Profile() {
  return (
    <section className="profile">
      <div className="profile__container">
        <p className="profile__heading">Привет, Николай!</p>
        <div className="profile__info">
          <div className="profile__info-item">
            <p className="profile__info-item-text">Имя</p>
            <p className="profile__info-item-text profile__info-item-text_right">
              Николай
            </p>
          </div>
          <div className="profile__info-item">
            <p className="profile__info-item-text">E-mail</p>
            <p className="profile__info-item-text profile__info-item-text_right">
              nickey87@yandex.ru
            </p>
          </div>
        </div>
        <div className="profile__nav">
          <button className="profile__nav-button profile__nav-button_type_edit">
            Редактировать
          </button>
          <button className="profile__nav-button profile__nav-button_type_quit">
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </section>
  );
}
