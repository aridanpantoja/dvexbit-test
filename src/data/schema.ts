import { Control } from 'react-hook-form'
import { z } from 'zod'

export type Task = {
  id: string
  title: string
  description: string
  taskDate: string
  status: 'todo' | 'in progress' | 'done'
  createdAt: number
  updatedAt: number
}

export const taskFormSchema = z.object({
  title: z
    .string()
    .min(2, 'Title must be at least 2 characters')
    .max(50, 'Title cannot exceed 50 characters'),
  description: z
    .string()
    .min(2, 'Description must be at least 2 characters')
    .max(200, 'Description cannot exceed 200 characters'),
  taskDate: z.string().min(2, 'Please select a date'),
  status: z.enum(['todo', 'in progress', 'done']),
})

export type TaskFormValues = z.infer<typeof taskFormSchema>

export type TaskFormFieldProps = { control: Control<TaskFormValues> }
