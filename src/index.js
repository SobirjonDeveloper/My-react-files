import ReactDOM from "react-dom/client";
import React from "react";
import { App } from "./App";
import { Hooks } from "./Hooks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Hooks />
  </React.StrictMode>
);
