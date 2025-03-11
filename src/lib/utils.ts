import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalize(word: string): string {
  return word
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

export function getDaysRemaining(taskDate: Date): number {
  const today = new Date()

  const taskDateNoTime = new Date(
    taskDate.getFullYear(),
    taskDate.getMonth(),
    taskDate.getDate(),
  )
  const todayNoTime = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  )

  const timeDiff = taskDateNoTime.getTime() - todayNoTime.getTime()
  const daysRemaining = Math.round(timeDiff / (1000 * 60 * 60 * 24))

  return daysRemaining
}
