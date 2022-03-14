import React, { useEffect, useState } from "react";
import GridLayout from "react-grid-layout";
import { StockWidget } from "./components/widgets/StockWidget";
import WeatherWidget from "./components/widgets/WeatherWidget";

export const Grid = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 3, h: 9 },
    { i: "b", x: 3, y: 0, w: 3, h: 9 },
  ];

  const [width, setWidth] = useState<number>(window.innerWidth);

  const updateInnerWidth = () => {
    setWidth(window.innerWidth);
  };

  console.log(width);

  useEffect(() => {
    window.addEventListener("resize", updateInnerWidth, false);
  });

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={width}
    >
      <div key="a">
        <StockWidget />
      </div>
      <div key="b">
        <WeatherWidget />
      </div>
    </GridLayout>
  );
};
