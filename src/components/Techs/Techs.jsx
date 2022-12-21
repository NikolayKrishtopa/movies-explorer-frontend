export default function Techs() {
  return (
    <section className="techs" id="techs">
      <h2 className="techs__heading">Технологии</h2>
      <p className="techs__text-accent">7 технологий</p>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__techs-tiles">
        <li className="techs__tech-tile">HTML</li>
        <li className="techs__tech-tile">CSS</li>
        <li className="techs__tech-tile">JS</li>
        <li className="techs__tech-tile">React</li>
        <li className="techs__tech-tile">Git</li>
        <li className="techs__tech-tile">Express.js</li>
        <li className="techs__tech-tile">mongoDB</li>
      </ul>
    </section>
  );
}
