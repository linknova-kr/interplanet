import type { Prisma, User } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        identifier: 'String2597509',
        realName: 'String',
        nickname: 'String',
        phoneNumber: 'String',
        birthday: '2024-05-05T07:46:55.898Z',
        interests: ['String'],
        hashedPassword: 'String',
        salt: 'String',
      },
    },
    two: {
      data: {
        identifier: 'String5652895',
        realName: 'String',
        nickname: 'String',
        phoneNumber: 'String',
        birthday: '2024-05-05T07:46:55.898Z',
        interests: ['String'],
        hashedPassword: 'String',
        salt: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
