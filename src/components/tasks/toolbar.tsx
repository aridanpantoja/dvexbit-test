import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table } from '@tanstack/react-table'
import { Filter, Plus, Search } from 'lucide-react'

type ToolbarProps<TData> = {
  table: Table<TData>
}

export function Toolbar<TData>({ table }: ToolbarProps<TData>) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center justify-between">
        <div className="relative flex w-[200px] items-center lg:w-[400px]">
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
          <Button variant="outline">
            <Filter /> Filter
          </Button>

          <Button>
            <Plus /> Add Task
          </Button>
        </div>
      </div>
    </div>
  )
}
