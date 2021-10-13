import styleMain from "./MainWeather.module.css";
import Unit from "../UnitC°yF°/Unit";
import NextsDays from "../NextsDays/NextDaysContainer/NextsDays";
import Hightlights from "../Hightlights/HightligContainer/HightlightsContainer";

function MainWeather({data}) {
  return (
    <div className={styleMain.container}>
      <Unit />
      <NextsDays data={data} />
      <span className={styleMain.span}>Today’s Hightlights</span>
      <Hightlights data={data[0]} />
    </div>
  );
}

export default MainWeather;
