import React from "react";
import "./current-weather.css";

export default function CurrentWeather() {
  return (
    <div className="Current-weather">
      <div className="row mt-4">
        <div className="col-12 col-lg-3 offset-lg-2 offset-1 mt-lg-4 pt-1 me-lg-3 ps-4 ps-lg-0">
          <h1 id="current-city">Edinburgh</h1>
          <div className="col-12 weather-description" id="weather-description">
            Clear Sky
          </div>
          <div className="col-12 mb-4">
            <span id="current-day">Saturday</span>
            <span id="current-time"> 12:13</span>
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
                13
              </span>
              <span className="units">
                <a href="#" id="celsius" className="active">
                  °C
                </a>{" "}
                |
                <a href="#" id="fahrenheit">
                  °F
                </a>
              </span>
            </div>
            <div className="wind-humidity">
              <div className="col-12">
                Wind: <span id="wind-speed">4.63</span> km/h
              </div>
              <div className="col-12">
                Humidity: <span id="humidity">53</span>%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
