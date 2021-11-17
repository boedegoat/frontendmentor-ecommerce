// embla-carousel-react examples :
// https://codesandbox.io/s/embla-carousel-loop-react-brro5?file=/src/css/embla.css:0-1392

import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState } from 'react'

export default function useSlider(options = undefined, plugins = undefined) {
  const [viewportRef, slider] = useEmblaCarousel(options, plugins)
  const [imageIndex, setImageIndex] = useState(0)

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  function onSelect() {
    if (!slider) return
    setImageIndex(slider.selectedScrollSnap())
    setPrevBtnEnabled(slider.canScrollPrev())
    setNextBtnEnabled(slider.canScrollNext())
  }

  useEffect(() => {
    if (!slider) return
    slider.on('select', onSelect)
    onSelect()
  }, [slider, onSelect])
  
  useEffect(() => {
    if (!slider) return
    slider.scrollTo(imageIndex)
  }, [imageIndex])

  return [viewportRef, slider, { prevBtnEnabled, nextBtnEnabled, imageIndex, setImageIndex }]
}
