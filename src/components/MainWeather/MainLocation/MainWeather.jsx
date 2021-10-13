import styleMain from "./MainWeather.module.css";
import Unit from "../UnitC°yF°/Unit";
import NextsDays from "../NextsDays/NextDaysContainer/NextsDays";
import Hightlights from "../Hightlights/HightligContainer/HightlightsContainer";

function MainWeather() {
  return (
    <div className={styleMain.container}>
      <Unit />
      <NextsDays />
      <span className={styleMain.span}>Today’s Hightlights</span>
      <Hightlights />
    </div>
  );
}

export default MainWeather;
