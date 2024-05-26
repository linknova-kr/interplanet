import { render } from '@redwoodjs/testing/web'

import MySpotEvents from './MySpotEvents'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MySpotEvents', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MySpotEvents />)
    }).not.toThrow()
  })
})
