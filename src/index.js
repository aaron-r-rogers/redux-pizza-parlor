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
      return action.payload;
  }

  return state;
};

const orderReducer = (state = [], action) => {

    if(action.type === 'SET_ORDER_LIST'){
        return [... state, action.payload]
    }
    if(action.type === 'REMOVE_PIZZA'){
        const matchPizza = order => order.id !== action.payload.id;
        return state.filter(matchPizza);
    }
    if(action.type === 'CLEAR_ORDER_LIST'){
      return [];
    }

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

