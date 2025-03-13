import { buttonVariants } from '@/components/ui/button'
import { WidthWrapper } from '@/components/width-wrapper'
import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="">
      <WidthWrapper>
        <div className="flex flex-col items-center justify-center gap-6">
          <Image
            src="/images/404.webp"
            alt="🚧"
            width={96}
            height={96}
            className="mx-auto"
          />

          <h1>Ops! Page Not Found</h1>
          <p className="text-muted-foreground">
            The page that you looking for is unavailable or dont exist
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/" className={buttonVariants()}>
              <ChevronLeft /> Go back to home
            </Link>
          </div>
        </div>
      </WidthWrapper>
    </section>
  )
}
