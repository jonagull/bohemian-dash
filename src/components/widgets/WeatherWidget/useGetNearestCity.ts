import React, { useEffect, useState } from "react";

export function useGetNearestCities(latitude: number, longitude: number) {
  const [cityName, setCityName] = useState("");

  const getCityName = () => {
    return window.localStorage.getItem("cityName");
  };

  const storeCityName = () => {
    window.localStorage.setItem("cityName", cityName);
  };

  useEffect(() => {
    if (latitude === 0 && longitude === 0) {
      return;
    }

    if (getCityName() !== "") {
      return;
    }

    fetch(
      `https://geocodeapi.p.rapidapi.com/GetNearestCities?latitude=${latitude}&longitude=${longitude}&range=0`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "geocodeapi.p.rapidapi.com",
          "x-rapidapi-key":
            "88861defccmsh860312ac164c739p1c8ad5jsn211f41f9f248",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setCityName(data[0].City);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [latitude, longitude]);

  useEffect(() => {
    storeCityName();
  }, [cityName]);

  return getCityName();
}
