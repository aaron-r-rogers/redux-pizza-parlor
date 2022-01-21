import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import Checkout from '../Checkout/Checkout';
import CustomerInfo from '../CustomerInfo/CustomerInfo.jsx';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import Admin from '../Admin/Admin';
import Header from '../Header/Header';
import Home from '../Home/Home';
import PizzaList from '../PizzaList/PizzaList';

function App() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    console.log('in useEffect');
    //getOrder();
    getPizza();
  }, []);



  // const getOrder = () => {
  //   axios({
  //     method: 'GET',
  //     url: '/api/order'
  //   }).then(response => {
  //     console.log('response is', response.data);
  //     dispatch({
  //       type: 'SET_ORDER_LIST',
  //       payload: response.data
  //     })
  //   }).catch(error => {
  //     console.log('GET error', error);
  //   })
  // }
  const getPizza = () => {
		console.log('In getPizza');
		axios({
			method: 'GET',
			url: '/api/pizza'
		})
			.then((response) => {
				console.log('GET pizza successful', response.data);
				dispatch({
					type: 'SET_PIZZA_LIST',
					payload: response.data
				});
			})
			.catch((err) => {
				console.error('GET pizza failed', err);
			});
	};
  return (
    <Router>
    <div className='App'>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/admin" exact>
        <Admin getOrder={getOrder}/>
      </Route>
      <Route path="/step2" exact>
        <CustomerInfo />
      </Route>
      <Route path="/checkout">
				<Checkout getOrder={getOrder} />
			</Route>


    </div>
    </Router>
  );
}

export default App;
