import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [updateSymbol, setUpdateSymbol] = useState("BTCUSDT")

  const returnSearchQuery = (data) => {
    setSearchQuery(data)
  };

  return (
    <AppContext.Provider value={{returnSearchQuery, searchQuery, updateSymbol, setUpdateSymbol}}>{children}</AppContext.Provider>
  );
};
