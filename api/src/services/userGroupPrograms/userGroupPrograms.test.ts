import type { UserGroupProgram } from '@prisma/client'

import { userGroupPrograms } from './userGroupPrograms'
import type { StandardScenario } from './userGroupPrograms.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userGroupPrograms', () => {
  scenario(
    'returns all userGroupPrograms',
    async (scenario: StandardScenario) => {
      const result = await userGroupPrograms()

      expect(result.length).toEqual(
        Object.keys(scenario.userGroupProgram).length
      )
    }
  )
})
