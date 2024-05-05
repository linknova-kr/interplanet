import type {
  MutationResolvers,
  MutationcreateUserSeasonGroupArgs,
  UserSeasonGroupRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
export const createUserSeasonGroup: Omit<
  MutationResolvers['createUserSeasonGroup'],
  'iJoined'
> = async ({ input }: MutationcreateUserSeasonGroupArgs) => {
  const userId = context.currentUser.id
  const { seasonGroupId } = input
  const seasonGroup = await db.seasonGroup.findUnique({
    where: { id: seasonGroupId },
  })

  if (!seasonGroup) {
    return { message: 'Season group not found' }
  }

  const userSeasonGroupExists = await db.userSeasonGroup.findFirst({
    where: { userId, seasonGroupId },
  })
  if (userSeasonGroupExists) {
    return { message: 'Already joined' }
  }

  return db.userSeasonGroup.create({
    data: {
      userId,
      seasonGroupId,
    },
    include: { seasonGroup: true },
  })
}

export const UserSeasonGroup: UserSeasonGroupRelationResolvers = {}
