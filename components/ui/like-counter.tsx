import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { 
  Heart, 
  ThumbsUp, 
  Star, 
  Plus, 
  Minus, 
  TrendingUp
} from "lucide-react"

import { cn } from "@/lib/design-token-utils"

// Custom filled icon components
const HeartFilled = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      strokeWidth="0"
      {...props}
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
)
HeartFilled.displayName = "HeartFilled"

const StarFilled = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      strokeWidth="0"
      {...props}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
)
StarFilled.displayName = "StarFilled"

const ThumbsUpFilled = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      strokeWidth="0"
      {...props}
    >
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
    </svg>
  )
)
ThumbsUpFilled.displayName = "ThumbsUpFilled"

const TrendingUpFilled = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      {...props}
    >
      <path d="M23 6l-6.5 6L12 7.5l-6 6L2 9.5 12 3l11 3z" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="18" cy="18" r="1" fill="currentColor" />
      <circle cx="6" cy="18" r="1" fill="currentColor" />
    </svg>
  )
)
TrendingUpFilled.displayName = "TrendingUpFilled"

const likeCounterVariants = cva(
  "inline-flex items-center gap-2 rounded-lg font-medium transform-gpu will-change-transform transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 relative overflow-hidden group [&_svg]:transition-transform [&_svg]:duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-600 hover:shadow-md hover:shadow-neutral-900/10 dark:hover:shadow-neutral-900/20 hover:-translate-y-0.5",
        filled:
          "bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5 hover:from-primary-500 hover:to-primary-600 active:scale-95 active:transition-transform active:duration-75",
        outline:
          "border-2 border-neutral-300 dark:border-neutral-600 bg-transparent text-neutral-700 dark:text-neutral-300 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-950/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-500/15",
        ghost:
          "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100 hover:-translate-y-0.5 hover:shadow-md",
        glass:
          "bg-white/20 dark:bg-white/5 backdrop-blur-md border border-white/30 dark:border-white/10 text-neutral-800 dark:text-neutral-200 hover:bg-white/30 dark:hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-neutral-900/15",
        glow:
          "bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/40 hover:-translate-y-1 hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:via-transparent before:to-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        success:
          "bg-gradient-to-br from-success-600 to-success-700 text-white shadow-lg shadow-success-500/25 hover:shadow-xl hover:shadow-success-500/30 hover:-translate-y-0.5 hover:from-success-500 hover:to-success-600",
        warning:
          "bg-gradient-to-br from-warning-600 to-warning-700 text-white shadow-lg shadow-warning-500/25 hover:shadow-xl hover:shadow-warning-500/30 hover:-translate-y-0.5 hover:from-warning-500 hover:to-warning-600",
        destructive:
          "bg-gradient-to-br from-error-600 to-error-700 text-white shadow-lg shadow-error-500/25 hover:shadow-xl hover:shadow-error-500/30 hover:-translate-y-0.5 hover:from-error-500 hover:to-error-600",
        // New variants that fill the icon when liked/voted
        fillOnLike:
          "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-600 hover:shadow-md hover:shadow-neutral-900/10 dark:hover:shadow-neutral-900/20 hover:-translate-y-0.5 data-[liked=true]:bg-gradient-to-br data-[liked=true]:from-primary-600 data-[liked=true]:to-primary-700 data-[liked=true]:text-white data-[liked=true]:border-primary-600 data-[liked=true]:shadow-lg data-[liked=true]:shadow-primary-500/25",
        fillOnLikeSuccess:
          "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-600 hover:shadow-md hover:shadow-neutral-900/10 dark:hover:shadow-neutral-900/20 hover:-translate-y-0.5 data-[liked=true]:bg-gradient-to-br data-[liked=true]:from-success-600 data-[liked=true]:to-success-700 data-[liked=true]:text-white data-[liked=true]:border-success-600 data-[liked=true]:shadow-lg data-[liked=true]:shadow-success-500/25",
        fillOnLikeWarning:
          "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-600 hover:shadow-md hover:shadow-neutral-900/10 dark:hover:shadow-neutral-900/20 hover:-translate-y-0.5 data-[liked=true]:bg-gradient-to-br data-[liked=true]:from-warning-600 data-[liked=true]:to-warning-700 data-[liked=true]:text-white data-[liked=true]:border-warning-600 data-[liked=true]:shadow-lg data-[liked=true]:shadow-warning-500/25",
        fillOnLikeError:
          "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-600 hover:shadow-md hover:shadow-neutral-900/10 dark:hover:shadow-neutral-900/20 hover:-translate-y-0.5 data-[liked=true]:bg-gradient-to-br data-[liked=true]:from-error-600 data-[liked=true]:to-error-700 data-[liked=true]:text-white data-[liked=true]:border-error-600 data-[liked=true]:shadow-lg data-[liked=true]:shadow-error-500/25",
        outlineFill:
          "border-2 border-neutral-300 dark:border-neutral-600 bg-transparent text-neutral-700 dark:text-neutral-300 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-950/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-500/15 data-[liked=true]:bg-primary-50 dark:data-[liked=true]:bg-primary-950/50 data-[liked=true]:border-primary-500 data-[liked=true]:text-primary-700 dark:data-[liked=true]:text-primary-300 data-[liked=true]:shadow-lg data-[liked=true]:shadow-primary-500/20",
        ghostFill:
          "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100 hover:-translate-y-0.5 hover:shadow-md data-[liked=true]:bg-primary-100 dark:data-[liked=true]:bg-primary-900/30 data-[liked=true]:text-primary-700 dark:data-[liked=true]:text-primary-300 data-[liked=true]:shadow-md",
      },
      size: {
        xs: "px-2 py-1 text-xs gap-1 h-6",
        sm: "px-3 py-1.5 text-sm gap-1.5 h-8",
        default: "px-4 py-2 text-sm gap-2 h-10",
        lg: "px-5 py-2.5 text-base gap-2.5 h-12",
        xl: "px-6 py-3 text-lg gap-3 h-14",
      },
      animated: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        animated: true,
        class: "data-[liked=true]:[&_svg]:scale-110 data-[liked=true]:[&_svg]:rotate-12 data-[liked=true]:animate-pulse",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      animated: true,
    },
  }
)

