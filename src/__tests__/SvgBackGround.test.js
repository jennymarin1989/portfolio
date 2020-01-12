import React from 'react';
import { shallow, mount } from 'enzyme';
import SvgBackGround from '../components/molecules/SvgBackGround'


function createTestProps(props) {
  return {
    style: { top: '6%', left: '2%' }
  }
}

describe('Renders ArrowBackground correctly', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = createTestProps()
    wrapper = shallow(<SvgBackGround style={props.style} />);
  })

  it('Renders 3 svg images on the background', () => {
    const value = wrapper.find('img').length
    expect(value).toEqual(3)
  })
})