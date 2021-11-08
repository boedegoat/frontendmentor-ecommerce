import { createContext, useState } from 'react'

export const AppContext = createContext({})

export default function AppProvider({ children }) {
  const [cart, setCart] = useState([])

  function addToCart(product, unit) {
    if (unit === 0) return
    const productAlreadyInCart = cart.find(({ name }) => name === product.name)

    if (productAlreadyInCart) {
      const index = cart.indexOf(productAlreadyInCart)
      return setCart((currentCart) => [
        ...currentCart.slice(0, index),
        {
          ...productAlreadyInCart,
          unit,
        },
        ...currentCart.slice(index + 1),
      ])
    }

    const newProduct = {
      name: product.name,
      price: product.price.afterDiscount ?? product.price.normal,
      unit,
    }

    setCart((currentCart) => [...currentCart, newProduct])
  }

  return <AppContext.Provider value={{ cart, addToCart }}>{children}</AppContext.Provider>
}
