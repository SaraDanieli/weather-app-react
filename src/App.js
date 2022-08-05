import React from "react";
import "./styles.css";
import CityForm from "./City-form";
import WeatherForecast from "./WeatherForecast";

import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container-sm container-box mx-auto mt-lg-5 mt-2 py-5 border shadow">
        <CityForm />
        <WeatherForecast />
      </div>
      <Footer />
    </div>
  );
}

export default App;
