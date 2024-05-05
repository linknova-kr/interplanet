import { groups } from './groups'
import type { StandardScenario } from './groups.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('groups', () => {
  scenario('returns all groups', async (scenario: StandardScenario) => {
    const result = await groups({
      departmentId: scenario.group.one.departmentId,
    })

    expect(result.edges.length).toEqual(Object.keys(scenario.group).length)
  })
})
