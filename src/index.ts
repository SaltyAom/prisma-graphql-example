import { ApolloServer } from 'apollo-server-fastify'

import fastify from 'fastify'

import typeDefs from './schema'
import resolvers from './resolvers'
import context from './context'

const app = fastify()

const server = new ApolloServer({
    typeDefs,
    resolvers: resolvers as any,
    context
})

app.register(server.createHandler())

app.listen(3000).then(port => {
    console.log(`Listening on :${port}`)
})