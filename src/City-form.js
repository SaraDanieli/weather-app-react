import React, { useState } from "react";
import CurrentWeather from "./Current-weather";
import axios from "axios";

export default function CityForm() {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState("Alvito");

  function handleResponse(response) {
    setWeather({
      ready: true,
      cityName: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
    });
  }

  function search() {
    let apiKey = "926d89a58987d421e38ebd919d3dc9fe";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="CityForm">
        <form onSubmit={handleSubmit} id="search-city-form" className="pt-lg-4">
          <div className="row">
            <div className="col-10 offset-1 col-sm-10 col-lg-8 offset-sm-1">
              <input
                onChange={handleChange}
                type="text"
                id="city-input"
                className="form-control shadow-sm"
                placeholder="Enter a city..."
              />
            </div>
            <div className="col-sm-1 ms-3">
              <input
                type="submit"
                className="btn btn-warning d-none d-lg-block"
                value="search"
              />
            </div>
          </div>
        </form>
        <CurrentWeather data={weather} />
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
