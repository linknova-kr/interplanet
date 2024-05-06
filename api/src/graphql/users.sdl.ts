export const schema = gql`
  type User implements Node {
    id: ID!
    identifier: String!
    realName: String!
    nickname: String!
    phoneNumber: String!
    birthday: DateTime!
    email: String!
    interests: [String]!
  }
`
