import React from "react";
import visibilityStyle from "./Visibility.module.css";

function Visibility() {
  return (
    <div className={visibilityStyle.visibilityContainer}>
      <span className={visibilityStyle.title}> Visibility</span>
      <div className={visibilityStyle.visibilityNumContainer}>
        <span className={visibilityStyle.num}>6,4</span>
        <span className={visibilityStyle.miles}> miles</span>
      </div>
    </div>
  );
}

export default Visibility;
