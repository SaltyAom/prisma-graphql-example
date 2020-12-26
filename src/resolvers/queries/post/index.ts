import PostQuery from "./types"

const postQuery: PostQuery = {
    getPostById: async (_, { id }, { prisma }) => {
        let result = await prisma.post.findFirst({
            where: {
                id
            }
        })

        if(result === null)
            throw "Error"

        return result
    },
    getPostsByUser: async (_, { uid }, { prisma }) => {
        let result = await prisma.post.findMany({
            where: {
                uid
            }
        })

        if (result === null)
            throw "Error"

        return result
    }
}

export default postQuery