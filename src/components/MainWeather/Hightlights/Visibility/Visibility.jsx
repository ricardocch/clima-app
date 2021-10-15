import React from "react";
import visibilityStyle from "./Visibility.module.css";

function Visibility({value}) {
  return (
    <div className={visibilityStyle.visibilityContainer}>
      <span className={visibilityStyle.title}> Visibility</span>
      <div className={visibilityStyle.visibilityNumContainer}>
        <span className={visibilityStyle.num}>{value}</span>
        <span className={visibilityStyle.miles}> miles</span>
      </div>
    </div>
  );
}

export default Visibility;
