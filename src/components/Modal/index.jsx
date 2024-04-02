import { useState, useContext } from 'react';
import './Modal.css'
import { Rating } from "../Filter/RatingFilter/Rating"
import { AiOutlineCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { SearchContext } from '../../contexts/SearchContext';

function Modal () {
    const {
        setIsOpen,
        imageProduct,
        titleProduct,
        priceProduct,
        descriptionProduct,
        productRate,
    } = useContext(SearchContext);

    const [quantity, setQuantity] = useState(1);

    const setCloseModal = () => {
        setIsOpen(false)
    }

    const handleAddToCart = () => {
        console.log(`Added ${quantity} ${titleProduct} to cart`);
    }

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

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
    )
}

export { Modal }