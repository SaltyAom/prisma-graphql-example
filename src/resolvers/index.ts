import { postQuery, userQuery } from './queries'
import { postMutation, userMutation } from './mutations'

import Resolvers from './types'

const resolvers: Resolvers = {
	Query: {
		...userQuery,
		...postQuery
	},
	Mutation: {
		...userMutation,
		...postMutation
	}
}

export default resolvers
