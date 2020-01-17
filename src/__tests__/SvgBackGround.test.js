import React from 'react'
import { shallow, mount } from 'enzyme'
import SvgBackGround from '../components/molecules/SvgBackGround'
import blackArrow from '../images/black-pen-arrow.svg'

function createTestProps(props) {
  return {
    backgroundImg: blackArrow
  }
}

describe('Renders ArrowBackground correctly', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = createTestProps()
    wrapper = shallow(<SvgBackGround backgroundImg={props.backgroundImg} />)
  })

  it('Renders 14 svg images on the background', () => {
    const value = wrapper.find('img').length
    expect(value).toEqual(14)
  })

  it('It should pass an image as prop', () => {
    const value = wrapper
      .find('img')
      .first()
      .props()

    expect(value.src).toEqual(blackArrow)
  })

  it('Renders svg images with props for screen position', () => {
    const value = wrapper
      .find('img')
      .first()
      .props().style
    expect(value).toEqual({ left: '2%', top: '6%' })
  })
})
