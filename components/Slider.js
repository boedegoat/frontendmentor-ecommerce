import Image from 'next/image'
import productImages from 'data/productImages'
import useSlider from 'hooks/useSlider'

export default function Slider() {
  const [viewportRef, scroll] = useSlider({
    loop: true,
    skipSnaps: false,
  })

  return (
    <div className='slider'>
      <div className='slider__viewport' ref={viewportRef}>
        <div className='slider__container'>
          {productImages.map((productImage, index) => (
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
        <Image src='/images/icon-previous.svg' width={13} height={18} alt='Prev icon' />
      </button>
      <button
        aria-label='Next image'
        className='slider__button next'
        onClick={() => scroll('next')}
      >
        <Image src='/images/icon-next.svg' width={13} height={18} alt='Next icon' />
      </button>
    </div>
  )
}
