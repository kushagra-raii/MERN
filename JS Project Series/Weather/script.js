const userTab = document.getElementById("yourWeather");
const searchTab = document.getElementById("searchWeather");
const searchElement = document.getElementById("searchBox");
const weatherElement = document.getElementById("weatherBox");
currentTab = userTab;

currentTab.classList.add("currentTab");
searchElement.classList.add("notActive");

function switchTab(clickedTab) {
    if (clickedTab != currentTab) {
        currentTab.classList.remove("currentTab");
        currentTab = clickedTab;
        currentTab.classList.add("currentTab");
    }
    if (clickedTab === userTab) {
        searchElement.classList.add("notActive");
        weatherElement.classList.remove("notActive");
        if (sessionCoords == null) {
        grantAccessElement.classList.remove("notActive");
        }
        else getUserWeather();
    }
    else {
        grantAccessElement.classList.add("notActive");
        searchElement.classList.remove("notActive");
        weatherElement.classList.add("notActive");
    }
}
let sessionCoords = null;
userTab.addEventListener("click", () => { switchTab(userTab); });
searchTab.addEventListener("click", () => { switchTab(searchTab); });

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        alert("Browser Doesn't support Coordinates sharing.");
    }

    function showPosition(position) {
        sessionCoords = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
        getUserWeather();
        grantAccessElement.classList.add("notActive");
        return sessionCoords;
    }
    

}

const grantAccessElement = document.getElementById("grantAccess");

grantAccessElement.addEventListener("click", () => { getLocation() });
const API_KEY = "c0d3c297a87284d465eacf05245fabc3";


let temp;
let loadingScreen = document.getElementById("loading");
async function getUserWeather() {
    loadingScreen.classList.add("active");
    let lat = sessionCoords.latitude;
    let lon = sessionCoords.longitude;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    const data = await response.json();
    console.log(data);

    temp = (data?.main?.temp) - 273.15;
    temperature.innerText = temp.toFixed(2);
    cityPlace.innerText = data?.name;
    loadingScreen.classList.remove("active");
}
const city = document.getElementById("city");

async function getCityWeather() {
    
    loadingScreen.classList.add("active");
    let place = city.value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${API_KEY}&units=metric`); 
    const data = await response.json();
    temp = data?.main?.temp;
    cityPlace.innerText = data?.name;
    temperature.innerText = temp;
    loadingScreen.classList.remove("active");
    weatherElement.classList.remove("notActive");
    
}
const errScr = document.getElementById("errScr")
const cityPlace = document.getElementById("place");
const temperature = document.getElementById("temperature");



const searchBtn = document.getElementById("searchImg");0

searchBtn.addEventListener("click",()=>{getCityWeather();});