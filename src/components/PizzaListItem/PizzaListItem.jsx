import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function PizzaListItem({pizza}){
    const [added, setAdded] = useState(false);
    console.log(pizza);
    const dispatch = useDispatch();

    const addItem = (pizza) => {
        dispatch({
            type: 'SET_ORDER_LIST',
            payload: {
                name: pizza.name,
                description: pizza.description,
                price: pizza.price,
                id: pizza.id,
                quantity: 1
            }
        })
        setAdded(true)
    }

    const removeItem = (pizza) =>{
        dispatch({
            type: 'REMOVE_PIZZA',
            payload: pizza
        })
        setAdded(false);
    }

    return (

        <div>
            
            <img src={pizza.image_path}/>

            <section>
                <h3>{pizza.name}</h3>
                <p>{pizza.description}</p>
            </section>

            <section>
                {!added ? (
                    <button onClick={() => addItem(pizza)}>ORDER NOW</button>
                ) : (
                    <button onClick={() => removeItem(pizza)}>Remove Pizza</button>
                )}
                <h3>${pizza.price}</h3>
            </section>
        </div>
    )
}

export default PizzaListItem;