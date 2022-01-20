import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from 'react-redux';

const pizzaReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_PIZZA_LIST":
      return [...state, action.payload];
  }

  return state;
};

const orderReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ORDER_LIST':
        return action.payload
        case 'CLEAR_ORDER_LIST':
        return []
    }
    return state;
}

const storeInstance = createStore(
  combineReducers({
    pizzaReducer,
    orderReducer
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);

