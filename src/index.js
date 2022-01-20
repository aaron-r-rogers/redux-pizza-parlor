import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
const orderReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ORDER_LIST':
        return action.payload
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        orderReducer: orderReducer
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
