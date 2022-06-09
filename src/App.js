import React, { useState } from "react";
import "./styles.css";
import CityForm from "./City-form";
import CurrentWeather from "./Current-weather";
import Footer from "./Footer";
import "./App.css";
import axios from "axios";

function App() {
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
      <div className="App">
        <div className="container-sm container-box mx-auto mt-lg-5 mt-2 py-5 border shadow">
          <CityForm />
          <CurrentWeather data={weather} />
          {/*
        ------forecast-----
        <div
          className="row mt-5 mx-auto justify-content-center"
          id="forecast"
        ></div> */}
        </div>
        <Footer />
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

export default App;
