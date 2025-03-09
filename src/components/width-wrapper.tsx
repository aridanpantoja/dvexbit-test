import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

type WidthWrapperProps = HTMLAttributes<HTMLDivElement>

export function WidthWrapper({
  children,
  className,
  ...props
}: WidthWrapperProps) {
  return (
    <div
      className={cn('mx-auto max-w-screen-2xl px-3 md:px-6', className)}
      {...props}
    >
      {children}
    </div>
  )
}
