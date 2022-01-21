import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
function Checkout({getOrder}) {

    const order = useSelector(store => store.orderReducer)
    const info = useSelector(store => store.customerReducer)
    const history = useHistory()
    const dispatch = useDispatch()
    console.log('order is:', order);

    const handleCheckout = (evt) => {
        evt.preventDefault()
        
        axios({
        method: 'POST',
        url: '/api/order',
        data: {
            customer_name: info.customer_name,
            street_address: info.street_address,
            city: info.city,
            zip: info.zip,
            type: info.type,
            // TODO: get total from store '20' is for testing
            total: Number(info.total),
            //pizzas: order.price
        }
    })
        .then(res => {
            console.log('post is', res.data);
            console.log('POST success! 🍕');
            //getOrder();
            dispatch({
                type: 'CLEAR_ORDER_LIST'
            })
            history.push('/')
        })
        .catch(err => {
            console.log('POST failed 😢', err);
        });
    }

    return(
        <>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Cost</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>TODO</td>
                {/* {order.map((orderItem, index) => 
                <td key={index}>{orderItem.customer_name}</td> 
                )}
                {order.map((orderItem, index) =>
                <td key={index}>{orderItem.total}</td>
                )}   */}
            </tr>
            </tbody>
            
        </table>
        <h3>total: </h3>
        <button onClick={handleCheckout}>Checkout</button>

        </>

    )
}

export default Checkout;