'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Task } from '@/data/schema'
import { Row } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'

type RowActionsProps = {
  row: Row<Task>
}

export function RowActions({ row }: RowActionsProps) {
  const task = row.original

  function handleView() {
    console.log(`View ${task.id}`)
  }

  function handleEdit() {
    console.log(`Edit ${task.id}`)
  }

  function handleRemove() {
    console.log(`Remove ${task.id}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="zie" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleView}>View</DropdownMenuItem>
        <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
        <DropdownMenuItem onClick={handleRemove}>Remove</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
