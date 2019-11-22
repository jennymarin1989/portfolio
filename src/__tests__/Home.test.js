import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Home from '../containers/Home';
import Header from '../../src/components/atoms/Header'


describe('Renders home page correctly', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  describe('Header component ', () => {
    it('renders the Header component correctly', () => {
      const wrapper = mount(<Header tag="h1" />)
      const value = wrapper.find('h1').text()
      expect(value).toEqual('My Portfolio!')
    });
  })

})





