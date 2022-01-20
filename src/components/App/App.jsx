import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react'
import './App.css';
import { useDispatch } from 'react-redux'

import PizzaList from '../PizzaList/PizzaList';

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
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <PizzaList/>
    </div>
  );
}

export default App;
