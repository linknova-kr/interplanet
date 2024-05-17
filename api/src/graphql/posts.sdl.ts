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

  type Mutation {
    createPost(input: CreatePostInput!): CreatePostResult! @requireAuth
    updatePost(id: ID!, input: UpdatePostInput!): UpdatePostResult! @requireAuth
    deletePost(id: ID!): DeletePostResult! @requireAuth
  }

  union CreatePostResult = Post | NotFoundError
  union UpdatePostResult = Post | NotFoundError
  union DeletePostResult = DeleteSuccess | NotFoundError

  input CreatePostInput {
    title: String!
    content: String!
    boardId: ID!
  }

  input UpdatePostInput {
    title: String
    content: String
  }
`
