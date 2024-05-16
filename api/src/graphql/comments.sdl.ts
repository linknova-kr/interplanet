export const schema = gql`
  type Comment {
    id: String!
    user: User!
    userId: Int!
    content: String!
    isMine: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
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

  input CreateCommentInput {
    postId: String!
    userId: Int!
    content: String!
  }

  input UpdateCommentInput {
    postId: String
    userId: Int
    content: String
  }
`
