//Feature 1//
function formatDate(date) {
let days = [
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
];
let months = [
"Jan",
"Feb",
"March",
"April",
"May",
"Jun",
"Jul",
"Aug",
"Sept",
"Oct",
"Nov",
"Dec"
];
let currentDay = days[date.getDay()];
let currentMonth = months[date.getMonth()];
let currentDate = date.getDate();
let currentHour = date.getHours();
if (currentHour < 10) {
currentHour = `0${currentHour}`;
}
let currentMinute = date.getMinutes();
if (currentMinute < 10) {
currentMinute = `0${currentMinute}`;
}

let dateTime = document.querySelector("#current-time");
dateTime.innerHTML = `${currentDay}, ${currentMonth} ${currentDate}, ${currentHour}:${currentMinute}`;


return  dateTime;
}

let currentTime = new Date();
formatDate(currentTime)

//Search city and display city name & current temp//
function searchEngine(city) {
   let apiKey = "69fa6b6b218161490d49a59d19fd1922";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${url}&appid=${apiKey}`).then(showTemp);
}

//Show city name//
function showCity(event) {
event.preventDefault();
let city = document.querySelector("#city-input");
let h1 = document.querySelector("#city-name");
h1.innerHTML = `${city.value}`;
searchEngine(city.value); 
}

let enterCityForm = document.querySelector("#search-city");
enterCityForm.addEventListener("submit", showCity);


//Show temp/

function showTemp(response){
let h3 = document.querySelector("h3");
  let temperature = Math.round(response.data.main.temp);
  h3.innerHTML = `${temperature}°C `;

 axios.get(url).then(showTemp);
}

//BONUS: Allow current button to display current position temp and name

function showWeather(response) {

  let h1 = document.querySelector("h1");
 h1.innerHTML = response.data.name;
  let h3 = document.querySelector("h3");
  let temperature = Math.round(response.data.main.temp);
  h3.innerHTML = `${temperature}°C `;

}

function obtainPosition(position) {

 let apiKey = "69fa6b6b218161490d49a59d19fd1922";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  
  
  axios.get(url).then(showWeather);

}


function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(obtainPosition);
}

let currentLocationButton = document.querySelector(".location-button");
currentLocationButton.addEventListener("click", getPosition);