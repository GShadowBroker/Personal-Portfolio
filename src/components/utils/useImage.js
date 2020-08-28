import { useState } from "react"

const useImage = imageCount => {
  const [value, setValue] = useState({ index: 1, total: imageCount })

  const nextImage = () => {
    if (value.index < value.total) {
      setValue({ index: value.index + 1, total: imageCount })
      return
    }
    setValue({ index: 1, total: imageCount })
  }

  const prevImage = () => {
    if (value.index - 1 > 1) {
      setValue({ index: value.index - 1, total: imageCount })
      return
    } else if (imageCount === 2 && value.index === imageCount) {
      setValue({ index: 1, total: imageCount })
      return
    }
    setValue({ index: imageCount, total: imageCount })
  }

  const jumpToImage = index => {
    if (index > imageCount || index < 1) return
    setValue({ index, total: imageCount })
  }

  return {
    value,
    nextImage,
    prevImage,
    jumpToImage,
  }
}

export default useImage
