export const schema = gql`
  type Board implements Node {
    id: ID!
    nameEn: String!
    nameKr: String!
  }

  union BoardDetailResult = Board | NotFoundError

  type Query {
    boards: [Board!]! @skipAuth
    board(nameEn: String!): BoardDetailResult! @skipAuth
  }
`
