'use client'

import { columns } from '@/components/tasks/columns'
import { DataTable } from '@/components/tasks/data-table'
import { WidthWrapper } from '@/components/width-wrapper'
import { useQuery } from '@tanstack/react-query'

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
        <div className="my-8">
          <DataTable columns={columns} data={tasks} />
        </div>
      </WidthWrapper>
    </>
  )
}
