import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection'
import type {
  MutationResolvers,
  QuerycommentsArgs,
  Comment as TComment,
} from 'types/graphql'

import { db } from 'src/lib/db'

import { ConnectionResolver } from '../types'

export const comments: ConnectionResolver<
  Omit<TComment, 'user' | 'isMine' | 'post'>
> = (args: QuerycommentsArgs) => {
  const where = {
    postId: args.postId,
  }
  return findManyCursorConnection(
    (args) => db.comment.findMany({ ...args, where }),
    () => db.comment.count({ where }),
    args
  )
}

export const createComment: Omit<
  MutationResolvers['createComment'],
  'userId' | 'isMine'
> = async ({ input }) => {
  const userId = context.currentUser?.id
  const { postId, content } = input

  const post = await db.post.findUnique({ where: { id: postId } })
  if (!post) {
    return { __typename: 'NotFoundError', message: 'Post not found' }
  }

  const result = await db.$transaction([
    db.post.update({
      where: { id: postId },
      data: { commentsCount: { increment: 1 } },
    }),
    db.comment.create({
      data: {
        content,
        userId,
        postId,
      },
    }),
  ])
  return result[1]
}

export const updateComment: Omit<
  MutationResolvers['updateComment'],
  'userId' | 'isMine'
> = async ({ id, input }) => {
  const userId = context.currentUser?.id
  const comment = await db.comment.findUnique({ where: { id } })
  if (!comment) {
    return { __typename: 'NotFoundError', message: 'Comment not found' }
  }
  if (comment.userId !== userId) {
    return { __typename: 'NotFoundError', message: 'Comment not found' }
  }

  return db.comment.update({
    where: { id },
    data: input,
  })
}

export const deleteComment: Omit<
  MutationResolvers['deleteComment'],
  'isMine'
> = async ({ id }) => {
  const userId = context.currentUser?.id
  const comment = await db.comment.findUnique({ where: { id } })
  if (!comment) {
    return { __typename: 'NotFoundError', message: 'Comment not found' }
  }
  if (comment.userId !== userId) {
    return { __typename: 'NotFoundError', message: 'Comment not found' }
  }

  const result = await db.$transaction([
    db.post.update({
      where: { id: comment.postId },
      data: { commentsCount: { decrement: 1 } },
    }),
    db.comment.delete({ where: { id } }),
  ])

  return { id, __typename: 'CommentDeleteSuccess', post: result[0] }
}

export const Comment = {
  user: (_obj, { root }) => {
    return db.comment.findUnique({ where: { id: root.id } }).user()
  },
  isMine: (_, { root }) => {
    const userId = context.currentUser?.id
    if (!userId) return false
    return root.userId === userId
  },
  post: (_obj, { root }) => {
    return db.comment.findUnique({ where: { id: root.id } }).post()
  },
}
