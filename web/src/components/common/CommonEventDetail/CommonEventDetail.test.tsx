import { render } from '@redwoodjs/testing/web'

import CommonEventDetail from './CommonEventDetail'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CommonEventDetail', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommonEventDetail />)
    }).not.toThrow()
  })
})
