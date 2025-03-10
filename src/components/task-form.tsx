import { Task } from '@/data/schema'

export function TaskForm({ task }: { task: Task }) {
  const { title } = task

  return <>{title}</>
}
