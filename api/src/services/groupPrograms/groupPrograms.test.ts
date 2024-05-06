import type { GroupProgram } from '@prisma/client'

import { groupPrograms } from './groupPrograms'
import type { StandardScenario } from './groupPrograms.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('groupPrograms', () => {
  scenario('returns all groupPrograms', async (scenario: StandardScenario) => {
    const result = await groupPrograms()

    expect(result.length).toEqual(Object.keys(scenario.groupProgram).length)
  })
})
