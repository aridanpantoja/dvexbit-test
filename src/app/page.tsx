'use client'

import { DataTable } from '@/components/data-table'
import { columns } from '@/components/data-table/columns'
import { WidthWrapper } from '@/components/width-wrapper'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'

export default function Home() {
  const { data: tasks, isLoading } = useQuery({
    queryKey: ['get-tasks'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/tasks')
      const data = await response.json()
      return data
    },
  })

  if (isLoading) return null

  return (
    <>
      <WidthWrapper>
        <div className="my-24 space-y-6">
          <div className="flex flex-col gap-5">
            <Image
              src="/images/check-mark.webp"
              alt="✅"
              width={80}
              height={80}
            />
            <h1>DvexFlow - Manage tasks efficiently.</h1>
            <p className="text-muted-foreground text-lg">
              DvexFlow is a modern and intuitive task management platform
              designed to optimize productivity and organization for teams and
              professionals. With features such as task creation, editing, and
              filtering, the tool enables efficient workflow tracking.
            </p>
          </div>
          <DataTable columns={columns} data={tasks} />
        </div>
      </WidthWrapper>
    </>
  )
}
