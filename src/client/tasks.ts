import { Task } from '@/data/schema'
import { axiosInstance } from '@/lib/axios-instance'

export async function getAllTasks() {
  const response = await axiosInstance.get<Task[]>('/')
  return response.data
}

export async function getTaskById(taskId: string) {
  if (!taskId) return null

  const response = await axiosInstance.get<Task>(`/${taskId}`)
  return response.data
}
