'use client'

import { usePathname, useRouter } from 'next/navigation'
import { FC, useEffect, useMemo, useRef, useState } from 'react'

interface SearchResult {
  id: string
  name: string
  _count: { posts: number }
}

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/Command'
import { useOnClickOutside } from '@/hooks/use-on-click-outside'
import { Users } from 'lucide-react'

interface SearchBarProps {}

// Local shell-mode mock data (no backend)
const MOCK_COMMUNITIES: SearchResult[] = []

const SearchBar: FC<SearchBarProps> = ({}) => {
  const [input, setInput] = useState<string>('')
  const pathname = usePathname()
  const commandRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useOnClickOutside(commandRef, () => {
    setInput('')
  })

  const queryResults = useMemo<SearchResult[]>(() => {
    if (!input) return []
    const q = input.toLowerCase()
    return MOCK_COMMUNITIES.filter((c) => c.name.toLowerCase().includes(q))
  }, [input])

  useEffect(() => {
    setInput('')
  }, [pathname])

  return (
    <Command
      ref={commandRef}
      className='relative rounded-lg border max-w-lg z-50 overflow-visible'>
      <CommandInput
        onValueChange={(text) => {
          setInput(text)
        }}
        value={input}
        className='outline-none border-none focus:border-none focus:outline-none ring-0'
        placeholder='Search communities...'
      />

      {input.length > 0 && (
        <CommandList className='absolute bg-white top-full inset-x-0 shadow rounded-b-md'>
          <CommandEmpty>No results found (shell mode).</CommandEmpty>
          {queryResults.length > 0 ? (
            <CommandGroup heading='Communities'>
              {queryResults.map((subreddit) => (
                <CommandItem
                  onSelect={(e) => {
                    router.push(`/r/${e}`)
                    router.refresh()
                  }}
                  key={subreddit.id}
                  value={subreddit.name}>
                  <Users className='mr-2 h-4 w-4' />
                  <a href={`/r/${subreddit.name}`}>r/{subreddit.name}</a>
                </CommandItem>
              ))}
            </CommandGroup>
          ) : null}
        </CommandList>
      )}
    </Command>
  )
}

export default SearchBar
