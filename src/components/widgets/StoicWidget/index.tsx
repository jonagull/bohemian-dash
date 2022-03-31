import React, { useState } from "react";
import { useGetStoicQuote } from "./useGetStoicQuote";
import { ReactComponent as GreekLogo } from "../../../assets/icons/greek.svg";
import { ReactComponent as CloudLogo } from "../../../assets/icons/cloud.svg";
import { ReactComponent as CloudAltLogo } from "../../../assets/icons/cloud-alt.svg";

interface StoicData {
  author: string;
  quote: string;
}

export const StoicWidget = () => {
  const [stoicData, setStoicData] = useState<StoicData[] | undefined>([]);
  useGetStoicQuote(setStoicData);

  const randomNumber = Math.floor(Math.random() * 10);

  return (
    <React.Fragment>
      <div className="stoic-widget__wrapper">
        <GreekLogo />
        <div className="quote__container">
          {stoicData && <p>"{stoicData[randomNumber]?.quote}"</p>}
          {stoicData && <h6>- {stoicData[randomNumber]?.author}</h6>}
        </div>
        <div className="clouds__wrapper">
          <div className="cloud-b__container">
            <div className="inner-cloud-b__container">
              <CloudAltLogo transform="scale (-1 1)" />
            </div>
            <div className="inner-cloud-a__container">
              <CloudAltLogo transform="scale (-1 1)" />
            </div>
            <CloudLogo />
            <div className="inner-cloud-c__container">
              <CloudAltLogo transform="scale (-1 1)" />
            </div>
          </div>

          <div className="cloud-c__container">
            <div className="inner-cloud-b__container">
              <CloudAltLogo transform="scale (-1 1)" />
            </div>
            <div className="inner-cloud-a__container">
              <CloudAltLogo transform="scale (-1 1)" />
            </div>
            <CloudLogo />
            <div className="inner-cloud-c__container">
              <CloudAltLogo transform="scale(0.7, -0.7) rotate(-30px)" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
