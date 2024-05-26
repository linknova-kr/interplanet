import { render } from '@redwoodjs/testing/web'

import SpotEventCreatePage from './SpotEventCreatePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SpotEventCreatePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SpotEventCreatePage />)
    }).not.toThrow()
  })
})
