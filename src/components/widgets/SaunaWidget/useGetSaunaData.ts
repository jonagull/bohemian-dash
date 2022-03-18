import { useEffect, useState } from "react";
import { SaunaData, SaunaResponseBody } from "../../../types";

export const useGetSaunaData = () => {
  const [saunaData, setSaunaData] = useState<SaunaData[] | null>(null);

  const fetchData = () => {
    fetch("https://api.bhd.v3p2k2.com/sauna/data")
      .then((res) => res.json())
      .then((data: SaunaResponseBody) => {
        console.log(data.data);
        setSaunaData(data.data.sort((a, b) => (a.id > b.id ? 1 : -1)));
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return saunaData;
};
