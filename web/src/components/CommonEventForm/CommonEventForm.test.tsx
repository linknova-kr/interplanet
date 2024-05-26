import { render } from '@redwoodjs/testing/web'

import CommonEventForm from './CommonEventForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CommonEventForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommonEventForm />)
    }).not.toThrow()
  })
})
