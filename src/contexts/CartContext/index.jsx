import PropTypes from 'prop-types';
import { useState, useEffect, createContext } from "react";

const CartContext = createContext();

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

function CartProvider({ children }) {
    const [cartIsOpen, setCartIsOpen] = useState(true);
    const [total, setTotal] = useState(0);

    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(total);
    }, [cartItems]);

    return (
        <CartContext.Provider 
            value={{ 
                cartIsOpen,
                setCartIsOpen,
                cartItems,
                setCartItems,
                total,
                setTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider };