import { render } from '@redwoodjs/testing/web'

import CommonListItem from './CommonListItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CommonListItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommonListItem />)
    }).not.toThrow()
  })
})
