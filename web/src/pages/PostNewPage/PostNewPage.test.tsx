import { render } from '@redwoodjs/testing/web'

import PostNewPage from './PostNewPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PostNewPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PostNewPage />)
    }).not.toThrow()
  })
})
