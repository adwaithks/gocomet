import React from 'react'
import { ProductContext } from '../../contexts/productContext'
import ProductCard from '../ProductCard/ProductCard'
import './ProductsCollection.css'

function ProductsCollection() {

    const {displayedProducts} = React.useContext(ProductContext)

  return (
    <div className='products-collection'>
        {
            displayedProducts.map((product, idx) => (
                <ProductCard 
                    key={product.id} 
                    name={product.name}
                    desc={product.desc}
                    price={product.price}
                    discountPrice={product.discountedPrice}
                    offer={product.offer}
                    rating={product.rating}
                    sizes={product.sizes}
                    numRatings={product.numRatings}
                    />
            ))
        }
    </div>
  )
}

export default ProductsCollection