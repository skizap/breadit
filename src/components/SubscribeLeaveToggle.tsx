'use client'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'
import { useToast } from '../hooks/use-toast'

interface SubscribeLeaveToggleProps {
  isSubscribed: boolean
  subredditId: string
  subredditName: string
}

const SubscribeLeaveToggle = ({
  isSubscribed: initialIsSubscribed,
  subredditName,
}: SubscribeLeaveToggleProps) => {
  const { toast } = useToast()
  const [isSubscribed, setIsSubscribed] = useState<boolean>(initialIsSubscribed)

  const subscribe = () => {
    setIsSubscribed(true)
    toast({
      title: 'Subscribed! (shell mode)',
      description: `You are now locally subscribed to r/${subredditName}. No backend is connected.`,
    })
  }

  const unsubscribe = () => {
    setIsSubscribed(false)
    toast({
      title: 'Unsubscribed! (shell mode)',
      description: `You are now locally unsubscribed from r/${subredditName}. No backend is connected.`,
    })
  }

  return isSubscribed ? (
    <Button className='w-full mt-1 mb-4' onClick={unsubscribe}>
      Leave community
    </Button>
  ) : (
    <Button className='w-full mt-1 mb-4' onClick={subscribe}>
      Join to post
    </Button>
  )
}

export default SubscribeLeaveToggle
