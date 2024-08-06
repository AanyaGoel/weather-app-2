const weatherApi = "https://api.open-meteo.com/v1/forecast"; 
const ipAddApi = "https://members.ip-api.com/";
const newLocationUrl ="https://geocoding-api.open-meteo.com/v1/search";
const timezoneApi = "http://api.geonames.org/timezoneJSON?" ;

let city = document.querySelector(".location"); 
let timezoneData;

async function getUserCoords(){
  try {
    let response = await fetch(ipAddApi)
    let locationData = await response.json();
    params.latitude = locationData.lat;
    params.longitude = locationData.lon;
    await getTimeZone(locationData.lat,locationData.lon);
    document.querySelector(".location").innerText = locationData.city.toUpperCase();
    await getForecast();
  }catch (error) {
   console.log(error);
   alert(error);
  }
}

async function getTimeZone(latitude,longitude){
  try {
    let timeZone = await fetch(`${timezoneApi}lat=${latitude}&lng=${longitude}&username=tanujnarula`);
    timezoneData = await timeZone.json();
    params.timezone = `${timezoneData.timezoneId}`;  
  } catch (error) {
    alert(error)
    window.location.reload();
  }
}


document.querySelector("button").addEventListener("click",(evt)=>{
    city.innerText = document.querySelector(".search").value.toUpperCase();
    locate();
    evt.preventDefault();
})


async function locate(){
  try {
    let url = `${newLocationUrl}?name=${city.innerText}&count=1`
    let response = await fetch(url);
    let newLocationData = await response.json();
    params.latitude = newLocationData.results[0].latitude;
    params.longitude= newLocationData.results[0].longitude;
    await getTimeZone(newLocationData.results[0].latitude,newLocationData.results[0].longitude);
    await getForecast();
    document.querySelector(".search").value = "";
  }catch (error) {
    alert(error)
    window.location.reload();
  }
}

const params = {
	"latitude": 0,
	"longitude": 0,
    "current": ["temperature_2m", "relative_humidity_2m", "apparent_temperature", "is_day", "precipitation", "weather_code", "wind_speed_10m"],
	"hourly": ["temperature_2m", "weather_code", "wind_speed_10m","precipitation_probability","is_day"],
	"daily": ["temperature_2m_max", "temperature_2m_min", "sunrise", "sunset","weather_code"],
	"timezone": ""
};

async function getForecast(){
  try {
    let url = `${weatherApi}?${new URLSearchParams(params).toString()}`;
    let response = await fetch(url);
    let weatherData = await response.json();
    console.log("weather data:" ,weatherData);
    updatetime(weatherData.current.time.slice(0,10),timezoneData.time.slice(-5));
    updateCurrentDetails(weatherData.current.temperature_2m,
        weatherData.current.apparent_temperature,
        weatherData.current.relative_humidity_2m,
        weatherData.current.wind_speed_10m,
        weatherData.daily.sunrise[0].slice(-5),
        weatherData.daily.sunset[0].slice(-5),
        weatherData.current,
        weatherData.hourly
    );  
    updateHourlyDetails(weatherData.hourly);
    updateDailyDetails(weatherData.daily);
    if(weatherData.current.is_day){
        updateDay(weatherData.current.weather_code);
    }else{
        updateNight(weatherData.current.weather_code)
    }
    }catch (error) {
        alert(error)
        window.location.reload();
    }
}

window.addEventListener("load",async ()=>{
  await getUserCoords();
})



