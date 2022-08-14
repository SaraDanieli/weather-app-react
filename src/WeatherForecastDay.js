import React from "react";
import ForecastIcon from "./ForecastIcon.js";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return temperature;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return temperature;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="card-body">
      <p className="card-title day-name">{day()}</p>
      <p className="card-text">
        {" "}
        <ForecastIcon code={props.data.weather[0].icon} size={60} />
      </p>
      <p>
        <span className="temp-min">{minTemperature()}°</span> /{" "}
        {maxTemperature()}°
      </p>
    </div>
  );
}
