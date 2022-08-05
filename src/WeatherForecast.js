import React from "react";
import ForecastIcon from "./ForecastIcon.js";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row mt-5 mx-auto justify-content-center" id="forecast">
        <div className="col-12 col-sm-5 col-lg-4 col-xl-2 mb-4 ">
          <div className="card mx-3 mx-sm-auto shadow forecast-box">
            <div className="card-body">
              <p className="card-title day-name">Mon</p>
              <p className="card-text">
                {" "}
                <ForecastIcon code="01d" size={60} />
                {/*  <img
                id="forecast-icon"
                class="forecast-icon"
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt=""
              /> */}
              </p>
              <p>
                <span className="temp-min">10°</span> / 20°
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
