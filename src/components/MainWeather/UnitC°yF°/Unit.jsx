import React, { useState } from "react";
import unitStyle from "./Unit.module.css";

function Unit({unit,onSwitch}) {


  // function switchUnit(e){
  //   setUnit(e.target.innerText.replace("°",""))
  // }

  return (
    <div className={unitStyle.unitContainer}>
      <button className={unitStyle.unitBoxC} style={{backgroundColor: unit === 'C' ? '#e7e7eb' : '#585676',color: unit === 'C' ? '#110e3c' : '#e7e7eb' }} onClick={onSwitch}>°C</button>
      <button className={unitStyle.unitBoxF} style={{backgroundColor: unit === 'F' ? '#e7e7eb' : '#585676',color: unit === 'F' ? '#110e3c' : '#e7e7eb' }} onClick={onSwitch}>°F</button>
    </div>
  );
}

export default Unit;
