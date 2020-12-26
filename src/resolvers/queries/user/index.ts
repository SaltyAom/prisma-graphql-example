import UserQuery from './types'

const userQuery: UserQuery = {
	getUserByName: async (_, { name }, { prisma }) => {
		let result = await prisma.user.findUnique({
			where: {
				user: name
			},
			include: {
				posts: true
			}
		})

		if (result === null) throw 'Error'

		return result
	},
	getUserByUid: async (_, { uid }, { prisma }) => {
		let result = await prisma.user.findUnique({
			where: {
				uid
			},
			include: {
				posts: true
			}
		})

		if (result === null) throw 'Error'

		return result
	}
}

export default userQuery
