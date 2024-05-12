export const schema = gql`
  type Season implements Node {
    id: ID!
    name: String!
    startsAt: DateTime!
    endsAt: DateTime!
    seasonDepartments: [SeasonDepartment!]!
  }

  union ActionSeasonResult = Season | NotFoundError

  type Query {
    activeSeason: ActionSeasonResult! @skipAuth
  }
`
