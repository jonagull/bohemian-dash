import { useEffect, useState } from "react";
import { SaunaData } from "types";

export const useSaunaHighscore = (): SaunaData | null => {
  const [highscore, setHighscore] = useState<SaunaData | null>(null);

  const fetchData = () => {
    fetch("https://api.bhd.v3p2k2.com/sauna/highscore")
      .then((res) => res.json())
      .then((body: { error: boolean; data: SaunaData }) => {
        setHighscore(body.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return highscore;
};
