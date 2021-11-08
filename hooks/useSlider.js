// embla-carousel-react examples :
// https://codesandbox.io/s/embla-carousel-loop-react-brro5?file=/src/css/embla.css:0-1392

import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState } from 'react'

export default function useSlider(options = undefined, plugins = undefined) {
  const [viewportRef, slider] = useEmblaCarousel(options, plugins)

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  function scroll(direction) {
    if (!slider) return
    if (direction === 'prev') slider.scrollPrev()
    if (direction === 'next') slider.scrollNext()
  }

  function onSelect() {
    if (!slider) return
    setPrevBtnEnabled(slider.canScrollPrev())
    setNextBtnEnabled(slider.canScrollNext())
  }

  useEffect(() => {
    if (!slider) return
    slider.on('select', onSelect)
    onSelect()
  }, [slider, onSelect])

  return [viewportRef, scroll, { slider, prevBtnEnabled, nextBtnEnabled }]
}
