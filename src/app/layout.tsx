import { cn } from '@/lib/utils'
import { Providers } from '@/providers'
import type { Metadata } from 'next'
import { Red_Hat_Display as RedHatDisplay } from 'next/font/google'
import './globals.css'

const redHatDisplay = RedHatDisplay({ subsets: ['latin'] })

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
      <body className={cn('min-h-screen antialiased', redHatDisplay.className)}>
        <Providers>
          <div className="flex h-full w-full flex-col">
            <main className="my-12 h-full flex-1 grow md:my-24">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
