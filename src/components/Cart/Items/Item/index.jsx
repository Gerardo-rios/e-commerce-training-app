import PropTypes from 'prop-types';
import './Item.css';
import { useState } from 'react';
import { AiOutlineCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'

Item.propTypes = {
    item: PropTypes.object.isRequired,
}

function Item({ item }) {

    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handleRemoveItems = () => {
        console.log(`Removed ${item.name} from cart`);
    }

    return (
        <div className="itemContainer">
            <div className="itemImage">
                <img src={item.image} alt={item.name} />
                <AiOutlineCloseCircle className="removeItems" onClick={handleRemoveItems}/>
            </div>
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