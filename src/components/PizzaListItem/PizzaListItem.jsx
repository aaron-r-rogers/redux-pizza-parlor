import { useDispatch } from 'react-redux';
import { useState } from 'react';

function PizzaListItem(){
    const [added, setAdded] = useState(false);

    const dispatch = useDispatch();

    const addItem = (pizza) => {
        dispatch({
            type: 'ADD_PIZZA',
            payload: {
                name: foodItem.name,
                price: foodItem.id,
                id: foodItem.id,
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
                <h2>${pizza.price}</h2>
            </section>
        </div>
    )
}

export default PizzaListItem;