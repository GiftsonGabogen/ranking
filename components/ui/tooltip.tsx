import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/design-token-utils"

const tooltipVariants = cva(
  "absolute z-tooltip px-3 py-2 text-sm font-medium whitespace-nowrap rounded-lg shadow-lg backdrop-blur-sm pointer-events-none select-none transition-opacity duration-200 ease-out",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-neutral-900/95 to-neutral-800/95 text-white border border-neutral-700/50 shadow-neutral-900/25",
        primary:
          "bg-gradient-to-br from-primary-600/95 to-primary-700/95 text-white border border-primary-500/30 shadow-primary-500/25",
        secondary:
          "bg-gradient-to-br from-secondary-600/95 to-secondary-700/95 text-white border border-secondary-500/30 shadow-secondary-500/25",
        success:
          "bg-gradient-to-br from-success-600/95 to-success-700/95 text-white border border-success-500/30 shadow-success-500/25",
        warning:
          "bg-gradient-to-br from-warning-600/95 to-warning-700/95 text-white border border-warning-500/30 shadow-warning-500/25",
        error:
          "bg-gradient-to-br from-error-600/95 to-error-700/95 text-white border border-error-500/30 shadow-error-500/25",
        light:
          "bg-gradient-to-br from-white/95 to-neutral-50/95 text-neutral-900 border border-neutral-200/80 shadow-neutral-900/15",
        glass:
          "bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-neutral-900/20",
      },
      size: {
        sm: "px-2 py-1 text-xs",
        default: "px-3 py-2 text-sm",
        lg: "px-4 py-2.5 text-base",
      },
      position: {
        top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
        bottom: "top-full mt-2 left-1/2 -translate-x-1/2",
        left: "right-full mr-2 top-1/2 -translate-y-1/2",
        right: "left-full ml-2 top-1/2 -translate-y-1/2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      position: "top",
    },
  }
)

const arrowVariants = cva(
  "absolute w-2 h-2 rotate-45",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-neutral-900 to-neutral-800 border-l border-t border-neutral-700/50",
        primary: "bg-gradient-to-br from-primary-600 to-primary-700 border-l border-t border-primary-500/30",
        secondary: "bg-gradient-to-br from-secondary-600 to-secondary-700 border-l border-t border-secondary-500/30",
        success: "bg-gradient-to-br from-success-600 to-success-700 border-l border-t border-success-500/30",
        warning: "bg-gradient-to-br from-warning-600 to-warning-700 border-l border-t border-warning-500/30",
        error: "bg-gradient-to-br from-error-600 to-error-700 border-l border-t border-error-500/30",
        light: "bg-gradient-to-br from-white to-neutral-50 border-l border-t border-neutral-200/80",
        glass: "bg-white/10 border-l border-t border-white/20",
      },
      position: {
        top: "top-full left-1/2 -translate-x-1/2 -mt-1",
        bottom: "bottom-full left-1/2 -translate-x-1/2 -mb-1 rotate-[225deg]",
        left: "left-full top-1/2 -translate-y-1/2 -ml-1 rotate-[135deg]",
        right: "right-full top-1/2 -translate-y-1/2 -mr-1 rotate-[315deg]",
      },
    },
  }
)

interface TooltipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "content">,
    VariantProps<typeof tooltipVariants> {
  content: React.ReactNode
  children: React.ReactNode
  showArrow?: boolean
  delay?: number
  disabled?: boolean
  trigger?: "hover" | "focus" | "click"
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({
    className,
    variant = "default",
    size = "default", 
    position = "top",
    content,
    children,
    showArrow = true,
    delay = 200,
    disabled = false,
    trigger = "hover",
    ...props
  }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false)
    const [isAnimatingIn, setIsAnimatingIn] = React.useState(false)
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

    const showTooltip = React.useCallback(() => {
      if (disabled) return
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true)
        // Trigger animation on next frame
        requestAnimationFrame(() => {
          setIsAnimatingIn(true)
        })
      }, delay)
    }, [disabled, delay])

    const hideTooltip = React.useCallback(() => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      
      setIsAnimatingIn(false)
      // Wait for fade out animation before hiding
      setTimeout(() => {
        setIsVisible(false)
      }, 200)
    }, [])

    React.useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    }, [])

    return (
      <div className="relative inline-block">
        <div
          onMouseEnter={trigger === "hover" ? showTooltip : undefined}
          onMouseLeave={trigger === "hover" ? hideTooltip : undefined}
          onFocus={trigger === "focus" ? showTooltip : undefined}
          onBlur={trigger === "focus" ? hideTooltip : undefined}
          onClick={trigger === "click" ? (isVisible ? hideTooltip : showTooltip) : undefined}
        >
          {children}
        </div>
        
        {isVisible && content && (
          <div
            ref={ref}
            className={cn(
              tooltipVariants({ variant, size, position }),
              isAnimatingIn ? "opacity-100" : "opacity-0",
              className
            )}
            role="tooltip"
            {...props}
          >
            {content}
            {showArrow && (
              <div 
                className={arrowVariants({ variant, position })}
              />
            )}
          </div>
        )}
      </div>
    )
  }
)
Tooltip.displayName = "Tooltip"

export { Tooltip, tooltipVariants, type TooltipProps }