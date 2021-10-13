import React from "react";
import humidtyStile from "./Humidity.module.css";
function Humidity() {
  return (
    <div className={humidtyStile.humidityContainer}>
      <span className={humidtyStile.humidityTitle}>Humidity</span>
      <div className={humidtyStile.humidityPorcentajeContainer}>
        <span className={humidtyStile.humidityNumber}>84</span>
        <span className={humidtyStile.porcentaje}>%</span>
      </div>
      <div className={humidtyStile.div}>
        <p>0</p>
        <p>50</p>
        <p>100</p>
      </div>
      <form action="">
        <meter min="0" max="100" value="84" className={humidtyStile.meter} />
      </form>
    </div>
  );
}

export default Humidity;
