import { render } from '@redwoodjs/testing/web'

import DepartmentChips from './DepartmentChips'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DepartmentChips', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DepartmentChips />)
    }).not.toThrow()
  })
})
