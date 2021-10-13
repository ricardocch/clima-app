import React from "react";
import citysStyle from "./Citys.module.css";

function Citys({ cityName,onSelect,latitude,longitudde }) {
  return (
    <div className={citysStyle.cityContainer} onClick={() =>{console.log("Select");}}>
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
