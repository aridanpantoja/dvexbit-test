import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Column } from '@tanstack/react-table'
import { ArrowDown, ArrowUp, LucideIcon } from 'lucide-react'

type ColumnHeaderProps<TData, TValue> = {
  column: Column<TData, TValue>
  title: string
  icon: LucideIcon
} & React.HTMLAttributes<HTMLDivElement>

export function ColumnHeader<TData, TValue>({
  column,
  title,
  className,
  icon: Icon,
}: ColumnHeaderProps<TData, TValue>) {
  function handleClick() {
    const sortingValue = column.getIsSorted() === 'desc' ? false : true
    column.toggleSorting(sortingValue)
  }

  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="data-[state=open]:bg-accent h-full w-full justify-baseline rounded-none text-sm"
      onClick={handleClick}
    >
      <span>{title}</span>
      {column.getIsSorted() === 'desc' ? (
        <ArrowDown />
      ) : column.getIsSorted() === 'asc' ? (
        <ArrowUp />
      ) : (
        <Icon className="size-4" />
      )}
    </Button>
  )
}
