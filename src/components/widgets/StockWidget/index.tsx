import React from "react";
import StockChart from "./StockChart";

export function StockWidget() {
  return (
    <React.Fragment>
      <div className="stock-widget__wrapper">
        <div className="ticker__container">
          <h1>AAPL</h1>
          <p>+0.58%</p>
        </div>
        <div className="company-name__container">
          <p>Apple Corporation</p>
        </div>
        <div className="chart-data__container">
          <StockChart />
        </div>
        <div className="price__container">
          <h1>114.44</h1>
        </div>
      </div>
    </React.Fragment>
  );
}
