import { QueryResolvers, QueryseasonDepartmentArgs } from 'types/graphql'

import { db } from 'src/lib/db'

export const seasonDepartment: QueryResolvers['seasonDepartment'] = async ({
  id,
}: QueryseasonDepartmentArgs) => {
  const result = await db.seasonDepartment.findUnique({
    where: { id },
  })
  if (!result) {
    return {
      __typename: 'NotFoundError',
      message: 'SeasonDepartment not found',
    }
  }
  return result
}

export const SeasonDepartment = {
  department: (_obj, { root }) => {
    return db.seasonDepartment
      .findUnique({ where: { id: root?.id } })
      .department()
  },
  season: (_obj, { root }) => {
    return db.seasonDepartment.findUnique({ where: { id: root?.id } }).season()
  },
  seasonGroups: (_obj, { root }) => {
    return db.seasonGroup.findMany({
      where: {
        group: { departmentId: root?.departmentId },
        seasonId: root?.seasonId,
      },
    })
  },
}
