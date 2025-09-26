import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X, Check, AlertCircle, Info, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/design-token-utils"

const toastVariants = cva(
  "group relative flex w-full items-start rounded-lg border shadow-lg transition-all duration-500 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:slide-in-from-right-full data-[state=closed]:slide-out-to-right-full backdrop-blur-sm",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-background/95 to-surface-secondary/90 border-border-primary text-text-primary shadow-neutral-900/10 dark:shadow-neutral-900/20 hover:shadow-lg hover:-translate-y-0.5",
        success:
          "bg-gradient-to-r from-success-50/95 to-success-100/90 border-success-200 text-success-800 shadow-success-500/15 dark:from-success-950/95 dark:to-success-900/90 dark:border-success-800 dark:text-success-200 dark:shadow-success-500/10 hover:shadow-lg hover:shadow-success-500/20 hover:-translate-y-0.5",
        destructive:
          "bg-gradient-to-r from-error-50/95 to-error-100/90 border-error-200 text-error-800 shadow-error-500/15 dark:from-error-950/95 dark:to-error-900/90 dark:border-error-800 dark:text-error-200 dark:shadow-error-500/10 hover:shadow-lg hover:shadow-error-500/20 hover:-translate-y-0.5",
        warning:
          "bg-gradient-to-r from-warning-50/95 to-warning-100/90 border-warning-200 text-warning-800 shadow-warning-500/15 dark:from-warning-950/95 dark:to-warning-900/90 dark:border-warning-800 dark:text-warning-200 dark:shadow-warning-500/10 hover:shadow-lg hover:shadow-warning-500/20 hover:-translate-y-0.5",
        info:
          "bg-gradient-to-r from-primary-50/95 to-primary-100/90 border-primary-200 text-primary-800 shadow-primary-500/15 dark:from-primary-950/95 dark:to-primary-900/90 dark:border-primary-800 dark:text-primary-200 dark:shadow-primary-500/10 hover:shadow-lg hover:shadow-primary-500/20 hover:-translate-y-0.5",
        glass:
          "bg-white/20 backdrop-blur-lg border-white/30 text-foreground shadow-lg shadow-neutral-900/10 hover:bg-white/30 hover:shadow-xl hover:shadow-neutral-900/15 hover:-translate-y-0.5 dark:bg-white/10 dark:border-white/20 dark:hover:bg-white/15",
      },
      size: {
        sm: "text-sm gap-2 p-3",
        default: "text-sm gap-3 p-4",
        lg: "text-base gap-4 p-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const toastIconVariants = cva("shrink-0 mt-0.5", {
  variants: {
    variant: {
      default: "text-text-secondary",
      success: "text-success-600 dark:text-success-400",
      destructive: "text-error-600 dark:text-error-400",
      warning: "text-warning-600 dark:text-warning-400",
      info: "text-primary-600 dark:text-primary-400",
      glass: "text-foreground/80",
    },
    size: {
      sm: "size-4",
      default: "size-5",
      lg: "size-6",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})


interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toastVariants> {
  onClose?: () => void
  showCloseButton?: boolean
  icon?: React.ReactNode
  autoClose?: boolean
  duration?: number
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({
    className,
    variant = "default",
    size = "default",
    children,
    onClose,
    showCloseButton = true,
    icon,
    autoClose = true,
    duration = 5000,
    ...props
  }, ref) => {
    const [mounted, setMounted] = React.useState(true)
    const [isExiting, setIsExiting] = React.useState(false)

    const close = React.useCallback(() => {
      setIsExiting(true)
      setTimeout(() => {
        setMounted(false)
        onClose?.()
      }, 300)
    }, [onClose])

    // Auto close effect - simple and clean
    React.useEffect(() => {
      if (!autoClose || duration <= 0) return
      
      const timer = setTimeout(close, duration)
      return () => clearTimeout(timer)
    }, [autoClose, duration, close])

    const defaultIcons = {
      success: <Check className={cn(toastIconVariants({ variant, size }))} />,
      destructive: <AlertCircle className={cn(toastIconVariants({ variant, size }))} />,
      warning: <AlertTriangle className={cn(toastIconVariants({ variant, size }))} />,
      info: <Info className={cn(toastIconVariants({ variant, size }))} />,
    }

    const displayIcon = icon || (variant && variant !== "default" && variant !== "glass" ? defaultIcons[variant] : null)

    if (!mounted) return null

    return (
      <div
        ref={ref}
        className={cn(
          toastVariants({ variant, size }),
          // Entry animation
          !isExiting && "animate-toast-in",
          // Exit animation  
          isExiting && "animate-toast-out",
          className
        )}
        {...props}
      >
        {displayIcon && displayIcon}
        <div className="flex-1 space-y-1">
          {children}
        </div>
        {showCloseButton && (
          <div className="shrink-0 flex items-start">
            <button
              type="button"
              onClick={close}
              className={cn(
                "rounded-md p-1 text-foreground/50 transition-all duration-200 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-black/5 dark:hover:bg-white/5 hover:scale-110 active:scale-95",
                size === "sm" ? "size-5" : size === "lg" ? "size-7" : "size-6"
              )}
              aria-label="Close toast"
            >
              <X className="size-3" />
            </button>
          </div>
        )}
      </div>
    )
  }
)
Toast.displayName = "Toast"

const ToastTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
ToastTitle.displayName = "ToastTitle"

const ToastDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm opacity-90 leading-relaxed", className)}
    {...props}
  />
))
ToastDescription.displayName = "ToastDescription"

const ToastAction = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "outline"
  }
>(({ className, variant = "outline", ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary disabled:pointer-events-none disabled:opacity-50",
      variant === "outline" 
        ? "border-muted bg-transparent hover:bg-secondary" 
        : "border-transparent bg-primary text-primary-foreground hover:bg-primary/90",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = "ToastAction"

// Toast Container for positioning multiple toasts
const ToastContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center"
  }
>(({ className, position = "top-right", children, ...props }, ref) => {
  const positionClasses = {
    "top-right": "fixed top-4 right-4",
    "top-left": "fixed top-4 left-4",
    "bottom-right": "fixed bottom-4 right-4",
    "bottom-left": "fixed bottom-4 left-4",
    "top-center": "fixed top-4 left-1/2 -translate-x-1/2",
    "bottom-center": "fixed bottom-4 left-1/2 -translate-x-1/2",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "z-toast pointer-events-none flex max-w-sm flex-col-reverse gap-2",
        positionClasses[position],
        className
      )}
      {...props}
    >
      <div className="space-y-2 pointer-events-auto">
        {children}
      </div>
    </div>
  )
})
ToastContainer.displayName = "ToastContainer"

export {
  Toast,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastContainer,
  toastVariants,
  type ToastProps,
}