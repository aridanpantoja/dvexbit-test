import { QueryProvider } from '@/providers/query-provider'
import React from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  return <QueryProvider>{children}</QueryProvider>
}
