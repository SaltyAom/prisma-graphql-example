import { User } from '../../../schema/types'
import { Context } from '../../../context'

export interface UserQuery {
	getUserByName: (
		parent: any,
		args: GetUserByNameArguments,
		context: Context,
		info: any
	) => Promise<User>
	getUserByUid: (
		parent: any,
		args: GetUserByUid,
		context: Context,
		info: any
	) => Promise<User>
}

export interface GetUserByNameArguments {
	name: string
}

export interface GetUserByUid {
	uid: string
}

export default UserQuery