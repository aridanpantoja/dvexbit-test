'use client'

import { getTaskById } from '@/client/tasks'
import { Loading } from '@/components/loading'
import { TaskDeleteDialog } from '@/components/task-delete-dialog'
import { TaskForm } from '@/components/task-form'
import { WidthWrapper } from '@/components/width-wrapper'
import { Task } from '@/data/schema'
import { useQuery } from '@tanstack/react-query'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { use } from 'react'

type TaskPageProps = {
  params: Promise<{
    taskId?: string
  }>
}

export default function TaskPage({ params }: TaskPageProps) {
  const resolvedParams = use(params)
  const { taskId } = resolvedParams

  const { data: task, isLoading } = useQuery<Task | null>({
    queryKey: ['get-task-by-id'],
    queryFn: () => getTaskById(taskId as string),
  })

  if (isLoading) return <Loading />

  if (!task) return notFound()

  // Função para formatar a data
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <article className="space-y-8">
      <section>
        <WidthWrapper>
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex w-fit items-center gap-1 font-semibold"
            >
              <ChevronLeft /> Back to home
            </Link>

            <div className="space-x-2">
              <TaskForm task={task} />
              <TaskDeleteDialog task={task} />
            </div>
          </div>
        </WidthWrapper>
      </section>

      <section>
        <WidthWrapper>
          <div className="flex flex-col gap-5">
            <h1>{task.title}</h1>
            <p className="text-muted-foreground text-lg">{task.description}</p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <p className="text-muted-foreground text-sm">Due Date</p>
                <p className="font-medium">
                  {formatDate(new Date(task.taskDate).getTime())}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Status</p>
                <p className="font-medium capitalize">{task.status}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Created At</p>
                <p className="font-medium">{formatDate(task.createdAt)}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Updated At</p>
                <p className="font-medium">{formatDate(task.updatedAt)}</p>
              </div>
            </div>
          </div>
        </WidthWrapper>
      </section>
    </article>
  )
}
