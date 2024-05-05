import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection'
import type {
  QueryResolvers,
  QuerydepartmentArgs,
  QuerydepartmentsArgs,
  Department as TDepartment,
} from 'types/graphql'

import { db } from 'src/lib/db'

import { groupsConnection } from '../groups/groups'
import { ConnectionResolver } from '../types'

export const departments: ConnectionResolver<Omit<TDepartment, 'groups'>> = (
  args: QuerydepartmentsArgs
) => {
  return findManyCursorConnection(
    (args) => db.department.findMany(args),
    () => db.department.count(),
    args
  )
}

export const department: Omit<QueryResolvers['department'], 'groups'> = async ({
  slug,
}: QuerydepartmentArgs) => {
  const department = await db.department.findUnique({
    where: { slug },
  })

  if (!department) {
    return { message: 'Department not found' }
  }

  return department
}

export const Department = {
  groups: async (arg, { root }) => {
    return await groupsConnection(arg, { departmentId: root.id })
  },
}
