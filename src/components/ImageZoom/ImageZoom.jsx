import React from 'react'
import Modal from 'react-modal'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import './ImageZoom.css'
import {Carousel} from 'react-responsive-carousel'

function ImageZoom({images, clickedImage, isOpen, setIsOpen}) {

    function closeModal() {
        setIsOpen(false);
    }

  return (
    <Modal
    className='image-zoom-modal'
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
    <Carousel
    className='image-zoom-carousel'
    selectedItem={clickedImage}
    >
        {
            images.map((image, idx) => (
                <img className='image-zoom' key={idx} src={image} alt="" />
            ))
        }
    </Carousel>

    </Modal>
  )
}

export default ImageZoom