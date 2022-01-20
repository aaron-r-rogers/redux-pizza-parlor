import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from 'react-redux';

/* const pizzas = (state=[], action) => {
    switch(action.type){
        case 'SHOW_PIZZAS':
            return action.payload;
    }
    return state;
} */

const pizzaReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_PIZZA_LIST":
      return action.payload;
  }

  return state;
};

const orderReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ORDER_LIST':
        return action.payload
    }

    return state;
}

const storeInstance = createStore(
  combineReducers({
    pizzaReducer,
    orderReducer,
    //pizzas
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);

