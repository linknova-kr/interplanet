import type { QueryResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

import { seasonGroupConnection } from '../seasonGroups/seasonGroups'

export const activeSeason: Omit<
  QueryResolvers['activeSeason'],
  'groupSeason'
> = async () => {
  const result = await db.season.findFirst({
    where: {
      startsAt: { lte: new Date() },
      endsAt: { gte: new Date() },
    },
  })
  if (!result) {
    return { message: 'Season not found' }
  }
  return result
}

export const Season = {
  seasonGroups: (args, { root }) => {
    return seasonGroupConnection(args, { seasonId: root.id })
  },
}
