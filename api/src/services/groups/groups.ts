import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection'
import type { Prisma } from '@prisma/client'
import type {
  QueryResolvers,
  QuerygroupArgs,
  QuerygroupsArgs,
  ResolversParentTypes,
  Group as TGroup,
} from 'types/graphql'

import { db } from 'src/lib/db'

import { ConnectionResolver } from '../types'

export function groupsConnection(
  args: QuerygroupsArgs,
  baseArgs?: Prisma.GroupWhereInput
) {
  return findManyCursorConnection(
    (args) => db.group.findMany({ ...args, where: { ...baseArgs } }),
    () => db.group.count({ where: { ...baseArgs } }),
    args
  )
}

export const groups: ConnectionResolver<Omit<TGroup, 'department'>> = (
  args: QuerygroupsArgs
) => {
  return groupsConnection(args)
}

export const group: Omit<QueryResolvers['group'], 'department'> = async ({
  slug,
}: QuerygroupArgs) => {
  const group = await db.group.findFirst({
    where: { slug },
  })

  if (!group) {
    return { message: 'Group not found' }
  }

  return group
}

export const Group = {
  department: (
    _args,
    { root }
  ): Promise<Omit<ResolversParentTypes['Department'], 'groups'>> => {
    return db.group.findUnique({ where: { id: root?.id } }).department()
  },
}
