import React, { useEffect, useState } from "react";
import { ClassificationTypeNames } from "typescript";

export function useGetNearestCities(latitude: number, longitude: number) {
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    if (latitude === 0 && longitude === 0) {
      return;
    }

    fetch(
      `https://geocodeapi.p.rapidapi.com/GetNearestCities?latitude=${latitude}&longitude=${longitude}&range=0`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "geocodeapi.p.rapidapi.com",
          "x-rapidapi-key":
            "a2629988b8msha38146193385057p1933c3jsne32f2e63e569",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setCityName(data[0].City);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [latitude, longitude]);
  return cityName;
}
