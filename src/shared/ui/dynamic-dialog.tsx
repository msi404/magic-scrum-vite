import { type FC, type ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/shared/ui/dialog'
import { Separator } from '@/shared/ui/separator'

type DaynamicDialogProps = {
	button: ReactNode
	title: string
	description: string
	children: ReactNode
	className?: string
	open?: boolean
	onOpenChange?: (open: boolean) => void
}

export const DynamicDialog: FC<DaynamicDialogProps> = ({
	button,
	title,
	description,
	children,
	className,
	open,
	onOpenChange
}) => {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogTrigger asChild>{button}</DialogTrigger>
			<DialogContent
				className={cn(
					'max-w-[425px] md:max-w-[600px] max-h-[100%] overflow-y-auto',
					className
				)}
			>
				<DialogHeader className="flex flex-col justify-center items-center">
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>
				<div className="relative my-3">
					<Separator className="absolute bottom-1/4 left-1/2 right-1/2 rtl:translate-x-1/2 ltr:-translate-x-1/2 w-screen" />
				</div>
				<div className="grid gap-4 py-6 relative">{children}</div>
			</DialogContent>
		</Dialog>
	)
}
