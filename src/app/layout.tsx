import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { Providers } from '@/providers'
import { cn } from '@/lib/utils'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DvexFlow',
  description: 'Manage your tasks efficiently and in a personalized way.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen antialiased', outfit.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
