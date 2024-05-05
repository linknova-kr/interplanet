import { render } from '@redwoodjs/testing/web'

import SeasonGroup from './SeasonGroup'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SeasonGroup', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SeasonGroup />)
    }).not.toThrow()
  })
})
