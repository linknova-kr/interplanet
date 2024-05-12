import { render } from '@redwoodjs/testing/web'

import BoardsPage from './BoardsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BoardsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BoardsPage />)
    }).not.toThrow()
  })
})
