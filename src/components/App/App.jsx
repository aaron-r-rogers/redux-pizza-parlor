import React from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch();

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

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
