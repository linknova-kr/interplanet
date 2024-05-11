import { render } from '@redwoodjs/testing/web'

import GroupProgram from './GroupProgram'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GroupProgram', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupProgram />)
    }).not.toThrow()
  })
})
