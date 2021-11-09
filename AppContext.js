import useHandleCart from 'hooks/useHandleCart'
import { createContext } from 'react'

export const AppContext = createContext({})

export default function AppProvider({ children }) {
  return (
    <AppContext.Provider value={{ ...useHandleCart() }}>{children}</AppContext.Provider>
  )
}
