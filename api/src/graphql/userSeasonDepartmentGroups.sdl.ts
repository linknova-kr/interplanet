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
    level: String
    createdAt: DateTime!
  }

  type Query {
    userSeasonDepartmentGroup(id: ID!): UserSeasonDepartmentGroupDetailResult!
      @requireAuth
  }

  union UserSeasonDepartmentGroupDetailResult =
      UserSeasonDepartmentGroup
    | NotFoundError

  type Mutation {
    createUserSeasonDepartmentGroup(
      input: CreateUserSeasonDepartmentGroupInput!
    ): CreateUserSeasonDepartmentGroupResult! @requireAuth

    requestRefundUserSeasonDepartmentGroup(
      input: RequestRefundUserSeasonDepartmentGroupInput!
    ): RequestRefundUserSeasonDepartmentGroupResult! @requireAuth
  }

  input CreateUserSeasonDepartmentGroupInput {
    seasonGroupId: String!
    seasonDepartmentId: String!
    level: String
  }

  union CreateUserSeasonDepartmentGroupResult =
      UserSeasonDepartmentGroup
    | NotFoundError
    | AlreadyExistsError

  input RequestRefundUserSeasonDepartmentGroupInput {
    id: ID!
  }

  union RequestRefundUserSeasonDepartmentGroupResult =
      UserSeasonDepartmentGroup
    | NotFoundError
`
