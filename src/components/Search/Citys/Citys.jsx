import React from "react";
import citysStyle from "./Citys.module.css";

function Citys({ cityName }) {
  return (
    <div className={citysStyle.cityContainer}>
      <span className={citysStyle.cityName}>{cityName}</span>
      <img
        src="/img/arrowSearch.svg"
        alt="flecha"
        className={citysStyle.arrow}
      />
    </div>
  );
}

export default Citys;
