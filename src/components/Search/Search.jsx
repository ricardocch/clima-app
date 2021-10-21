import React, { useState } from "react";
import Citys from "./Citys/Citys";
import styleSearch from "./Search.module.css";

function Search({onClose,onSelect}) {
  const [cities,setCities] = useState([])
  const PROXY = window.location.hostname === "localhost"
  ? "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/"
  : "https://www.metaweather.com/";

  function getInfoByCity(e){
    e.preventDefault()
    
    fetch(`${PROXY}api/location/search/?query=${e.target[0].value}`,{
      'mode': 'no-cors',
      'headers': {
          'Access-Control-Allow-Origin': '*',
      }
    })
    .then(response => console.log(response) )
    .then(json => {
      // setCities([...json]);
      console.log(json);
     
    }).catch(err => { console.log(err); throw err ; })
      
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
