'use client'

import { DateField } from '@/components/task-form/date-field'
import { DescriptionField } from '@/components/task-form/description-field'
import { StatusField } from '@/components/task-form/status-field'
import { TitleField } from '@/components/task-form/title-field'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Form } from '@/components/ui/form'
import { Task, taskFormSchema, TaskFormValues } from '@/data/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Pencil, Plus } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type TaskFormProps = {
  task?: Task
  onTaskCreated?: (
    task: Omit<Task, 'id' | 'email' | 'createdAt' | 'updatedAt'>,
  ) => void
  onTaskUpdated?: (
    taskId: string,
    updates: Partial<Omit<Task, 'id' | 'email' | 'createdAt' | 'updatedAt'>>,
  ) => void
}

export function TaskForm({
  task,
  onTaskCreated,
  onTaskUpdated,
}: TaskFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const isEditMode = !!task
  const form = useForm<TaskFormValues>({
    resolver: zodResolver(taskFormSchema),
    defaultValues: {
      title: task?.title || '',
      description: task?.description || '',
      taskDate: task?.taskDate || '',
      status: task?.status || 'todo',
    },
  })

  function onSubmit(values: TaskFormValues) {
    if (isEditMode && task && onTaskUpdated) {
      onTaskUpdated(task.id, values)
    } else if (onTaskCreated) {
      onTaskCreated(values)
    }

    setIsOpen(false)
    form.reset()
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className={buttonVariants()}>
        {isEditMode ? (
          <>
            <Pencil /> Edit Task
          </>
        ) : (
          <>
            <Plus /> Add Task
          </>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isEditMode ? 'Edit Task' : 'Create Task'}</DialogTitle>
          <DialogDescription>
            {isEditMode
              ? 'Update the details of your task below.'
              : 'Fill in the details to create a new task.'}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4"
          >
            <TitleField control={form.control} />
            <DescriptionField control={form.control} />
            <DateField control={form.control} />
            <StatusField control={form.control} />

            <Button className="col-span-2" type="submit">
              {isEditMode ? 'Update Task' : 'Create Task'}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
