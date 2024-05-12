import type { UserSeasonDepartmentGroup } from '@prisma/client'

import { userSeasonDepartmentGroups } from './userSeasonDepartmentGroups'
import type { StandardScenario } from './userSeasonDepartmentGroups.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userSeasonDepartmentGroups', () => {
  scenario(
    'returns all userSeasonDepartmentGroups',
    async (scenario: StandardScenario) => {
      const result = await userSeasonDepartmentGroups()

      expect(result.length).toEqual(
        Object.keys(scenario.userSeasonDepartmentGroup).length
      )
    }
  )
})
