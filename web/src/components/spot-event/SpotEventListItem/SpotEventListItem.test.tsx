import { render } from '@redwoodjs/testing/web'

import SpotEventListItem from './SpotEventListItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SpotEventListItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SpotEventListItem />)
    }).not.toThrow()
  })
})
