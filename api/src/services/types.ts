import { Node, PageInfo, Resolver } from 'types/graphql'

export type ConnectionResolver<T extends Node> = Resolver<{
  edges: Array<{ node: T; cursor: string }>
  pageInfo: PageInfo
}>
