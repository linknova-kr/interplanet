import type { UserSpotEvent } from '@prisma/client'

import { userSpotEvents } from './userSpotEvents'
import type { StandardScenario } from './userSpotEvents.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userSpotEvents', () => {
  scenario('returns all userSpotEvents', async (scenario: StandardScenario) => {
    const result = await userSpotEvents()

    expect(result.length).toEqual(Object.keys(scenario.userSpotEvent).length)
  })
})
