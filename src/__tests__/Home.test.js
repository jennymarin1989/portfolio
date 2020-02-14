import React from 'react'
import { render } from '@testing-library/react'
import Home from '../containers/Home'
import SvgBackGround from '../components/molecules/SvgBackGround'
import Header from '../components/atoms/Header'

describe('Home', () => {
  it('renders the heading', () => {
    const { getByTestId } = render(<Home />)
    expect(getByTestId('heading').textContent).toBe('Welcome to my Portfolio ;)')
  })

  it('renders the background', () => {
    const { getByTestId } = render(<Home />)
    const background = getByTestId('background')
    expect(background.children.length).toBe(14)
  })
})
