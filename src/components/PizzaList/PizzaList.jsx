//importing PizzaListItem
import PizzaListItem from '../PizzaListItem/PizzaListItem';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function PizzaList() {
    const pizzas = useSelector(store => store.pizzas);
    
    const history = useHistory();

    //TODO history.push to next page

    return(
        <>
        {pizzas.map((pizza, i) => {
            return <PizzaListItem key={i} pizza={pizza}/>
        })}
        </>
    )
}

export default PizzaList;