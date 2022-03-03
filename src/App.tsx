import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import WeatherWidget from "./components/widgets/WeatherWidget";
import { StockWidget } from "./components/widgets/StockWidget";

function App() {
  return (
    <React.Fragment>
      <Header />
      <WeatherWidget />
      <StockWidget />
    </React.Fragment>
  );
}

export default App;
