import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection'
import { Prisma } from '@prisma/client'
import type {
  MutationResolvers,
  MutationcreateSpotEventArgs,
  MutationderegisterSpotEventArgs,
  MutationupdateSpotEventArgs,
  QueryResolvers,
  QueryspotEventArgs,
  QueryspotEventsArgs,
  SpotEvent as TSpotEvent,
} from 'types/graphql'

import { db } from 'src/lib/db'

import { ConnectionResolver } from '../types'
import { myActiveDepartmentIds } from '../userSeasonDepartmentGroups/userSeasonDepartmentGroups'
import { userSpotEventsConnection } from '../userSpotEvents/userSpotEvents'

export const spotEvents: ConnectionResolver<
  Omit<TSpotEvent, 'iMade' | 'userSpotEvents' | 'iJoined'>
> = async (args: QueryspotEventsArgs) => {
  const { sort, startAtCriteria, activeSeasonOnly, iJoined } = args
  const where: Prisma.SpotEventWhereInput = {
    startsAt:
      startAtCriteria === 'PAST'
        ? { lt: new Date() }
        : startAtCriteria === 'FUTURE'
        ? { gte: new Date() }
        : undefined,
    deregisteredAt: null,
  }
  if (activeSeasonOnly) {
    const departmentIds = await myActiveDepartmentIds(context.currentUser.id)
    where.departmentId = {
      in: departmentIds,
    }
  }
  const orderBy =
    sort === 'STARTS_AT_ASC'
      ? { startsAt: Prisma.SortOrder.asc }
      : sort === 'STARTS_AT_DESC'
      ? { startsAt: Prisma.SortOrder.desc }
      : undefined

  if (iJoined || iJoined === false) {
    const userId = context.currentUser?.id
    if (userId) {
      const userSpotEvents = await db.userSpotEvent.findMany({
        where: {
          userId,
          cancelledAt: null,
        },
        select: {
          spotEventId: true,
        },
      })
      console.log('userSpotEvents', userSpotEvents)
      if (iJoined) {
        where.id = {
          in: userSpotEvents.map((use) => use.spotEventId),
        }
      } else if (iJoined === false) {
        where.id = {
          notIn: userSpotEvents.map((use) => use.spotEventId),
        }
      }
    }
  }

  return findManyCursorConnection(
    (args) =>
      db.spotEvent.findMany({
        ...args,
        where,
        orderBy,
      }),
    () => db.spotEvent.count({ where }),
    args
  )
}

export const spotEvent: Omit<
  QueryResolvers['spotEvent'],
  'iMade' | 'userSpotEvents'
> = async ({ id }: QueryspotEventArgs) => {
  const result = await db.spotEvent.findUnique({
    where: { id },
  })
  if (!result) {
    return {
      __typename: 'NotFoundError',
      message: 'SpotEvent not found',
    }
  }
  return result
}

export const createSpotEvent: Omit<
  MutationResolvers['createSpotEvent'],
  'iMade' | 'userSpotEvents'
> = async ({ input }: MutationcreateSpotEventArgs) => {
  const userId = context.currentUser.id
  const { title, address, startsAt, endsAt, description, departmentId } = input
  // todo: 권한제어
  return db.spotEvent.create({
    data: {
      title,
      address,
      startsAt,
      endsAt,
      description,
      department: {
        connect: {
          id: departmentId,
        },
      },
      hostUser: {
        connect: {
          id: userId,
        },
      },
    },
  })
}

async function checkPermission(spotEventId: string, userId) {
  const spotEvent = await db.spotEvent.findUnique({
    where: { id: spotEventId },
  })
  if (!spotEvent) {
    return { message: 'SpotEvent not found', __typename: 'NotFoundError' }
  }
  if (spotEvent.hostUserId !== userId) {
    return { message: 'Permission denied', __typename: 'NotFoundError' }
  }
  if (spotEvent.deregisteredAt) {
    return { message: 'Already deregistered', __typename: 'NotFoundError' }
  }
  return null
}

export const updateSpotEvent: Omit<
  MutationResolvers['updateSpotEvent'],
  'iMade' | 'userSpotEvents'
> = async ({ id, input }: MutationupdateSpotEventArgs) => {
  const userId = context.currentUser.id
  await checkPermission(id, userId)
  return db.spotEvent.update({
    where: { id },
    data: input,
  })
}

export const deregisterSpotEvent = async ({
  id,
}: MutationderegisterSpotEventArgs) => {
  const userId = context.currentUser.id
  await checkPermission(id, userId)
  return db.spotEvent.update({
    where: { id },
    data: { deregisteredAt: new Date() },
  })
}

export const SpotEvent = {
  userSpotEvents: (args, { root }) => {
    return userSpotEventsConnection(args, { spotEventId: root?.id })
  },
  iMade: async (_obj, { root }) => {
    const userId = context.currentUser?.id
    if (!userId) {
      return false
    }
    console.log('root.userId', root, userId)
    return root.hostUserId === userId
  },
  my: async (_obj, { root }) => {
    const userId = context.currentUser?.id
    if (!userId) {
      return false
    }
    return db.userSpotEvent.findFirst({
      where: {
        userId,
        spotEventId: root.id,
        cancelledAt: null,
      },
    })
  },
}
