import React from 'react'
import {MdFavoriteBorder, MdSearch, MdOutlineShoppingBag, MdOutlinePersonOutline} from 'react-icons/md'
import { CartContext } from '../../contexts/cartContext';
import { ProductContext } from '../../contexts/productContext';
import { WishListContext } from '../../contexts/wishListContext';
import CartModal from '../CartModal/CartModal';
import WishlistModal from '../WishlistModal/WishlistModal'
import './Navbar.css'

function Navbar() {


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

  return (
    <nav className='navbar'>
        <div className='navbar-logo-container'>
          <h1>Myntra</h1>
        </div>

    <CartModal cartItems={cartItems} isOpen={cartModalIsOpen} setIsOpen={setCartModalIsOpen}/>
    <WishlistModal wishlistItems={wishlistItems} isOpen={wishlistModalIsOpen} setIsOpen={setWishlistModalIsOpen} />

        <div className='navbar-links-container'>
        <div className='navbar-product-search'>
            <MdSearch className='navbar-search-icon' />
            <input type="text" placeholder='Search for products, brands and more' onChange={searchHandler} />
        </div>
            <a href="/" className='navbar-link'><MdOutlinePersonOutline className='navbar-user-icon' />User</a>

            <div className='navbar-link' onClick={openWishlistModalHandler}>
              <MdFavoriteBorder className='navbar-bag-icon' />
              <h4>Wishlist</h4>
              <span className='navbar-bag-item-count'>{wishlistItems?.length || 0}</span>
            </div>

            <div className='navbar-link' onClick={openCartModalHandler}>
              <MdOutlineShoppingBag className='navbar-bag-icon' />
              <h4>Bag</h4>
              <span className='navbar-bag-item-count'>{cartItems?.length || 0}</span>
            </div>

        </div>
    </nav>
  )
}

export default Navbar