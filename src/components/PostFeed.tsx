'use client'

import type { ExtendedPost } from '@/types/db'
import type { FC } from 'react'
import Post from './Post'

interface PostFeedProps {
  initialPosts: ExtendedPost[]
  subredditName?: string
}

const PostFeed: FC<PostFeedProps> = ({ initialPosts }) => {
  const posts = initialPosts

  return (
    <ul className='flex flex-col col-span-2 space-y-6'>
      {posts.map((post) => {
        const votesAmt = post.votes.reduce((acc, vote) => {
          if (vote.type === 'UP') return acc + 1
          if (vote.type === 'DOWN') return acc - 1
          return acc
        }, 0)

        return (
          <Post
            key={post.id}
            post={post}
            commentAmt={post.comments.length}
            subredditName={post.subreddit.name}
            votesAmt={votesAmt}
            currentVote={undefined}
          />
        )
      })}
    </ul>
  )
}

export default PostFeed
