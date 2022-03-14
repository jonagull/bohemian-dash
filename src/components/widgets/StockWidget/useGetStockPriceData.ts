import { useCallback, useEffect, useState } from "react";
import { StockPrice } from "../../../types";

export function useGetStockPriceData(ticker: string) {
  const [stockPrice, setStockPrice] = useState<StockPrice[] | null>(null);

  const fetchData = useCallback(() => {
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
        setStockPrice(
          Object.keys(data["Monthly Time Series"])
            .map((key) => ({
              name: key,
              price: parseFloat(data["Monthly Time Series"][key]["2. high"]),
            }))
            .sort((a, b) => (a.name > b.name ? 1 : -1))
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }, [setStockPrice, ticker]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return stockPrice;
}
