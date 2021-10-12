import styleMain from "./MainWeather.module.css";
import Unit from "../UnitC°yF°/Unit";
import NextsDays from "../NextsDays/NextDaysContainer/NextsDays";

function MainWeather() {
  return (
    <div className={styleMain.container}>
      <Unit />
      <NextsDays />
      <span className={styleMain.span}>Today’s Hightlights</span>
      <div className={styleMain.hightlightsContainer}>
        <div className={styleMain.windContainer}>
          <span className={styleMain.windTitle}>Wind status</span>
          <div className={styleMain.windVelContainer}>
            <span className={styleMain.windNumber}>7</span>
            <span className={styleMain.windMph}>mph</span>
          </div>
          <div className={styleMain.windDirectionContainer}>
            <div className={styleMain.windCircle}>
              <img
                src="/img/direction.png"
                alt=""
                className={styleMain.directionArrow}
              />
            </div>
          </div>
        </div>
        <div className={styleMain.humidity}>HUMIDITY</div>
        <div className={styleMain.visibility}>VISIBILITY</div>
        <div className={styleMain.air}>AIR PRESSURE</div>
      </div>
    </div>
  );
}

export default MainWeather;
