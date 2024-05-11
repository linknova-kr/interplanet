import { render } from '@redwoodjs/testing/web'

import UserGroupProgramCreatePage from './UserGroupProgramCreatePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UserGroupProgramCreatePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserGroupProgramCreatePage />)
    }).not.toThrow()
  })
})
