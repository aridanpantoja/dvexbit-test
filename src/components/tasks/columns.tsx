'use client'

import { ColumnHeader } from '@/components/tasks/column-header'
import { RowActions } from '@/components/tasks/row-actions'
import { Checkbox } from '@/components/ui/checkbox'
import { Task } from '@/data/schema'
import { ColumnDef } from '@tanstack/react-table'

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
    header: ({ column }) => <ColumnHeader column={column} title="Title" />,
    cell: ({ row }) => (
      <div className="flex">
        <span className="max-w-[250px] truncate font-semibold">
          {row.getValue('title')}
        </span>
      </div>
    ),
  },
  {
    accessorKey: 'description',
    header: ({ column }) => (
      <ColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => (
      <div className="flex">
        <span className="w-full max-w-[400px] truncate">
          {row.getValue('description')}
        </span>
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: ({ column }) => <ColumnHeader column={column} title="Status" />,
  },
  {
    accessorKey: 'taskDate',
    header: ({ column }) => <ColumnHeader column={column} title="Due date" />,
  },
  {
    id: 'actions',
    cell: ({ row }) => <RowActions row={row} />,
  },
]
