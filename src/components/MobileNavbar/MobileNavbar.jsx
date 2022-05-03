import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdFavoriteBorder, MdSearch, MdOutlineShoppingBag, MdOutlinePersonOutline} from 'react-icons/md'
import { CartContext } from '../../contexts/cartContext';
import { ProductContext } from '../../contexts/productContext';
import { WishListContext } from '../../contexts/wishListContext';
import CartModal from '../CartModal/CartModal';
import Filters from '../Filters/Filters';
import WishlistModal from '../WishlistModal/WishlistModal'
import './MobileNavbar.css'

function MobileNavbar() {

    const [expanded, setExpanded] = React.useState(false);

  const {cartItems} = React.useContext(CartContext);
  const {wishlistItems} = React.useContext(WishListContext);
  const [cartModalIsOpen, setCartModalIsOpen] = React.useState(false);
  const [wishlistModalIsOpen, setWishlistModalIsOpen] = React.useState(false);

  const {products, setDisplayedProducts} = React.useContext(ProductContext);

  function openCartModalHandler() {
    setCartModalIsOpen(true);
  }

  function openWishlistModalHandler() {
    setWishlistModalIsOpen(true);
  }


  function searchHandler(e) {
    let searchTerm = e.target.value.toLowerCase();
    setDisplayedProducts(products.filter((product) => {
      if (product.name.toLowerCase().includes(searchTerm) || product.desc.toLowerCase().includes(searchTerm)) {
        return true;
      }
      return false;
    }));
  }

    const setExpandedHandler = () => {
        setExpanded(!expanded)
    }

  return (
    <div className='mobile-nav-container'>
        <nav className='mobile-navbar'>
        <div className='navbar-logo-container'>
          <h1>Myntra</h1>
        </div>
        <div className='mobile-nav-burger'>
            <GiHamburgerMenu className='burger-icon' onClick={setExpandedHandler} />
        </div>
        </nav>

    <CartModal cartItems={cartItems} isOpen={cartModalIsOpen} setIsOpen={setCartModalIsOpen}/>
    <WishlistModal wishlistItems={wishlistItems} isOpen={wishlistModalIsOpen} setIsOpen={setWishlistModalIsOpen} />
        {
            expanded ? (
<div className='mobile-navbar-links-container'>
            <div className='mobile-navbar-product-search'>
                <MdSearch className='mobile-navbar-search-icon' />
                <input type="text" placeholder='Search for products, brands and more' onChange={searchHandler} />
            </div>
            <div className='mobile-navbar-link'>
                <h4>User</h4>
            </div>

            <div className='mobile-navbar-link' onClick={openWishlistModalHandler}>
                <h4>Wishlist</h4>
                <span className='mobile-navbar-bag-item-count'>{wishlistItems?.length || 0}</span>
            </div>

            <div className='mobile-navbar-link' onClick={openCartModalHandler}>
                <h4>Bag</h4>
                <span className='mobile-navbar-bag-item-count'>{cartItems?.length || 0}</span>
            </div>
        </div>
            ) : (null)
        }
        
    </div>
  )
}

export default MobileNavbar