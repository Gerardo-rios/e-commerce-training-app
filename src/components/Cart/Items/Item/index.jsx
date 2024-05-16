import PropTypes from 'prop-types';
import './Item.css';
import { useEffect, useState, useContext } from 'react';
import { AiOutlineCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { CartContext } from '../../../../contexts/CartContext';

Item.propTypes = {
    item: PropTypes.object.isRequired,
}

function Item({ item }) {

    const { setCartItems } = useContext(CartContext);

    const [quantity, setQuantity] = useState(item.quantity);

    useEffect(() => {
        setQuantity(item.quantity);
    }, [item.quantity]);

    const updateItemCartQuantity = (newQuantity) => {
        setCartItems(prevCartItems => {
            return prevCartItems.map(cartItem => {
                if (cartItem.id === item.id) {
                    return {
                        ...cartItem,
                        quantity: newQuantity,
                    }
                }
                return cartItem;
            });
        });
    };

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
        updateItemCartQuantity(quantity + 1);
    }

    const decrementQuantity = () => {
        setQuantity(prevQuantity => {
            if (prevQuantity > 1) {
                return prevQuantity - 1;
            }
            return prevQuantity;
        });
        updateItemCartQuantity(quantity - 1);
    }

    const handleRemoveItems = () => {
        console.log(`Removed ${item.name} from cart`);
    }

    return (
        <div className="itemContainer">
            <AiOutlineCloseCircle className="removeItems" onClick={handleRemoveItems}/>
            <img src={item.image} alt={item.title} />
            <div className="itemDetails">
                <p>${item.price}</p>
                <div className="QuantityIndicator">
                    <AiOutlineMinusCircle className="minusButton" onClick={decrementQuantity} />
                    <p>{quantity}</p>
                    <AiOutlinePlusCircle className="plusButton" onClick={incrementQuantity} />
                </div>
            </div>
        </div>
    )
}

export { Item }
