import { render } from '@redwoodjs/testing/web'

import SpotEventListItemButtons from './SpotEventListItemButtons'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SpotEventListItemButtons', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SpotEventListItemButtons />)
    }).not.toThrow()
  })
})
