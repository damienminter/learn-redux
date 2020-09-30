import React from "react";
import logo from "../logo.svg";
import reduxlogo from "../logoRedux.svg";

export default function Header() {
  return (
    <div>
      <header className="App-header">
        <img src={reduxlogo} className="App-logo" alt="logo-redux" />
        <p>Redux and React</p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}
