import type { Prisma, Group } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.GroupCreateArgs>({
  group: {
    one: {
      data: {
        name: 'String',
        slug: 'String8036682',
        department: { create: { name: 'String', slug: 'String5466170' } },
      },
    },
    two: {
      data: {
        name: 'String',
        slug: 'String2364123',
        department: { create: { name: 'String', slug: 'String1349191' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Group, 'group'>
