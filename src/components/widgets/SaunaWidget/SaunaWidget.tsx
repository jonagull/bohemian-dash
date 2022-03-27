import React from "react";
import { useGetSaunaData } from "./useGetSaunaData";
import { ReactComponent as HumidIcon } from "../../../assets/icons/HumidIcon.svg";
import { ReactComponent as ThermometerIcon } from "../../../assets/icons/thermometer.svg";
import { SaunaChart } from "./SaunaChart";
import { ReactComponent as SaunaIcon } from "../../../assets/icons/sauna.svg";
import { useSaunaHighscore } from "./useSaunaHighscore";
import { FireIcon } from "icons";

export const SaunaWidget = () => {
  const saunaData = useGetSaunaData();
  const highscore = useSaunaHighscore();

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
            <ThermometerIcon />{" "}
            {saunaData && saunaData[saunaData.length - 1].temperature} C°
          </h2>
          <h2 className="humid__container">
            <span>
              <HumidIcon />
            </span>
            <span>
              {saunaData && saunaData[saunaData.length - 1].humidity} %
            </span>
          </h2>
        </div>
      </div>

      {highscore && (
        <div className="sauna-highscore">
          <FireIcon />
          <div>
            {`Hottest session ever was a steaming `}
            <span>{highscore.temperature} C°</span>
            {` with a humidity of `}
            <span>{highscore.humidity}%</span>
            {` on `}
            {new Intl.DateTimeFormat("en-US", {
              dateStyle: "full",
              timeStyle: "long",
              hour12: false,
            }).format(new Date(highscore.created_at))}
            .
          </div>
        </div>
      )}
    </div>
  );
};
