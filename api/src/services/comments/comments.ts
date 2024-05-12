import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection'
import type {
  CommentRelationResolvers,
  QuerycommentsArgs,
  Comment as TComment,
} from 'types/graphql'

import { db } from 'src/lib/db'

import { ConnectionResolver } from '../types'

export const comments: ConnectionResolver<Omit<TComment, 'user' | 'isMine'>> = (
  args: QuerycommentsArgs
) => {
  const where = {
    postId: args.postId,
  }
  return findManyCursorConnection(
    (args) => db.comment.findMany({ ...args, where }),
    () => db.comment.count({ where }),
    args
  )
}

export const Comment: CommentRelationResolvers = {
  user: (_obj, { root }) => {
    return db.comment.findUnique({ where: { id: root.id } }).user()
  },
  isMine: (_, { root }) => {
    const userId = context.currentUser?.id
    if (!userId) return false
    return root.userId === userId
  },
}
