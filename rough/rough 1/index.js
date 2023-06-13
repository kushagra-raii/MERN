console.log("abc");

const API_KEY = "c0d3c297a87284d465eacf05245fabc3";
async function showWeather() {
    let lat =  22.7196;
    let lon = 75.8577;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    
    const data = await response.json();
    console.log(data);
    let temp = data?.main?.temp;
    console.log( temp - 273.15);
}
async function showWeather1() {
    let city = "goa";

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    
    const data = await response.json();
    console.log(data);
    console.log(data?.main?.temp);
}