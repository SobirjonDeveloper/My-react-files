import React, { Children } from "react";
import { createContext } from "react";
import { data } from "./Data";

export const Oylik = (createContext = data);
const Context = ({ children }) => {
  return (
    <Oylik .Provider>
      Context
      {children}
    </Oylik>
  );
};

export default Context;
