import React from "react";
import airStyle from "./Airpressure.module.css";

function Airpressure({value}) {
  return (
    <div className={airStyle.airContainer}>
      <div className={airStyle.title}>Air Pressure</div>
      <div className={airStyle.numberContainer}>
        <span className={airStyle.number}>{value}</span>
        <span className={airStyle.mb}> mb</span>
      </div>
    </div>
  );
}

export default Airpressure;
