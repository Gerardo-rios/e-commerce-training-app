import './Cart.css'
import { Items } from './Items'
import { Subtotal } from './Subtotal'


function Cart () {

    return (
        <div className='CartContainer'>
            <Subtotal cart={[]} className='CartItem'/>
            <Items items={[{
                id: 1,
                name: 'Item 1',
                price: 100,
                image: 'src/assets/loupe.png',
            }]} className='CartItem'/>
        </div>
    );
    
}

export { Cart }