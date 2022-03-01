import React, { useEffect } from "react";
import { LocalStorageKeys } from "../../constants";
import { Weather } from "../../types";

export function useGeoLocationCoords(setWeather: (weather: Weather) => void) {
  let latitude: number | null = null;
  let longitude: number | null = null;

  useEffect(() => {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        window.localStorage.setItem(
          LocalStorageKeys.latitude,
          `${position.coords.latitude}`
        );
        window.localStorage.setItem(
          LocalStorageKeys.longitude,
          `${position.coords.longitude}`
        );
      });
      latitude = parseInt(
        window.localStorage.getItem(LocalStorageKeys.latitude) ?? ""
      );
      longitude = parseInt(
        window.localStorage.getItem(LocalStorageKeys.longitude) ?? ""
      );
    } catch (err) {
      console.log(err);
    }

    fetch(
      `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${latitude}&lon=${longitude}`
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

  return {
    latitude,
    longitude,
  };
}
