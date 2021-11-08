import { useState } from 'react'
import { CartIcon, MinusIcon, PlusIcon } from './Icons'

export default function AddToCart() {
  const [unit, setUnit] = useState(0)

  function addUnit() {
    setUnit((u) => u + 1)
  }

  function minUnit() {
    if (unit <= 0) return
    setUnit((u) => u - 1)
  }

  return (
    <div className='wrapper pt-2 pb-24'>
      <div className='flex justify-between items-center h-[56px] bg-app-blue-100 rounded-md'>
        <button aria-label='Minus 1 unit' className='h-full px-5' onClick={minUnit}>
          <MinusIcon />
        </button>
        <span className='flex-grow text-center font-bold'>{unit}</span>
        <button aria-label='Add 1 unit' className='h-full px-5' onClick={addUnit}>
          <PlusIcon />
        </button>
      </div>
      <button className='add-to-cart-button' aria-label='Add to cart'>
        <CartIcon className='mr-2 scale-75' /> Add to cart
      </button>
    </div>
  )
}
