import React from "react";

export default function CityForm() {
  return (
    <div className="CityForm">
      <form id="search-city-form" className="pt-lg-4">
        <div className="row">
          <div className="col-10 offset-1 col-sm-10 col-lg-7 offset-sm-1">
            <input
              type="text"
              id="city-input"
              className="form-control shadow-sm"
              placeholder="Enter a city..."
            />
          </div>
          <div className="col-sm-1 ms-3">
            <input
              type="submit"
              className="btn btn-warning d-none d-lg-block"
              value="search"
            />
          </div>
          <div className="col-sm-1 ms-4">
            <input
              id="current-location-weather"
              type="button"
              className="btn btn-secondary d-none d-lg-block"
              value="current"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
