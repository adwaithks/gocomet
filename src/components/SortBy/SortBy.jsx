import React from 'react'
import {ProductContext} from '../../contexts/productContext'
import './SortBy.css'

function SortBy() {

  const {products, setProducts, displayedProducts, setDisplayedProducts} = React.useContext(ProductContext)

  function sortByHandler(e) {
    const sortType = e.target.value;

    switch(sortType) {
      case 'popularity':
        setDisplayedProducts([...products].sort((a, b) => b.numRating - a.numRating))
        break
      case 'betterdiscount':
        setDisplayedProducts([...products].sort((a, b) => b.offer - a.offer))
        break
      case 'customerrating':
        setDisplayedProducts([...products].sort((a, b) => b.rating - a.rating))
        break
    }
  }


  return (
    <div className='sort-by'>
        <div className='sort-by-select-container'>
        <h3>Sort by: </h3>
        <select onChange={sortByHandler} className='sort-by-select' name="" id="">
            <option value="popularity">Popularity</option>
            <option value="betterdiscount">Better Discount</option>
            <option value="customerrating">Customer Rating</option>
        </select>
        </div>
    </div>
  )
}

export default SortBy