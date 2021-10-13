import React from "react";
import styleCard from "./DayCard.module.css";

function DayCard() {
  return (
    <div className={styleCard.cardContainer}>
      <p className={styleCard.cardTitle}>TOMORROW</p>
      <img
        src="/img/Showers.png"
        alt="img-pronostico"
        className={styleCard.img}
      />
      <div className={styleCard.tempContainer}>
        <span className={styleCard.tempMin}>16°C</span>
        <span className={styleCard.tempMax}>19°C</span>
      </div>
    </div>
  );
}

export default DayCard;
