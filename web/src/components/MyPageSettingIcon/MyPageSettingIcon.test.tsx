import { render } from '@redwoodjs/testing/web'

import MyPageSettingIcon from './MyPageSettingIcon'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MyPageSettingIcon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyPageSettingIcon />)
    }).not.toThrow()
  })
})
