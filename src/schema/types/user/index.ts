import { Prisma } from '@prisma/client'
// import { Post } from '..'

// interface User {
//     uid: String
//     user: String
//     pass: String
//     posts: Post[]
// }

type User = Prisma.UserGetPayload<{
    include: { posts: true }
}>

export default User