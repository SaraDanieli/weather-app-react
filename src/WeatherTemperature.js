import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div>
      <span className="temperature">{Math.round(props.temperature)}</span>
      <span className="units">°C</span>
    </div>
  );
}
