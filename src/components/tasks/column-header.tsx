import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Column } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

interface ColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
}
export function ColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: ColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className={cn('text-xs', className)}
      onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
    >
      {title}
      <ArrowUpDown className="size-4" />
    </Button>
  )
}
