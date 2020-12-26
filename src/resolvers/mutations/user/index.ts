import { pbkdf2Sync } from 'pbkdf2'

import UserMutation from './types'

const hash = (input: string) => {
    let salt = process.env.salt as string

    return pbkdf2Sync(input, salt, 100000, salt.length).toString()
}

const UserMutation: UserMutation = {
	createUser: async (_, { user, pass }, { prisma }) =>
		await prisma.user.create({
			data: {
				user,
				pass: hash(pass)
			},
			include: {
				posts: true
			}
		})
}

export default UserMutation
