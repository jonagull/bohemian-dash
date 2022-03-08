import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import WeatherWidget from "./components/widgets/WeatherWidget";
import { StockWidget } from "./components/widgets/StockWidget";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="widget__wrapper">
        <WeatherWidget />
        <StockWidget />
      </div>
    </React.Fragment>
  );
}

export default App;
