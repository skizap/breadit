import CommentsSection from '@/components/CommentsSection'
import EditorOutput from '@/components/EditorOutput'
import PostVoteClient from '@/components/post-vote/PostVoteClient'
import { formatTimeToNow } from '@/lib/utils'

interface SubRedditPostPageProps {
  params: {
    postId: string
  }
}

const SubRedditPostPage = ({ params }: SubRedditPostPageProps) => {
  const post = {
    id: params.postId,
    title: 'Static post',
    content: {
      time: 0,
      blocks: [
        {
          type: 'paragraph',
          data: { text: 'This is a static post with no backend.' },
        },
      ],
      version: '2.27.0',
    },
    createdAt: new Date(),
    author: { username: 'guest' },
  }

  return (
    <div>
      <div className='h-full flex flex-col sm:flex-row items-center sm:items-start justify-between'>
        <PostVoteClient
          postId={post.id}
          initialVotesAmt={0}
          initialVote={null}
        />

        <div className='sm:w-0 w-full flex-1 bg-white p-4 rounded-sm'>
          <p className='max-h-40 mt-1 truncate text-xs text-gray-500'>
            Posted by u/{post.author.username}{' '}
            {formatTimeToNow(new Date(post.createdAt))}
          </p>
          <h1 className='text-xl font-semibold py-2 leading-6 text-gray-900'>
            {post.title}
          </h1>

          <EditorOutput content={post.content} />
          <CommentsSection postId={post.id} />
        </div>
      </div>
    </div>
  )
}

export default SubRedditPostPage
