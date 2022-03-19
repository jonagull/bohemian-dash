import React, { useEffect, useState } from "react";
import GridLayout from "react-grid-layout";
import Header from "./components/Header";
import { SaunaWidget } from "./components/widgets/SaunaWidget/SaunaWidget";
import { StockWidget } from "./components/widgets/StockWidget";
import WeatherWidget from "./components/widgets/WeatherWidget/WeatherWidget";

export const Grid = () => {
  const layout = [
    { i: "a", x: 8, y: 3, w: 8, h: 24 },
    { i: "b", x: 0, y: 3, w: 4, h: 12 },
    { i: "c", x: 0, y: 3, w: 4, h: 12 },
    { i: "d", x: 0, y: 0, w: 12, h: 2 },
  ];

  const layoutPhone = [
    { i: "a", x: 0, y: 20, w: 12, h: 8 },
    { i: "b", x: 0, y: 12, w: 12, h: 8 },
    { i: "c", x: 0, y: 3, w: 12, h: 8 },
    { i: "d", x: 0, y: 0, w: 12, h: 2 },
  ];

  const [width, setWidth] = useState<number>(window.innerWidth);

  const updateInnerWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateInnerWidth, false);
  });

  return (
    <GridLayout
      className="layout"
      layout={width < 800 ? layoutPhone : layout}
      cols={12}
      rowHeight={30}
      width={width - 35}
    >
      <div key="a">
        <StockWidget />
      </div>
      <div key="b">
        <WeatherWidget />
      </div>
      <div key="c">
        <SaunaWidget />
      </div>
      <div key="d">
        <Header />
      </div>
    </GridLayout>
  );
};
