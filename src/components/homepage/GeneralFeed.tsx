import PostFeed from '../PostFeed'
import { mockPosts } from '@/lib/mock-data'

const GeneralFeed = () => {
  const posts = mockPosts

  return <PostFeed initialPosts={posts} />
}

export default GeneralFeed
