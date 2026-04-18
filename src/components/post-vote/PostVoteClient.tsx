'use client'

type VoteType = 'UP' | 'DOWN'
import { useEffect, useState } from 'react'
import { Button } from '../ui/Button'
import { ArrowBigDown, ArrowBigUp } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PostVoteClientProps {
  postId: string
  initialVotesAmt: number
  initialVote?: VoteType | null
}

const PostVoteClient = ({
  initialVotesAmt,
  initialVote,
}: PostVoteClientProps) => {
  const [votesAmt, setVotesAmt] = useState<number>(initialVotesAmt)
  const [currentVote, setCurrentVote] = useState<VoteType | null | undefined>(
    initialVote
  )

  useEffect(() => {
    setCurrentVote(initialVote)
  }, [initialVote])

  const vote = (type: VoteType) => {
    if (currentVote === type) {
      setCurrentVote(undefined)
      if (type === 'UP') setVotesAmt((prev) => prev - 1)
      else if (type === 'DOWN') setVotesAmt((prev) => prev + 1)
    } else {
      setCurrentVote(type)
      if (type === 'UP') setVotesAmt((prev) => prev + (currentVote ? 2 : 1))
      else if (type === 'DOWN')
        setVotesAmt((prev) => prev - (currentVote ? 2 : 1))
    }
  }

  return (
    <div className='flex flex-col gap-4 sm:gap-0 pr-6 sm:w-20 pb-4 sm:pb-0'>
      {/* upvote */}
      <Button
        onClick={() => vote('UP')}
        size='sm'
        variant='ghost'
        aria-label='upvote'>
        <ArrowBigUp
          className={cn('h-5 w-5 text-zinc-700', {
            'text-emerald-500 fill-emerald-500': currentVote === 'UP',
          })}
        />
      </Button>

      {/* score */}
      <p className='text-center py-2 font-medium text-sm text-zinc-900'>
        {votesAmt}
      </p>

      {/* downvote */}
      <Button
        onClick={() => vote('DOWN')}
        size='sm'
        className={cn({
          'text-emerald-500': currentVote === 'DOWN',
        })}
        variant='ghost'
        aria-label='downvote'>
        <ArrowBigDown
          className={cn('h-5 w-5 text-zinc-700', {
            'text-red-500 fill-red-500': currentVote === 'DOWN',
          })}
        />
      </Button>
    </div>
  )
}

export default PostVoteClient
