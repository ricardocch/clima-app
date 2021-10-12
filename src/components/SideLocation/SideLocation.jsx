import style from './SideLocation.module.css'
import React from 'react';

function SideLocation({city,temp,weatherDate,weatherState,onRequestCurrent,onSearch}) {

  return (
    <div >
      <div>
        <button onClick={onSearch}>Search for places</button> <button onClick={onRequestCurrent}>O</button>
      </div>
      <img src={`${process.env.PUBLIC_URL}/img/${weatherState?.replace(" ","")}.png`} alt="Estado del clima" />
      <h2>{temp}</h2>
      <h4>{weatherState}</h4>
      <h5>{city}</h5>
     <p>Today {weatherDate}</p>
    </div>
  );
}

export default SideLocation;