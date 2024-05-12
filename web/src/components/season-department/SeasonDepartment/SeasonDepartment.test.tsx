import { render } from '@redwoodjs/testing/web'

import SeasonDepartment from './SeasonDepartment'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SeasonDepartment', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SeasonDepartment />)
    }).not.toThrow()
  })
})
