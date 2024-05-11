import { render } from '@redwoodjs/testing/web'

import CreateUserGroupProgram from './CreateUserGroupProgram'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CreateUserGroupProgram', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateUserGroupProgram />)
    }).not.toThrow()
  })
})
