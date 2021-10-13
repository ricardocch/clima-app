import React from "react";
import cloudStyle from "./Clouds.module.css";

function Clouds() {
  return (
    <div className={cloudStyle.imgContainer}>
      <img src="/img/cloud.svg" alt="cloud" className={cloudStyle.imgCloud1} />
      <img src="/img/cloud.svg" alt="cloud" className={cloudStyle.imgCloud2} />
      <img src="/img/cloud.svg" alt="cloud" className={cloudStyle.imgCloud3} />
      <img src="/img/cloud.svg" alt="cloud" className={cloudStyle.imgCloud4} />
    </div>
  );
}

export default Clouds;
