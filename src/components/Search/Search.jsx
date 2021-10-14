import React, { useState } from "react";
import Citys from "./Citys/Citys";
import styleSearch from "./Search.module.css";

function Search({onClose,onSelect}) {
  const [cities,setCities] = useState([])
  function getInfoByCity(e){
    e.preventDefault()
    
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${e.target[0].value}`)
    .then(response => response.json())
    .then(json => {
      setCities([...json]);
     
    })
      
  }
  return (
    <div className={styleSearch.searchContainer}>
      <div className={styleSearch.btnContainer}>
        <button className={styleSearch.btnClose} onClick={onClose}>
          <img src="/img/close.svg" alt="boton Close" />
        </button>
      </div>
      <form className={styleSearch.inputContainer} onSubmit={(e) => getInfoByCity(e)}>
        <input
          type="text"
          placeholder="search location"
          className={styleSearch.input}
        />
        <button className={styleSearch.btnSearch} type="submit">Search</button>
      </form>
      {cities && cities.map((el) => <Citys key={el.woeid} latitude={el.latt_long.split(",")[0].replace(" ","")} longitudde={el.latt_long.split(",")[1].replace(" ","")} cityName={el.title} onSelect={onSelect}/> ) }
      
    </div>
  );
}

export default Search;
