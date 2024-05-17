export const schema = gql`
  type Comment {
    id: String!
    user: User!
    userId: Int!
    content: String!
    isMine: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
    post: Post!
  }

  type CommentEdge {
    node: Comment!
    cursor: String!
  }

  type CommentConnection {
    pageInfo: PageInfo!
    edges: [CommentEdge!]!
  }

  type Query {
    comments(
      postId: ID!
      first: Int
      last: Int
      before: String
      after: String
    ): CommentConnection! @skipAuth
  }

  type Mutation {
    createComment(input: CreateCommentInput!): CreateCommentResult! @requireAuth
    updateComment(id: ID!, input: UpdateCommentInput!): UpdateCommentResult!
      @requireAuth
    deleteComment(id: ID!): DeleteCommentResult! @requireAuth
  }

  union CreateCommentResult = Comment | NotFoundError
  union UpdateCommentResult = Comment | NotFoundError
  union DeleteCommentResult = CommentDeleteSuccess | NotFoundError

  type CommentDeleteSuccess {
    id: ID!
    post: Post!
  }

  input CreateCommentInput {
    postId: ID!
    content: String!
  }

  input UpdateCommentInput {
    content: String
  }
`
