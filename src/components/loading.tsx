import { WidthWrapper } from '@/components/width-wrapper'
import { CircleDashed } from 'lucide-react'

export function Loading() {
  return (
    <WidthWrapper>
      <div className="absolute top-1/2 right-1/2 flex translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <CircleDashed className="mr-2 animate-spin" />
        <span>Carregando...</span>
      </div>
    </WidthWrapper>
  )
}
