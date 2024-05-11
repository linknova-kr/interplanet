import { render } from '@redwoodjs/testing/web'

import GroupProgramsItem from './GroupProgramsItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GroupProgramsItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupProgramsItem />)
    }).not.toThrow()
  })
})
