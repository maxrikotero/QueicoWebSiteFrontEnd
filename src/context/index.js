import React, { createContext, useReducer, useState } from "react";

export const AppContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_OUR_STORY":
      console.log("reducer LOAD_OUR_STORY", action);
      return { ...state, ourStory: action.payload };
    default:
      return state;
  }
};

const initialState = {
  ourStory: "Story"
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
