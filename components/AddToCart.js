import useAppContext from 'hooks/useAppContext'
import product from 'data/product'
import useHandleUnit from 'hooks/useHandleUnit'
import { CartIcon, MinusIcon, PlusIcon } from './Icons'

export default function AddToCart() {
  const { addToCart } = useAppContext()
  const [unit, minUnit, addUnit] = useHandleUnit(0)

  return (
    <div className='wrapper pt-2 pb-24 md:flex md:items-center md:py-0 md:space-x-2'>
      <div className='flex justify-between items-center h-[56px] md:min-w-[150px] bg-app-blue-100 rounded-md'>
        <button aria-label='Minus 1 unit' className='h-full px-5' onClick={minUnit}>
          <MinusIcon />
        </button>
        <span className='flex-grow text-center font-bold'>{unit}</span>
        <button aria-label='Add 1 unit' className='h-full px-5' onClick={addUnit}>
          <PlusIcon />
        </button>
      </div>
      <button
        className='add-to-cart-button'
        aria-label='Add to cart'
        onClick={() => addToCart(product, unit)}
      >
        <CartIcon className='mr-2 scale-75' /> Add to cart
      </button>
    </div>
  )
}
