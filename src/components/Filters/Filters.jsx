import React from 'react'
import { FilterContext } from '../../contexts/filterContext'
import { ProductContext } from '../../contexts/productContext'
import BrandFilter from './BrandFilter/BrandFilter'
import CategoryFilter from './CategoryFilter/CategoryFilter'
import DiscountFilter from './DiscountFilter/DiscountFilter'
import './Filters.css'

function Filters() {

  function clearFilters() {
    setCategoryFilter('');
    setBrandFilter('');
    setBrandFilter([]);
    setDisplayedProducts(products);
  }
  
  const { categoryFilter, setCategoryFilter, brandFilter, setBrandFilter, discountFilter, setDiscountFilter } = React.useContext(FilterContext);
  const {products, setProducts, displayedProducts, setDisplayedProducts} = React.useContext(ProductContext)
  
    return (
    <div className='filters'>
        <div className='filters-head'>
          <h1>FILTERS</h1>
          <h5 onClick={clearFilters}>Clear All</h5>
        </div>   
        <div className='filters-container'>
        <CategoryFilter />
        <hr />
        <BrandFilter />
        <hr />
        <DiscountFilter />
        <hr />
        </div> 
    </div>
  )
}

export default Filters