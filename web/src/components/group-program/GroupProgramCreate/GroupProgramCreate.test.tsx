import { render } from '@redwoodjs/testing/web'

import GroupProgramCreate from './GroupProgramCreate'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GroupProgramCreate', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupProgramCreate />)
    }).not.toThrow()
  })
})
