import React from "react";
import img from "./test.png";
import LOGO from "./testLogo.svg";
import "./style.css";
import { Counter } from "./Counter";

const App = () => {
  return (
    <div>
      <h1>
        React - TS Webpack Starter Template !! - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={img} alt="Webpack img resource test" width="300" height="200" />
      <img src={LOGO} alt="Webpack svg resource test" width="300" height="200" />
      <Counter />
    </div>
  );
};

export default App;
