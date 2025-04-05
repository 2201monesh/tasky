import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filterText, setFilterText] = useState("");

  const value = {
    tasks,
    setTasks,
    filterText,
    setFilterText,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
