import { useEffect, useState } from "react";
import { StockPrice } from "../../types";

export function useGetStockData() {
  const [stockPrice, setStockPrice] = useState<StockPrice[] | null>(null);

  function fetchData() {
    const ticker = "AAPL";
    fetch(
      `https://alpha-vantage.p.rapidapi.com/query?symbol=${ticker}&function=TIME_SERIES_MONTHLY&datatype=jsn`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
          "x-rapidapi-key":
            "a2629988b8msha38146193385057p1933c3jsne32f2e63e569",
        },
      }
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setStockPrice(
          Object.keys(data["Monthly Time Series"])
            .map((key) => ({
              name: key,
              price: parseFloat(data["Monthly Time Series"][key]["2. high"]),
            }))
            .sort((a, b) => (a > b ? 1 : -1))
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(stockPrice);
  return stockPrice;
}
