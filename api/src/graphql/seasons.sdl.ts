export const schema = gql`
  type Season implements Node {
    id: ID!
    name: String!
    startsAt: DateTime!
    endsAt: DateTime!
    seasonDepartments: [SeasonDepartment!]!
    seasonGroups(departmentType: DepartmentType): [SeasonGroup!]!
  }

  union ActionSeasonResult = Season | NotFoundError

  type Query {
    activeSeason: ActionSeasonResult! @skipAuth
  }
`
