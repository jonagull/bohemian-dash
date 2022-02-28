import React, { useState } from "react";
import WindIcon from "../assets/WindIcon";
import HumidIcon from "../assets/HumidIcon";
import { weatherIcons } from "../../constants";
import { Weather } from "../../types";

export default function WeatherWidget() {
  const [weather, setWeather] = useState({} | null);

  const url1 =
    "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=10";

  if (!weather) {
    fetch(url1)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(weather);
        setWeather({
          windSpeed:
            data.properties.timeseries[0].data.instant.details.wind_speed,
          icon: data.properties.timeseries[0].data.next_1_hours.summary
            .symbol_code,
          airTemperature:
            data.properties.timeseries[0].data.instant.details.air_temperature,
          humidity:
            data.properties.timeseries[0].data.instant.details
              .relative_humidity,
        });
      });
  }

  const IconComponent =
    weather && weather.icon ? weatherIcons[weather.icon] : null;

  return (
    <React.Fragment>
      <div className="weather-widget--wrapper">
        <div className="content--container">
          {IconComponent && <IconComponent />}
          <h1>{weather.airTemperature}°</h1>
          <p></p>
        </div>
        <div className="stats--container">
          <div>
            <span>
              <WindIcon />
            </span>
            <span>{weather?.windSpeed} km/h</span>
          </div>
          <div>
            <span>
              <HumidIcon />
            </span>
            <span>{weather?.humidity} %</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
