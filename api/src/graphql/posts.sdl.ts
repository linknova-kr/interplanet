export const schema = gql`
  type Post implements Node {
    id: ID!
    title: String!
    content: String!
    pinned: Boolean!
    board: Board!
    user: User!
    userId: Int!
    imageUrl: String!
    commentsCount: Int!
    isMine: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type PostEdge {
    node: Post!
    cursor: String!
  }

  type PostConnection {
    pageInfo: PageInfo!
    edges: [PostEdge!]!
  }

  enum PostsQuerySort {
    CREATED_AT_ASC
    CREATED_AT_DESC
  }

  union PostDetailResult = Post | NotFoundError

  type Query {
    posts(
      boardId: ID
      first: Int
      last: Int
      before: String
      after: String
      sort: PostsQuerySort
      pinned: Boolean
    ): PostConnection! @skipAuth
    post(id: ID!): PostDetailResult! @skipAuth
  }
`
