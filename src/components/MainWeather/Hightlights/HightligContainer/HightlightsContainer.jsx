import React from "react";
import styleHightlights from "./Hightlights.module.css";
import Wind from "../Wind/Wind";
import Humidity from "../Humidity/Humidity";

function Hightlights() {
  return (
    <div className={styleHightlights.hightlightsContainer}>
      <Wind />
      <Humidity />
      <div className="">VISIBILITY</div>
      <div className="">AIR PRESSURE</div>
    </div>
  );
}

export default Hightlights;
