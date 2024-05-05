import { render } from '@redwoodjs/testing/web'

import ActiveSeason from './ActiveSeason'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ActiveSeason', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ActiveSeason />)
    }).not.toThrow()
  })
})
