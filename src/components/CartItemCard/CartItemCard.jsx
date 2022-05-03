import React from 'react'
import './CartItemCard.css'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { CartContext } from '../../contexts/cartContext';

function CartItemCard({product}) {

    const {cartItems, setCartItems} = React.useContext(CartContext);

    function removeItemHandler(e) {
        let arr = cartItems;
        cartItems.forEach((item, idx) => {
            if (product.name == item.name && product.selectedSize == item.selectedSize) {
                arr.splice(idx, 1);
            }  
        });

        window.localStorage.setItem('cart', JSON.stringify(arr));
        setCartItems(cartItems.filter(item => {
            if (product.name == item.name && product.selectedSize == item.selectedSize) {
                return false;
            } else {
                return true;
            }
        }))
    }

  return (
    <div className='cartitem-card'>
        <div className='cartitem-card-img-container'>
            <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/4/18/d335c205-fb51-4e31-b709-b9475a3091c11650284973257RoadsterMenBlackGreyCheckedCasualSustainableShirt1.jpg" alt="" />
        </div>
        <div className='cartitem-card-info-container'>
        <div className='cartitem-card-name-container'>
            <h2>Roadster</h2>
            <AiOutlineCloseCircle onClick={removeItemHandler} className='cartitem-card-close-icon' />
        </div>
        <div className='cartitem-card-desc-container'>
            <h2>Men Pack Of 2 Sustainable Shirts</h2>
            <h3>Sold By: Truenet</h3>
        </div>
        <div className='cartitem-card-sizes-container'>
            <label htmlFor="">Size: </label>
            <select name="" id="" value={product.selectedSize}>
                {
                    product?.sizes?.map((size, idx) => (
                        <option key={idx} value={size}>{size}</option>
                    ))
                }
            </select>
        </div>
        <div className='cartitem-card-prices-container'>
            <h2 className='cartitem-card-discount-price'>Rs. 944</h2>
            <h2 className='cartitem-card-original-price'>Rs. 2699</h2>
            <h2 className='cartitem-card-offer'>(65% OFF)</h2>
        </div>
    </div>
    </div>
  )
}

export default CartItemCard