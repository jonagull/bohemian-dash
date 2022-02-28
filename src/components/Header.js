import React from "react";
import Applogo from "./assets/AppLogo";

export default function Header() {
  return (
    <React.Fragment>
      <header className="header">
        <div className="header__logo">
          <Applogo />
        </div>
      </header>
    </React.Fragment>
  );
}
