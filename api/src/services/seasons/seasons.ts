import type { QueryResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

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
  seasonDepartments: (_obj, { root }) => {
    return db.seasonDepartment.findMany({
      where: { seasonId: root.id },
    })
  },
}
