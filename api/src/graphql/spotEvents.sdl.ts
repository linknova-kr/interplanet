export const schema = gql`
  type SpotEvent implements Node {
    id: ID!
    title: String!
    address: String!
    addressSimple: String!
    startsAt: DateTime!
    endsAt: DateTime!
    description: String!
    imageUrl: String!
    iMade: Boolean!
    my: UserSpotEvent
    userSpotEvents(
      first: Int
      last: Int
      before: String
      after: String
    ): UserSpotEventConnection!
  }

  type SpotEventEdge {
    node: SpotEvent!
    cursor: String!
  }

  type SpotEventConnection {
    pageInfo: PageInfo!
    edges: [SpotEventEdge!]!
  }

  enum SpotEventSort {
    STARTS_AT_ASC
    STARTS_AT_DESC
  }

  enum SpotEventStartAtCriteria {
    PAST
    FUTURE
  }

  type Query {
    spotEvents(
      first: Int
      last: Int
      before: String
      after: String
      sort: SpotEventSort
      startAtCriteria: SpotEventStartAtCriteria
      activeSeasonOnly: Boolean
      iJoined: Boolean
    ): SpotEventConnection! @requireAuth

    spotEvent(id: ID!): SpotEventDetailResult! @requireAuth
  }

  union SpotEventDetailResult = SpotEvent | NotFoundError

  type Mutation {
    createSpotEvent(input: CreateSpotEventInput!): CreateSpotEventResult!
      @requireAuth
    updateSpotEvent(
      id: ID!
      input: UpdateSpotEventInput!
    ): UpdateSpotEventResult! @requireAuth
    deregisterSpotEvent(id: ID!): DeregisterSpotEventResult! @requireAuth
  }

  union CreateSpotEventResult = SpotEvent | NotFoundError
  union UpdateSpotEventResult = SpotEvent | NotFoundError
  union DeregisterSpotEventResult = SpotEvent | NotFoundError

  input CreateSpotEventInput {
    departmentId: String!
    title: String!
    imageUrl: String!
    address: String!
    addressSimple: String!
    startsAt: DateTime!
    endsAt: DateTime!
    description: String!
  }

  input UpdateSpotEventInput {
    departmentId: String
    title: String
    imageUrl: String
    address: String
    addressSimple: String
    startsAt: DateTime
    endsAt: DateTime
    description: String
  }
`
