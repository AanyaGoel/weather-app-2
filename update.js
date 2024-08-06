document.querySelector(".search").addEventListener("focus",()=>{
    document.querySelector(".search").style.boxShadow= "0 0 0.8rem black";
})

document.querySelector(".search").addEventListener("blur",()=>{
    document.querySelector(".search").style.boxShadow= "0 0 0.2rem black";
})

const headingArray = [
    document.querySelector(".appherentTemp"),
    document.querySelector(".conditionHeading p"),
    document.querySelector(".hourlyHeading p"),
    document.querySelector(".dailyHeading p")
]
const minTemps = document.querySelectorAll(".minTemp")

const codes_forNight = [2, 56, 57, 61, 63, 66, 67, 80, 81, 95];
const codes_forDay = [3, 45, 48, 51, 53, 55, 65, 71, 73, 75, 77, 82, 85, 86, 96, 99];

function updateDay(code){
    document.querySelector(".mainContainer").style.backgroundImage = `url(${weatherCodes[code].day.img})`;
    document.querySelector(".currentIcon img").src = `${weatherCodes[code].day.icon}`;
    document.querySelector(".currentIcon .msg").innerText = `${weatherCodes[code].description}`;
    if (codes_forNight.includes(code)) {
        document.querySelector("*").style.color = "white";
        document.querySelector(".search").style.color = "white";
        document.querySelector(".search").classList.remove("placeholderDay");   
        document.querySelector(".search").classList.add("placeholderNight");
        headingArray.forEach((evt)=>{
            evt.classList.remove("day_light");
            evt.classList.add("night_light");
        })
        minTemps.forEach((evt)=>{
            evt.classList.remove("day_light");
            evt.classList.add("night_light");
        })
    }else{
        document.querySelector("*").style.color = "black";
        document.querySelector(".search").style.color = "black";
        document.querySelector(".search").classList.remove("placeholderNight");
        document.querySelector(".search").classList.add("placeholderDay");   
        headingArray.forEach((evt)=>{
            evt.classList.remove("night_light");
            evt.classList.add("day_light");
        })
        minTemps.forEach((evt)=>{
            evt.classList.remove("night_light");
            evt.classList.add("day_light");
        })
    }
}

function updateNight(code){
    document.querySelector(".mainContainer").style.backgroundImage = `url(${weatherCodes[code].night.img})`;
    document.querySelector(".currentIcon img").src = `${weatherCodes[code].night.icon}`;
    document.querySelector(".currentIcon .msg").innerText = `${weatherCodes[code].description}`;
    if(codes_forDay.includes(code)){
        document.querySelector("*").style.color = "black";
        document.querySelector(".search").style.color = "black";
        document.querySelector(".search").classList.remove("placeholderNight");
        document.querySelector(".search").classList.add("placeholderDay");   
        headingArray.forEach((evt)=>{
            evt.classList.remove("night_light");
            evt.classList.add("day_light");
        })
        minTemps.forEach((evt)=>{
            evt.classList.remove("night_light");
            evt.classList.add("day_light");
        })
    }else{
        document.querySelector("*").style.color = "white"
        document.querySelector(".search").style.color = "white";
        document.querySelector(".search").classList.remove("placeholderDay");   
        document.querySelector(".search").classList.add("placeholderNight");
        headingArray.forEach((evt)=>{
            evt.classList.remove("day_light");
            evt.classList.add("night_light");
        })
        minTemps.forEach((evt)=>{
            evt.classList.remove("day_light");
            evt.classList.add("night_light");
        })
    }
}

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function updatetime(date,time){
    let currentDate = new Date(date);
    document.querySelector(".currentDetails .time").innerText= `${daysOfWeek[currentDate.getDay()]} | ${time}`
}

