import type { Prisma, Comment } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    one: {
      data: {
        content: 'String',
        post: {
          create: {
            title: 'String',
            content: 'String',
            board: {
              create: { nameEn: 'String3647996', nameKr: 'String6736569' },
            },
            user: {
              create: {
                identifier: 'String8946442',
                realName: 'String',
                nickname: 'String',
                phoneNumber: 'String',
                birthday: '2024-05-12T05:13:09.997Z',
                interests: 'String',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        user: {
          create: {
            identifier: 'String509493',
            realName: 'String',
            nickname: 'String',
            phoneNumber: 'String',
            birthday: '2024-05-12T05:13:09.997Z',
            interests: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        content: 'String',
        post: {
          create: {
            title: 'String',
            content: 'String',
            board: {
              create: { nameEn: 'String6541330', nameKr: 'String3993788' },
            },
            user: {
              create: {
                identifier: 'String7241128',
                realName: 'String',
                nickname: 'String',
                phoneNumber: 'String',
                birthday: '2024-05-12T05:13:09.997Z',
                interests: 'String',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        user: {
          create: {
            identifier: 'String5966440',
            realName: 'String',
            nickname: 'String',
            phoneNumber: 'String',
            birthday: '2024-05-12T05:13:09.997Z',
            interests: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Comment, 'comment'>
