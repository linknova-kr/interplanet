import { render } from '@redwoodjs/testing/web'

import FormCard from './FormCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FormCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FormCard />)
    }).not.toThrow()
  })
})
