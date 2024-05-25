import type { SpotEvent } from '@prisma/client'

import { spotEvents } from './spotEvents'
import type { StandardScenario } from './spotEvents.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('spotEvents', () => {
  scenario('returns all spotEvents', async (scenario: StandardScenario) => {
    const result = await spotEvents()

    expect(result.length).toEqual(Object.keys(scenario.spotEvent).length)
  })
})
