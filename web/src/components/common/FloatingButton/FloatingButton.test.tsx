import { render } from '@redwoodjs/testing/web'

import FloatingButton from './FloatingButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FloatingButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FloatingButton />)
    }).not.toThrow()
  })
})
