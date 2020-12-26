/* eslint-disable jsx-a11y/alt-text */
import "./App.js";
import React from "react";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    //BEM
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
