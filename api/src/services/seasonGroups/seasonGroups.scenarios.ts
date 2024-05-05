import type { Prisma, SeasonGroup } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SeasonGroupCreateArgs>({
  seasonGroup: {
    one: {
      data: {
        season: {
          create: {
            name: 'String',
            startsAt: '2024-05-05T05:12:59.146Z',
            endsAt: '2024-05-05T05:12:59.146Z',
          },
        },
        group: {
          create: {
            name: 'String',
            slug: 'String6053762',
            department: { create: { name: 'String', slug: 'String4028929' } },
          },
        },
      },
    },
    two: {
      data: {
        season: {
          create: {
            name: 'String',
            startsAt: '2024-05-05T05:12:59.146Z',
            endsAt: '2024-05-05T05:12:59.146Z',
          },
        },
        group: {
          create: {
            name: 'String',
            slug: 'String3770681',
            department: { create: { name: 'String', slug: 'String3701390' } },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<SeasonGroup, 'seasonGroup'>
