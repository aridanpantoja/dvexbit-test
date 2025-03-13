'use client'

import { ColumnHeader } from '@/components/data-table/column-header'
import { TaskDate } from '@/components/data-table/task-date'
import { statuses } from '@/data/data'
import { Task } from '@/data/schema'
import { getDaysRemaining } from '@/lib/utils'
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
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue('status'),
      )

      if (!status) {
        return null
      }

      return (
        <div className="flex items-center gap-2">
          {status.icon && (
            <status.icon className="text-muted-foreground size-4" />
          )}
          <span>{status.label}</span>
        </div>
      )
    },
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

      return <TaskDate daysRemaining={daysRemaining} />
    },
  },
]
