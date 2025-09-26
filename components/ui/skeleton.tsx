import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/design-token-utils"

const skeletonVariants = cva(
  "bg-neutral-200 dark:bg-neutral-800 rounded-md",
  {
    variants: {
      variant: {
        default: "bg-neutral-200 dark:bg-neutral-800",
        lighter: "bg-neutral-100 dark:bg-neutral-700",
        darker: "bg-neutral-300 dark:bg-neutral-900",
      },
      animation: {
        pulse: "animate-pulse",
        wave: "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 dark:before:via-white/10 before:to-transparent before:animate-[shimmer_2s_infinite] [&::before]:content-['']",
        none: "",
      },
      width: {
        auto: "w-auto",
        full: "w-full",
        "1/2": "w-1/2",
        "1/3": "w-1/3",
        "2/3": "w-2/3",
        "1/4": "w-1/4",
        "3/4": "w-3/4",
        "1/5": "w-1/5",
        "2/5": "w-2/5",
        "3/5": "w-3/5",
        "4/5": "w-4/5",
        fit: "w-fit",
      },
      height: {
        auto: "h-auto",
        2: "h-2",
        3: "h-3", 
        4: "h-4",
        5: "h-5",
        6: "h-6",
        8: "h-8",
        10: "h-10",
        12: "h-12",
        16: "h-16",
        20: "h-20",
        24: "h-24",
      },
    },
    defaultVariants: {
      variant: "default",
      animation: "pulse",
      width: "auto",
      height: "auto",
    },
  }
)

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, animation, width, height, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(skeletonVariants({ variant, animation, width, height, className }))}
        {...props}
      />
    )
  }
)
Skeleton.displayName = "Skeleton"

// Pre-built skeleton components for common use cases
const SkeletonText = React.forwardRef<
  HTMLDivElement,
  SkeletonProps & {
    lines?: number
    randomWidths?: boolean
  }
>(({ className, lines = 1, randomWidths = true, ...props }, ref) => {
  // Best practice: varied widths create more realistic loading states
  const getRandomWidth = (index: number, totalLines: number): "auto" | "full" | "1/2" | "1/3" | "2/3" | "1/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "fit" => {
    if (!randomWidths) return "full"
    
    // Last line is typically shorter (60-80%)
    if (index === totalLines - 1 && totalLines > 1) {
      const lastLineWidths = ["3/5", "2/3", "3/4", "4/5"] as const
      return lastLineWidths[Math.floor(Math.random() * lastLineWidths.length)]
    }
    
    // First few lines are usually full or nearly full
    if (index < 2) {
      const fullWidths = ["full", "4/5", "full"] as const
      return fullWidths[Math.floor(Math.random() * fullWidths.length)]
    }
    
    // Middle lines have more variation
    const middleWidths = ["full", "4/5", "3/4", "2/3"] as const
    return middleWidths[Math.floor(Math.random() * middleWidths.length)]
  }

  if (lines === 1) {
    return (
      <Skeleton
        ref={ref}
        height={4}
        width={randomWidths ? "3/4" : "full"}
        className={className}
        {...props}
      />
    )
  }

  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          height={4}
          width={getRandomWidth(index, lines)}
          className={className}
          {...props}
        />
      ))}
    </div>
  )
})
SkeletonText.displayName = "SkeletonText"

const SkeletonAvatar = React.forwardRef<
  HTMLDivElement,
  SkeletonProps & {
    size?: "sm" | "md" | "lg" | "xl"
  }
>(({ className, size = "md", ...props }, ref) => {
  return (
    <Skeleton
      ref={ref}
      width={size === "sm" ? "fit" : size === "lg" ? "fit" : size === "xl" ? "fit" : "fit"}
      height={size === "sm" ? 8 : size === "lg" ? 12 : size === "xl" ? 16 : 10}
      className={cn("rounded-full", className)}
      {...props}
    />
  )
})
SkeletonAvatar.displayName = "SkeletonAvatar"

const SkeletonButton = React.forwardRef<
  HTMLDivElement,
  SkeletonProps & {
    size?: "sm" | "md" | "lg"
    buttonWidth?: "narrow" | "medium" | "wide" | "full"
  }
>(({ className, size = "md", buttonWidth = "medium", ...props }, ref) => {
  const getWidth = (): "fit" | "full" => {
    const widths = {
      narrow: "fit",
      medium: "fit", 
      wide: "fit",
      full: "full"
    } as const
    return widths[buttonWidth]
  }

  return (
    <Skeleton
      ref={ref}
      height={size === "sm" ? 8 : size === "lg" ? 12 : 10}
      width={getWidth()}
      className={cn("rounded-lg", className)}
      {...props}
    />
  )
})
SkeletonButton.displayName = "SkeletonButton"

