import SideLocation from '../SideLocation/SideLocation.jsx'
import  Search from '../Search/Search.jsx'
import MainWeather from './MainLocation/MainWeather.jsx'
import style from '../MainWeather/ContainerMainWeather.module.css'
import React,{useEffect,useState } from 'react';


function ContainerMainWeather() {
  const [weather,setWeather] = useState({
    city:"",
    id:0,
    weatherData:[],
    showSearch:false
  })

 
  function convertDate(dateToConvert){
    let arrMounths = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let arrDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]  
    let d = new Date(dateToConvert.split("-")[0],dateToConvert.split("-")[1],dateToConvert.split("-")[2])

    return `${arrDays[d.getDay()]} ${dateToConvert.split("-")[2]} ${arrMounths[dateToConvert.split("-")[1] - 1]}`
  }

  function getWeather(weatherID){
    
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${weatherID}`)
    .then(response => response.json())
    .then(json => {

      json.consolidated_weather.forEach((el)=> el.applicable_date = convertDate(el.applicable_date))
      setWeather(state => ({ ...state, weatherData:json.consolidated_weather }));
    })
  }

  function getInfo(latitude,longitude){

    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}`)
    .then(response => response.json())
    .then(json => {
      setWeather(state => ({ ...state, city: json[0].title,id:json[0].woeid }));
      getWeather(json[0].woeid)
    })
      
  }

  function getInfoByCity(city){

    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${city}`)
    .then(response => response.json())
    .then(json => {
      setWeather(state => ({ ...state, city: json[0].title,id:json[0].woeid }));
      getWeather(json[0].woeid)
    })
      
  }

  function switchComponent(){
    weather.showSearch ? setWeather({...weather,showSearch:false}) : setWeather({...weather,showSearch:true})
  }

  function getCords(){
    navigator.geolocation.getCurrentPosition((position) => {
      getInfo(position.coords.latitude, position.coords.longitude);
    });
  }
  useEffect(()=>{
    getCords()
  },[])

  return (
    <div  className={style.container} >
     { !weather.showSearch ? <SideLocation city={weather.city} temp={weather.weatherData[0]?.the_temp} weatherState={weather.weatherData[0]?.weather_state_name} weatherDate={weather.weatherData[0]?.applicable_date}  onRequestCurrent={getCords} onSearch={switchComponent}/>
     : <Search/>}
      {/* <SideLocation city={weather.city} temp={weather.weatherData[0]?.the_temp} weatherState={weather.weatherData[0]?.weather_state_name} weatherDate={weather.weatherData[0]?.applicable_date}  onRequestCurrent={getCords} onSearch={switchComponent}/> */}
      <MainWeather />
    </div>
  );
}

export default ContainerMainWeather;