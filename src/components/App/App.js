import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import NavTab from "../NavTab/NavTab";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import "./App.scss";

function App() {
  return (
    <div className="root">
      <div className="page">
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
