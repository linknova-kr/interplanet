import { render } from '@redwoodjs/testing/web'

import CommentUpdateButton from './CommentUpdateButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CommentUpdateButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommentUpdateButton />)
    }).not.toThrow()
  })
})
