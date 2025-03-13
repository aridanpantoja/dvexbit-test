import { FilterActions } from '@/components/data-table/filter-actions'
import { TaskForm } from '@/components/task-form'
import { Input } from '@/components/ui/input'
import { Table } from '@tanstack/react-table'
import { Search } from 'lucide-react'

type ToolbarProps<TData> = {
  table: Table<TData>
}

export function Toolbar<TData>({ table }: ToolbarProps<TData>) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="relative flex w-full max-w-[200px] items-center">
        <Input
          placeholder="Search"
          value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('title')?.setFilterValue(event.target.value)
          }
          className="pl-8"
        />

        <Search
          className="text-muted-foreground absolute left-3 -z-10 size-4"
          aria-disabled
        />
      </div>

      <div className="flex gap-2">
        <FilterActions column={table.getColumn('status')} />
        <TaskForm />
      </div>
    </div>
  )
}