const iconVariants = {
  heart: { outline: Heart, filled: HeartFilled },
  thumbsUp: { outline: ThumbsUp, filled: ThumbsUpFilled },
  star: { outline: Star, filled: StarFilled },
  plus: { outline: Plus, filled: Plus }, // Plus doesn't need a filled version
  minus: { outline: Minus, filled: Minus }, // Minus doesn't need a filled version
  trending: { outline: TrendingUp, filled: TrendingUpFilled },
} as const

// Fill variants that should use filled icons when liked
const fillVariants = [
  'fillOnLike',
  'fillOnLikeSuccess', 
  'fillOnLikeWarning',
  'fillOnLikeError',
  'outlineFill',
  'ghostFill'
] as const

interface LikeCounterProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick">,
    VariantProps<typeof likeCounterVariants> {
  count: number
  liked?: boolean
  icon?: keyof typeof iconVariants
  onClick?: (liked: boolean, count: number) => void
  showCount?: boolean
  animated?: boolean
  counterEffect?: "bounce" | "pop" | "slide" | "glow" | "none"
  maxCount?: number
  formatCount?: (count: number) => string
}

function formatDefaultCount(count: number): string {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`
  }
  return count.toString()
}

const LikeCounter = React.forwardRef<HTMLButtonElement, LikeCounterProps>(
  ({
    className,
    variant,
    size,
    animated = true,
    count,
    liked = false,
    icon = "heart",
    onClick,
    showCount = true,
    counterEffect = "bounce",
    maxCount,
    formatCount = formatDefaultCount,
    style,
    ...props
  }, ref) => {
    const [isAnimating, setIsAnimating] = React.useState(false)
    const [displayCount, setDisplayCount] = React.useState(count)
    const [previousCount, setPreviousCount] = React.useState(count)
    
    // Determine if this variant should use filled icons when liked
    const shouldUseFillVariant = variant && fillVariants.includes(variant as any)
    
    // Select the appropriate icon based on liked state and variant
    const IconComponent = shouldUseFillVariant && liked 
      ? iconVariants[icon].filled 
      : iconVariants[icon].outline
    
    // Update display count when prop changes
    React.useEffect(() => {
      if (count !== previousCount) {
        setIsAnimating(true)
        const timer = setTimeout(() => {
          setDisplayCount(count)
          setPreviousCount(count)
          setIsAnimating(false)
        }, 150)
        
        return () => clearTimeout(timer)
      }
    }, [count, previousCount])

    const handleClick = () => {
      const newLiked = !liked
      const newCount = newLiked ? count + 1 : Math.max(0, count - 1)
      
      // Respect maxCount if provided
      const finalCount = maxCount !== undefined ? Math.min(newCount, maxCount) : newCount
      
      onClick?.(newLiked, finalCount)
    }

    const getCounterEffectClass = () => {
      if (!isAnimating) return ""
      
      switch (counterEffect) {
        case "bounce":
          return "animate-bounce"
        case "pop":
          return "animate-[pop_0.3s_ease-out] [@keyframes_pop]:to-scale-110 [@keyframes_pop]:from-scale-100"
        case "slide":
          return "animate-[slideUp_0.3s_ease-out] [@keyframes_slideUp]:from-translate-y-2 [@keyframes_slideUp]:to-translate-y-0"
        case "glow":
          return "animate-pulse shadow-lg shadow-primary-500/50"
        default:
          return ""
      }
    }

    const getVariantBasedOnState = () => {
      if (liked) {
        switch (variant) {
          case "default":
            return "filled"
          case "outline":
            return "filled"
          case "ghost":
            return "glow"
          default:
            return variant
        }
      }
      return variant
    }

    return (
      <button
        ref={ref}
        data-liked={liked}
        className={cn(
          likeCounterVariants({ 
            variant: getVariantBasedOnState(), 
            size, 
            animated, 
            className 
          })
        )}
        onClick={handleClick}
        style={{
          // Anti-blur properties
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          filter: "blur(0px)",
          backfaceVisibility: "hidden",
          ...style,
        }}
        {...props}
      >
        {/* Icon with heart beat animation when liked */}
        <IconComponent 
          className={cn(
            "shrink-0",
            liked && animated && icon === "heart" && "animate-[heartbeat_0.6s_ease-in-out]",
            liked && animated && icon === "star" && "animate-[starSpin_0.5s_ease-out]",
            liked && animated && icon === "thumbsUp" && "animate-[thumbPop_0.4s_ease-out]",
            size === "xs" && "h-3 w-3",
            size === "sm" && "h-3.5 w-3.5", 
            size === "default" && "h-4 w-4",
            size === "lg" && "h-5 w-5",
            size === "xl" && "h-6 w-6"
          )}
        />
        
        {/* Counter display */}
        {showCount && (
          <span 
            className={cn(
              "font-medium tabular-nums",
              getCounterEffectClass(),
              size === "xs" && "text-xs",
              size === "sm" && "text-xs",
              size === "default" && "text-sm",
              size === "lg" && "text-base",
              size === "xl" && "text-lg"
            )}
          >
            {formatCount(displayCount)}
          </span>
        )}

        {/* Ripple effect on click */}
        <span 
          className="absolute inset-0 rounded-[inherit] opacity-0 group-active:opacity-20 group-active:animate-[ripple_0.6s_ease-out] pointer-events-none bg-white dark:bg-white/20"
        />

        {/* Floating particles effect when liked */}
        {liked && animated && (
          <>
            <span className="absolute -top-1 -right-1 w-1 h-1 bg-primary-400 rounded-full animate-[float1_2s_ease-in-out_infinite] opacity-60" />
            <span className="absolute -top-2 left-1/2 w-0.5 h-0.5 bg-primary-300 rounded-full animate-[float2_2.5s_ease-in-out_infinite] opacity-40" />
            <span className="absolute -bottom-1 -left-1 w-1 h-1 bg-primary-500 rounded-full animate-[float3_1.8s_ease-in-out_infinite] opacity-50" />
          </>
        )}

        {/* Shimmer effect for glow variant */}
        {variant === "glow" && (
          <span className="absolute inset-0 rounded-[inherit] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
        )}

        <style jsx>{`
          @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            25% { transform: scale(1.1) rotate(-5deg); }
            50% { transform: scale(1.2) rotate(5deg); }
            75% { transform: scale(1.1) rotate(-2deg); }
          }
          
          @keyframes starSpin {
            0% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.2) rotate(180deg); }
            100% { transform: scale(1) rotate(360deg); }
          }
          
          @keyframes thumbPop {
            0% { transform: scale(1) translateY(0); }
            50% { transform: scale(1.15) translateY(-2px); }
            100% { transform: scale(1) translateY(0); }
          }
          
          @keyframes ripple {
            0% { transform: scale(0); opacity: 0.5; }
            100% { transform: scale(2); opacity: 0; }
          }
          
          @keyframes float1 {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-8px) translateX(2px); }
            50% { transform: translateY(-4px) translateX(-1px); }
            75% { transform: translateY(-12px) translateX(1px); }
          }
          
          @keyframes float2 {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            33% { transform: translateY(-6px) translateX(-2px); }
            66% { transform: translateY(-10px) translateX(1px); }
          }
          
          @keyframes float3 {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            20% { transform: translateY(-5px) translateX(3px); }
            40% { transform: translateY(-8px) translateX(-1px); }
            60% { transform: translateY(-3px) translateX(2px); }
            80% { transform: translateY(-7px) translateX(-2px); }
          }
        `}</style>
      </button>
    )
  }
)

LikeCounter.displayName = "LikeCounter"

export { LikeCounter, likeCounterVariants }
export type { LikeCounterProps }