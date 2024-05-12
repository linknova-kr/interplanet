import { render } from '@redwoodjs/testing/web'

import PostListItem from './PostListItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PostListItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PostListItem />)
    }).not.toThrow()
  })
})
