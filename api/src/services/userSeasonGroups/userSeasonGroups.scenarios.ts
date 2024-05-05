import type { Prisma, UserSeasonGroup } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserSeasonGroupCreateArgs>({
  userSeasonGroup: {
    one: {
      data: {
        user: {
          create: {
            identifier: 'String1751707',
            realName: 'String',
            nickname: 'String',
            phoneNumber: 'String',
            birthday: '2024-05-05T07:46:44.855Z',
            interests: ['String'],
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        seasonGroup: {
          create: {
            season: {
              create: {
                name: 'String',
                startsAt: '2024-05-05T07:46:44.855Z',
                endsAt: '2024-05-05T07:46:44.855Z',
              },
            },
            group: {
              create: {
                name: 'String',
                slug: 'String8195068',
                department: {
                  create: { name: 'String', slug: 'String5671615' },
                },
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
            identifier: 'String7747190',
            realName: 'String',
            nickname: 'String',
            phoneNumber: 'String',
            birthday: '2024-05-05T07:46:44.855Z',
            interests: ['String'],
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        seasonGroup: {
          create: {
            season: {
              create: {
                name: 'String',
                startsAt: '2024-05-05T07:46:44.855Z',
                endsAt: '2024-05-05T07:46:44.855Z',
              },
            },
            group: {
              create: {
                name: 'String',
                slug: 'String2896588',
                department: {
                  create: { name: 'String', slug: 'String6025459' },
                },
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserSeasonGroup, 'userSeasonGroup'>
