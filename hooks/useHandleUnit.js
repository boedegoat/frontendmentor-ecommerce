import { useState } from 'react'

export default function useHandleUnit(init) {
  const [unit, setUnit] = useState(init)

  function addUnit() {
    setUnit((u) => u + 1)
  }

  function minUnit() {
    if (unit <= 0) return
    setUnit((u) => u - 1)
  }

  return [unit, minUnit, addUnit]
}
