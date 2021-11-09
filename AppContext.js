import useHandleCart from 'hooks/useHandleCart'
import { createContext } from 'react'

export const AppContext = createContext({})

export default function AppProvider({ children }) {
  const [cart, addToCart, updateProductUnit] = useHandleCart()

  return (
    <AppContext.Provider value={{ cart, addToCart, updateProductUnit }}>
      {children}
    </AppContext.Provider>
  )
}
