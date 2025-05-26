import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'

import { cn } from '@/shared/lib/utils'

function Label({
	className,
	...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
	return (
		<LabelPrimitive.Root
			data-slot="label"
			className={cn(
				'flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300',
				'select-none leading-none',
				'group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50',
				'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
				className
			)}
			{...props}
		/>
	)
}

export { Label }
