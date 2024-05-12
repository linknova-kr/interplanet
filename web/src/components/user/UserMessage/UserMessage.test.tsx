import { render } from '@redwoodjs/testing/web'

import UserMessage from './UserMessage'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserMessage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserMessage />)
    }).not.toThrow()
  })
})
