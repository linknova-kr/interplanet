import type { SeasonDepartment } from '@prisma/client'

import { seasonDepartments } from './seasonDepartments'
import type { StandardScenario } from './seasonDepartments.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('seasonDepartments', () => {
  scenario(
    'returns all seasonDepartments',
    async (scenario: StandardScenario) => {
      const result = await seasonDepartments()

      expect(result.length).toEqual(
        Object.keys(scenario.seasonDepartment).length
      )
    }
  )
})
