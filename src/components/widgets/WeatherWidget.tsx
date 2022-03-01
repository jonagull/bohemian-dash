import React, { useEffect, useState } from "react";
import WindIcon from "../assets/WindIcon";
import HumidIcon from "../assets/HumidIcon";
import { weatherIcons } from "../../constants";
import { Weather } from "../../types";

export default function WeatherWidget() {
  const [weather, setWeather] = useState<Weather | null>(null);

  useEffect(() => {
    fetch(
      "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=10"
    )
      .then((res) => res.json())
      .then((data) => {
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
  }, []);

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
