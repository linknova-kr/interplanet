import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection'
import type { Prisma } from '@prisma/client'
import type {
  MutationResolvers,
  MutationcreatePostArgs,
  MutationdeletePostArgs,
  MutationupdatePostArgs,
  PostRelationResolvers,
  QueryResolvers,
  QuerypostArgs,
  QuerypostsArgs,
  Post as TPost,
} from 'types/graphql'

import { db } from 'src/lib/db'

import { ConnectionResolver } from '../types'

export const posts: ConnectionResolver<
  Omit<TPost, 'user' | 'isMine' | 'board'>
> = (args: QuerypostsArgs) => {
  const where = {
    boardId: args.boardId,
    pinned: args.pinned,
  }
  const orderBy: Prisma.PostOrderByWithRelationInput = {
    createdAt:
      args.sort === 'CREATED_AT_ASC'
        ? 'asc'
        : args.sort === 'CREATED_AT_DESC'
        ? 'desc'
        : undefined,
  }
  return findManyCursorConnection(
    (args) => db.post.findMany({ ...args, where, orderBy }),
    () => db.post.count({ where }),
    args
  )
}

export const post: Omit<QueryResolvers['post'], 'user' | 'isMine'> = async ({
  id,
}: QuerypostArgs) => {
  const post = await db.post.findUnique({ where: { id } })
  if (!post) {
    return {
      __typename: 'NotFoundError',
      message: 'Post not found',
    }
  }
  return post
}

export const createPost: Omit<
  MutationResolvers['createPost'],
  'isMine'
> = async ({ input }: MutationcreatePostArgs) => {
  const userId = context.currentUser.id
  const { title, content, boardId } = input

  return db.post.create({
    data: {
      title,
      content,
      boardId,
      userId,
    },
  })
}

export const updatePost: Omit<
  MutationResolvers['updatePost'],
  'isMine'
> = async ({ id, input }: MutationupdatePostArgs) => {
  const userId = context.currentUser.id
  const { title, content } = input
  const post = await db.post.findUnique({ where: { id } })
  if (!post) {
    return {
      __typename: 'NotFoundError',
      message: 'Post not found',
    }
  }
  if (post.userId !== userId) {
    return {
      __typename: 'NotFoundError',
      message: 'Forbidden',
    }
  }
  return db.post.update({
    where: { id },
    data: {
      title,
      content,
    },
  })
}

export const deletePost: MutationResolvers['deletePost'] = async ({
  id,
}: MutationdeletePostArgs) => {
  const userId = context.currentUser.id
  const post = await db.post.findUnique({ where: { id } })
  if (!post) {
    return {
      __typename: 'NotFoundError',
      message: 'Post not found',
    }
  }
  if (post.userId !== userId) {
    return {
      __typename: 'NotFoundError',
      message: 'Forbidden',
    }
  }
  await db.post.delete({ where: { id } })
  return {
    id,
  }
}

export const Post: PostRelationResolvers = {
  user: (_obj, { root }) => {
    return db.post.findUnique({ where: { id: root?.id } }).user()
  },
  isMine: (_, { root }) => {
    const userId = context.currentUser?.id
    if (!userId) return false
    return root.userId === userId
  },
  board: (_obj, { root }) => {
    return db.post.findUnique({ where: { id: root.id } }).board()
  },
}
