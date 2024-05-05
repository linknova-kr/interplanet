export const schema = gql`
  type Season implements Node {
    id: ID!
    name: String!
    startsAt: DateTime!
    endsAt: DateTime!
    seasonGroups(
      first: Int
      last: Int
      before: String
      after: String
    ): SeasonGroupConnection!
  }

  union ActionSeasonResult = Season | NotFoundError

  type Query {
    activeSeason: ActionSeasonResult! @skipAuth
  }
`
