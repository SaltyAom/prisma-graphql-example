import PostMutation from './post/types'
import UserMutation from './user/types'

type Mutation = PostMutation | UserMutation

export default Mutation