export const schema = gql`
  type GroupProgram implements Node {
    id: ID!
    title: String!
    type: GroupProgramType!
    group: Group!
    hostUser: User!
    startsAt: DateTime!
    endsAt: DateTime!
    address: String!
    addressSimple: String!
    description: String!
    userGroupPrograms(
      first: Int
      last: Int
      before: String
      after: String
    ): UserGroupProgramConnection!
    my: UserGroupProgram
  }

  enum GroupProgramType {
    BOOK_FREE
    BOOK_DESIGNATED
    ENGLISH
    FOUNDER
  }

  type GroupProgramEdge {
    node: GroupProgram!
    cursor: String!
  }

  type GroupProgramConnection {
    pageInfo: PageInfo!
    edges: [GroupProgramEdge!]!
  }

  union GroupProgramDetailResult = GroupProgram | NotFoundError

  enum GroupProgramSort {
    STARTS_AT_ASC
    STARTS_AT_DESC
  }

  enum GroupProgramStartAtCriteria {
    PAST
    FUTURE
  }

  type Query {
    groupPrograms(
      first: Int
      last: Int
      before: String
      after: String
      sort: GroupProgramSort
      startAtCriteria: GroupProgramStartAtCriteria
      departmentId: ID
      iJoined: Boolean
    ): GroupProgramConnection! @skipAuth

    groupProgram(id: ID!): GroupProgramDetailResult! @skipAuth
  }
`
