//* 1. Create the Context
//* 2. Provider
//* 3. consumer => useContext Hook

import { useContext, createContext } from "react";

//? 1. First Step Create the Context
const AppContext = createContext();

//? 2. Second Step create the Provider
//* This children is the now work as the App Component
const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ myName: "Devendra Parmar" }}>
      {children}
    </AppContext.Provider>
  );
};

//TODO: This is my Custom Hook
const useMyCustomHook = () => {
  return useContext(AppContext);
};

//? 3. Export the AppProvider and AppContext
export { AppProvider, AppContext, useMyCustomHook };
