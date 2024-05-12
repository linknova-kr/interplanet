import {
  MutationResolvers,
  MutationcreateUserSeasonDepartmentGroupArgs,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const createUserSeasonDepartmentGroup: Omit<
  MutationResolvers['createUserSeasonDepartmentGroup'],
  'seasonGroup' | 'seasonDepartment'
> = async ({ input }: MutationcreateUserSeasonDepartmentGroupArgs) => {
  const userId = context.currentUser.id
  const { seasonGroupId, seasonDepartmentId } = input
  const seasonGroup = await db.seasonGroup.findUnique({
    where: { id: seasonGroupId },
  })
  if (!seasonGroup) {
    return { __typename: 'NotFoundError', message: 'Season group not found' }
  }

  const seasonDepartment = await db.seasonDepartment.findUnique({
    where: { id: seasonDepartmentId },
  })

  if (!seasonDepartment) {
    return {
      __typename: 'NotFoundError',
      message: 'Season department not found',
    }
  }

  const userSeasonDepartmentGroupExists =
    await db.userSeasonDepartmentGroup.findFirst({
      where: { userId, seasonGroupId, seasonDepartmentId, refundedAt: null },
    })

  if (userSeasonDepartmentGroupExists) {
    return { __typename: 'AlreadyExistsError', message: 'Already joined' }
  }

  return db.userSeasonDepartmentGroup.create({
    data: {
      userId,
      seasonGroupId,
      seasonDepartmentId,
      status: 'APPROVAL_PENDING',
    },
  })
}

export const UserSeasonDepartmentGroup = {
  seasonGroup: (_obj, { root }) => {
    return db.userSeasonDepartmentGroup
      .findUnique({ where: { id: root?.id } })
      .seasonGroup()
  },
  seasonDepartment: (_obj, { root }) => {
    return db.userSeasonDepartmentGroup
      .findUnique({ where: { id: root?.id } })
      .seasonDepartment()
  },
}
