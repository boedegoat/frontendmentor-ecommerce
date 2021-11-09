import { useEffect, useState } from 'react'
import useAppContext from './useAppContext'
import product from 'data/product'

export default function useHandleUnit(init) {
  const { updateProductUnit } = useAppContext()
  const [unit, setUnit] = useState(init)

  useEffect(() => {
    updateProductUnit(product, unit)
  }, [unit])

  function addUnit() {
    setUnit((u) => u + 1)
  }

  function minUnit() {
    if (unit <= 0) return
    setUnit((u) => u - 1)
  }

  return [unit, minUnit, addUnit]
}
