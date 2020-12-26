import PostMutation from './types'

const postMutation: PostMutation = {
	createPost: async (_, { uid, title, detail }, { prisma }) => {
		let user = await prisma.user.update({
			where: {
				uid
			},
			data: {
				posts: {
					create: {
						title,
						detail
					}
				}
            },
            include: {
                posts: {
					orderBy: {
						id: "desc"
					},
					take: 1
				}
            }
        })

        return user.posts[0]
    }
}

export default postMutation
