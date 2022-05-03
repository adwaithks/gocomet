import React, { createContext } from "react";


export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [categoryFilter, setCategoryFilter] = React.useState('');
    const [brandFilter, setBrandFilter] = React.useState([]);
    const [discountFilter, setDiscountFilter] = React.useState('');

    return (
      <FilterContext.Provider value={{ categoryFilter, setCategoryFilter, brandFilter, setBrandFilter, discountFilter, setDiscountFilter }}>
        {children}
      </FilterContext.Provider>
    );
  };    

