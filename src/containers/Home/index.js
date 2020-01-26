import React, { useEffect } from 'react'
import Header from '../../components/atoms/Header'
import SvgBackGround from '../../components/molecules/SvgBackGround'
import blackArrow from '../../images/black-pen-arrow.svg'
import { useModifyArrows } from '../../hooks/useModifyArrows'
import '../../lib/mouseMove'
import './index.scss'

const Home = ({ tag, className, text }) => {
  const { image } = useModifyArrows()

  return (
    <div>
      <div>
        <SvgBackGround backgroundImg={image} />
      </div>
      <div className="homepage">
        <Header tag="h1" className="homepage__header" text="Welcome to my Portfolio ;)" />
      </div>
    </div>
  )
}

export default Home
