import React from "react";
import styleCard from "./DayCard.module.css";

function DayCard({date,stateWeather,min,max,unit}) {
  return (
    <div className={styleCard.cardContainer}>
      <p className={styleCard.cardTitle}>{date}</p>
      <img
        src={`${process.env.PUBLIC_URL}/img/${stateWeather.replace(" ","")}.png`}
        alt="img-pronostico"
        className={styleCard.img}
      />
      <div className={styleCard.tempContainer}>
        <span className={styleCard.tempMin}>{Math.round(min)}°{unit}</span>
        <span className={styleCard.tempMax}>{Math.round(max) }°{unit}</span>
      </div>
    </div>
  );
}

export default DayCard;
