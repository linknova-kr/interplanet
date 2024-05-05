export const schema = gql`
  type UserSeasonGroup {
    id: String!
    seasonGroup: SeasonGroup!
    seasonGroupId: String!
    createdAt: DateTime!
  }

  union CreateUserSeasonGroupResult =
      UserSeasonGroup
    | NotFoundError
    | AlreadyExistsError

  type Mutation {
    createUserSeasonGroup(
      input: CreateUserSeasonGroupInput!
    ): CreateUserSeasonGroupResult! @requireAuth
  }

  input CreateUserSeasonGroupInput {
    seasonGroupId: String!
  }
`
