const userTab = document.getElementById("dataUserWeather");
const searchTab = document.getElementById("dataSearchWeather");

const searchElement = document.getElementById("dataSearchForm");
const weatherElement = document.getElementById("showWeatherInfo");
let currentTab = userTab;
const API_KEY = "c0d3c297a87284d465eacf05245fabc3"; 
currentTab.classList.add("currentTab");
const switchTab = (clickedTab) => {
    if (clickedTab != currentTab) {
        currentTab.classList.remove("currentTab"); // tab UI
        currentTab = clickedTab ; 
        currentTab.classList.add("currentTab"); // tab UI update
    }
    if(clickedTab === userTab){
        searchElement.classList.add("notActive");
        weatherElement.classList.remove("notActive");
    }
    else{
        searchElement.classList.remove("notActive");
        weatherElement.classList.add("notActive");
    }
}

userTab.addEventListener("click",() =>{switchTab(userTab);});

searchTab.addEventListener("click",() =>{switchTab(searchTab);});