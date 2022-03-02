import React, { useEffect, useState } from "react";
import { LocalStorageKeys } from "../../constants";
import { Weather } from "../../types";

export function useGeoLocationCoords(setWeather: (weather: Weather) => void) {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

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

      setLat(
        parseFloat(window.localStorage.getItem(LocalStorageKeys.latitude) ?? "")
      );
      setLong(
        parseFloat(
          window.localStorage.getItem(LocalStorageKeys.longitude) ?? ""
        )
      );
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
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
  }, [lat, long]);

  return {
    lat,
    long,
  };
}
