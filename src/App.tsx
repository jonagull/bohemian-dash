import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import { Grid } from "./Grid";

function App() {
  return (
    <React.Fragment>
      <div className="widget__wrapper"></div>
      <Grid />
    </React.Fragment>
  );
}

export default App;
