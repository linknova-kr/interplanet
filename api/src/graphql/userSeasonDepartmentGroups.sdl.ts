export const schema = gql`
  enum UserSeasonDepartmentGroupStatus {
    APPROVAL_PENDING
    APPROVED
    REFUND_PENDING
    REFUNDED
  }
  type UserSeasonDepartmentGroup implements Node {
    id: ID!
    seasonGroup: SeasonGroup!
    seasonDepartment: SeasonDepartment!
    status: UserSeasonDepartmentGroupStatus!
    createdAt: DateTime!
  }

  type Mutation {
    createUserSeasonDepartmentGroup(
      input: CreateUserSeasonDepartmentGroupInput!
    ): CreateUserSeasonDepartmentGroupResult! @requireAuth
  }

  input CreateUserSeasonDepartmentGroupInput {
    seasonGroupId: String!
    seasonDepartmentId: String!
  }

  union CreateUserSeasonDepartmentGroupResult =
      UserSeasonDepartmentGroup
    | NotFoundError
    | AlreadyExistsError
`
