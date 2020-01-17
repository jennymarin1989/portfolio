import React, { useEffect } from 'react'
import Header from '../../components/atoms/Header'
import SvgBackGround from '../../components/molecules/SvgBackGround'
import blackArrow from '../../images/black-pen-arrow.svg'
import greenArrow from '../../images/green-pen-arrow.svg'
import purpleArrow from '../../images/purple-pen-arrow.svg'

import '../../lib/mouseMove'
import './index.scss'

let timer = null

const Home = ({ tag, className, text }) => {
  let imageArray = [blackArrow, greenArrow, purpleArrow]
  let count = 0

  const changeColor = () => {
    count = count + 1
    count = count % imageArray.length
    let image = imageArray[count]

    let images = document.querySelectorAll('img')

    Array.from(images).map(img => {
      return img.setAttribute('src', image)
    })
  }

  useEffect(() => {
    timer = setInterval(() => changeColor(), 3000)
    return function cleanUp() {
      clearInterval(timer)
    }
  })

  return (
    <div>
      <div>
        <SvgBackGround backgroundImg={blackArrow} />
      </div>
      <div className="homepage">
        <Header tag="h1" className="homepage__header" text="Welcome to my Portfolio ;)" />
      </div>
    </div>
  )
}

export default Home
