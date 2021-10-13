import React from "react";
import styleHightlights from "./Hightlights.module.css";
import Wind from "../Wind/Wind";
import Humidity from "../Humidity/Humidity";
import Visibility from "../Visibility/Visibility";
import Airpressure from "../AirPressure/Airpressure";
function Hightlights() {
  return (
    <div className={styleHightlights.hightlightsContainer}>
      <Wind />
      <Humidity />
      <Visibility />
      <Airpressure />
    </div>
  );
}

export default Hightlights;
