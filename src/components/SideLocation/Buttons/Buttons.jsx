import React from "react";
import buttonsStyle from "./Buttons.module.css";

function Buttons({ onRequestCurrent, onSearch }) {
  return (
    <div className={buttonsStyle.btnContainer}>
      <button className={buttonsStyle.btnSearch} onClick={onSearch}>
        Search for places
      </button>{" "}
      <button className={buttonsStyle.btnLocation} onClick={onRequestCurrent}>
        <img src="/img/location.svg" alt="ico-location" />
      </button>
    </div>
  );
}
export default Buttons;
