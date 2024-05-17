import { render } from '@redwoodjs/testing/web'

import CommentCreate from './CommentCreate'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CommentCreate', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommentCreate />)
    }).not.toThrow()
  })
})
