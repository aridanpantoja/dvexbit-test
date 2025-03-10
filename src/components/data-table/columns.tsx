'use client'

import { ColumnHeader } from '@/components/data-table/column-header'
import { RowActions } from '@/components/data-table/row-actions'
import { Checkbox } from '@/components/ui/checkbox'
import { Task } from '@/data/schema'
import { capitalize } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import { ALargeSmall, CalendarDays, CircleDashed } from 'lucide-react'

export const columns: ColumnDef<Task>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <ColumnHeader column={column} title="Title" icon={ALargeSmall} />
    ),
    cell: ({ row }) => (
      <div className="flex">
        <span className="w-full truncate font-semibold">
          {row.getValue('title')}
        </span>
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <ColumnHeader column={column} title="Status" icon={CircleDashed} />
    ),
    cell: ({ row }) => (
      <div className="flex w-fit items-center gap-1.5 rounded-full bg-red-300 px-2.5 py-0.5">
        <div className="size-2.5 rounded-full bg-red-500"></div>
        {capitalize(row.getValue('status'))}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'taskDate',
    header: ({ column }) => (
      <ColumnHeader column={column} title="Due date" icon={CalendarDays} />
    ),
  },
  {
    id: 'actions',
    cell: ({ row }) => <RowActions row={row} />,
  },
]
