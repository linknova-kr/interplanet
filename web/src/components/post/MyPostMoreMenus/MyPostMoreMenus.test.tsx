import { render } from '@redwoodjs/testing/web'

import MyPostMoreMenus from './MyPostMoreMenus'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MyPostMoreMenus', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyPostMoreMenus />)
    }).not.toThrow()
  })
})
