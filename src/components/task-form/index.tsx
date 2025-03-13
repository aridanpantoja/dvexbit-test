'use client'

import { v4 as uuidv4 } from 'uuid'

import { DateField } from '@/components/task-form/date-field'
import { DescriptionField } from '@/components/task-form/description-field'
import { StatusField } from '@/components/task-form/status-field'
import { TitleField } from '@/components/task-form/title-field'
import { Button } from '@/components/ui/button'
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
import { createTask, updateTask } from '@/server/tasks'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Pencil, Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

type TaskFormProps = {
  task?: Task
}

export function TaskForm({ task }: TaskFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const queryClient = useQueryClient()
  const isEditMode = !!task

  const form = useForm<TaskFormValues>({
    resolver: zodResolver(taskFormSchema),
    defaultValues: {
      title: '',
      description: '',
      taskDate: '',
      status: 'todo',
    },
  })

  useEffect(() => {
    if (isOpen) {
      form.reset({
        title: task?.title || '',
        description: task?.description || '',
        taskDate: task?.taskDate || '',
        status: task?.status || 'todo',
      })
    }
  }, [isOpen, task, form])

  const createMutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-all-tasks'] })
    },
  })

  const editMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-task-by-id'],
      })
    },
  })

  function onSubmit(values: TaskFormValues) {
    const { success, data } = taskFormSchema.safeParse(values)

    if (!success) return null

    if (!isEditMode) {
      const newTask = {
        ...data,
        id: uuidv4(),
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
      } as Task

      createMutation.mutate(newTask)
    }

    if (isEditMode) {
      const updatedTask = {
        ...data,
        id: task.id,
        createdAt: task.createdAt,
        updatedAt: new Date().getTime(),
      } as Task

      editMutation.mutate(updatedTask)
    }

    setIsOpen(false)
    form.reset()
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {isEditMode ? (
          <Button size="sm">
            <Pencil /> Edit Task
          </Button>
        ) : (
          <Button>
            <Plus /> Add Task
          </Button>
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
