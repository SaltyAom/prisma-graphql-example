import { Post } from '../../../schema/types'
import { Context } from '../../../context'

export interface PostMutation {
	createPost: (
		parent: any,
		args: CreateUserArguments,
		context: Context,
		info: any
	) => Promise<Post>
}

interface CreateUserArguments {
	uid: string
	title: string
	detail?: string
}

export default PostMutation