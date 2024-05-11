import { render } from '@redwoodjs/testing/web'

import ActionLayout from './ActionLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ActionLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ActionLayout />)
    }).not.toThrow()
  })
})
