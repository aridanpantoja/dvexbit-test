import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { TaskFormFieldProps } from '@/data/schema'

export function TitleField({ control }: TaskFormFieldProps) {
  return (
    <FormField
      control={control}
      name="title"
      render={({ field }) => (
        <FormItem className="col-span-2">
          <FormLabel>Title</FormLabel>
          <FormControl>
            <Input placeholder="Task title" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
