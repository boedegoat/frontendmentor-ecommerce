import Image from 'next/image'
import product from 'data/product'
import useSlider from 'hooks/useSlider'
import { NextIcon, PrevIcon } from './Icons'

import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'

export default function Slider() {
  const autoplay = useRef(
    Autoplay(
      {
        delay: 6000,
        stopOnInteraction: true,
      },
      (emblaRoot) => emblaRoot.parentElement
    )
  )

  const [viewportRef, scroll] = useSlider(
    {
      loop: true,
      skipSnaps: false,
    },
    [autoplay.current]
  )

  return (
    <div className='slider'>
      <div className='slider__viewport' ref={viewportRef}>
        <div className='slider__container'>
          {product.images.map((productImage, index) => (
            <div className='slider__slide' key={index}>
              <Image
                width={375}
                height={375}
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
        onClick={() => scroll('prev')}
      >
        <PrevIcon />
      </button>
      <button
        aria-label='Next image'
        className='slider__button next'
        onClick={() => scroll('next')}
      >
        <NextIcon />
      </button>
    </div>
  )
}
