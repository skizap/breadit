'use client'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import type { Vote } from '@/types/db'
import { ArrowBigDown, ArrowBigUp } from 'lucide-react'
import { FC, useState } from 'react'

type VoteType = 'UP' | 'DOWN'

interface CommentVotesProps {
  commentId: string
  votesAmt: number
  currentVote?: PartialVote
}

type PartialVote = Pick<Vote, 'type'>

const CommentVotes: FC<CommentVotesProps> = ({
  votesAmt: _votesAmt,
  currentVote: _currentVote,
}) => {
  const [votesAmt, setVotesAmt] = useState<number>(_votesAmt)
  const [currentVote, setCurrentVote] = useState<PartialVote | undefined>(
    _currentVote
  )

  const vote = (type: VoteType) => {
    if (currentVote?.type === type) {
      setCurrentVote(undefined)
      if (type === 'UP') setVotesAmt((prev) => prev - 1)
      else if (type === 'DOWN') setVotesAmt((prev) => prev + 1)
    } else {
      setCurrentVote({ type })
      if (type === 'UP') setVotesAmt((prev) => prev + (currentVote ? 2 : 1))
      else if (type === 'DOWN')
        setVotesAmt((prev) => prev - (currentVote ? 2 : 1))
    }
  }

  return (
    <div className='flex gap-1'>
      {/* upvote */}
      <Button
        onClick={() => vote('UP')}
        size='xs'
        variant='ghost'
        aria-label='upvote'>
        <ArrowBigUp
          className={cn('h-5 w-5 text-zinc-700', {
            'text-emerald-500 fill-emerald-500': currentVote?.type === 'UP',
          })}
        />
      </Button>

      {/* score */}
      <p className='text-center py-2 px-1 font-medium text-xs text-zinc-900'>
        {votesAmt}
      </p>

      {/* downvote */}
      <Button
        onClick={() => vote('DOWN')}
        size='xs'
        className={cn({
          'text-emerald-500': currentVote?.type === 'DOWN',
        })}
        variant='ghost'
        aria-label='downvote'>
        <ArrowBigDown
          className={cn('h-5 w-5 text-zinc-700', {
            'text-red-500 fill-red-500': currentVote?.type === 'DOWN',
          })}
        />
      </Button>
    </div>
  )
}

export default CommentVotes
