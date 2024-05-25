import { render } from '@redwoodjs/testing/web'

import SpotEventPageButton from './SpotEventPageButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SpotEventPageButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SpotEventPageButton />)
    }).not.toThrow()
  })
})
