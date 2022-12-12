export default function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__heading">О проекте</h2>
      <div className="about-project__facts">
        <div className="about-project__fact">
          <p className="about-project__fact-heading">
            Дипломный проект включал 5 этапов
          </p>
          <p className="about-project__fact-paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__fact">
          <p className="about-project__fact-heading">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="about-project__fact-paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__time-line">
        <p className="about-project__time-line-term about-project__time-line-term_style_green">
          1 неделя
        </p>
        <p className="about-project__time-line-term">4 недели</p>
        <p className="about-project__time-line-term-annotation">Back-end</p>
        <p className="about-project__time-line-term-annotation">Front-end</p>
      </div>
    </section>
  );
}
