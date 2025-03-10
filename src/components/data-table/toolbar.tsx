import { FilterActions } from '@/components/data-table/filter-actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table } from '@tanstack/react-table'
import { Plus, Search } from 'lucide-react'

type ToolbarProps<TData> = {
  table: Table<TData>
}

export function Toolbar<TData>({ table }: ToolbarProps<TData>) {
  return (
    <div className="flex items-center justify-between">
      <div className="relative flex w-full items-center sm:max-w-[400px]">
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

        <Button>
          <Plus /> Add Task
        </Button>
      </div>
    </div>
  )
}
