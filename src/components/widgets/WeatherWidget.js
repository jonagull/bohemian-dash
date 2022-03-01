import React from "react";
import WindIcon from "../assets/WindIcon";
import HumidIcon from "../assets/HumidIcon";

export default function WeatherWidget(props) {
  return (
    <React.Fragment>
      <div className="weather-widget--wrapper">
        <div className="content--container">
          {props.logo}
          <h1>{props.temp}°</h1>
          <p>{props.description}</p>
        </div>
        <div className="stats--container">
          <div>
            <span>
              <WindIcon />
            </span>
            <span>{props.windStats} km/h</span>
          </div>
          <div>
            <span>
              <HumidIcon />
            </span>
            <span>{props.humidStats} %</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
