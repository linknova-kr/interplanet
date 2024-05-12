import { render } from '@redwoodjs/testing/web'

import PinnedPosts from './PinnedPosts'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PinnedPosts', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PinnedPosts />)
    }).not.toThrow()
  })
})
