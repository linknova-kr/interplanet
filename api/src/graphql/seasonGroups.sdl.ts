export const schema = gql`
  type SeasonGroup implements Node {
    id: ID!
    season: Season!
    group: Group!
    seasonId: ID!
    groupId: ID!
    createdAt: DateTime!
  }

  type SeasonGroupEdge {
    node: SeasonGroup!
    cursor: String!
  }

  type SeasonGroupConnection {
    pageInfo: PageInfo!
    edges: [SeasonGroupEdge!]!
  }
`
