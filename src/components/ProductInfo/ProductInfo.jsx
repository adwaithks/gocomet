import React from 'react'
import './ProductInfo.css'
import {AiFillStar} from 'react-icons/ai'
import {MdFavoriteBorder} from 'react-icons/md'
import { CartContext } from '../../contexts/cartContext';
import { WishListContext } from '../../contexts/wishListContext';

function ProductInfo({sizes}) {

    const [size, setSize] = React.useState('');
    const {cartItems, setCartItems} = React.useContext(CartContext);
    const {wishlistItems, setWishlistItems} = React.useContext(WishListContext)

    function selectSizeHandler(e) {

        const sizeSelected = e.target.textContent;
        setSize(sizeSelected);
    }

    function addToBagHandler() {
        if (!size) return;
        const product = {
            id: 8,
            name: "Roadster8",
            desc: "Cotton Checked Casual Shirt",
            price: 1499,
            discountedPrice: 674,
            offer: 55,
            rating: 4.1,
            numRatings: 22.1,
            peopleCategory: "women",
            brand: "Roadster",
            color: "black",
            selectedSize: size,
            sizes: ["38", "40", "42", "44", "48"]
        }
        setCartItems((prev) => [...prev, product])       
        window.localStorage.setItem('cart', JSON.stringify([...cartItems, product]))

    }


    function addToWishlistsHandler() {
        let flag = true;
        const product = {
            id: 8,
            name: "Roadster8",
            desc: "Cotton Checked Casual Shirt",
            price: 1499,
            discountedPrice: 674,
            offer: 55,
            rating: 4.1,
            numRatings: 22.1,
            peopleCategory: "women",
            brand: "Roadster",
            color: "black",
            sizes: ["38", "40", "42", "44", "48"]
        }
        wishlistItems?.map((wishlistItem) => {
            if (wishlistItem.name == product.name && wishlistItem.desc == product.desc) {
                flag = false;
            }
        })

        if (flag)
            {
                setWishlistItems((prev) => [...prev, product]);
                window.localStorage.setItem('wishlist', JSON.stringify([...wishlistItems, product]))
            }
            
        }
    

  return (
    <div className='product-info'>
        <h1 className='product-info-name'>Roadster</h1>
        <h4 className='product-info-desc'>Men Pack Of 2 Sustainable Shirts</h4>
        <div className='product-info-rating'>
            <h4>4.2 <AiFillStar className='product-info-star-icon' /> | 3.3k Ratings</h4>
        </div>
        <hr />
        <div className='product-info-pricing-container'>
            <div className='product-info-pricing'>
                <h2 className='product-info-currentprice'>Rs. 944</h2>
                <h2 className='product-info-originalprice'>Rs. 2699</h2>
                <h2 className='product-info-offer'>(65% OFF)</h2>
            </div>
            <h4>inclusive of all taxes</h4>
        </div>
        <div className='product-info-sizes-container'>
            <h1>SELECT SIZE</h1>
            <div className='product-info-sizes'>
                {
                    sizes?.map((size_, idx) => (
                        <button className={size == size_ ? 'size-active' : null}  onClick={selectSizeHandler} key={idx}>{size_}</button>
                    ))
                }
            </div>
        </div>
        <div className='product-info-bag-container'>
            <button className='product-info-addtobag' onClick={addToBagHandler}>Add to Bag</button>
            <button className='product-info-wishlist' onClick={addToWishlistsHandler}><MdFavoriteBorder className='product-info-fav-icon' /> Wishlist</button>
        </div>
    </div>
  )
}


export default ProductInfo