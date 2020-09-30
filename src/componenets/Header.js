import React from "react";
import logo from "../logo.svg";

export default function Header() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Redux and React</p>
      </header>
    </div>
  );
}
