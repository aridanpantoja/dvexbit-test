export type Task = {
  id: string
  title: string
  description: string
  taskDate: string
  status: 'todo' | 'in progress' | 'done'
  email: string
  createdAt: number
  updatedAt: number
}
