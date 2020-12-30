import React, { createContext, userContext, useReducer } from "react";

//Prepares the datalayer
export const StateContext = createContext();

//Wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialState, childern }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {childern}
  </StateContext.Provider>
);

//Pull info from the data layer
export const userStateValue = () => userContext(StateContext);
