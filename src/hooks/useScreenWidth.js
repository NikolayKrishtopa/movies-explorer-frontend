import { useEffect, useRef } from 'react'
import {
  INITIAL_MOVIES_QTY,
  ITEMS_PER_ROW,
  SCREEN_WIDTH,
} from '../utils/constants'

export default function useScreenWidth(page, moviesState) {
  const layoutPagePerWidth = (width) => {
    if (width < SCREEN_WIDTH.TABLET) {
      moviesState.setInitialItemsQty(INITIAL_MOVIES_QTY.MOBILE)
      moviesState.setItemsPerPage(ITEMS_PER_ROW.MOBILE)
    } else if ((width > SCREEN_WIDTH.TABLET) & (width < SCREEN_WIDTH.DESKTOP)) {
      moviesState.setInitialItemsQty(INITIAL_MOVIES_QTY.TABLET)
      moviesState.setItemsPerPage(ITEMS_PER_ROW.TABLET)
    } else if (width > 800) {
      moviesState.setInitialItemsQty(INITIAL_MOVIES_QTY.MOBILE)
      moviesState.setItemsPerPage(ITEMS_PER_ROW.DESKTOP)
    }
  }

  const observer = useRef(
    new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect
      layoutPagePerWidth(width)
      // console.log(width)
    })
  )

  useEffect(() => {
    observer.current.observe(page.current)
  }, [page, observer])
}
