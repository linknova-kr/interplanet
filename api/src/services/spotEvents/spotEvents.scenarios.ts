import type { Prisma, SpotEvent } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SpotEventCreateArgs>({
  spotEvent: {
    one: {
      data: {
        title: 'String',
        startsAt: '2024-05-25T14:39:19.892Z',
        endsAt: '2024-05-25T14:39:19.892Z',
        department: { create: { name: 'String', slug: 'String8539265' } },
        hostUser: {
          create: {
            identifier: 'String3227529',
            realName: 'String',
            nickname: 'String',
            phoneNumber: 'String',
            birthday: '2024-05-25T14:39:19.892Z',
            interests: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        startsAt: '2024-05-25T14:39:19.892Z',
        endsAt: '2024-05-25T14:39:19.892Z',
        department: { create: { name: 'String', slug: 'String8312740' } },
        hostUser: {
          create: {
            identifier: 'String4955888',
            realName: 'String',
            nickname: 'String',
            phoneNumber: 'String',
            birthday: '2024-05-25T14:39:19.892Z',
            interests: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<SpotEvent, 'spotEvent'>
