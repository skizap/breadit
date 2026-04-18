'use client'

import { Button } from '@/components/ui/Button'
import { toast } from '@/hooks/use-toast'
import { FC, useState } from 'react'
import { Label } from '@/components/ui/Label'
import { Textarea } from '@/components/ui/Textarea'

interface CreateCommentProps {
  postId: string
  replyToId?: string
}

const CreateComment: FC<CreateCommentProps> = ({}: CreateCommentProps) => {
  const [input, setInput] = useState<string>('')

  const handlePost = () => {
    toast({
      title: 'Shell mode',
      description:
        'Commenting is not available in the UI shell. No backend is connected.',
    })
    setInput('')
  }

  return (
    <div className='grid w-full gap-1.5'>
      <Label htmlFor='comment'>Your comment</Label>
      <div className='mt-2'>
        <Textarea
          id='comment'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={1}
          placeholder='What are your thoughts?'
        />

        <div className='mt-2 flex justify-end'>
          <Button
            disabled={input.length === 0}
            onClick={handlePost}>
            Post (shell)
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CreateComment
