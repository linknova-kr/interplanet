import { departments } from './departments'
import type { StandardScenario } from './departments.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('departments', () => {
  scenario('returns all departments', async (scenario: StandardScenario) => {
    const result = await departments()

    expect(result.edges.length).toEqual(Object.keys(scenario.department).length)
  })
})
