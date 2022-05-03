import React, { createContext } from "react";


export const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = React.useState(JSON.parse(window.localStorage.getItem('wishlist')) || []);

    return (
      <WishListContext.Provider value={{ wishlistItems, setWishlistItems }}>
        {children}
      </WishListContext.Provider>
    );
  };    

