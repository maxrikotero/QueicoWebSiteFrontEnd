import React, { createContext, useReducer } from "react";

const AppContext = createContext();

const reducer = (state, action) => {
  return state;
};

const initialState = {
  texts: {}
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
