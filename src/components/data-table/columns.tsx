'use client'

import { ColumnHeader } from '@/components/data-table/column-header'
import { RowActions } from '@/components/data-table/row-actions'
import { Task } from '@/data/schema'
import { capitalize, getDaysRemaining } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import { ALargeSmall, BookOpen, CalendarDays, CircleDashed } from 'lucide-react'
import Link from 'next/link'

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <ColumnHeader column={column} title="Title" icon={ALargeSmall} />
    ),
    cell: ({ row }) => {
      const taskId = row.original.id

      return (
        <div className="flex h-full items-center">
          <Link
            href={`/tasks/${taskId}`}
            className="group relative flex h-full w-full items-center justify-between gap-2"
          >
            <p className="truncate font-semibold group-hover:underline">
              {row.getValue('title')}
            </p>

            <div className="opacity-0 group-hover:opacity-100">
              <BookOpen className="text-muted-foreground size-4" />
            </div>
          </Link>
        </div>
      )
    },
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
    cell: ({ row }) => {
      const taskDate = new Date(row.original.taskDate)
      const daysRemaining = getDaysRemaining(taskDate)

      if (daysRemaining > 0) {
        return (
          <div className="font-medium">
            {daysRemaining === 1 ? '1 day left' : `${daysRemaining} days left`}
          </div>
        )
      } else if (daysRemaining === 0) {
        return <div className="font-medium">Due today!</div>
      } else {
        return (
          <div className="font-medium">
            {Math.abs(daysRemaining) === 1
              ? 'Expired (1 day ago)'
              : `Expired (${Math.abs(daysRemaining)} days ago)`}
          </div>
        )
      }
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <RowActions row={row} />,
  },
]
