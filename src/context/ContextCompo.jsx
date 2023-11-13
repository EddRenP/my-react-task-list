import React, { useState } from "react";
import { MyContext } from "./MyContext";
import useCounter from "../hooks/useCounter";

const ContextCompo = ({ children }) => {
  const [value, sum, res, rei] = useCounter();

  return (
    <MyContext.Provider value={{ value, sum, res, rei }}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextCompo;
