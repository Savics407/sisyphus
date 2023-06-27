import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const returnSearchQuery = (data) => {
    setSearchQuery(data)
  };

  return (
    <AppContext.Provider value={{returnSearchQuery, searchQuery}}>{children}</AppContext.Provider>
  );
};
