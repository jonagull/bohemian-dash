import React from "react";
import { useGetSaunaData } from "./useGetSaunaData";
import { ReactComponent as HumidIcon } from "../../../assets/icons/HumidIcon.svg";
import { ReactComponent as ThermometerIcon } from "../../../assets/icons/thermometer.svg";
import { SaunaChart } from "./SaunaChart";
import { ReactComponent as SaunaIcon } from "../../../assets/icons/sauna.svg";

export const SaunaWidget = () => {
  const saunaData = useGetSaunaData();

  return (
    <div className="sauna-widget__wrapper">
      <div className="title__container">
        <SaunaIcon />
      </div>
      <div className="sauna-chart__container">
        <SaunaChart data={saunaData} />
      </div>
      <div className="sauna-metrics__container">
        <div className="stats__container">
          <h2 className="temperature__container">
            <ThermometerIcon /> {saunaData && saunaData[0].temperature} C°
          </h2>
          <h2 className="humid__container">
            <span>
              <HumidIcon />
            </span>
            <span>{saunaData && saunaData[0].humidity} %</span>
          </h2>
        </div>
      </div>
    </div>
  );
};
