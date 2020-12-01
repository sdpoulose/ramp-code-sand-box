import React from "react";
import ReactDOM from "react-dom";

import InputPasser from "./components/inputPasser";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <InputPasser />
  </React.StrictMode>,
  rootElement
);
