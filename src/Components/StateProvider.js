import React, { createContext, useContext, useReducer } from "react";

//prepres the dataLayer

export const StateContext = createContext();

//Wrap our app and provide the Data layer

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull information form the data layer

export const useStatevalue = () => useContext(StateContext);
