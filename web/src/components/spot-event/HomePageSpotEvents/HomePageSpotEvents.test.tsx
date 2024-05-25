import { render } from '@redwoodjs/testing/web'

import HomePageSpotEvents from './HomePageSpotEvents'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HomePageSpotEvents', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomePageSpotEvents />)
    }).not.toThrow()
  })
})
