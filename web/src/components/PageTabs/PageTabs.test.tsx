import { render } from '@redwoodjs/testing/web'

import PageTabs from './PageTabs'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PageTabs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PageTabs />)
    }).not.toThrow()
  })
})
