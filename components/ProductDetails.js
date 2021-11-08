import product from 'data/product'

export default function ProductDetails() {
  return (
    <div className='wrapper my-4'>
      <p className='uppercase tracking-wider text-app-orange font-bold text-xs'>
        {product.company}
      </p>
      <h2 className='font-bold text-3xl mt-2'>{product.name}</h2>
      <p className='text-app-blue-300 mt-4'>{product.description}</p>
    </div>
  )
}
