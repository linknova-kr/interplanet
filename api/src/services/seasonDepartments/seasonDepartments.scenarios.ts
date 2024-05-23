import type { Prisma, SeasonDepartment } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SeasonDepartmentCreateArgs>({
  seasonDepartment: {
    one: {
      data: {
        department: { create: { name: 'String', slug: 'String6403193' } },
        season: {
          create: {
            name: 'String',
            startsAt: '2024-05-12T07:03:17.491Z',
            endsAt: '2024-05-12T07:03:17.491Z',
          },
        },
      },
    },
    two: {
      data: {
        department: { create: { name: 'String', slug: 'String1584152' } },
        season: {
          create: {
            name: 'String',
            startsAt: '2024-05-12T07:03:17.491Z',
            endsAt: '2024-05-12T07:03:17.491Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  SeasonDepartment,
  'seasonDepartment'
>
