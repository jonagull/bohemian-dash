import React, { useEffect, useState } from "react";
import { ReactComponent as HumidIcon } from "../../assets/icons/HumidIcon.svg";
import { ReactComponent as WindIcon } from "../../assets/icons/WindIcon.svg";
import { weatherIcons, LocalStorageKeys } from "../../constants";
import { Weather } from "../../types";
import { useGeoLocationCoords } from "./useGeoLocationCoords";
import { useGetNearestCities } from "./useGetNearestCity";

export default function WeatherWidget() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const { lat: latitude, long: longitude } = useGeoLocationCoords(setWeather);
  const cityName: string = useGetNearestCities(latitude, longitude);

  const IconComponent =
    weather && weather.icon ? weatherIcons[weather.icon] : null;

  return (
    <React.Fragment>
      <div className="weather-widget__wrapper">
        <div className="content__container">
          {IconComponent && <IconComponent />}
          {weather && <h1>{weather.airTemperature}°</h1>}
          <p>{cityName}</p>
        </div>
        <div className="stats__container">
          <div>
            <span>
              <WindIcon />
            </span>
            <span>{weather?.windSpeed} m/s</span>
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
