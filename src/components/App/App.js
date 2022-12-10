import AboutProject from "../AboutProject/AboutProject";
import NavTab from "../NavTab/NavTab";
import Promo from "../Promo/Promo";
import "./App.scss";

function App() {
  return (
    <div className="root">
      <div className="page">
        <Promo />
        <NavTab />
        <AboutProject />
      </div>
    </div>
  );
}

export default App;
