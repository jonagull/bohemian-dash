import { useEffect, useState } from "react";

export const useGetStoicQuote = (setStoicData: any) => {
  const fetchData = () => {
    fetch("https://stoicquotesapi.com/v1/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        setStoicData(
          data.data.map((x: any) => ({
            author: x.author,
            quote: x.body,
          }))
        );
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchData();
  }, []);
};
