//importing PizzaListItem
import React from 'react';
import PizzaListItem from '../PizzaListItem/PizzaListItem';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function PizzaList() {
    const pizzas = useSelector(store => store.pizzaReducer);

    const history = useHistory();

    //TODO history.push to next page
    const goNext = () => {
        
    }

    return(
        <>
        <ul>
        {pizzas.map((pizza, i) => {
            return <PizzaListItem key={i} pizza={pizza}/>
        })}
        </ul>
        
        <div>
            <button onClick={goNext}>Checkout</button>
        </div>
        </>
    )
}

export default PizzaList;