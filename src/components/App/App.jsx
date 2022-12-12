import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavTab from "../NavTab/NavTab";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Movies from "../Movies/Movies";

function App() {
  return (
    <div className="root">
      <div className="page">
        <Header isLogged={true} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Promo />
                <NavTab />
                <AboutProject />
                <Techs />
                <AboutMe />
              </>
            }
          />
          <Route path="/movies" element={<Movies />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
