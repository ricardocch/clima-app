import React from "react";
import styleHightlights from "./Hightlights.module.css";
import Wind from "../Wind/Wind";
import Humidity from "../Humidity/Humidity";
import Visibility from "../Visibility/Visibility";
import Airpressure from "../AirPressure/Airpressure";
function Hightlights({data}) {
  return (
    <div className={styleHightlights.hightlightsContainer}>
      <Wind speed={Math.round(data.wind_speed) } direction={Math.round(data.wind_direction) }/>
      <Humidity value={data.humidity}/>
      <Visibility value={Math.round(data.visibility * 10) / 10}/>
      <Airpressure value={data.air_pressure}/>
    </div>
  );
}

export default Hightlights;
