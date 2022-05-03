import React from 'react'
import Modal from 'react-modal';
import './WishlistModal.css';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import WishlistItemCard from '../WishlistItemCard/WishlistItemCard';


function WishlistModal({wishlistItems, isOpen, setIsOpen}) {

    function closeModal() {
        setIsOpen(false);
    }


  return (
    <Modal
        className='cart-modal'
        isOpen={isOpen}
        style={{
            overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }
        }}
    >
        <div className='cart-modal-close-container' onClick={closeModal}>
            <AiOutlineCloseCircle className='cart-modal-close-icon' />
        </div>
        <div className='cart-modal-items-container'>
        {
            (window.localStorage.getItem('wishlist')) ? (
                JSON.parse(window.localStorage.getItem('wishlist')).map((item, idx) => (
                    <WishlistItemCard key={idx} product={item} />
                ))
            ) : (
                wishlistItems?.map((item, idx) => (
                    <WishlistItemCard key={idx} product={item} />
                ))
            )
        }
        </div>
    </Modal>
  )
}

export default WishlistModal