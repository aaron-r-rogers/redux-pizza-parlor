import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

const pizzaReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_PIZZA_LIST":
      return [...state, action.payload];
  }

  return state;
};

const storeInstance = createStore(
  combineReducers({
    pizzaReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
