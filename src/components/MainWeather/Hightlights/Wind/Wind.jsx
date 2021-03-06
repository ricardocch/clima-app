import React from "react";
import windStyle from "./Wind.module.css";

function Wind({speed,direction}) {
  return (
    <div className={windStyle.windContainer}>
      <span className={windStyle.windTitle}>Wind status</span>
      <div className={windStyle.windVelContainer}>
        <span className={windStyle.windNumber}>{speed}</span>
        <span className={windStyle.windMph}>mph</span>
      </div>
      <div className={windStyle.windDirectionContainer}>
        <div className={windStyle.windCircle}>
          <img
            src="/img/arrow.svg"
            alt=""
            className={windStyle.directionArrow}
           style={{transform:`rotate(${direction}deg)`}}/>
        </div>
        <span className={windStyle.windText}>WSW</span>
      </div>
    </div>
  );
}

export default Wind;
