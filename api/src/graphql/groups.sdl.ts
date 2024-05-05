export const schema = gql`
  type Group implements Node {
    id: ID!
    department: Department!
    name: String!
    slug: String!
    createdAt: DateTime!
    departmentId: ID!
  }

  type GroupEdge {
    node: Group!
    cursor: String!
  }

  type GroupConnection {
    pageInfo: PageInfo!
    edges: [GroupEdge!]!
  }

  union GroupDetailResult = Group | NotFoundError

  type Query {
    groups(
      first: Int
      last: Int
      before: String
      after: String
      departmentId: ID!
    ): GroupConnection! @skipAuth

    group(slug: String!): GroupDetailResult! @skipAuth
  }
`
