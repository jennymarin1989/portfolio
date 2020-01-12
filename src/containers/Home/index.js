import React from 'react'
import Header from '../../components/atoms/Header'
import blackArrow from '../../images/black-pen-arrow.svg'


import '../../lib/mouseMove'
import './index.scss'

const Home = ({ tag, className, text }) => {
  return (
    <div>
      <div className='homepage'>

        <img src={blackArrow} className='homepage__img-arrow' alt=' arrow' style={{ top: '6%', left: '2%' }} />
        <img src={blackArrow} className='homepage__img-arrow' alt=' arrow' style={{ top: '20%', left: '18%' }} />
        <img src={blackArrow} className='homepage__img-arrow' alt=' arrow' style={{ top: '45% ', left: '4%' }} />
        <img src={blackArrow} className='homepage__img-arrow' alt=' arrow' style={{ top: '80%', left: '2%' }} />
        <img src={blackArrow} className='homepage__img-arrow' alt=' arrow' style={{ top: '6%', left: '83%' }} />
        <img src={blackArrow} className='homepage__img-arrow' alt=' arrow' style={{ top: '45%', left: '80%' }} />
        <img src={blackArrow} className='homepage__img-arrow' alt=' arrow' style={{ top: '83%', left: '83%' }} />
        <img src={blackArrow} className='homepage__img-arrow' alt=' arrow' style={{ top: '75%', left: '40%' }} />
        <img src={blackArrow} className='homepage__img-arrow' alt=' arrow' style={{ top: '15%', left: '40%' }} />
        <img src={blackArrow} className='homepage__img-arrow' alt=' arrow' style={{ top: '35%', left: '70%' }} />
        <img src={blackArrow} className='homepage__img-arrow' alt=' arrow' style={{ top: '71%', left: '17%' }} />
        <img src={blackArrow} className='homepage__img-arrow' alt=' arrow' style={{ top: '51%', left: '18%' }} />
        <img src={blackArrow} className='homepage__img-arrow' alt=' arrow' style={{ top: '12%', left: '60%' }} />
        <img src={blackArrow} className='homepage__img-arrow' alt=' arrow' style={{ top: '70%', left: '57%' }} />

        <Header tag='h1' className="homepage__header" text='Welcome to my Portfolio ;)' />
      </div>
    </div >
  )
}

export default Home