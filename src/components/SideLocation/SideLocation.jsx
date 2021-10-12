import styleLocation from "./SideLocation.module.css";
import React, { useEffect } from "react";

function SideLocation() {
  function getInfo(latitude, longitude) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getInfo(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  return <div className={styleLocation.container}></div>;
}

export default SideLocation;
