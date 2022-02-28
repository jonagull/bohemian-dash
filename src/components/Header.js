import React from "react";
import logo from "./assets/bhd-logo.svg";

export default function Header() {
  return (
    <React.Fragment>
      <header className="header">
        <div className="header__logo">
          <img src={logo}></img>
        </div>
      </header>
    </React.Fragment>
  );
}
