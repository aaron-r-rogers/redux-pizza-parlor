import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react'
import './App.css';
import { useDispatch } from 'react-redux'
import CustomerInfo from '../CustomerInfo/CustomerInfo.jsx';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    console.log('in useEffect');
    getOrder();
    getPizza();
  }, []);

  const getPizza = () => {
    console.log('In getPizza');
    axios({
      method: 'GET',
      url: '/api/pizza'
    }).then(response => {
      console.log('GET pizza successful', response.data);
      dispatch({
        type: 'SET_PIZZA_LIST',
        payload: response.data
      })
    }).catch(err => {
      console.error('GET pizza failed', err);
    });
  }

  const getOrder = () => {
    axios({
      method: 'GET',
      url: '/api/order'
    }).then(response => {
      console.log('response is', response.data);
      dispatch({
        type: 'SET_ORDER_LIST',
        payload: response.data
      })
    }).catch(error => {
      console.log('GET error', error);
    })
  }
  
  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <Route path="/step2" exact>
        <CustomerInfo />
      </Route>
    </div>
    </Router>
  );
}

export default App;
