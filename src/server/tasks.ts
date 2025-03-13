'use server'

import { Task } from '@/data/schema'
import { axiosInstance } from '@/lib/axios-instance'

export async function createTask(task: Task) {
  const response = await axiosInstance.post<Task>('/', task)
  return response.data
}

export async function updateTask(task: Task) {
  const response = await axiosInstance.put<Task>(`/${task.id}`, task)
  return response.data
}

export async function deleteTask(task: Task) {
  const response = await axiosInstance.delete<Task>(`/${task.id}`)
  return response.data
}
