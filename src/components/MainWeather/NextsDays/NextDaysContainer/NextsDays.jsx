import React from "react";
import styleNexts from "./NextsDays.module.css";
import DayCard from "../DayCard/DayCard";

function NextsDays({data,unit}) {

  return (
    <div className={styleNexts.nextsDayContainer}>
      {data.map((el,i)=>{
        if(i===1) return <DayCard key={el.id} date="Tomorrow" stateWeather={el.weather_state_name} min={el.min_temp} max={el.max_temp} unit={unit}/>
        if(i>1) return <DayCard key={el.id} date={el.applicable_date} stateWeather={el.weather_state_name} min={el.min_temp} max={el.max_temp} unit={unit}/>
      })}
      
    </div>
  );
}
export default NextsDays;
