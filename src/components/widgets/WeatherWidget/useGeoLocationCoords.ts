import { useEffect, useState } from "react";
import { LocalStorageKeys } from "../../../constants";
import { Weather } from "../../../types";

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

export function useGeoLocationCoords() {
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

  return {
    lat,
    long,
  };
}
