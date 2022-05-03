import React, { createContext } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = React.useState(JSON.parse(window.localStorage.getItem('cart')) || []);

    return (
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        {children}
      </CartContext.Provider>
    );
  };    

