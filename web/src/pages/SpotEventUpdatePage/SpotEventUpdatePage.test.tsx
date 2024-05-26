import { render } from '@redwoodjs/testing/web'

import SpotEventUpdatePage from './SpotEventUpdatePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SpotEventUpdatePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SpotEventUpdatePage />)
    }).not.toThrow()
  })
})
