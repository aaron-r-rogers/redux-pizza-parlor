import { useSelector } from 'react-redux';
import axios from 'axios';

function CustomerInfo () {

    const [customer_name, setNameInput] = useState('');
    const [street_address, setAddressInput] = useState('');
    const [city, setCityInput] = useState('');
    const [zip, setZipInput] = useState('');
    // useSelector to get total and pizzas
    //const total = useSelector(store => store.total);
    //const pizzas = useSelector(store => store.pizzas);

    function onClickNext (evt) {
        
        evt.preventDefault();
        // POST the new creature to our server
        axios({
        method: 'POST',
        url: '/api/order',
        data: {
            customer_name,
            street_address,
            city,
            zip,
            type,
            // get total and pizzas from store
            total,
            pizzas
        }
    })
        .then((res) => {
            console.log('POST success! 🍕');
        })
        .catch(err => {
            console.log('POST failed 😢', err);
        });
    };


    return (
    <>
    {/* link to step 3 in onClickNext*/}
    {/* Header as component? */}
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
            {/* radial buttons set type */}
            <button>NEXT</button>
        </form>
    </>
    )
}

export default CustomerInfo;