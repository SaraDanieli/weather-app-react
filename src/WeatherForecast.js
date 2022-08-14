import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row mt-5 mx-auto justify-content-center" id="forecast">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div
                  className="col-12 col-sm-5 col-lg-4 col-xl-2 mb-4 "
                  key={index}
                >
                  <div className="card mx-3 mx-sm-auto shadow forecast-box">
                    <WeatherForecastDay data={dailyForecast} />
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiKey = "926d89a58987d421e38ebd919d3dc9fe";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
