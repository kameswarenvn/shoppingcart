import React, { createContext, useState } from 'react';
import all_product from '../Components/Assets/all_product';

// Create a Context
export const CartContext = createContext();

const getDefaultCart = () => {
    let cart = {};
    for(let index = 0; index < all_product.length + 1; index++){
        cart[index] = 0;
    }
    return cart;
    
}


// Create a Provider component
export const CartProvider = ({ children }) => {
    

    const [cartItems, setCartItems] = useState(getDefaultCart())
    
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        // setCart((prevCart) => [...prevCart, item]);
        setCartItems((prev) => ({...prev,[item]:prev[item]+1}))
    };
    const removeFromCart = (item) => {
        // setCart((prevCart) => [...prevCart, item]);
        setCartItems((prev) => ({...prev,[item]:prev[item]-1}))
    };
    
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if(itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    }

    const contextValue = {all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount}
    return (
        <CartContext.Provider value={{ ...contextValue, addToCart, cart }}>
            {children}
        </CartContext.Provider>
    );
};
