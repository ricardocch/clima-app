import React from "react";
import unitStyle from "./Unit.module.css";

function Unit() {
  return (
    <div className={unitStyle.unitContainer}>
      <button className={unitStyle.unitBoxC}>°C</button>
      <button className={unitStyle.unitBoxF}>°F</button>
    </div>
  );
}

export default Unit;
