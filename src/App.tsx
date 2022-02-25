import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <WeatherWidget />
    </React.Fragment>
  );
}

export default App;
