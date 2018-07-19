import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `
  type Query {
    currentUser: User
  }

  type Mutation {
    login(username: String!, password: String!): User
    signup(username: String!, email: String!, password: String!): User
    logout: User
    active(username: String!, active_code: String!): User
  }

  type User {
    id: ID!,
    username: String!
  }
`

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default schema
