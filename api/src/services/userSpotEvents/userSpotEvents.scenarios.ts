import type { Prisma, UserSpotEvent } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserSpotEventCreateArgs>({
  userSpotEvent: {
    one: {
      data: {
        user: {
          create: {
            identifier: 'String8502535',
            realName: 'String',
            nickname: 'String',
            phoneNumber: 'String',
            birthday: '2024-05-25T14:39:28.303Z',
            interests: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        spotEvent: {
          create: {
            title: 'String',
            startsAt: '2024-05-25T14:39:28.303Z',
            endsAt: '2024-05-25T14:39:28.303Z',
            department: { create: { name: 'String', slug: 'String2428789' } },
            hostUser: {
              create: {
                identifier: 'String332733',
                realName: 'String',
                nickname: 'String',
                phoneNumber: 'String',
                birthday: '2024-05-25T14:39:28.303Z',
                interests: 'String',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        user: {
          create: {
            identifier: 'String4355674',
            realName: 'String',
            nickname: 'String',
            phoneNumber: 'String',
            birthday: '2024-05-25T14:39:28.303Z',
            interests: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        spotEvent: {
          create: {
            title: 'String',
            startsAt: '2024-05-25T14:39:28.303Z',
            endsAt: '2024-05-25T14:39:28.303Z',
            department: { create: { name: 'String', slug: 'String5796835' } },
            hostUser: {
              create: {
                identifier: 'String3615372',
                realName: 'String',
                nickname: 'String',
                phoneNumber: 'String',
                birthday: '2024-05-25T14:39:28.303Z',
                interests: 'String',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserSpotEvent, 'userSpotEvent'>
