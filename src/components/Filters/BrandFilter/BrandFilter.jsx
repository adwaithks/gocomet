import React from 'react'
import { FilterContext } from '../../../contexts/filterContext';
import { ProductContext } from '../../../contexts/productContext';
import './BrandFilter.css'

function BrandFilter() {

    const { categoryFilter, brandFilter, setBrandFilter, discountFilter } = React.useContext(FilterContext);
    const {products, setDisplayedProducts} = React.useContext(ProductContext)

    function filterOutBrand(arr, brandNames) {
        if (brandNames.length == 0)
            return arr;
        let newArr = arr.filter((item, idx) => {
            return brandNames.includes(item.brand.toLowerCase())
        });
        return newArr;
    }

    function brandFilterSetHandler(e) {
        if (!e.target.value) {
            return;
        }

        let temp = products;
        
        if (categoryFilter) temp = products.filter((product) => product.peopleCategory == categoryFilter)
        if (discountFilter) temp = temp.filter(product => product.offer >= discountFilter)

        if(brandFilter.includes(e.target.value.toLowerCase())) {
            let removeIdx;
            let arr = brandFilter;
            for(let i = 0; i < arr.length; i ++) {
                if (arr[i].toLowerCase() == e.target.value.toLowerCase()) {
                    removeIdx = i;
                    break;
                }
            }
            arr.splice(removeIdx, 1);

            setDisplayedProducts(filterOutBrand(temp, arr));
            setBrandFilter(arr);  
        } else {
            setBrandFilter((brandFilter) => [...brandFilter, e.target.value])
            setDisplayedProducts(filterOutBrand(temp, [...brandFilter, e.target.value]));
        }
    }


  return (
    <div className='filters-brand'>
        <h1>BRAND</h1>
        <ul className='filters-brand-list' onClick={brandFilterSetHandler}>
            <li className='filters-brand-ind'>
                <input name="filters-brand" type="checkbox" value="roadster" />
                <label htmlFor="men">Roadster</label>
            </li>
            <li className='filters-brand-ind'>
                <input name="filters-brand" type="checkbox" value="veromoda" />
                <label htmlFor="veromoda">Vero Moda</label>
            </li>
            <li className='filters-brand-ind'>
                <input name="filters-brand" type="checkbox" value="hancock" />
                <label htmlFor="hancock">Hancock</label>
            </li>
            <li className='filters-brand-ind'>
                <input name="filters-brand" type="checkbox" value="pepejeans" />
                <label htmlFor="pepejeans">Pepe Jeans</label>
            </li>
        </ul>
    </div>
  )
}

export default BrandFilter