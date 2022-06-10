import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.temperature * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div>
        <span id="current-temperature" className="temperature">
          {Math.round(props.temperature)}
        </span>
        <span className="units">
          {" "}
          °C |
          <a href="/" onClick={showFahrenheit}>
            {" "}
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span id="current-temperature" className="temperature">
          {Math.round(fahrenheit())}
        </span>
        <span className="units">
          {" "}
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
  }
}
