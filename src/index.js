import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Student from "./App";
import { Parent } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Student title="my home is very big" />
    <Parent>lorem3</Parent>
  </React.StrictMode>
);
