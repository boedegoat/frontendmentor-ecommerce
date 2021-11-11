import Image from 'next/image'
import product from 'data/product'
import useSlider from 'hooks/useSlider'
import useAutoplay from 'hooks/useAutoplay'
import { NextIcon, PrevIcon } from './Icons'
import { useState } from 'react'
import useToggle from 'hooks/useToggle'

export default function Slider() {
  const [imageIndex, setImageIndex] = useState(0)
  const [lightbox, toggleLightbox] = useToggle()

  // enable slider autoplay
  const autoplay = useAutoplay({
    delay: 6000,
    stopOnInteraction: true,
  })

  // prettier-ignore
  const [viewportRef, scroll] = useSlider({ 
    loop: true, 
    skipSnaps: false 
  }, [autoplay])

  return (
    <>
      <div className='hidden md:block md:mr-20'>
        <img
          src={product.images[imageIndex].display}
          className='rounded-lg cursor-pointer'
          aria-label='Open image'
          onClick={toggleLightbox}
        />
        <div className='flex justify-between mt-8'>
          {product.images.map((image, index) => (
            <button
              onClick={() => setImageIndex(index)}
              key={index}
              aria-label={`change to product image ${index + 1}`}
              className={`center-child rounded-md overflow-hidden ${
                imageIndex === index ? 'ring-2 ring-app-orange' : ''
              }`}
            >
              <Image
                src={image.display}
                width={90}
                height={90}
                objectFit='cover'
                className={`${imageIndex === index ? 'opacity-40' : ''}`}
              />
            </button>
          ))}
        </div>
      </div>
      <ImageSlider
        open={lightbox}
        toggleLightbox={toggleLightbox}
        viewportRef={viewportRef}
        scroll={scroll}
      />
    </>
  )
}

function ImageSlider(props) {
  console.log(props)

  return (
    <div
      className={`${
        !props.open
          ? 'md:opacity-0 md:pointer-events-none md:z-[-1]'
          : 'md:opacity-100 md:pointer-events-auto md:z-40'
      } relative md:fixed md:inset-0 md:center-child`}
    >
      <div className='lightbox-bg' onClick={props.toggleLightbox} />
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
          onClick={() => props.scroll('prev')}
        >
          <PrevIcon />
        </button>
        <button
          aria-label='Next image'
          className='slider__button next'
          onClick={() => props.scroll('next')}
        >
          <NextIcon />
        </button>
      </div>
    </div>
  )
}