const SkeletonImage = React.forwardRef<
  HTMLDivElement,
  SkeletonProps & {
    aspectRatio?: "square" | "video" | "wide" | "tall"
  }
>(({ className, aspectRatio = "video", ...props }, ref) => {
  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video", 
    wide: "aspect-[16/9]",
    tall: "aspect-[3/4]",
  }

  return (
    <Skeleton
      ref={ref}
      width="full"
      className={cn("rounded-lg", aspectRatioClasses[aspectRatio], className)}
      {...props}
    />
  )
})
SkeletonImage.displayName = "SkeletonImage"

// Card-specific skeleton layouts
const SkeletonCard = React.forwardRef<
  HTMLDivElement,
  SkeletonProps & {
    layout?: "default" | "media" | "avatar" | "product" | "dashboard"
    size?: "sm" | "md" | "lg"
  }
>(({ className, layout = "default", size = "md", ...props }, ref) => {
  const sizeClasses = {
    sm: "p-3 gap-3",
    md: "p-6 gap-4",
    lg: "p-8 gap-5",
  }

  const layouts = {
    default: (
      <div className={cn("flex flex-col", sizeClasses[size])}>
        <div className="space-y-2">
          <Skeleton height={6} width="2/3" /> {/* Title - shorter than full width */}
          <SkeletonText lines={2} randomWidths={true} />
        </div>
        <SkeletonText lines={3} randomWidths={true} />
      </div>
    ),
    media: (
      <div className="flex flex-col">
        <SkeletonImage aspectRatio="video" className="rounded-t-lg rounded-b-none" />
        <div className={cn("flex flex-col", sizeClasses[size])}>
          <div className="space-y-2">
            <Skeleton height={6} width="3/4" /> {/* Title */}
            <SkeletonText lines={1} randomWidths={true} /> {/* Description */}
          </div>
          <SkeletonText lines={2} randomWidths={true} />
          <div className="flex justify-between items-center pt-4 gap-2">
            <SkeletonButton size="sm" buttonWidth="narrow" />
            <SkeletonButton size="sm" buttonWidth="medium" />
          </div>
        </div>
      </div>
    ),
    avatar: (
      <div className={cn("flex flex-col", sizeClasses[size])}>
        <div className="flex items-start gap-3">
          <SkeletonAvatar size="md" />
          <div className="flex-1 space-y-2">
            <Skeleton height={5} width="2/5" /> {/* Name - reasonable length */}
            <Skeleton height={4} width="1/4" /> {/* Username/handle - shorter */}
          </div>
        </div>
        <SkeletonText lines={3} randomWidths={true} />
      </div>
    ),
    product: (
      <div className="flex flex-col">
        <SkeletonImage aspectRatio="square" className="rounded-t-lg rounded-b-none" />
        <div className={cn("flex flex-col", sizeClasses[size])}>
          <div className="space-y-2">
            <Skeleton height={6} width={"4/5"} /> {/* Product name */}
            <Skeleton height={4} width={"3/5"} /> {/* Short description */}
          </div>
          <div className="flex items-center justify-between">
            <Skeleton height={8} width="fit" /> {/* Price - fixed width */}
            <Skeleton height={4} width="fit" /> {/* Old price - smaller */}
          </div>
          <div className="flex items-center gap-1">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} width="fit" height={4} className="rounded-sm" />
              ))}
            </div>
            <Skeleton height={4} width="fit" className="ml-2" /> {/* Reviews count */}
          </div>
          <div className="flex justify-between items-center pt-4 gap-2">
            <SkeletonButton size="sm" buttonWidth="narrow" /> {/* Like button */}
            <SkeletonButton size="sm" buttonWidth="wide" /> {/* Add to cart */}
          </div>
        </div>
      </div>
    ),
    dashboard: (
      <div className={cn("flex flex-col", sizeClasses[size])}>
        <div className="flex items-center justify-between">
          <Skeleton height={5} width={"2/5"} /> {/* Metric name - reasonable width */}
          <Skeleton width="fit" height={10} className="rounded-lg" /> {/* Icon */}
        </div>
        <div className="space-y-2">
          <Skeleton height={8} width={"3/5"} /> {/* Value - not full width */}
          <div className="flex items-center gap-2">
            <Skeleton height={4} width="fit" /> {/* Percentage */}
            <Skeleton height={4} width="fit" /> {/* Time period */}
          </div>
        </div>
      </div>
    ),
  }

  return (
    <div
      ref={ref}
      className={cn(
        "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg",
        className
      )}
      {...props}
    >
      {layouts[layout]}
    </div>
  )
})
SkeletonCard.displayName = "SkeletonCard"

export {
  Skeleton,
  SkeletonText,
  SkeletonAvatar, 
  SkeletonButton,
  SkeletonImage,
  SkeletonCard,
}