import React, { Fragment } from 'react'
import Home from '../Home'
import AboutMe from '../AboutMe'

const SectionContainer = () => {
  return (
    <Fragment>
      <section id="home">
        <Home />
      </section>
      <section id="about-me">
        <AboutMe />
      </section>
    </Fragment>
  )
}

export default SectionContainer
