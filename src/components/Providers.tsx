'use client'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import type { FC, ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Providers: FC<LayoutProps> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default Providers
