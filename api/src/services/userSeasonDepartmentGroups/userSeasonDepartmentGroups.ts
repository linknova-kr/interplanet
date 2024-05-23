import {
  MutationResolvers,
  MutationcreateUserSeasonDepartmentGroupArgs,
  MutationrequestRefundUserSeasonDepartmentGroupArgs,
  MutationwithdrawRequestRefundUserSeasonDepartmentGroupArgs,
  QueryResolvers,
  QueryuserSeasonDepartmentGroupArgs,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const userSeasonDepartmentGroup: Omit<
  QueryResolvers['userSeasonDepartmentGroup'],
  'attendanceCount'
> = async ({ id }: QueryuserSeasonDepartmentGroupArgs) => {
  const userId = context.currentUser.id
  const result = await db.userSeasonDepartmentGroup.findFirst({
    where: { id, userId },
  })

  if (!result) {
    return {
      __typename: 'NotFoundError',
      message: 'User season department group not found',
    }
  }
  return result
}

export const createUserSeasonDepartmentGroup: Omit<
  MutationResolvers['createUserSeasonDepartmentGroup'],
  'seasonGroup' | 'seasonDepartment'
> = async ({ input }: MutationcreateUserSeasonDepartmentGroupArgs) => {
  const userId = context.currentUser.id
  const { seasonGroupId, seasonDepartmentId, level } = input
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
      where: {
        userId,
        seasonGroupId,
        seasonDepartmentId,
        refundedAt: null,
        status: { not: 'REFUNDED' },
      },
    })

  if (userSeasonDepartmentGroupExists) {
    return { __typename: 'AlreadyExistsError', message: 'Already joined' }
  }

  return db.userSeasonDepartmentGroup.create({
    data: {
      userId,
      seasonGroupId,
      seasonDepartmentId,
      level,
      status: 'APPROVAL_PENDING',
    },
  })
}

export const requestRefundUserSeasonDepartmentGroup: Omit<
  MutationResolvers['requestRefundUserSeasonDepartmentGroup'],
  'attendanceCount'
> = async ({ input }: MutationrequestRefundUserSeasonDepartmentGroupArgs) => {
  const userId = context.currentUser.id
  const { id, bankAccountNumber, bankAccountHolder, phoneNumber } = input
  const userSeasonDepartmentGroup =
    await db.userSeasonDepartmentGroup.findUnique({ where: { id } })

  if (!userSeasonDepartmentGroup) {
    return {
      __typename: 'NotFoundError',
      message: 'User season department group not found',
    }
  }

  if (userSeasonDepartmentGroup.userId !== userId) {
    return {
      __typename: 'NotFoundError',
      message: 'User season department group not found',
    }
  }

  if (userSeasonDepartmentGroup.status !== 'APPROVED') {
    return {
      __typename: 'NotFoundError',
      message: 'User season department group not found',
    }
  }

  const refundRequest = await db.refundRequest.create({
    data: {
      bankAccountNumber,
      bankAccountHolder,
      phoneNumber,
    },
  })

  return db.userSeasonDepartmentGroup.update({
    where: { id },
    data: { status: 'REFUND_PENDING', refundRequestId: refundRequest.id },
  })
}

export const withdrawRequestRefundUserSeasonDepartmentGroup: Omit<
  MutationResolvers['withdrawRequestRefundUserSeasonDepartmentGroup'],
  'attendanceCount'
> = async ({
  id,
}: MutationwithdrawRequestRefundUserSeasonDepartmentGroupArgs) => {
  const userId = context.currentUser.id
  const userSeasonDepartmentGroup =
    await db.userSeasonDepartmentGroup.findUnique({ where: { id } })

  if (!userSeasonDepartmentGroup) {
    return {
      __typename: 'NotFoundError',
      message: 'User season department group not found',
    }
  }

  if (userSeasonDepartmentGroup.userId !== userId) {
    return {
      __typename: 'NotFoundError',
      message: 'User season department group not found',
    }
  }

  if (userSeasonDepartmentGroup.status !== 'REFUND_PENDING') {
    return {
      __typename: 'NotFoundError',
      message: 'User season department group not found',
    }
  }

  return db.userSeasonDepartmentGroup.update({
    where: { id },
    data: { status: 'APPROVED', refundRequestId: null },
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
  attendanceCount: async (_obj, { root }) => {
    const userId = context.currentUser.id
    const seasonGroupId = root.seasonGroupId
    const seasonGroup = await db.seasonGroup.findUnique({
      where: { id: seasonGroupId },
    })

    if (!seasonGroup) {
      return 0
    }
    const groupPrograms = await db.groupProgram.findMany({
      where: { groupId: seasonGroup.groupId },
    })
    const userGroupPrograms = await db.userGroupProgram.findMany({
      where: {
        userId,
        groupProgramId: { in: groupPrograms.map((v) => v.id) },
        status: 'ATTENDED',
      },
    })
    return userGroupPrograms.reduce((acc, v) => {
      if (v.type === '라운징') {
        return acc + 0.5
      } else {
        return acc + 1
      }
    }, 0)
  },
}
