import { User } from '../../../schema/types'
import { Context } from '../../../context'

export interface UserMutation {
	createUser: (
		parent: any,
		args: CreateUserArguments,
		context: Context,
		info: any
	) => Promise<User>
}

interface CreateUserArguments {
	user: string
	pass: string
}

export default UserMutation