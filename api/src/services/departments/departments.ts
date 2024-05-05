import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection'
import type { QueryResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const departments: QueryResolvers['departments'] = (args) => {
  return findManyCursorConnection(
    (args) => db.department.findMany(args),
    () => db.department.count(),
    args
  )
}

export const department: QueryResolvers['department'] = async ({ slug }) => {
  const department = await db.department.findUnique({
    where: { slug },
  })

  if (!department) {
    return { message: 'Department not found' }
  }

  return department
}
