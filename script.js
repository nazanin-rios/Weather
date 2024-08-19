let result = document.querySelector("#result");
let searchBtn = document.querySelector(".search-btn");
let cityName = document.querySelector("#city");

let getWeather = () => {
  let cityValue = cityName.value;
  if (cityValue.lenght == 0) {
    result.innerHTML = `<h3>please enter a city name</h3>`;
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    fetch(url)
      .then((res) => res.json())

      .then((res) => {

        result.innerHTML = `
        <h2>${res.name}</h2>
        <h4 class="weather">${res.weather[0].main}</h4>
        <h4 class="desc">${res.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${res.weather[0].icon}.png">
        <h1>${res.main.temp}&#176;</h1>
        <div class="temp-container">
        <div class="border-right">
        <h4 class="title">min</h4>
        <h4 class="temp">${res.main.temp_min}</h4>
        </div>
        <div>
        <h4 class="title">min</h4>
        <h4 class="temp">${res.main.temp_max}</h4>
        </div>
        </div>

        `;
      })

      .catch(() => {
        result.innerHTML = `<h3 class="not-found">city not found</h3>`;
      });
  }
};

window.addEventListener("load", getWeather);
searchBtn.addEventListener('click',getWeather)
