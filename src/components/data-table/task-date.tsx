type TaskDateProps = {
  daysRemaining: number
}

const DAY_TEXT = {
  SINGULAR: 'day',
  PLURAL: 'days',
} as const

const MESSAGES = {
  DUE_TODAY: 'Due today!',
  EXPIRED: 'Expired',
} as const

function getDaysRemainingText(days: number) {
  const absoluteDays = Math.abs(days)
  const isSingular = absoluteDays === 1
  const dayText = isSingular ? DAY_TEXT.SINGULAR : DAY_TEXT.PLURAL

  if (days > 0) {
    return `${days} ${dayText} left`
  } else if (days < 0) {
    return `${MESSAGES.EXPIRED} (${absoluteDays} ${dayText} ago)`
  }

  return MESSAGES.DUE_TODAY
}

export function TaskDate({ daysRemaining }: TaskDateProps) {
  const message = getDaysRemainingText(daysRemaining)

  return <div className="font-medium">{message}</div>
}
