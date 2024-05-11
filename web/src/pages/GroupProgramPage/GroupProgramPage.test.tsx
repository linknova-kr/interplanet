import { render } from '@redwoodjs/testing/web'

import GroupProgramPage from './GroupProgramPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GroupProgramPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupProgramPage />)
    }).not.toThrow()
  })
})
