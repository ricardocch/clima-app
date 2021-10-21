import SideLocation from '../SideLocation/SideLocation.jsx'
import  Search from '../Search/Search.jsx'
import MainWeather from './MainLocation/MainWeather.jsx'
import style from '../MainWeather/ContainerMainWeather.module.css'
import React,{useEffect,useState } from 'react';


function ContainerMainWeather() {
  // const [weather,setWeather] = useState({
  //   city:"",
  //   id:0,
  //   weatherData:[{
  //     "id": 0,
  //     "weather_state_name": "Snow",
  //     "weather_state_abbr": "",
  //     "wind_direction_compass": "",
  //     "created": "",
  //     "applicable_date": "2021-10-13",
  //     "min_temp": 0,
  //     "max_temp": 0,
  //     "the_temp": 0,
  //     "wind_speed": 0,
  //     "wind_direction": 0,
  //     "air_pressure": 0,
  //     "humidity": 0,
  //     "visibility": 0,
  //     "predictability": 0
  //     },{
  //       "id": 0,
  //       "weather_state_name": "Snow",
  //       "weather_state_abbr": "",
  //       "wind_direction_compass": "",
  //       "created": "",
  //       "applicable_date": "2021-10-13",
  //       "min_temp": 0,
  //       "max_temp": 0,
  //       "the_temp": 0,
  //       "wind_speed": 0,
  //       "wind_direction": 0,
  //       "air_pressure": 0,
  //       "humidity": 0,
  //       "visibility": 0,
  //       "predictability": 0
  //       },{
  //         "id": 0,
  //         "weather_state_name": "Snow",
  //         "weather_state_abbr": "",
  //         "wind_direction_compass": "",
  //         "created": "",
  //         "applicable_date": "2021-10-13",
  //         "min_temp": 0,
  //         "max_temp": 0,
  //         "the_temp": 0,
  //         "wind_speed": 0,
  //         "wind_direction": 0,
  //         "air_pressure": 0,
  //         "humidity": 0,
  //         "visibility": 0,
  //         "predictability": 0
  //         },{
  //           "id": 0,
  //           "weather_state_name": "Snow",
  //           "weather_state_abbr": "",
  //           "wind_direction_compass": "",
  //           "created": "",
  //           "applicable_date": "2021-10-13",
  //           "min_temp": 0,
  //           "max_temp": 0,
  //           "the_temp": 0,
  //           "wind_speed": 0,
  //           "wind_direction": 0,
  //           "air_pressure": 0,
  //           "humidity": 0,
  //           "visibility": 0,
  //           "predictability": 0
  //           },{
  //             "id": 0,
  //             "weather_state_name": "Snow",
  //             "weather_state_abbr": "",
  //             "wind_direction_compass": "",
  //             "created": "",
  //             "applicable_date": "2021-10-13",
  //             "min_temp": 0,
  //             "max_temp": 0,
  //             "the_temp": 0,
  //             "wind_speed": 0,
  //             "wind_direction": 0,
  //             "air_pressure": 0,
  //             "humidity": 0,
  //             "visibility": 0,
  //             "predictability": 0
  //             },{
  //               "id": 0,
  //               "weather_state_name": "Snow",
  //               "weather_state_abbr": "",
  //               "wind_direction_compass": "",
  //               "created": "",
  //               "applicable_date": "2021-10-13",
  //               "min_temp": 0,
  //               "max_temp": 0,
  //               "the_temp": 0,
  //               "wind_speed": 0,
  //               "wind_direction": 0,
  //               "air_pressure": 0,
  //               "humidity": 0,
  //               "visibility": 0,
  //               "predictability": 0
  //               }],
  //   unit:"C",
  //   showSearch:false
  // })
    const PROXY = window.location.hostname === "localhost"
    ? "https://cors-anywhere.herokuapp.com/https://www.metaweather.com"
    : "https://www.metaweather.com";
    const [weather,setWeather] = useState({
    city:"",
    id:0,
    weatherData:[{
      "id": 0,
      "weather_state_name": "Snow",
      "weather_state_abbr": "s",
      "wind_direction_compass": "",
      "created": "",
      "applicable_date": "2021-10-13",
      "min_temp": 0,
      "max_temp": 0,
      "the_temp": 0,
      "wind_speed": 0,
      "wind_direction": 0,
      "air_pressure": 0,
      "humidity": 0,
      "visibility": 0,
      "predictability": 0
      }],
    unit:"C",
    showSearch:false
  })

 
  function convertDate(dateToConvert){
    let arrMounths = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    let arrDays = ["Sun","Mon","Tues","Wen","Thur","Fri","Sat"]  
    let d = new Date(dateToConvert.split("-")[0],dateToConvert.split("-")[1] - 1,dateToConvert.split("-")[2])
    return `${arrDays[d.getDay()]} ${dateToConvert.split("-")[2]} ${arrMounths[dateToConvert.split("-")[1] - 1]}`
  }



  function switchGrades(){
    let current = {...weather}
    
    current.unit = weather.unit === 'C' ?  'F' : 'C'

     weather.unit === 'C' ? current.weatherData.forEach((el)=>{ el.min_temp = (el.min_temp  * 9/5) + 32
      el.max_temp = (el.max_temp  * 9/5) + 32
      el.the_temp = (el.the_temp  * 9/5) + 32
    } ) : current.weatherData.forEach((el)=>{ el.min_temp = (el.min_temp  - 32) * 5/9
      el.max_temp = (el.max_temp  - 32) * 5/9
      el.the_temp = (el.the_temp  - 32) * 5/9
    } ) 
    setWeather(current);
  }

  function getWeather(weatherID){
    
    fetch(`${PROXY}/api/location/${weatherID}`,{
      'mode': 'cors',
      'headers': {
          'Access-Control-Allow-Origin': '*',
      }
  })
    .then(response => response.json())
    .then(json => {

      json.consolidated_weather.forEach((el)=>{ 
        el.applicable_date = convertDate(el.applicable_date)
        if(weather.unit === 'F' ){  
          el.min_temp = (el.min_temp  * 9/5) + 32
          el.max_temp = (el.max_temp  * 9/5) + 32
          el.the_temp = (el.the_temp  * 9/5) + 32
        }
      })

      setWeather(state => ({ ...state, weatherData:json.consolidated_weather }));
    })
  }

  function getInfo(latitude,longitude,showLocation){
    
    fetch(`${PROXY}/api/location/search/?lattlong=${latitude},${longitude}`,{
      'mode': 'cors',
      'headers': {
          'Access-Control-Allow-Origin': '*',
      }
  })
    .then(response => response.json())
    .then(json => {
      setWeather(state => ({ ...state, city: json[0].title,id:json[0].woeid }));
      getWeather(json[0].woeid)
      if(showLocation) switchComponent()
    })
    
  }


  function switchComponent(){
    weather.showSearch ? setWeather(state => ({ ...state, showSearch: false })) : setWeather(state => ({ ...state, showSearch: true })) 
  }

  function getCords(){
    navigator.geolocation.getCurrentPosition((position) => {
      getInfo(position.coords.latitude, position.coords.longitude,false);
    });
  }
  useEffect(()=>{
    getCords()
  },[])

  return (
    <div  className={style.container} >
     { !weather.showSearch ? <SideLocation city={weather.city} temp={weather.weatherData[0]?.the_temp} weatherState={weather.weatherData[0]?.weather_state_name} weatherDate={weather.weatherData[0]?.applicable_date}  onRequestCurrent={getCords} onSearch={switchComponent} unit={weather.unit}/>
     : <Search onClose={switchComponent} onSelect={getInfo}/>}
      <MainWeather data={weather.weatherData}  unit={weather.unit} onSwitch={switchGrades}/>
    </div>
  );
}

export default ContainerMainWeather;