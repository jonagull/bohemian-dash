import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import WeatherWidget from "./components/widgets/WeatherWidget";

function App() {
  return (
    <React.Fragment>
      <Header />
      <WeatherWidget />
    </React.Fragment>
  );
}

export default App;
