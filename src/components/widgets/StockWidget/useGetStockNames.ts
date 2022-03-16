import { useEffect, useState } from "react";
import { SelectOption } from "../../../types";
import Papa from "papaparse";

export const useGetStockNames = () => {
  const [stockNameData, setStockNameData] = useState<SelectOption[]>([]);
  const fetchData = () => {
    fetch(
      "https://www.alphavantage.co/query?function=LISTING_STATUS&apikey=XU0ZUP2UUIVXY3OU"
    )
      .then((response) => response.text())
      .then((data) => Papa.parse(data))
      .then((data: any) => {
        setStockNameData(
          data.data
            .map((x: string[]) => ({
              value: x[0],
              label: x[1],
            }))
            // First item is keys
            .slice(11000)
        );
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return stockNameData;
};
