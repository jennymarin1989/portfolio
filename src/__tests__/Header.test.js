import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Header from '../components/atoms/Header'


describe('Renders header component correctly', () => {

  it('Renders the tag prop correctly', () => {
    const wrapper = mount(<Header tag="h1" />)
    expect(wrapper.props().tag).toEqual("h1")
  })

})