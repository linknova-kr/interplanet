import { seasonGroups } from './seasonGroups'
import type { StandardScenario } from './seasonGroups.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('seasonGroups', () => {
  scenario('returns all seasonGroups', async (scenario: StandardScenario) => {
    const result = await seasonGroups()

    expect(result.edges.length).toEqual(
      Object.keys(scenario.seasonGroup).length
    )
  })
})
