import React from 'react'
import { shallow, mount } from 'enzyme'
import SvgBackGround from '../components/molecules/SvgBackGround'
import blackArrow from '../images/black-pen-arrow.svg'

function createTestProps(props) {
  return {
    image: blackArrow,
    style: { left: '18%', top: '20%' }
  }
}

describe('Renders ArrowBackground correctly', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = createTestProps()
    wrapper = shallow(<SvgBackGround />)
  })

  it('Renders 14 svg images on the background', () => {
    const value = wrapper.find('img').length
    expect(value).toEqual(14)
  })

  it('Renders svg images with props for screen position', () => {
    const value = wrapper.find('img').get(1).props.style
    expect(value).toEqual({ left: '18%', top: '20%' })
  })
})
