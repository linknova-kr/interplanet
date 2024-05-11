import { render } from '@redwoodjs/testing/web'

import GroupPrograms from './GroupPrograms'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GroupPrograms', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupPrograms />)
    }).not.toThrow()
  })
})
