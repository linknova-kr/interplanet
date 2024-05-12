import type { QueryResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const boards: QueryResolvers['boards'] = () => {
  return db.board.findMany()
}

export const board: QueryResolvers['board'] = async ({ nameEn }) => {
  const result = await db.board.findUnique({
    where: { nameEn },
  })
  if (!result) {
    return {
      __typename: 'NotFoundError',
      message: 'Board not found',
    }
  }

  return result
}
