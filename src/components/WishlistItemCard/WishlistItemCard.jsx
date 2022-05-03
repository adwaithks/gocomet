import React from 'react'
import '../CartItemCard/CartItemCard.css'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { WishListContext } from '../../contexts/wishListContext';

function WishlistItemCard({product}) {

    const {wishlistItems, setWishlistItems} = React.useContext(WishListContext);

    function removeWishlistItemHandler(e) {
        let arr = wishlistItems;
        wishlistItems.forEach((item, idx) => {
            if (item.name == product.name) {
                arr.splice(idx, 1);
            }
        });
        window.localStorage.setItem('wishlist', JSON.stringify(arr))


        setWishlistItems(wishlistItems.filter(item => {
            return product.name != item.name
        }));
    }

  return (
    <div className='cartitem-card'>
        <div className='cartitem-card-img-container'>
            <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/4/18/d335c205-fb51-4e31-b709-b9475a3091c11650284973257RoadsterMenBlackGreyCheckedCasualSustainableShirt1.jpg" alt="" />
        </div>
        <div className='cartitem-card-info-container'>
        <div className='cartitem-card-name-container'>
            <h2>{product.name}</h2>
            <AiOutlineCloseCircle onClick={removeWishlistItemHandler} className='cartitem-card-close-icon' />
        </div>
        <div className='cartitem-card-desc-container'>
            <h2>{product.desc}</h2>
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
            <h2 className='cartitem-card-discount-price'>Rs. {product.discountedPrice}</h2>
            <h2 className='cartitem-card-original-price'>Rs. {product.price}</h2>
            <h2 className='cartitem-card-offer'>({product.offer}% OFF)</h2>
        </div>
    </div>
    </div>
  )
}

export default WishlistItemCard