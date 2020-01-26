import React, { useState, useEffect } from 'react'
import blackArrow from '../../images/black-pen-arrow.svg'
import greenArrow from '../../images/green-pen-arrow.svg'
import purpleArrow from '../../images/purple-pen-arrow.svg'

export const useModifyArrows = () => {
  const [count, setCount] = useState(0)
  const [image, setImage] = useState(blackArrow)
  let imageArray = [blackArrow, greenArrow, purpleArrow]

  const newArrows = () => {
    setCount(count + 1)
    let newCount = count % imageArray.length
    setImage(imageArray[newCount])
  }

  useEffect(async => {
    let timer = null
    timer = setInterval(() => newArrows(), 3000)

    return function cleanUp() {
      clearInterval(timer)
    }
  })

  return { image, newArrows }
}
