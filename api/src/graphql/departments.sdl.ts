export const schema = gql`
  type Department implements Node {
    id: ID!
    name: String!
    slug: String!
    createdAt: DateTime!
    groups(
      first: Int
      last: Int
      before: String
      after: String
    ): GroupConnection!
  }

  type DepartmentEdge {
    node: Department!
    cursor: String!
  }

  type DepartmentConnection {
    pageInfo: PageInfo!
    edges: [DepartmentEdge!]!
  }

  union DepartmentDetailResult = Department | NotFoundError

  type Query {
    departments(
      first: Int
      last: Int
      before: String
      after: String
    ): DepartmentConnection! @skipAuth

    department(slug: String!): DepartmentDetailResult! @skipAuth
  }
`
