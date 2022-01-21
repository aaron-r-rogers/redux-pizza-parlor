import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import { Link } from 'react-router-dom';
function Checkout({getOrder}) {
    const order = useSelector(store => store.orderReducer)
    const history = useHistory()
    const dispatch = useDispatch()
    const handleCheckout = (evt) => {
        evt.preventDefault()
        axios.post('/api/order', { customer_name, total})
        .then(res => {
            console.log('post is', res.data);
            getOrder();
            dispatch({
                type: 'CLEAR_ORDER_LIST'
            })
            history.push('/')
        })
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
                {order.map((orderItem, index) => 
                <td key={index}>{orderItem.customer_name}</td> 
                )}
                {order.map((orderItem, index) =>
                <td key={index}>{orderItem.total}</td>
                )}  
            </tr>
            </tbody>
            
        </table>
        <h3>total: </h3>
        <button onClick={handleCheckout}>Checkout</button>
        <Link to='/step2'><button>PREVIOUS</button></Link>
        </>

    )
}

export default Checkout;