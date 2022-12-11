import userPhoto from "../../images/photo.png";
import Portfolio from "../Portfolio/Portfolio";

export default function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__heading">Студент</h2>
      <div className="about-me__container">
        <img
          src={userPhoto}
          alt="аватар студента."
          className="about-me__photo"
        />
        <div className="about-me__info">
          <p className="about-me__name">Николай</p>
          <p className="about-me__brief">Фронтенд-разработчик, 35 лет</p>
          <p className="about-me__description">
            Я окончил МГТУ им. Баумана по специальности "Космические летательные
            аппараты", несколько лет работал инженером в компании Boeing. В 2021
            году увлекся веб-разработкой, а в 2022 окончательно решил перейти в
            эту область. У меня есть жена, дочь и сын. В свободное время я люблю
            велопрогулки и катание на горных лыжах.
          </p>
          <a
            href="https://github.com/NikolayKrishtopa"
            className="about-me___link"
          >
            Github
          </a>
        </div>
      </div>
      <Portfolio />
    </section>
  );
}
