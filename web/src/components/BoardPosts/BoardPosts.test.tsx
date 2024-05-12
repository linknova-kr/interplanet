import { render } from '@redwoodjs/testing/web'

import BoardPosts from './BoardPosts'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BoardPosts', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BoardPosts />)
    }).not.toThrow()
  })
})
