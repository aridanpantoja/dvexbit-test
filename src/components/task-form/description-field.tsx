import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { TaskFormFieldProps } from '@/data/schema'

export function DescriptionField({ control }: TaskFormFieldProps) {
  return (
    <FormField
      control={control}
      name="description"
      render={({ field }) => (
        <FormItem className="col-span-2">
          <FormLabel>Description</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Describe your task"
              className="col-span-2 max-h-[80px] resize-none"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
