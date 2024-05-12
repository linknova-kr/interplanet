import { render } from '@redwoodjs/testing/web'

import DetailHead from './DetailHead'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DetailHead', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DetailHead />)
    }).not.toThrow()
  })
})
