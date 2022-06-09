import React, { useState } from "react";
import FormattedDate from "./FormattedDate.js";
import "./current-weather.css";
import axios from "axios";

export default function CurrentWeather() {
  const [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);
    setWeather({
      ready: true,
      cityName: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
    });
  }

  if (weather.ready) {
    return (
      <div className="Current-weather">
        <div className="row mt-4">
          <div className="col-12 col-lg-3 offset-lg-2 offset-1 mt-lg-4 pt-1 me-lg-3 ps-4 ps-lg-0">
            <h1 id="current-city">{weather.cityName}</h1>
            <div
              className="col-12 weather-description"
              id="weather-description"
            >
              {weather.description}
            </div>
            <div className="col-12 mb-4">
              <FormattedDate date={weather.date} />
            </div>
          </div>
          <div className="col-lg-2 col-5 col-sm-4 offset-sm-2 offset-lg-1 px-4 ps-sm-5 ps-lg-0">
            <img
              id="forecast-icon"
              className="today-forecast-icon"
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt=""
            />
          </div>
          <div className="col-lg-2 col-6">
            <div className="row pt-4 mt-lg-2 mt-2">
              <div className="col-12 fw-bold temperature-box">
                <span id="current-temperature" className="temperature">
                  {Math.round(weather.temperature)}
                </span>
                <span className="units">
                  <a
                    href="https://github.com/SaraDanieli/weather-app-react"
                    id="celsius"
                    className="active"
                  >
                    °C
                  </a>{" "}
                  |
                  <a
                    href="https://github.com/SaraDanieli/weather-app-react"
                    id="fahrenheit"
                  >
                    °F
                  </a>
                </span>
              </div>
              <div className="wind-humidity">
                <div className="col-12">
                  Wind: <span id="wind-speed">{weather.wind}</span> km/h
                </div>
                <div className="col-12">
                  Humidity: <span id="humidity">{weather.humidity}</span>%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "926d89a58987d421e38ebd919d3dc9fe";
    let city = "Alvito";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "loading...";
  }
}
