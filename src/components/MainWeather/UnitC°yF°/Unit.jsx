import React from "react";
import unitStyle from "./Unit.module.css";

function Unit() {
  return (
    <div className={unitStyle.unitContainer}>
      <div className={unitStyle.unitBoxC}>
        <span className={unitStyle.unitText}>°C</span>
      </div>
      <div className={unitStyle.unitBoxF}>
        <span className={unitStyle.unitText}>°F</span>
      </div>
    </div>
  );
}

export default Unit;
