export const schema = gql`
  type Query {
    userGroupPrograms: UserGroupProgramConnection! @requireAuth
  }

  type Mutation {
    createUserGroupProgram(
      input: CreateUserGroupProgramInput!
    ): CreateUserGroupProgramResult! @requireAuth
    updateUserGroupProgram(
      where: UpdateUserGroupProgramWhere!
      input: UpdateUserGroupProgramInput!
    ): UpdateUserGroupProgramResult! @requireAuth
    cancelUserGroupProgram(
      input: CancelUserGroupProgramInput!
    ): CancelUserGroupProgramResult! @requireAuth
  }

  type UserGroupProgram implements Node {
    id: ID!
    user: User!
    groupProgram: GroupProgram!
    groupProgramId: ID!
    message: String!
    createdAt: DateTime!
    cancelledAt: DateTime
    status: UserGroupProgramStatus!
    type: String!
  }

  enum UserGroupProgramStatus {
    NOT_ATTENDED
    ATTENDED
    ATTENDED_LATE
    CANCELLED
  }

  type UserGroupProgramEdge {
    node: UserGroupProgram!
    cursor: String!
  }

  type UserGroupProgramConnection {
    pageInfo: PageInfo!
    edges: [UserGroupProgramEdge!]!
  }

  input CreateUserGroupProgramInput {
    groupProgramId: ID!
    message: String!
    type: String!
  }

  union CreateUserGroupProgramResult =
      UserGroupProgram
    | NotFoundError
    | AlreadyExistsError

  input UpdateUserGroupProgramWhere {
    id: ID!
  }

  input UpdateUserGroupProgramInput {
    message: String!
    type: String!
  }

  union UpdateUserGroupProgramResult = UserGroupProgram | NotFoundError

  input CancelUserGroupProgramInput {
    id: ID!
  }

  union CancelUserGroupProgramResult = UserGroupProgram | NotFoundError
`
