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

  interface Error {
    message: String!
  }

  type NotFoundError implements Error {
    message: String!
  }

  type AlreadyExistsError implements Error {
    message: String!
  }

  type DeleteSuccess {
    success: Boolean!
  }
`
