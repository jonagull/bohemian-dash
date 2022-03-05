import React from "react";

export async function useGetStockData(ticker: string) {
  let chartData = {};

  await fetch(
    `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2021-07-22/2021-07-22?adjusted=true&sort=asc&limit=120&apiKey=WNkfcCWNSXDNX_pwdXhqAohkGrEXmyAW`
  )
    .then((res) => res.json())
    .then((data) => {
      chartData = data;
    });

  return {
    chartData,
  };
}
