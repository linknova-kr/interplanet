import { render } from '@redwoodjs/testing/web'

import HomePageGroupPrograms from './HomePageGroupPrograms'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HomePageGroupPrograms', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomePageGroupPrograms />)
    }).not.toThrow()
  })
})
