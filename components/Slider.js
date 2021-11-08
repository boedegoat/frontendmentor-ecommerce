import Image from 'next/image'
import product from 'data/product'
import useSlider from 'hooks/useSlider'
import useAutoplay from 'hooks/useAutoplay'
import { NextIcon, PrevIcon } from './Icons'

export default function Slider() {
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
