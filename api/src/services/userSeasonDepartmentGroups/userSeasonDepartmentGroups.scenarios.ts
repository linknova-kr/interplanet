import type { Prisma, UserSeasonDepartmentGroup } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard =
  defineScenario<Prisma.UserSeasonDepartmentGroupCreateArgs>({
    userSeasonDepartmentGroup: {
      one: {
        data: {
          user: {
            create: {
              identifier: 'String8405523',
              realName: 'String',
              nickname: 'String',
              phoneNumber: 'String',
              birthday: '2024-05-12T10:37:04.510Z',
              interests: 'String',
              hashedPassword: 'String',
              salt: 'String',
            },
          },
          seasonGroup: {
            create: {
              season: {
                create: {
                  name: 'String',
                  startsAt: '2024-05-12T10:37:04.510Z',
                  endsAt: '2024-05-12T10:37:04.510Z',
                },
              },
              group: {
                create: {
                  name: 'String',
                  slug: 'String1154129',
                  department: {
                    create: { name: 'String', slug: 'String698122' },
                  },
                },
              },
            },
          },
          seasonDepartment: {
            create: {
              department: { create: { name: 'String', slug: 'String3040499' } },
              season: {
                create: {
                  name: 'String',
                  startsAt: '2024-05-12T10:37:04.510Z',
                  endsAt: '2024-05-12T10:37:04.510Z',
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
              identifier: 'String1724536',
              realName: 'String',
              nickname: 'String',
              phoneNumber: 'String',
              birthday: '2024-05-12T10:37:04.510Z',
              interests: 'String',
              hashedPassword: 'String',
              salt: 'String',
            },
          },
          seasonGroup: {
            create: {
              season: {
                create: {
                  name: 'String',
                  startsAt: '2024-05-12T10:37:04.510Z',
                  endsAt: '2024-05-12T10:37:04.510Z',
                },
              },
              group: {
                create: {
                  name: 'String',
                  slug: 'String5653561',
                  department: {
                    create: { name: 'String', slug: 'String8474684' },
                  },
                },
              },
            },
          },
          seasonDepartment: {
            create: {
              department: { create: { name: 'String', slug: 'String5265123' } },
              season: {
                create: {
                  name: 'String',
                  startsAt: '2024-05-12T10:37:04.510Z',
                  endsAt: '2024-05-12T10:37:04.510Z',
                },
              },
            },
          },
        },
      },
    },
  })

export type StandardScenario = ScenarioData<
  UserSeasonDepartmentGroup,
  'userSeasonDepartmentGroup'
>
