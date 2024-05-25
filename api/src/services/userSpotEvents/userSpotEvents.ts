import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection'
import type { Prisma } from '@prisma/client'
import type {
  MutationResolvers,
  MutationcancelUserSpotEventArgs,
  MutationcreateUserSpotEventArgs,
  SpotEventuserSpotEventsArgs,
} from 'types/graphql'

import { db } from 'src/lib/db'

export function userSpotEventsConnection(
  args: SpotEventuserSpotEventsArgs,
  baseArgs?: Prisma.UserSpotEventWhereInput
) {
  return findManyCursorConnection(
    (args) =>
      db.userSpotEvent.findMany({
        ...args,
        where: { cancelledAt: null, ...baseArgs },
      }),
    () => db.userSpotEvent.count({ where: { cancelledAt: null, ...baseArgs } }),
    args
  )
}

export const createUserSpotEvent: Omit<
  MutationResolvers['createUserSpotEvent'],
  'user'
> = async ({ input }: MutationcreateUserSpotEventArgs) => {
  const userId = context.currentUser.id
  const { spotEventId, comment } = input

  const spotEvent = await db.spotEvent.findUnique({
    where: { id: spotEventId },
  })

  if (!spotEvent || spotEvent.deregisteredAt) {
    return { __typename: 'NotFoundError', message: 'Spot event not found' }
  }

  const userSeasonDepartmentGroup = await db.userSeasonDepartmentGroup.findMany(
    {
      where: {
        userId,
        seasonDepartment: {
          season: {
            startsAt: { lte: new Date() },
            endsAt: { gte: new Date() },
          },
        },
        status: 'APPROVED', // todo: 추후 확인 필요
      },
      include: {
        seasonDepartment: {
          select: {
            departmentId: true,
          },
        },
      },
    }
  )

  if (userSeasonDepartmentGroup.length === 0) {
    return {
      __typename: 'NotAuthorizedError',
      message: '시즌권이 없어 해당 모임을 신청할 수 없습니다',
    }
  }

  if (
    userSeasonDepartmentGroup.find(
      (usdg) => usdg.seasonDepartment.departmentId === spotEvent.departmentId
    ) == null
  ) {
    return {
      __typename: 'NotAllowedError',
      message: '계열에 맞는 시즌권이 없어 해당 모임을 신청할 수 없습니다',
    }
  }

  const existingUserSpotEvent = await db.userSpotEvent.findFirst({
    where: {
      userId,
      spotEventId,
      cancelledAt: null,
    },
  })

  if (existingUserSpotEvent) {
    return {
      __typename: 'AlreadyJoinedError',
      message: 'User already joined',
    }
  }

  return db.userSpotEvent.create({
    data: {
      userId,
      spotEventId,
      comment,
    },
  })
}

export const cancelUserSpotEvent: Omit<
  MutationResolvers['cancelUserSpotEvent'],
  'user'
> = async ({ input }: MutationcancelUserSpotEventArgs) => {
  const userId = context.currentUser.id
  const { id } = input

  const userSpotEvent = await db.userSpotEvent.findFirst({
    where: {
      id,
      userId,
      cancelledAt: null,
    },
  })

  if (!userSpotEvent) {
    return { __typename: 'NotFoundError', message: 'User spot event not found' }
  }

  return db.userSpotEvent.update({
    where: { id },
    data: {
      cancelledAt: new Date(),
    },
  })
}

export const UserSpotEvent = {
  user: async (_obj, { root }) => {
    return db.userSpotEvent.findUnique({ where: { id: root.id } }).user()
  },
  spotEvent: async (_obj, { root }) => {
    return db.userSpotEvent.findUnique({ where: { id: root.id } }).spotEvent()
  },
}
