'use client'

import { useOnClickOutside } from '@/hooks/use-on-click-outside'
import { formatTimeToNow } from '@/lib/utils'
import type { Comment, User, Vote } from '@/types/db'
import { MessageSquare } from 'lucide-react'
import { type FC, useRef, useState } from 'react'
import CommentVotes from '../CommentVotes'
import { UserAvatar } from '../UserAvatar'
import { Button } from '../ui/Button'
import { Label } from '../ui/Label'
import { Textarea } from '../ui/Textarea'
import { toast } from '../../hooks/use-toast'

type ExtendedComment = Comment & {
  votes: Vote[]
  author: User
}

interface PostCommentProps {
  comment: ExtendedComment
  votesAmt: number
  currentVote: Pick<Vote, 'type'> | undefined
  postId: string
}

const PostComment: FC<PostCommentProps> = ({
  comment,
  votesAmt,
  currentVote,
}) => {
  const [isReplying, setIsReplying] = useState<boolean>(false)
  const commentRef = useRef<HTMLDivElement>(null!)
  const [input, setInput] = useState<string>(`@${comment.author.username} `)
  useOnClickOutside(commentRef, () => {
    setIsReplying(false)
  })

  const postComment = () => {
    toast({
      title: 'Shell mode',
      description:
        'Replying is not available in the UI shell. No backend is connected.',
    })
    setIsReplying(false)
  }

  return (
    <div ref={commentRef} className='flex flex-col'>
      <div className='flex items-center'>
        <UserAvatar
          user={{
            name: comment.author.name || null,
            image: comment.author.image || null,
          }}
          className='h-6 w-6'
        />
        <div className='ml-2 flex items-center gap-x-2'>
          <p className='text-sm font-medium text-gray-900'>u/{comment.author.username}</p>

          <p className='max-h-40 truncate text-xs text-zinc-500'>
            {formatTimeToNow(new Date(comment.createdAt))}
          </p>
        </div>
      </div>

      <p className='text-sm text-zinc-900 mt-2'>{comment.text}</p>

      <div className='flex gap-2 items-center'>
        <CommentVotes
          commentId={comment.id}
          votesAmt={votesAmt}
          currentVote={currentVote}
        />

        <Button
          onClick={() => setIsReplying(true)}
          variant='ghost'
          size='xs'>
          <MessageSquare className='h-4 w-4 mr-1.5' />
          Reply
        </Button>
      </div>

      {isReplying ? (
        <div className='grid w-full gap-1.5'>
          <Label htmlFor='comment'>Your comment</Label>
          <div className='mt-2'>
            <Textarea
              onFocus={(e) =>
                e.currentTarget.setSelectionRange(
                  e.currentTarget.value.length,
                  e.currentTarget.value.length
                )
              }
              autoFocus
              id='comment'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={1}
              placeholder='What are your thoughts?'
            />

            <div className='mt-2 flex justify-end gap-2'>
              <Button
                tabIndex={-1}
                variant='subtle'
                onClick={() => setIsReplying(false)}>
                Cancel
              </Button>
              <Button
                onClick={() => {
                  if (!input) return
                  postComment()
                }}>
                Post (shell)
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default PostComment
