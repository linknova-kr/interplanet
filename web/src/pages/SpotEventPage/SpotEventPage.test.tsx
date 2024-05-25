import { render } from '@redwoodjs/testing/web'

import SpotEventPage from './SpotEventPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SpotEventPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SpotEventPage />)
    }).not.toThrow()
  })
})
