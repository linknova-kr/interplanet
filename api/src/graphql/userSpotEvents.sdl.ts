export const schema = gql`
  type UserSpotEvent implements Node {
    id: ID!
    user: User!
    spotEvent: SpotEvent!
    comment: String!
  }

  type UserSpotEventEdge {
    node: UserSpotEvent!
    cursor: String!
  }

  type UserSpotEventConnection {
    pageInfo: PageInfo!
    edges: [UserSpotEventEdge!]!
  }

  type Mutation {
    createUserSpotEvent(
      input: CreateUserSpotEventInput!
    ): CreateUserSpotEventResult! @requireAuth
    cancelUserSpotEvent(
      input: CancelUserSpotEventInput!
    ): CancelUserSpotEventResult! @requireAuth
  }

  union CreateUserSpotEventResult =
      UserSpotEvent
    | AlreadyExistsError
    | NotAllowedError
    | NotFoundError
  union CancelUserSpotEventResult = UserSpotEvent | NotFoundError

  input CreateUserSpotEventInput {
    spotEventId: String!
    comment: String!
  }

  input CancelUserSpotEventInput {
    id: String!
  }
`
