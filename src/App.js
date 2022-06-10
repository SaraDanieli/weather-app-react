import React from "react";
import "./styles.css";
import CityForm from "./City-form";

import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container-sm container-box mx-auto mt-lg-5 mt-2 py-5 border shadow">
        <CityForm />

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
}

export default App;
