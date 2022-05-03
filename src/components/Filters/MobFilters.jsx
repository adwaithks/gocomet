import React from 'react'
import { FilterContext } from '../../contexts/filterContext'
import { ProductContext } from '../../contexts/productContext'
import BrandFilter from './BrandFilter/BrandFilter'
import CategoryFilter from './CategoryFilter/CategoryFilter'
import DiscountFilter from './DiscountFilter/DiscountFilter'
import './Filters.css'

function MobFilters() {

  function clearFilters() {
    if (categoryFilter || brandFilter || discountFilter) {
      window.location.href = "/"
    } 
    setDisplayedProducts(products);
  }
  
  const { categoryFilter, brandFilter, discountFilter } = React.useContext(FilterContext);
  const {products, setDisplayedProducts} = React.useContext(ProductContext)
  
    return (
    <div className='mobile-filters'>
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

export default MobFilters