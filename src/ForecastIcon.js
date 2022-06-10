import ReactAnimatedWeather from "react-animated-weather";

export default function ForecastIcon(props) {
  return (
    <ReactAnimatedWeather
      icon="CLEAR_DAY"
      color="goldenrod"
      size={110}
      animate={true}
    />
  );
}
