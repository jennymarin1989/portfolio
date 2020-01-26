import { useEffect } from 'react'
import { useModifyArrows } from '../hooks/useModifyArrows'
import { act, renderHook } from '@testing-library/react-hooks'
import blackArrow from '../images/black-pen-arrow.svg'

jest.useFakeTimers()

describe('modifyArrows', () => {
  it('It calls the newArrows', () => {
    const { result, image } = renderHook(useModifyArrows)

    act(() => {
      result.current.newArrows()
    })

    expect(result.current.image).toBe(blackArrow)
  })

  it('The modifyArrows should not haven called yet ', () => {
    // At this point in time, the callback should not have been called yet

    global.setInterval = jest.fn()
    expect(global.setInterval).toHaveBeenCalledTimes(0)
  })

  it('The modifyArrows should haven called once every 3 seconds ', () => {
    const { result } = renderHook(useModifyArrows)
    global.setInterval = jest.fn()

    act(() => {
      result.current.newArrows()
    })

    // Now our callback should have been called!
    expect(global.setInterval).toHaveBeenCalledTimes(1)

    jest.clearAllTimers()
    expect(result.current.image).toBe(blackArrow)
  })
})
