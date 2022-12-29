import { useEffect, useRef } from 'react'

export default function useScreenWidth(page, moviesState) {
  const layoutPagePerWidth = (width) => {
    if (width < 480) {
      moviesState.setInitialItemsQty(5)
      moviesState.setItemsPerPage(1)
    } else if ((width > 480) & (width < 800)) {
      moviesState.setInitialItemsQty(8)
      moviesState.setItemsPerPage(2)
    } else if (width > 800) {
      moviesState.setInitialItemsQty(12)
      moviesState.setItemsPerPage(3)
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
