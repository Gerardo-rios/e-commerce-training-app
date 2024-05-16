import { useState, useContext } from 'react';
import './Modal.css';
import { Rating } from "../Filter/RatingFilter/Rating";
import { AiOutlineCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { SearchContext } from '../../contexts/SearchContext';
import { CartContext } from '../../contexts/CartContext';
import { v4 as uuidv4 } from 'uuid';

function Modal () {
    const {
        setIsOpen,
        imageProduct,
        titleProduct,
        priceProduct,
        descriptionProduct,
        productRate,
    } = useContext(SearchContext);

    const { setCartItems } = useContext(CartContext);

    const [quantity, setQuantity] = useState(1);

    const setCloseModal = () => {
        setIsOpen(false);
    };

    const handleAddToCart = () => {
        setCartItems((prevCartItems) => {
            const itemIndex = prevCartItems.findIndex((item) => item.title === titleProduct);
            if (itemIndex >= 0) {
                const newCartItems = [...prevCartItems];
                newCartItems[itemIndex] = {
                    ...newCartItems[itemIndex],
                    quantity: newCartItems[itemIndex].quantity + quantity
                };
                return newCartItems;
            } else {
                return [
                    ...prevCartItems,
                    {
                        id: uuidv4(),
                        title: titleProduct,
                        price: priceProduct,
                        quantity: quantity,
                        image: imageProduct,
                    }
                ];
            }
        });
        setQuantity(1);
    };

    const incrementQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    return (
        <div className='ModalContainer'>
            <div className='ContentModalContainer'>
                <div className='ProductImageContainer'>
                    <AiOutlineCloseCircle className='closeModal' onClick={setCloseModal}/>
                    <img src={imageProduct} alt={titleProduct}/>
                </div>
                <div className="DetailsModalContainer">
                    <div className="HeaderDetailModalContainer">
                        <h3>{titleProduct}</h3>
                        <h3>${priceProduct}</h3>
                    </div>
                    <Rating stars={productRate}/>
                    <h6>{descriptionProduct}</h6>
                    <div className="AddToCartContainer">
                        <div className="QuantityIndicator">
                            <AiOutlineMinusCircle className="minusButton" onClick={decrementQuantity} />
                            <span>{quantity}</span>
                            <AiOutlinePlusCircle className="plusButton" onClick={incrementQuantity} />
                        </div>
                        <button onClick={handleAddToCart}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Modal };
