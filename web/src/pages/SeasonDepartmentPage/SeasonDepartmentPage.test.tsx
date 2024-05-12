import { render } from '@redwoodjs/testing/web'

import SeasonDepartmentPage from './SeasonDepartmentPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SeasonDepartmentPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SeasonDepartmentPage />)
    }).not.toThrow()
  })
})
