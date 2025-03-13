import { buttonVariants } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { WidthWrapper } from '@/components/width-wrapper'
import { Moon, RefreshCw } from 'lucide-react'
import Link from 'next/link'

export function Navbar() {
  return (
    <header className="border">
      <WidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <Tooltip>
            <TooltipTrigger>
              <Link
                href="/"
                className="flex items-center gap-2 text-xl font-black"
              >
                <RefreshCw className="size-5" /> DvexFlow
              </Link>
            </TooltipTrigger>
            <TooltipContent>Back to home</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger
              className={buttonVariants({ variant: 'ghost', size: 'icon' })}
            >
              <Moon />
            </TooltipTrigger>
            <TooltipContent>Dark/light mode</TooltipContent>
          </Tooltip>
        </div>
      </WidthWrapper>
    </header>
  )
}
