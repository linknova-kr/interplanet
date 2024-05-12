import { render } from '@redwoodjs/testing/web'

import GroupProgramDetail from './GroupProgramDetail'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GroupProgramDetail', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupProgramDetail />)
    }).not.toThrow()
  })
})
