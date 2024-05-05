export const schema = gql`
  scalar ID

  # An object with a Globally Unique ID
  interface Node {
    id: ID!
  }

  type PageInfo {
    startCursor: String
    endCursor: String
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
  }
`