function updateCurrentDetails(currentTemp,apparentTemp,humidity,wind,sunrise,sunset,weatherDatacurrent,weatherDatahourly){
    document.querySelector(".currentDetails .temp").innerText= `${currentTemp}°C`
    document.querySelector(".currentDetails .appherentTemp").innerText = `feels like: ${apparentTemp}°C`
    document.querySelector(".conditionDetails .humidity").innerText = `${humidity}%`
    document.querySelector(".conditionDetails .wind").innerText = `${wind}`;
    document.querySelector(".conditionDetails .sunrise").innerText = `${sunrise}`;
    document.querySelector(".conditionDetails .sunset").innerText = `${sunset}`;
    if(weatherDatacurrent.time.slice(-5,-3)<10){
        document.querySelector(".percipitation").innerText = `chances of rain: ${weatherDatahourly.precipitation_probability[weatherDatacurrent.time.slice(-4,-3)]} %`;
    }else{
    document.querySelector(".percipitation").innerText = `chances of rain: ${weatherDatahourly.precipitation_probability[weatherDatacurrent.time.slice(-5,-3)]} %`;
    }
}

function updateHourlyDetails(hourlydetails){
    console.log("hourly:", hourlydetails);
    let timeArray = [hourlydetails.time[3].slice(-5),hourlydetails.time[6].slice(-5),hourlydetails.time[9].slice(-5),hourlydetails.time[12].slice(-5),hourlydetails.time[15].slice(-5),hourlydetails.time[18].slice(-5),hourlydetails.time[21].slice(-5),hourlydetails.time[24].slice(-5)]
    const Hours = document.querySelectorAll(".hourData .time"); 
    Hours.forEach((evt)=>{
        evt.innerText = `${timeArray.shift()}`;
    })
    let weatherCodeArray = [hourlydetails.weather_code[3],hourlydetails.weather_code[6],hourlydetails.weather_code[9],hourlydetails.weather_code[12],hourlydetails.weather_code[15],hourlydetails.weather_code[18],hourlydetails.weather_code[21],hourlydetails.weather_code[24]];
    let isdayArray = [hourlydetails.is_day[3],hourlydetails.is_day[6],hourlydetails.is_day[9],hourlydetails.is_day[12],hourlydetails.is_day[15],hourlydetails.is_day[18],hourlydetails.is_day[21],hourlydetails.is_day[24]];
    const hoursIcons = document.querySelectorAll(".hourData img");
    hoursIcons.forEach((evt)=>{
        if(isdayArray.shift()){
            evt.src = `${weatherCodes[weatherCodeArray.shift()].day.icon}`;
        }else{
            evt.src = `${weatherCodes[weatherCodeArray.shift()].night.icon}`;
        }
    })
    let temperatureArray = [hourlydetails.temperature_2m[3],hourlydetails.temperature_2m[6],hourlydetails.temperature_2m[9],hourlydetails.temperature_2m[12],hourlydetails.temperature_2m[15],hourlydetails.temperature_2m[18],hourlydetails.temperature_2m[21],hourlydetails.temperature_2m[24]];
    const hourTemp = document.querySelectorAll(".hourData .temp") 
    hourTemp.forEach((evt)=>{
        evt.innerText = `${temperatureArray.shift()}°C`
    })
}

function updateDailyDetails(dailydetails){
    const dailyDay = document.querySelectorAll(".dayData .day");
    const dailyIcons = document.querySelectorAll(".dayData img");
    const dailymsg = document.querySelectorAll(".dayData .msg p");
    const dailyMaxTemp = document.querySelectorAll(".dailyTempContainer .maxTemp");
    const dailyMinTemp = document.querySelectorAll(".dailyTempContainer .minTemp");
    const dailyweatherCodes = [0,1,2,3,4,5,6];
    dailyDay.forEach((evt)=>{
        let dailyDate = new Date(dailydetails.time.shift());
        evt.innerText = `${daysOfWeek[dailyDate.getDay()]}`;
    })
    for (const index of dailyweatherCodes) {
        dailyweatherCodes[index] = dailydetails.weather_code[index] ;
    }
    dailyIcons.forEach((evt)=>{
        evt.src = `${weatherCodes[dailyweatherCodes.shift()].day.icon}`
    })
    dailymsg.forEach((evt)=>{
        evt.innerText = `${weatherCodes[dailydetails.weather_code.shift()].description}`
    })
    dailyMaxTemp.forEach((evt)=>{
        evt.innerText = `${Math.round(dailydetails.temperature_2m_max.shift())}`
    })
    dailyMinTemp.forEach((evt)=>{
        evt.innerText = `${Math.round(dailydetails.temperature_2m_min.shift())}`
    })
}





