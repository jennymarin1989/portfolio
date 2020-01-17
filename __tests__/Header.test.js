import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../components/atoms/Header'


function createTestProps(props) {
  return {
    tag: 'h1',
    className: 'header',
    text: 'Welcome to my portfolio'
  }
}


describe('Renders header props correctly', () => {

  let wrapper;
  let props;

  beforeEach(() => {
    props = createTestProps()
    wrapper = shallow(<Header tag={props.tag} text={props.text} className="header" />);
  })

  it('Renders the tag prop correctly', () => {
    const value = wrapper.find('h1').length
    expect(value).toEqual(1)
  })

  it('Renders the class prop correctly', () => {
    const value = wrapper.find('.header').length
    expect(value).toEqual(1)
  })
})