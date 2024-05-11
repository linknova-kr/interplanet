import { render } from '@redwoodjs/testing/web'

import GroupProgramPageButton from './GroupProgramPageButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GroupProgramPageButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupProgramPageButton />)
    }).not.toThrow()
  })
})
