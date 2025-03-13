import { WidthWrapper } from '@/components/width-wrapper'
import { Task } from '@/data/schema'
import { notFound } from 'next/navigation'

type Args = {
  params: Promise<{
    taskId?: string
  }>
}

export default async function TaskPage({ params: paramsPromise }: Args) {
  const { taskId } = await paramsPromise
  const task: Task = await queryTaskById({ taskId })

  if (!task) return notFound()

  return (
    <article>
      <section>
        <WidthWrapper>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </WidthWrapper>
      </section>
    </article>
  )
}
