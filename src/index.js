import ReactDOM from "react-dom/client";
import React from "react";
import { App } from "./App";
import { Hooks } from "./Hooks";
import Context from "./context";
import Navbar from "./navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context>
      <Navbar />
      <App />
    </Context>
    <Hooks />
  </React.StrictMode>
);
