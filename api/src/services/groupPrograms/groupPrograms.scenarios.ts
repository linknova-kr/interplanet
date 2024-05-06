import type { Prisma, GroupProgram } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.GroupProgramCreateArgs>({
  groupProgram: {
    one: {
      data: {
        title: 'String',
        type: 'BOOK_FREE',
        startsAt: '2024-05-05T13:50:43.339Z',
        endsAt: '2024-05-05T13:50:43.339Z',
        group: {
          create: {
            name: 'String',
            slug: 'String5020096',
            department: { create: { name: 'String', slug: 'String1572185' } },
          },
        },
        hostUser: {
          create: {
            identifier: 'String233065',
            realName: 'String',
            nickname: 'String',
            phoneNumber: 'String',
            birthday: '2024-05-05T13:50:43.339Z',
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
        type: 'BOOK_FREE',
        startsAt: '2024-05-05T13:50:43.339Z',
        endsAt: '2024-05-05T13:50:43.339Z',
        group: {
          create: {
            name: 'String',
            slug: 'String6572581',
            department: { create: { name: 'String', slug: 'String6354094' } },
          },
        },
        hostUser: {
          create: {
            identifier: 'String8433672',
            realName: 'String',
            nickname: 'String',
            phoneNumber: 'String',
            birthday: '2024-05-05T13:50:43.339Z',
            interests: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<GroupProgram, 'groupProgram'>
