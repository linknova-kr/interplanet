export const schema = gql`
  type User {
    id: Int!
    identifier: String!
    realName: String!
    nickname: String!
    phoneNumber: String!
    birthday: DateTime!
    email: String!
    interests: [String]!
  }
`
