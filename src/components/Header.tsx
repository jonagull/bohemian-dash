import React from "react";
import { ReactComponent as Applogo } from "../assets/icons/bhdlogo.svg";

export default function Header() {
  return (
    <React.Fragment>
      <header className="header">
        <div className="header__logo">
          <Applogo />
        </div>
        <div className="user-credentials__container">
          <span>№</span>
          <span>1337</span>
          <span>▼</span>
        </div>
      </header>
    </React.Fragment>
  );
}
