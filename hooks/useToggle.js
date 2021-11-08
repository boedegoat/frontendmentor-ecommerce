import { useState } from 'react'

export default function useToggle(initValue = false) {
  const [value, setValue] = useState(initValue)

  function toggleValue(newValue) {
    setValue((currentValue) => (typeof newValue === 'boolean' ? newValue : !currentValue))
  }

  return [value, toggleValue]
}
