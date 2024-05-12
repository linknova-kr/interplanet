import type { Prisma, Post } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        title: 'String',
        content: 'String',
        board: { create: { nameEn: 'String9711152', nameKr: 'String3815710' } },
        user: {
          create: {
            identifier: 'String4889387',
            realName: 'String',
            nickname: 'String',
            phoneNumber: 'String',
            birthday: '2024-05-12T05:04:17.075Z',
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
        content: 'String',
        board: { create: { nameEn: 'String587542', nameKr: 'String2798999' } },
        user: {
          create: {
            identifier: 'String2964347',
            realName: 'String',
            nickname: 'String',
            phoneNumber: 'String',
            birthday: '2024-05-12T05:04:17.075Z',
            interests: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>
