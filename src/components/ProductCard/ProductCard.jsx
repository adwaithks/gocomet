import React from 'react'
import './ProductCard.css'
import {AiFillStar} from 'react-icons/ai'
import {MdFavoriteBorder} from 'react-icons/md'
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { WishListContext } from '../../contexts/wishListContext'

function ProductCard({name, desc, price, discountPrice, offer, rating, numRatings, sizes }) {
  
  const [productSlider, setProductSlider] = React.useState(false);
  const {wishlistItems, setWishlistItems} = React.useContext(WishListContext);
  
  function addToWishlistHandler() {
        let flag = true;
        const product = {
            id: 8,
            name: name,
            desc: desc,
            price: price,
            discountedPrice: discountPrice,
            offer: offer,
            rating: rating,
            numRatings: numRatings,
            peopleCategory: "women",
            brand: "Roadster",
            color: "black",
            sizes: sizes
        }
        wishlistItems?.map((wishlistItem) => {
            if (wishlistItem.name == product.name && wishlistItem.desc == product.desc) {
                flag = false;
            }
        })

        if (flag)
        {
            window.localStorage.setItem('wishlist', JSON.stringify([...wishlistItems, product]))
            setWishlistItems([...wishlistItems, product]);
        }
            
    }

    function gotoProductHandler() {
        console.log('first')
        window.location.href = "/details"
    }

    const images = [
        'https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/15508666/2021/9/30/d735dbe8-22ea-45de-a840-7c02505a822b1632983382306-Hancock-Women-Olive-Green-Slim-Fit-Opaque-Cotton-Formal-Shir-1.jpg',
        'https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/15508666/2021/9/30/d735dbe8-22ea-45de-a840-7c02505a822b1632983382306-Hancock-Women-Olive-Green-Slim-Fit-Opaque-Cotton-Formal-Shir-1.jpg',
        'https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/15508666/2021/9/30/d735dbe8-22ea-45de-a840-7c02505a822b1632983382306-Hancock-Women-Olive-Green-Slim-Fit-Opaque-Cotton-Formal-Shir-1.jpg'
    ]

    return (
    <div className='product-card' onMouseLeave={()=>setProductSlider(false)} onMouseEnter={()=>setProductSlider(true)}>
        <div className='product-image-container'>
            {
                productSlider ? (
                    <>
                    <Carousel
                    onClick={gotoProductHandler} 
                        className='product-carousel'
                        showThumbs={false}
                        labels={false}
                        autoPlay={true}
                        autoFocus={true}
                        showArrows={false}
                        interval={1000}
                        stopOnHover={false}
                        infiniteLoop={true}
                    >
                        {
                            images.map((image, idx) => (
                                <div key={idx} onClick={gotoProductHandler}>
                                    <img key={idx} className="product-carousel-image" src={image} alt="" />
                                </div>
                            ))
                            
                        }
                    </Carousel>
                    <div className='product-viewsimilar-container'>
                        <span>View Similar</span>
                    </div>
                </>
                ) : (
                    <img className='product-image' src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/4/18/d335c205-fb51-4e31-b709-b9475a3091c11650284973257RoadsterMenBlackGreyCheckedCasualSustainableShirt1.jpg" alt="" />
                )
            }

            {
                !productSlider ? (
                    <div className='product-rating-container'>
                        <h1>{rating}<AiFillStar className='star-icon' /> | {numRatings}k</h1>
                    </div>
                ) : (
                    null
                )
            }
            
        </div>
        <div className='product-info-container'>
        {
            productSlider ? (
                <div className='product-wishlist-container'>
                    <button className='product-wishlist-button' onClick={addToWishlistHandler}><MdFavoriteBorder className='product-wishlist-icon'/>Wishlist</button>
                </div>
            ) : (null)
        }
            <h1 className='product-name'>{name}</h1>
            {
                !productSlider ? (
                    <h2 className='product-desc'>{desc}</h2>
                ) : (
                    <div className='product-sizes'>Sizes:  {
                        sizes.map((size, id) => <h2 key={id} className='product-size'>{size}</h2>)
                    }</div>
                )
            }
            <div className='product-price-container'>
                <h2 className='product-discount-price'>Rs. {discountPrice}</h2>
                <h2 className='product-price'>Rs. {price}</h2>
                <h2 className='product-percent-offer'>({offer}% OFF)</h2>
            </div>
        </div>
    </div>
  )
}

export default ProductCard