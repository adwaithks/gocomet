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
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
        }
    }}
>
    <div className='cart-modal-close-container' onClick={closeModal}>
        <AiOutlineCloseCircle className='image-zoom-modal-close-icon' />
    </div>
    <Carousel
    className='image-zoom-carousel'
    selectedItem={clickedImage}
    onClick={closeModal}
    >
        {
            images.map((image, idx) => (
                <img  className='image-zoom' key={idx} src={image} alt="" />
            ))
        }
    </Carousel>

    </Modal>
  )
}

export default ImageZoom