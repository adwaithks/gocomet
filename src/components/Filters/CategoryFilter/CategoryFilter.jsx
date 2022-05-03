import React from 'react'
import { FilterContext } from '../../../contexts/filterContext';
import { ProductContext } from '../../../contexts/productContext';
import './CategoryFilter.css'

function Filters() {

    const { categoryFilter, setCategoryFilter, brandFilter, setBrandFilter, discountFilter, setDiscountFilter } = React.useContext(FilterContext);
    const {products, setProducts, displayedProducts, setDisplayedProducts} = React.useContext(ProductContext)

    function categoryFilterSetHandler(e) {
        if (!e.target.value) {
            return;
        }

        let temp = products;
        
        if (discountFilter) temp = products.filter((product) => product.offer >= discountFilter)
        setCategoryFilter(e.target.value);
        setDisplayedProducts(temp.filter((product) => {
            return product.peopleCategory.toLowerCase() == e.target.value
        }))
    }

  return (
        <div className='filters-category'>
            <ul className='filters-category-list' onClick={categoryFilterSetHandler}>
                <li className='filters-category-ind'>
                    <input name="filters-category" type="radio" value="men" />
                    <label htmlFor="men">Men</label>
                </li>
                <li className='filters-category-ind'>
                    <input name="filters-category" type="radio" value="women" />
                    <label htmlFor="women">Women</label>
                </li>
                <li className='filters-category-ind'>
                    <input name="filters-category" type="radio" value="boys" />
                    <label htmlFor="boys">Boys</label>
                </li>
                <li className='filters-category-ind'>
                    <input name="filters-category" type="radio" value="girls" />
                    <label htmlFor="girls">Girls</label>
                </li>
            </ul>
        </div>
    )
}

export default Filters