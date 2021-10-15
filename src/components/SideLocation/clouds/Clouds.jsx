import React from "react";
import cloudStyle from "./Clouds.module.css";

function Clouds({weatherState}) {
  return (
    <div className={cloudStyle.imgContainer}>
      <div>
        <img src="/img/cloud.svg" alt="cloud" className={cloudStyle.imgCloud1} />
        <img src="/img/cloud.svg" alt="cloud" className={cloudStyle.imgCloud2} />
      </div>
      <div className={cloudStyle.imgCentralContainer}>
        <img
            src={`${process.env.PUBLIC_URL}/img/${weatherState?.replace(" ","")}.png`}
            alt="Estado del clima"
            className={cloudStyle.imgCentral}
          />
      </div>
      <div className={cloudStyle.bottomClouds}>
        <img src="/img/cloud.svg" alt="cloud" className={cloudStyle.imgCloud1} />
        <img src="/img/cloud.svg" alt="cloud" className={cloudStyle.imgCloud2} />
      </div>
    </div>
  );
}

export default Clouds;
