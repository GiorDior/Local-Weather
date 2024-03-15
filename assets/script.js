const searchInputEl = document.getElementById("cityInput");
const searchButton = document.getElementById("citySearch");
const currentWeatherContainer = document.getElementById(
  "currentWeatherContainer"
);

function handleSearch(event) {
  event.preventDefault();

  // https://api.openweathermap.org/data/2.5/forecast?q={Denver}&appid=b0aa53ed3123b7e0caa8552579902513

  // const searchUrl = `https://api.openweathermap.org/data/2.5/forecast?q=$&appid=${searchInputEl.val()}&appid=b0aa53ed3123b7e0caa8552579902513`; //API Key
  const searchUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${searchInputEl.value}&appid=fa84ade08b3d1f251a3fa29023dea053&units=imperial`; //API Key
  fetch(searchUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i = 0; i < data.list.length; i++) {
        if (data.list[i].dt_txt.includes("12:00:00")) {
          const currentNameEl = document.createElement("h3");
          const currentDateEl = document.createElement("h3");
          const currentIconEl = document.createElement("p");
          const currentTempEl = document.createElement("p");
          const currentWindEl = document.createElement("p");
          const currentHumidityEl = document.createElement("p");
          const currentWeatherCard = document.createElement("div");
          currentNameEl.textcontent = searchInputEl.value;
          currentDateEl.textcontent = data.list[i].dt_txt;
          currentIconEl.textContent = data.list[i].weather[0].icon;
          currentTempEl.textContent = data.list[i].main.temp;
          currentWindEl.textContent = data.list[i].wind.speed;
          currentHumidityEl.textContent = data.list[i].main.humidity;
          currentWeatherCard.append(currentNameEl);
          currentWeatherCard.append(currentDateEl);
          currentWeatherCard.append(currentIconEl);
          currentWeatherCard.append(currentTempEl);
          currentWeatherCard.append(currentWindEl);
          currentWeatherCard.append(currentHumidityEl);
          currentWeatherContainer.append(currentWeatherCard);
        }
      }
    });
}

searchButton.addEventListener("click", handleSearch);

// `https://api.openweathermap.org/data/2.5/forecast?q=London&appid={b0aa53ed3123b7e0caa8552579902513}

//create one function iterate through the object and then append the data to the DOM. skip ahead 8 on the for loop

// Create a function to append recently searched cities

// create JSON to save searches to local storages
