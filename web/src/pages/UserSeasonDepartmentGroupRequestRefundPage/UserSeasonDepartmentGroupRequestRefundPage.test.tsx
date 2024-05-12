import { render } from '@redwoodjs/testing/web'

import UserSeasonDepartmentGroupRequestRefundPage from './UserSeasonDepartmentGroupRequestRefundPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UserSeasonDepartmentGroupRequestRefundPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserSeasonDepartmentGroupRequestRefundPage />)
    }).not.toThrow()
  })
})
