import React from "react";
import Citys from "./Citys/Citys";
import styleSearch from "./Search.module.css";

function Search() {
  return (
    <div className={styleSearch.searchContainer}>
      <div className={styleSearch.btnContainer}>
        <button className={styleSearch.btnClose} >
          <img src="/img/close.svg" alt="boton Close" />
        </button>
      </div>
      <div className={styleSearch.inputContainer}>
        <input
          type="text"
          placeholder="search location"
          className={styleSearch.input}
        />
        <button className={styleSearch.btnSearch}>Search</button>
      </div>
      <Citys cityName="Londres" />
      <Citys cityName="Brasil" />
      <Citys cityName="Paris" />
    </div>
  );
}

export default Search;
