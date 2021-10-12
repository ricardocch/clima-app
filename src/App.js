import "./normalize.css";
import SideLocation from "./components/SideLocation/SideLocation.jsx";
import MainLocation from "./components/MainWeather/MainContainer/MainWeather";
import Search from "./components/Search/Search.jsx";
import pruebaStyle from "./app.module.css";

function App() {
  return (
    <div className={pruebaStyle.container}>
      <Search />
      <SideLocation />
      <MainLocation />
    </div>
  );
}

export default App;
