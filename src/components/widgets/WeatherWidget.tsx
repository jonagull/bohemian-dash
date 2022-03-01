import React, { useEffect, useState } from "react";
import WindIcon from "../assets/WindIcon";
import HumidIcon from "../assets/HumidIcon";
import { weatherIcons, LocalStorageKeys } from "../../constants";
import { Weather } from "../../types";
import { useGeoLocationCoords } from "./useGeoLocationCoords";

export default function WeatherWidget() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const { latitude, longitude } = useGeoLocationCoords(setWeather);

  const IconComponent =
    weather && weather.icon ? weatherIcons[weather.icon] : null;

  return (
    <React.Fragment>
      <div className="weather-widget__wrapper">
        <div className="content__container">
          {IconComponent && <IconComponent />}
          {weather && <h1>{weather.airTemperature}°</h1>}
          <p></p>
        </div>
        <div className="stats__container">
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
