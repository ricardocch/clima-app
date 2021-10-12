import React from "react";
import styleNexts from "./NextsDays.module.css";
import DayCard from "../DayCard/DayCard";

function NextsDays() {
  return (
    <div className={styleNexts.nextsDayContainer}>
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
    </div>
  );
}
export default NextsDays;
