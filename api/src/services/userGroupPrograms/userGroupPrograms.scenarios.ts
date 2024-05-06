import type { Prisma, UserGroupProgram } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserGroupProgramCreateArgs>({
  userGroupProgram: {
    one: {
      data: {
        status: 'NOT_ATTENDED',
        user: {
          create: {
            identifier: 'String526760',
            realName: 'String',
            nickname: 'String',
            phoneNumber: 'String',
            birthday: '2024-05-05T13:53:38.444Z',
            interests: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        groupProgram: {
          create: {
            title: 'String',
            type: 'BOOK_FREE',
            startsAt: '2024-05-05T13:53:38.444Z',
            endsAt: '2024-05-05T13:53:38.444Z',
            group: {
              create: {
                name: 'String',
                slug: 'String4770386',
                department: {
                  create: { name: 'String', slug: 'String883368' },
                },
              },
            },
            hostUser: {
              create: {
                identifier: 'String7999268',
                realName: 'String',
                nickname: 'String',
                phoneNumber: 'String',
                birthday: '2024-05-05T13:53:38.444Z',
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
        status: 'NOT_ATTENDED',
        user: {
          create: {
            identifier: 'String1497370',
            realName: 'String',
            nickname: 'String',
            phoneNumber: 'String',
            birthday: '2024-05-05T13:53:38.444Z',
            interests: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        groupProgram: {
          create: {
            title: 'String',
            type: 'BOOK_FREE',
            startsAt: '2024-05-05T13:53:38.444Z',
            endsAt: '2024-05-05T13:53:38.444Z',
            group: {
              create: {
                name: 'String',
                slug: 'String1206434',
                department: {
                  create: { name: 'String', slug: 'String5003185' },
                },
              },
            },
            hostUser: {
              create: {
                identifier: 'String6080278',
                realName: 'String',
                nickname: 'String',
                phoneNumber: 'String',
                birthday: '2024-05-05T13:53:38.444Z',
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

export type StandardScenario = ScenarioData<
  UserGroupProgram,
  'userGroupProgram'
>
