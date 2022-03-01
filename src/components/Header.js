import React from "react";
import BhdLogo from "./assets/bhd-logo";

export default function Header() {
  return (
    <React.Fragment>
      <header className="header">
        <div className="header__logo">
          <BhdLogo />
        </div>
      </header>
    </React.Fragment>
  );
}
