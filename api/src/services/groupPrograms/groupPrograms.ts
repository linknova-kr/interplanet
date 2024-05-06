import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection'
import { Prisma } from '@prisma/client'
import type {
  GroupProgramRelationResolvers,
  QueryResolvers,
  QuerygroupProgramArgs,
  QuerygroupProgramsArgs,
  GroupProgram as TGroupProgram,
} from 'types/graphql'

import { db } from 'src/lib/db'

import { ConnectionResolver } from '../types'
import { userGroupProgramsConnection } from '../userGroupPrograms/userGroupPrograms'

export const groupPrograms: ConnectionResolver<
  Omit<TGroupProgram, 'userGroupPrograms' | 'group' | 'hostUser' | 'iJoined'>
> = (args: QuerygroupProgramsArgs) => {
  const { sort, startAtCriteria, departmentId } = args
  const where = {
    ...(departmentId && { group: { departmentId } }),
    startsAt:
      startAtCriteria === 'PAST'
        ? { lt: new Date() }
        : startAtCriteria === 'FUTURE'
        ? { gte: new Date() }
        : undefined,
  }
  const orderBy =
    sort === 'STARTS_AT_ASC'
      ? { startsAt: Prisma.SortOrder.asc }
      : sort === 'STARTS_AT_DESC'
      ? { startsAt: Prisma.SortOrder.desc }
      : undefined

  return findManyCursorConnection(
    (args) =>
      db.groupProgram.findMany({
        ...args,
        where,
        orderBy,
      }),
    () => db.groupProgram.count({ where }),
    args
  )
}

export const groupProgram: Omit<
  QueryResolvers['groupProgram'],
  'userGroupProgram'
> = async ({ id }: QuerygroupProgramArgs) => {
  const result = await db.groupProgram.findUnique({
    where: { id },
  })
  if (!result) {
    return { message: 'Group program not found' }
  }
  return result
}

export const GroupProgram: GroupProgramRelationResolvers = {
  group: (_obj, { root }) => {
    return db.groupProgram.findUnique({ where: { id: root?.id } }).group()
  },
  hostUser: (_obj, { root }) => {
    return db.groupProgram.findUnique({ where: { id: root?.id } }).hostUser()
  },
  userGroupPrograms: (args, { root }) => {
    return userGroupProgramsConnection(args, { groupProgramId: root?.id })
  },
  my: async (_obj, { root }) => {
    const userId = context.currentUser?.id
    if (!userId) return null
    const id = root.id

    const userGroupProgram = await db.userGroupProgram.findFirst({
      where: {
        userId,
        groupProgramId: id,
        cancelledAt: null,
      },
    })

    return userGroupProgram
  },
}
