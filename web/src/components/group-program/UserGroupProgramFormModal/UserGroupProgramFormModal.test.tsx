import { render } from '@redwoodjs/testing/web'

import UserGroupProgramFormModal from './UserGroupProgramFormModal'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CreateUserGroupProgram', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserGroupProgramFormModal />)
    }).not.toThrow()
  })
})
