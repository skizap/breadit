import type { Post, Vote } from '@/types/db'
import PostVoteClient from './PostVoteClient'

interface PostVoteServerProps {
  postId: string
  initialVotesAmt?: number
  initialVote?: Vote['type'] | null
  getData?: () => Promise<(Post & { votes: Vote[] }) | null>
}

const PostVoteServer = ({
  postId,
  initialVotesAmt,
  initialVote,
}: PostVoteServerProps) => {
  return (
    <PostVoteClient
      postId={postId}
      initialVotesAmt={initialVotesAmt ?? 0}
      initialVote={initialVote}
    />
  )
}

export default PostVoteServer
