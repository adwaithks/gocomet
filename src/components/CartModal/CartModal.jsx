import React from 'react'
import Modal from 'react-modal';
import CartItemCard from '../CartItemCard/CartItemCard';
import './CartModal.css';
import {AiOutlineCloseCircle} from 'react-icons/ai'


function CartModal({cartItems, isOpen, setIsOpen}) {


    function closeModal() {
        setIsOpen(false);
    }

  return (
    <Modal
        className='cart-modal'
        isOpen={isOpen}
        style={{
            zIndex: 100,
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
            window.localStorage.getItem('cart') ? (
                JSON.parse(window.localStorage.getItem('cart'))?.map((item, idx) => (
                    <CartItemCard key={idx} product={item} />
                ))
            ) : (
                cartItems?.map((item, idx) => (
                    <CartItemCard key={idx} product={item} />
                ))
            )
        }
        </div>
    </Modal>
  )
}

export default CartModal