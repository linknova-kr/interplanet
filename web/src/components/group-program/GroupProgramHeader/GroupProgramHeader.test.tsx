import { render } from '@redwoodjs/testing/web'

import GroupProgramHeader from './GroupProgramHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GroupProgramHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupProgramHeader />)
    }).not.toThrow()
  })
})
