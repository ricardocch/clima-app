import styleSide from "./SideLocation.module.css";
import React from "react";
import Clouds from "./clouds/Clouds";
import Buttons from "./Buttons/Buttons";

function SideLocation({
  city,
  temp,
  weatherDate,
  weatherState,
  onRequestCurrent,
  onSearch,
  unit
}) {
  return (
    <div className={styleSide.sideContainer}>
      <Buttons onSearch={onSearch} onRequestCurrent={onRequestCurrent} />
      <div className={styleSide.imgContainer}>
        <Clouds weatherState={weatherState}/>
      </div>
      <div className={styleSide.tempContainer}>
        <span className={styleSide.tempNum}>{Math.round(temp)}</span>
        <span className={styleSide.tempC}>°{unit}</span>
      </div>
      <div className={styleSide.stateContainer}>
        <h4 className={styleSide.estate}>{weatherState}</h4>
      </div>
      <div className={styleSide.datContainer}>
        <span>Today</span>
        <span>•</span>
        <span>{weatherDate}</span>
      </div>
      <div className={styleSide.footerContainer}>
        <img
          src="/img/marker.svg"
          alt="icon-marker"
          className={styleSide.iconMarker}
        />
        <span>{city}</span>
      </div>
    </div>
  );
}

export default SideLocation;
