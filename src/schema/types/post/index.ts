import { Prisma } from "@prisma/client"

// interface Post {
//     id: number
//     uid: string
//     title: string
//     detail: string | null
// }

type Post = Prisma.PostGetPayload<{}>

export default Post