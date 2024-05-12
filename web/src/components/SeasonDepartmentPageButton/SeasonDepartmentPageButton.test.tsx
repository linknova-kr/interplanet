import { render } from '@redwoodjs/testing/web'

import SeasonDepartmentPageButton from './SeasonDepartmentPageButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SeasonDepartmentPageButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SeasonDepartmentPageButton />)
    }).not.toThrow()
  })
})
