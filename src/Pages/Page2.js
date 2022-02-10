import React from "react";
import logo from "../logo.svg";
import "../App.scss";

const Page2 = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to the Local Softball Association Homepage</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Page2
        </a>
      </header>
    </div>
  );
};

export default Page2;
