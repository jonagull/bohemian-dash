import React, { useEffect, useState } from "react";
import { LocalStorageKeys } from "../../constants";
import { Weather } from "../../types";

function getLongitude(): number {
  return parseFloat(
    window.localStorage.getItem(LocalStorageKeys.longitude) ?? "0"
  );
}

function getLatitude(): number {
  return parseFloat(
    window.localStorage.getItem(LocalStorageKeys.latitude) ?? "0"
  );
}

export function useGeoLocationCoords(setWeather: (weather: Weather) => void) {
  const [lat, setLat] = useState(getLatitude());
  const [long, setLong] = useState(getLongitude());

  useEffect(() => {
    if (lat !== 0 && long !== 0) {
      return;
    }
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        window.localStorage.setItem(
          LocalStorageKeys.latitude,
          `${position.coords.latitude}`
        );
        window.localStorage.setItem(
          LocalStorageKeys.longitude,
          `${position.coords.longitude}`
        );
      });
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
