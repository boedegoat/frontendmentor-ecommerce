import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'

export default function useAutoplay(options) {
  const autoplay = useRef(Autoplay(options, (emblaRoot) => emblaRoot.parentElement))
  return autoplay.current
}
