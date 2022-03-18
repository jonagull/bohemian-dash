import React, { useEffect, useRef } from "react";
import { Weather } from "../../../types";

export const useGetWeatherData = (
  setWeather: (weather: Weather) => void,
  lat: number | null,
  long: number | null
) => {
  const fetchWeatherData = () => {
    if (lat === 0 && long === 0) {
      return;
    }
    fetch(
      `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${long}`
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
  };

  const intervalRef = useRef(0);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      fetchWeatherData();
    }, 300000);

    fetchWeatherData();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
};
