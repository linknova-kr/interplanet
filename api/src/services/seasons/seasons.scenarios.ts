import type { Prisma, Season } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SeasonCreateArgs>({
  season: {
    one: {
      data: {
        name: 'String',
        startsAt: '2024-05-05T05:11:16.406Z',
        endsAt: '2024-05-05T05:11:16.406Z',
      },
    },
    two: {
      data: {
        name: 'String',
        startsAt: '2024-05-05T05:11:16.406Z',
        endsAt: '2024-05-05T05:11:16.406Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Season, 'season'>
