import { Link } from "react-router-dom";
export default function Promo() {
  return (
    <Link to="/404" style={{ textDecoration: "none", color: "#fff" }}>
      <section className="promo">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </section>
    </Link>
  );
}
