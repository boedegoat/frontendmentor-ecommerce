import Image from 'next/image'
import product from 'data/product'
import useSlider from 'hooks/useSlider'
import { NextIcon, PrevIcon, XIcon } from './Icons'
import { useEffect } from 'react'
import useToggle from 'hooks/useToggle'

export default function Slider() {
  const [lightbox, toggleLightbox] = useToggle()

  const [viewportRef, slider, { imageIndex, setImageIndex }] = useSlider({ 
    loop: true, 
    skipSnaps: false
  })

  useEffect(() => {
    if (lightbox) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [lightbox])

  return (
    <>
      <div className='hidden md:block md:mr-20'>
        <img
          src={product.images[imageIndex].display}
          className='rounded-lg cursor-pointer'
          aria-label='Open image'
          onClick={toggleLightbox}
        />
        <PreviewProductImage imageIndex={imageIndex} setImageIndex={setImageIndex} />
      </div>
      <ImageSlider
        open={lightbox}
        toggleLightbox={toggleLightbox}
        viewportRef={viewportRef}
        slider={slider}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
      />
    </>
  )
}

function ImageSlider(props) {
  return (
    <div
      className={`${
        !props.open
          ? 'md:opacity-0 md:pointer-events-none'
          : 'md:opacity-100 md:pointer-events-auto'
      } relative md:z-40 md:fixed md:inset-0 md:center-child
      md:flex md:flex-col`}
    >
      <div className='lightbox-bg' onClick={props.toggleLightbox} />
      <div className='md:z-40 md:flex md:flex-col md:w-2/6'>
        <button
          className='hidden md:block text-app-orange ml-auto mb-4'
          onClick={props.toggleLightbox}
        >
          <XIcon />
        </button>
        <div className='slider'>
          <div className='slider__viewport' ref={props.viewportRef}>
            <div className='slider__container'>
              {product.images.map((productImage, index) => (
                <div className='slider__slide' key={index}>
                  <Image
                    width={375}
                    height={375}
                    layout='responsive'
                    src={productImage.display}
                    alt={productImage.display.replace('/images/', '')}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            aria-label='Prev image'
            className='slider__button prev'
            onClick={() => props.slider.scrollPrev()}
          >
            <PrevIcon />
          </button>
          <button
            aria-label='Next image'
            className='slider__button next'
            onClick={() => props.slider.scrollNext()}
          >
            <NextIcon />
          </button>
        </div>
        <PreviewProductImage
          imageIndex={props.imageIndex}
          setImageIndex={props.setImageIndex}
        />
      </div>
    </div>
  )
}

function PreviewProductImage(props) {
  return (
    <div className='hidden md:flex min-w-[400px] justify-between mt-8'>
      {product.images.map((image, index) => (
        <button
          onClick={() => props.setImageIndex(index)}
          key={index}
          aria-label={`change to product image ${index + 1}`}
          className={`center-child rounded-md overflow-hidden bg-white ${
            props.imageIndex === index ? 'ring-2 ring-app-orange' : ''
          }`}
        >
          <Image
            src={image.display}
            width={90}
            height={90}
            objectFit='cover'
            className={`${props.imageIndex === index ? 'opacity-40' : ''}`}
          />
        </button>
      ))}
    </div>
  )
}
