import { render } from '@redwoodjs/testing/web'

import GroupProgramCreatePage from './GroupProgramCreatePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GroupProgramCreatePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupProgramCreatePage />)
    }).not.toThrow()
  })
})
