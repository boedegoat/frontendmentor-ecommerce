import product from 'data/product'
import { formatPrice } from 'lib/utils'

export default function ProductPrice() {
  return (
    <div className='wrapper flex md:flex-wrap items-center py-2'>
      <h2 className='font-bold text-3xl'>{formatPrice(product.price.afterDiscount)}</h2>
      <span className='font-bold text-app-orange bg-app-pale-orange rounded-md text-sm px-2 py-1 ml-2'>
        {product.discount}
      </span>
      <p className='ml-auto font-bold text-app-blue-200 line-through md:w-full md:mt-2'>
        {formatPrice(product.price.normal)}
      </p>
    </div>
  )
}
