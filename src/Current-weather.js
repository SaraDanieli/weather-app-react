import FormattedDate from "./FormattedDate.js";
import "./current-weather.css";
import ForecastIcon from "./ForecastIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function CurrentWeather(props) {
  return (
    <div className="Current-weather">
      <div className="row mt-4">
        <div className="col-12 col-lg-3 offset-lg-2 offset-1 mt-lg-4 pt-1 me-lg-3 ps-4 ps-lg-0">
          <h1 className="current-city">{props.data.cityName}</h1>
          <div className="col-12 weather-description">
            {props.data.description}
          </div>
          <div className="col-12 mb-4">
            <FormattedDate date={props.data.date} />
          </div>
        </div>
        <div className="col-lg-2 col-5 col-sm-4 offset-sm-2 offset-lg-1 px-4 ps-sm-5 ps-lg-0">
          <ForecastIcon code={props.data.icon} size={110} />
        </div>
        <div className="col-lg-2 col-6">
          <div className="row pt-4 mt-lg-2 mt-2">
            <div className="col-12 fw-bold temperature-box">
              <WeatherTemperature temperature={props.data.temperature} />
            </div>
            <div className="wind-humidity">
              <div className="col-12">Wind: {props.data.wind} km/h</div>
              <div className="col-12">Humidity: {props.data.humidity}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
