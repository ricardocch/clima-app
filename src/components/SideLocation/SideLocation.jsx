import style from './SideLocation.module.css'
import React, {useEffect} from 'react';

function SideLocation() {

  function getInfo(latitude,longitude){
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}`,requestOptions)
        .then(response => response.json())
        .then(json => {
          console.log(json)
        });

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    // fetch("https://meta-weather.vercel.app/api/location/search/?lattlong=19.316736,-99.090432", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
      
  }

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position) => {
      getInfo(position.coords.latitude, position.coords.longitude);
    });
  },[])

  return (
    <div >
    </div>
  );
}

export default SideLocation;