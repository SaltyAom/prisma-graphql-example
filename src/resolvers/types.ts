import { Query } from "./queries"
import { Mutation } from "./mutations"

interface Resolvers {
    Query: Query
    Mutation: Mutation
}

export default Resolvers
