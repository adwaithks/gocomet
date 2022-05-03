import React, { createContext } from "react";


export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    
    const productsList = [
        {
            id: 1,
            name: "Roadster1",
            desc: "Cotton Checked Casual Shirt",
            price: 1499,
            discountedPrice: 674,
            offer: 84,
            rating: 5.1,
            numRatings: 22.1,
            peopleCategory: "men",
            brand: "hancock",
            color: "black",
            sizes: ['42', '43', '23'],
            
        },
        {
            id: 2,
            name: "Roadster2",
            desc: "Cotton Checked Casual TShirt",
            price: 1499,
            discountedPrice: 674,
            offer: 34,
            rating: 5.8,
            numRatings: 22.1,
            peopleCategory: "boys",
            brand: "Roadster",
            color: "black",
            sizes: ['42', '43', '23']
        },
        {
            id: 3,
            name: "Roadster3",
            desc: "Cotton Checked Casual Gown",
            price: 1499,
            discountedPrice: 674,
            offer: 12,
            rating: 4.9,
            numRatings: 22.1,
            peopleCategory: "girls",
            brand: "roadster",
            color: "black",
            sizes: ['42', '43', '23']
        }
    ]

    

    const [products, setProducts] = React.useState(productsList);
    const [displayedProducts, setDisplayedProducts] = React.useState(productsList);

    return (
      <ProductContext.Provider value={{ products, setProducts, displayedProducts, setDisplayedProducts }}>
        {children}
      </ProductContext.Provider>
    );
  };    

