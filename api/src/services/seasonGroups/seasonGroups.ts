import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection'
import {
  SeasonseasonGroupsArgs,
  SeasonGroup as TSeasonGroup,
} from 'types/graphql'

import { db } from 'src/lib/db'

import { ConnectionResolver } from '../types'

export const seasonGroups: ConnectionResolver<
  Omit<TSeasonGroup, 'season' | 'group' | 'iJoined'>
> = (args: SeasonseasonGroupsArgs) => {
  return findManyCursorConnection(
    (args) => db.seasonGroup.findMany(args),
    () => db.seasonGroup.count(),
    args
  )
}

export const SeasonGroup = {
  season: (_obj, { root }) => {
    return db.seasonGroup.findUnique({ where: { id: root?.id } }).season()
  },
  group: (_obj, { root }) => {
    return db.seasonGroup.findUnique({ where: { id: root?.id } }).group()
  },
  iJoined: async (_obj, { root }) => {
    const userId = context.currentUser.id
    if (!userId) return false
    const id = root.id

    const userSeasonGroup = await db.userSeasonGroup.findFirst({
      where: {
        userId,
        seasonGroupId: id,
      },
    })

    return Boolean(userSeasonGroup)
  },
}
