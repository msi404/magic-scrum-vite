import * as React from 'react'
import { format, startOfDay } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import { Calendar } from '@/shared/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover'

// Import required styles
import 'react-day-picker/dist/style.css'

interface DatePickerProps {
	value: Date | null
	onChange: (date: Date | undefined) => void
	disabled?: boolean
	className?: string
}

export function DatePicker({
	value,
	onChange,
	disabled,
	className
}: DatePickerProps) {
	const [open, setOpen] = React.useState(false)

	const handleSelect = React.useCallback(
		(date: Date | undefined) => {
			onChange(date)
			setOpen(false)
		},
		[onChange]
	)

	// Disable all dates before today
	const disabledDays = React.useMemo(() => {
		const today = startOfDay(new Date())
		return { before: today }
	}, [])

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					className={cn(
						'w-full justify-start text-left font-normal',
						!value && 'text-muted-foreground',
						disabled && 'opacity-50 cursor-not-allowed',
						className
					)}
					disabled={disabled}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{value ? format(value, 'PPP') : <span>اختر التاريخ</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent
				className="w-auto p-0"
				align="start"
				side="bottom"
				sideOffset={4}
			>
				<Calendar
					mode="single"
					selected={value ?? undefined}
					onSelect={handleSelect}
					initialFocus
					disabled={disabled ? true : disabledDays}
					className="rounded-lg border border-gray-200/50 dark:border-gray-800/50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md"
				/>
			</PopoverContent>
		</Popover>
	)
}
