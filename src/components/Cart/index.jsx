import './Cart.css'
import { Items } from './Items'
import { Subtotal } from './Subtotal'
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';

function Cart () {

    const { cartItems } = useContext(CartContext);

    return (
        <div className='CartContainer'>
            <Subtotal subtotal={10}/>
            <Items items={cartItems}/>
        </div>
    );

}

export { Cart }
