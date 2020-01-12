import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import Home from '../src/containers/Home';
import AboutMe from '../src/containers/AboutMe';

describe('Renders home page correctly', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the homepage component correctly', () => {
    const homepage = shallow(<Home />)
    expect(homepage).toBeTruthy()
  });

  it('renders the homepage component correctly', () => {
    const aboutMePage = shallow(<AboutMe />)
    expect(aboutMePage).toBeTruthy()
  });

})



