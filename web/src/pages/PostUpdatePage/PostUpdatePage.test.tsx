import { render } from '@redwoodjs/testing/web'

import PostUpdatePage from './PostUpdatePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PostUpdatePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PostUpdatePage />)
    }).not.toThrow()
  })
})
