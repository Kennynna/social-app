import { cn } from '@/lib/utils'

interface BlockProps {
	children?: React.ReactNode
	className?: string
}

export const Block = ({ className, children }: BlockProps) => {
	return (
		<div className={cn('p-4 text-foreground border border-border', className)}>
			{children}
		</div>
	)
}
