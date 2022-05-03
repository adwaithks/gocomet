import React from 'react'
import ImageZoom from '../ImageZoom/ImageZoom'
import './ImageShowcase.css'

function ImageShowcase({images}) {

  const [isOpen, setIsOpen] = React.useState(false);
  const [clickedImage, setClickedImage] = React.useState(0);

  function openImageZoomHandler(e) {
    setClickedImage(e.target.getAttribute('data'))
    setIsOpen(true);
  }

  return (
    <div className='image-showcase'>
      <ImageZoom images={images} clickedImage={clickedImage} isOpen={isOpen} setIsOpen={setIsOpen} />
        {
            images.map((image, idx) => (
                <div onClick={openImageZoomHandler} key={idx} className='image-showcase-container'>
                    <img data={idx} className='image-showcase-indi-img' src={image} alt="" />
                </div>
            ))
        }
    </div>
  )
}

export default ImageShowcase