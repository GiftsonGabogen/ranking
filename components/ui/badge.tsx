import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/design-token-utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1 rounded-full border text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 shrink-0 select-none whitespace-nowrap backdrop-blur-sm relative overflow-hidden will-change-transform antialiased",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-primary-500 to-primary-600 text-white border-primary-500/50 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5 dark:from-primary-400 dark:to-primary-500 dark:shadow-primary-400/20",
        secondary:
          "bg-gradient-to-br from-secondary-500 to-secondary-600 text-white border-secondary-500/50 shadow-lg shadow-secondary-500/20 hover:shadow-xl hover:shadow-secondary-500/25 hover:-translate-y-0.5 dark:from-secondary-400 dark:to-secondary-500 dark:shadow-secondary-400/15",
        success:
          "bg-gradient-to-br from-success-500 to-success-600 text-white border-success-500/50 shadow-lg shadow-success-500/25 hover:shadow-xl hover:shadow-success-500/30 hover:-translate-y-0.5 dark:from-success-400 dark:to-success-500 dark:shadow-success-400/20",
        warning:
          "bg-gradient-to-br from-warning-500 to-warning-600 text-white border-warning-500/50 shadow-lg shadow-warning-500/25 hover:shadow-xl hover:shadow-warning-500/30 hover:-translate-y-0.5 dark:from-warning-400 dark:to-warning-500 dark:shadow-warning-400/20",
        error:
          "bg-gradient-to-br from-error-500 to-error-600 text-white border-error-500/50 shadow-lg shadow-error-500/25 hover:shadow-xl hover:shadow-error-500/30 hover:-translate-y-0.5 dark:from-error-400 dark:to-error-500 dark:shadow-error-400/20",
        outline:
          "border-neutral-300 bg-background/80 backdrop-blur-sm text-foreground shadow-md shadow-neutral-900/5 hover:shadow-lg hover:shadow-neutral-900/10 hover:bg-neutral-50 hover:-translate-y-0.5 dark:border-neutral-600 dark:bg-background/60 dark:hover:bg-neutral-800/50",
        muted:
          "bg-gradient-to-br from-neutral-100 to-neutral-200 text-neutral-700 border-neutral-200/50 shadow-md shadow-neutral-900/5 hover:shadow-lg hover:shadow-neutral-900/10 hover:-translate-y-0.5 dark:from-neutral-800 dark:to-neutral-700 dark:text-neutral-300 dark:border-neutral-700/50",
        glass:
          "bg-white/20 backdrop-blur-md border-white/30 text-foreground shadow-lg shadow-neutral-900/10 hover:bg-white/30 hover:shadow-xl hover:shadow-neutral-900/15 hover:-translate-y-0.5 dark:bg-white/10 dark:border-white/20 dark:hover:bg-white/20",
        gradient:
          "bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 text-white border-primary-500/50 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5 dark:from-primary-400 dark:via-secondary-400 dark:to-primary-500",
        shine:
          "bg-gradient-to-br from-primary-500 to-primary-600 text-white border-primary-500/50 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700 dark:from-primary-400 dark:to-primary-500",
      },
      size: {
        xs: "px-1.5 text-xs gap-0.5 h-4 min-w-4",
        sm: "px-2 text-xs gap-1 h-5 min-w-5",
        default: "px-2.5 text-xs gap-1 h-6 min-w-6",
        lg: "px-3 text-sm gap-1.5 h-7 min-w-7",
        xl: "px-4 text-sm gap-2 h-8 min-w-8",
      },
      shape: {
        default: "rounded-full",
        rounded: "rounded-lg",
        square: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode
  dot?: boolean
  pulse?: boolean
  removable?: boolean
  onRemove?: () => void
}

function Badge({
  className,
  variant,
  size,
  shape,
  icon,
  dot,
  pulse,
  removable,
  onRemove,
  children,
  ...props
}: BadgeProps) {
  const [isRemoving, setIsRemoving] = React.useState(false)

  const handleRemove = React.useCallback(() => {
    setIsRemoving(true)
    setTimeout(() => {
      onRemove?.()
    }, 150)
  }, [onRemove])

  return (
    <div
      data-slot="badge"
      className={cn(
        badgeVariants({ variant, size, shape }),
        pulse && "animate-pulse",
        isRemoving && "animate-out fade-out-0 zoom-out-95 duration-150",
        className
      )}
      {...props}
    >
      {dot && (
        <div
          className={cn(
            "w-1.5 h-1.5 rounded-full bg-current opacity-80",
            pulse && "animate-ping"
          )}
        />
      )}
      {icon && (
        <div className={cn(
          "shrink-0 flex items-center justify-center",
          size === "xs" ? "w-2.5 h-2.5" :
          size === "sm" ? "w-3 h-3" :
          size === "lg" ? "w-4 h-4" :
          size === "xl" ? "w-5 h-5" :
          "w-3.5 h-3.5"
        )}>
          {icon}
        </div>
      )}
      {children && (
        <span 
          className="inline-grid place-items-center leading-tight"
          style={{ 
            transform: 'translateY(-0.05em)',
            fontFeatureSettings: '"kern" 1, "liga" 1'
          }}
        >
          {children}
        </span>
      )}
      {removable && (
        <button
          type="button"
          onClick={handleRemove}
          className={cn(
            "ml-0.5 shrink-0 rounded-full hover:bg-white/20 transition-colors duration-200 focus:outline-none focus:bg-white/20 flex items-center justify-center",
            size === "xs" ? "w-3 h-3" :
            size === "sm" ? "w-3.5 h-3.5" :
            size === "lg" ? "w-4 h-4" :
            size === "xl" ? "w-5 h-5" :
            "w-3.5 h-3.5"
          )}
          aria-label="Remove badge"
        >
          <svg
            viewBox="0 0 12 12"
            className="w-full h-full"
            fill="currentColor"
          >
            <path d="M9 3L3 9M3 3l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  )
}

export { Badge, badgeVariants }