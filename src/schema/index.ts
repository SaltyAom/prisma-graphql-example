import { gql } from 'apollo-server-fastify'

const schema = gql`
    type User {
        uid: String!
        user: String!
        pass: String!
        posts: [Post]!
    }

    type Post {
        id: Int!
        uid: String!
        title: String!
        detail: String
    }

    type Query {
        getUserByName(name: String!): User
        getUserByUid(uid: String!): User
        getPostById(id: String!): Post
        getPostsByUser(uid: String!): [Post]!
    }

    type Mutation {
        createUser(user: String!, pass: String!): User
        createPost(uid: String!, title: String!, detail: String): Post
    }
`

export default schema