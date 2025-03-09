import type { Metadata } from 'next'
import { Red_Hat_Display as RedHatDisplay } from 'next/font/google'
import './globals.css'
import { Providers } from '@/providers'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/navbar'

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
            <Navbar />
            <main className="flex-1">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
