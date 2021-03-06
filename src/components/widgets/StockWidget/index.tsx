import React, { useState } from "react";
import { SelectOption } from "../../../types";
import SelectDropDownMenu from "./SelectDropDownMenu";
import StockChart from "./StockChart";
import { useGetStockNames } from "./useGetStockNames";
import { useGetStockPriceData } from "./useGetStockPriceData";

export function StockWidget() {
  const stockNames = useGetStockNames();
  const defaultTickerValue = stockNames.length > 0 ? stockNames[0] : null;
  const [ticker, setTicker] = useState<SelectOption | null>(defaultTickerValue);

  const stockPrice = useGetStockPriceData(
    ticker?.value ?? defaultTickerValue?.value ?? null
  );

  let currentPrice = null;
  let ipoDatePrice = null;
  let ipoDate = null;
  let percentageDifferenceAllTime = null;

  if (stockPrice && stockPrice.length) {
    currentPrice = stockPrice[stockPrice.length - 1].price;
    ipoDatePrice = stockPrice[0].price;
    ipoDate = stockPrice[0].name;
    percentageDifferenceAllTime = parseFloat(
      (((currentPrice - ipoDatePrice) / ipoDatePrice) * 100).toFixed(1)
    );
  }

  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  return (
    <React.Fragment>
      <div className="stock-widget__wrapper">
        <div className="dropdown__container">
          {defaultTickerValue && (
            <SelectDropDownMenu
              ticker={ticker}
              setTicker={setTicker}
              defaultValue={defaultTickerValue}
              options={stockNames}
            />
          )}

          {percentageDifferenceAllTime && (
            <div className="percentage__container">
              <h6
                className={
                  percentageDifferenceAllTime >= 0 ? "text--green" : "text--red"
                }
              >
                {percentageDifferenceAllTime}%
              </h6>
            </div>
          )}
        </div>
        <div className="ticker-name__container">
          <p>{ticker?.value ?? defaultTickerValue?.value}</p>
          {ipoDate && (
            <p>
              {ipoDate} - {date}
            </p>
          )}
        </div>
        <div className="chart-data__container">
          <StockChart data={stockPrice} />
        </div>
        {currentPrice && (
          <div className="price__container">
            <h1>${currentPrice} USD</h1>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
