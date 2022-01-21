import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';

function CustomerInfo () {

    const dispatch = useDispatch()

    const [nameInput, setNameInput] = useState('');
    const [addressInput, setAddressInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [zipInput, setZipInput] = useState('');
    const [orderType, setOrderType] = useState('');
    //const total = useSelector(store => store.total);
    //const pizzas = useSelector(store => store.orderReducer);

    function onClickNext (evt) {

        evt.preventDefault();
        // dispatch order to reducer/store

        dispatch({
            type: 'SET_CUSTOMER',
            data: {
                customer_name: nameInput,
                street_address: addressInput,
                city: cityInput,
                zip: zipInput,
                type: orderType,
                // TODO: get total from store '20' is for testing
                total: '20',
            }
        })
    }

    //     axios({
    //     method: 'POST',
    //     url: '/api/order',
    //     data: {
    //         customer_name: nameInput,
    //         street_address: addressInput,
    //         city: cityInput,
    //         zip: zipInput,
    //         type: orderType,
    //         // TODO: get total from store '20' is for testing
    //         total: '20',
    //         pizzas: pizzas
    //     }
    // })
    //     .then((res) => {
    //         console.log('POST success! 🍕');
    //     })
    //     .catch(err => {
    //         console.log('POST failed 😢', err);
    //     });
    // };


    return (
    <>
    {/* link to step 3 in onClickNext*/}
    {/* Header as component? */}
    <h2>Step 2: Customer Information</h2>
    <form onSubmit={onClickNext}>
            <input
                type="text"
                placeholder="Name"
                onChange={event => setNameInput(event.target.value)}
                value={nameInput}
            />
            <input
                type="text"
                placeholder="Street Address"
                onChange={event => setAddressInput(event.target.value)}
                value={addressInput}
            />
            <input
                type="text"
                placeholder="City"
                onChange={event => setCityInput(event.target.value)}
                value={cityInput}
            />
            <input
                type="text"
                placeholder="Zip"
                onChange={event => setZipInput(event.target.value)}
                value={zipInput}
            />
            <br></br>
            <input 
                type="radio"
                name="orderType"  
                value="pickup"
                onChange={event => setOrderType(event.target.value)}

            />
            <label htmlFor="pickup">Pickup</label><br></br>
            <input 
                type="radio"
                name="orderType"  
                value="delivery"
                onChange={event => setOrderType(event.target.value)}
            />
            <label htmlFor="delivery">Delivery</label><br></br>
            <button>NEXT</button>
        </form>
    </>
    )
}

export default CustomerInfo;