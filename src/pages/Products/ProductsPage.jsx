import React from 'react'
import Filters from '../../components/Filters/Filters'
import ProductsCollection from '../../components/ProductsCollection/ProductsCollection'
import SortBy from '../../components/SortBy/SortBy'
import './ProductsPage.css'

function ProductsPage() {
  return (
    <div className='products-page'>
        <SortBy className="sort-by" />
        <div className='products-container'>
          <Filters className="product-filters" />
          <ProductsCollection className="products-list" />
        </div>
    </div>
  )
}

export default ProductsPage