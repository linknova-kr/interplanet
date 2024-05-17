import { render } from '@redwoodjs/testing/web'

import CommentDeleteButton from './CommentDeleteButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CommentDeleteButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommentDeleteButton />)
    }).not.toThrow()
  })
})
