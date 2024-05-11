import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection'
import type { Prisma } from '@prisma/client'
import type {
  GroupProgramuserGroupProgramsArgs,
  MutationResolvers,
  MutationcancelUserGroupProgramArgs,
  MutationcreateUserGroupProgramArgs,
  MutationupdateUserGroupProgramArgs,
} from 'types/graphql'

import { db } from 'src/lib/db'

export function userGroupProgramsConnection(
  args: GroupProgramuserGroupProgramsArgs,
  baseArgs?: Prisma.UserGroupProgramWhereInput
) {
  return findManyCursorConnection(
    (args) =>
      db.userGroupProgram.findMany({
        ...args,
        where: { cancelledAt: null, ...baseArgs },
      }),
    () =>
      db.userGroupProgram.count({ where: { cancelledAt: null, ...baseArgs } }),
    args
  )
}

export const userGroupPrograms = (args: GroupProgramuserGroupProgramsArgs) => {
  return userGroupProgramsConnection(args)
}

export const createUserGroupProgram: MutationResolvers['createUserGroupProgram'] =
  async ({ input }: MutationcreateUserGroupProgramArgs) => {
    const userId = context.currentUser.id
    const { groupProgramId, message, type } = input
    const groupProgram = await db.groupProgram.findUnique({
      where: { id: groupProgramId },
    })
    if (!groupProgram) {
      return { message: 'Group program not found', __typename: 'NotFoundError' }
    }
    const userGroupProgramExists = await db.userGroupProgram.findFirst({
      where: { userId, groupProgramId, cancelledAt: null },
    })
    if (userGroupProgramExists) {
      return { message: 'Already joined', __typename: 'AlreadyExistsError' }
    }
    return db.userGroupProgram.create({
      data: {
        userId,
        groupProgramId,
        message,
        status: 'NOT_ATTENDED',
        type,
      } as Prisma.UserGroupProgramUncheckedCreateInput,
    })
  }

async function getById(id: string, userId: number) {
  const userGroupProgram = await db.userGroupProgram.findUnique({
    where: { id },
  })
  if (!userGroupProgram) {
    return {
      message: 'User group program not found',
      __typename: 'NotFoundError',
    }
  }
  if (userGroupProgram.userId !== userId) {
    return { message: 'Not authorized', __typename: 'NotAuthorizedError' }
  }
  return userGroupProgram
}

export const updateUserGroupProgram: MutationResolvers['updateUserGroupProgram'] =
  async ({ input, where }: MutationupdateUserGroupProgramArgs) => {
    const userId = context.currentUser.id
    const { id } = where
    const { message, type } = input
    await getById(id, userId)
    return db.userGroupProgram.update({
      where: { id },
      data: { message, type },
    })
  }

export const cancelUserGroupProgram: MutationResolvers['cancelUserGroupProgram'] =
  async ({ input }: MutationcancelUserGroupProgramArgs) => {
    const userId = context.currentUser.id
    const { id } = input
    await getById(id, userId)
    return db.userGroupProgram.update({
      where: { id },
      data: { cancelledAt: new Date(), status: 'CANCELLED' },
    })
  }

export const UserGroupProgram = {
  user: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.userId } })
  },
  groupProgram: async (args, { root }) => {
    return await db.groupProgram.findUnique({
      where: { id: root?.groupProgramId },
    })
  },
}
