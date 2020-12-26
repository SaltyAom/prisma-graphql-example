import { Post } from '../../../schema/types'
import { Context } from '../../../context'

export interface PostQuery {
	getPostById: (
		parent: any,
		args: GetPostById,
		context: Context,
		info: any
	) => Promise<Post>
	getPostsByUser: (
		parent: any,
		args: GetPostByUser,
		context: Context,
		info: any
	) => Promise<Post[]>
}

interface GetPostById {
	id: number
}

interface GetPostByUser {
	uid: string
}

export default PostQuery
