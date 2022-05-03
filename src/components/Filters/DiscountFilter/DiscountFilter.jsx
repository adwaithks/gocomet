import React from 'react'
import { FilterContext } from '../../../contexts/filterContext';
import { ProductContext } from '../../../contexts/productContext';
import './DiscountFilter.css'

function Filters() {

    const { categoryFilter, setCategoryFilter, brandFilter, setBrandFilter, discountFilter, setDiscountFilter } = React.useContext(FilterContext);
    const {products, setProducts, displayedProducts, setDisplayedProducts} = React.useContext(ProductContext)

    function discountFilterSetHandler(e) {
        if (!e.target.value) {
            return;
        }

        let temp = [];
        
        if (categoryFilter) temp = products.filter((product) => product.peopleCategory == categoryFilter)
        setDiscountFilter(e.target.value);
        setDisplayedProducts(temp.filter((product) => {
            return product.offer >= e.target.value
        }))
    }

  return (
        <div className='filters-discount'>
            <h1>DISCOUNT</h1>
            <ul className='filters-discount-list' onClick={discountFilterSetHandler}>
                <li className='filters-discount-ind'>
                    <input name="filters-discount" type="radio" value="10" />
                    <label htmlFor="10">10% and above</label>
                </li>
                <li className='filters-discount-ind'>
                    <input name="filters-discount" type="radio" value="20" />
                    <label htmlFor="20">20% and above</label>
                </li>
                <li className='filters-discount-ind'>
                    <input name="filters-discount" type="radio" value="30" />
                    <label htmlFor="30">30% and above</label>
                </li>
                <li className='filters-discount-ind'>
                    <input name="filters-discount" type="radio" value="50" />
                    <label htmlFor="50">50% and above</label>
                </li>
            </ul>
        </div>
          )
}

export default Filters