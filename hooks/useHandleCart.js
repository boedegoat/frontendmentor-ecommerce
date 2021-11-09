import { useState } from 'react'

export default function useHandleCart() {
  const [cart, setCart] = useState([])

  console.log(cart)

  function findProductInCart(product) {
    const productInCart = cart.find(({ name }) => name === product.name)
    return [productInCart, cart.indexOf(productInCart)]
  }

  function addToCart(newProduct, unit) {
    if (unit <= 0) return alert('please specify product unit')

    const [productAlreadyInCart] = findProductInCart(newProduct)
    if (productAlreadyInCart) return alert('product already in cart')

    const price = newProduct.price.afterDiscount ?? newProduct.price.normal
    const total = price * unit

    const formatedNewProduct = {
      name: newProduct.name,
      image: newProduct.images[0].thumbnail,
      price,
      unit,
      total,
    }

    setCart((currentProduct) => [...currentProduct, formatedNewProduct])
    alert('product has been added to your cart')
  }

  function updateProductUnit(product, unit) {
    const [updateProduct, index] = findProductInCart(product)

    // if product is not in cart, return
    if (!updateProduct) return

    // if product in cart but unit is 0, delete it
    if (updateProduct && unit <= 0) {
      return setCart((currentProduct) => [
        ...currentProduct.slice(0, index),
        ...currentProduct.slice(index + 1),
      ])
    }

    // if unit is not 0, update product unit
    setCart((currentProduct) => [
      ...currentProduct.slice(0, index),
      { ...updateProduct, unit },
      ...currentProduct.slice(index + 1),
    ])
  }

  return [cart, addToCart, updateProductUnit]
}
