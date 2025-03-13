import { Button } from '@/components/ui/button'
import { WidthWrapper } from '@/components/width-wrapper'
import { Task } from '@/data/schema'
import { ChevronLeft, CircleDashed, Pencil, Trash2 } from 'lucide-react'
import Link from 'next/link'
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
    <article className="my-24 space-y-8">
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
              <Button size="icon" variant="outline">
                <Pencil />
              </Button>

              <Button size="icon" variant="outline">
                <Trash2 />
              </Button>
            </div>
          </div>
        </WidthWrapper>
      </section>

      <section>
        <WidthWrapper>
          <div className="flex flex-col gap-5">
            <h1>DvexFlow - Manage tasks efficiently.</h1>
            <p className="text-muted-foreground text-lg">
              DvexFlow is a modern and intuitive task management platform
              designed to optimize productivity and organization for teams and
              professionals. With features such as task creation, editing, and
              filtering, the tool enables efficient workflow tracking.
            </p>

            <div className="space-x-2">
              <Button>
                <CircleDashed /> Todo
              </Button>
              <Button>
                <CircleDashed /> Todo
              </Button>
              <Button>
                <CircleDashed /> Todo
              </Button>
            </div>
          </div>
        </WidthWrapper>
      </section>
    </article>
  )
}
