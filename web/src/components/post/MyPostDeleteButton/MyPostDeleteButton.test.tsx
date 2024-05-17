import { render } from '@redwoodjs/testing/web'

import MyPostDeleteButton from './MyPostDeleteButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MyPostDeleteButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyPostDeleteButton />)
    }).not.toThrow()
  })
})
