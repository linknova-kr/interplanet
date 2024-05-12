export const schema = gql`
  type SeasonDepartment implements Node {
    id: ID!
    department: Department!
    season: Season!
    message: String!
    seasonGroups: [SeasonGroup!]!
  }

  union SeasonDepartmentDetailResult = SeasonDepartment | NotFoundError

  type Query {
    seasonDepartment(id: ID!): SeasonDepartmentDetailResult! @skipAuth
  }
`
