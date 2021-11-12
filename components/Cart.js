import Image from 'next/image'
import useAppContext from 'hooks/useAppContext'
import { DeleteIcon, XIcon } from './Icons'
import { formatPrice } from 'lib/utils'

export default function Cart({ openCart, toggleOpenCart }) {
  const { cart } = useAppContext()
  console.log(cart)
  const cartNotEmpty = cart.length

  return (
    <div
      className={`absolute top-[5.5rem] md:top-14 left-0 md:-translate-x-1/2 w-full md:min-w-[360px] px-2
      transition-all transform origin-top
      ${
        !openCart
          ? 'opacity-0 -translate-y-2 pointer-events-none'
          : 'opacity-100 translate-y-0 pointer-events-auto'
      }
    `}
    >
      <div className='bg-white divide-y rounded-md shadow-lg md:shadow-xl flex flex-col'>
        <div className='px-5 py-4 flex items-center justify-between'>
          <h3 className='font-bold'>Cart</h3>
          <button onClick={toggleOpenCart}>
            <XIcon />
          </button>
        </div>
        <div
          className={`px-5 py-4 flex-grow flex flex-col ${
            cartNotEmpty ? '' : 'items-center justify-center'
          }`}
        >
          {cartNotEmpty ? (
            <CartProducts />
          ) : (
            <p className='font-bold text-app-blue-300 py-16'>Your cart is empty</p>
          )}
        </div>
      </div>
    </div>
  )
}

function CartProducts() {
  const { cart, deleteProduct } = useAppContext()

  return (
    <>
      {cart.map((product, index) => (
        <div key={index} className='flex'>
          {/* product image */}
          <Image
            src={product.image}
            width={50}
            height={50}
            layout='fixed'
            alt={`${product.name} image`}
            className='rounded-md flex-shrink-0'
          />
          {/* product details (name, price, total price) */}
          <div className='ml-3 w-2/3'>
            <p className='truncate text-app-blue-300'>{product.name}</p>
            <p className='text-app-blue-300'>
              {formatPrice(product.price)} x {product.unit}{' '}
              <b className='text-app-blue-400'>{formatPrice(product.total)}</b>
            </p>
          </div>
          {/* delete button */}
          <button className='ml-auto' onClick={() => deleteProduct(product)}>
            <DeleteIcon />
          </button>
        </div>
      ))}
      <button className='font-bold bg-app-orange text-white py-3 rounded-md mt-5 mb-2'>
        Checkout
      </button>
    </>
  )
}
