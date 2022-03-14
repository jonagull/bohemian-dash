import React, { useState } from "react";
import { SelectOption } from "../../../types";
import SelectDropDownMenu from "./SelectDropDownMenu";
import StockChart from "./StockChart";

const options = [
  { value: "AAPL", label: "Apple" },
  { value: "TSLA", label: "Tesla" },
  { value: "AMZN", label: "Amazon" },
  { value: "NVDA", label: "NVIDIA Corporation Common Stock" },
  { value: "FB", label: "Meta Platforms" },
  { value: "V", label: "Visa Inc." },
  { value: "BAC", label: "Bank of America Corporation" },
  { value: "PFE", label: "Pfizer Inc" },
];

export function StockWidget() {
  const defaultTickerValue = options[0];
  const [ticker, setTicker] = useState<SelectOption | null>(null);

  return (
    <React.Fragment>
      <div className="stock-widget__wrapper">
        <div className="ticker__container">
          <SelectDropDownMenu
            ticker={ticker}
            setTicker={setTicker}
            defaultValue={defaultTickerValue}
            options={options}
          />
          <h1>{ticker?.value}</h1>
          <p>+0.58%</p>
        </div>
        <div className="company-name__container">
          <p>Apple Corporation</p>
        </div>
        <div className="chart-data__container">
          <StockChart ticker={ticker?.value ?? defaultTickerValue.value} />
        </div>
        <div className="price__container">
          <h1>114.44</h1>
        </div>
      </div>
    </React.Fragment>
  );
}
