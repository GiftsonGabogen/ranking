import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/design-token-utils"

const loadingVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium",
  {
    variants: {
      variant: {
        default: "text-primary-600 dark:text-primary-400",
        secondary: "text-secondary-600 dark:text-secondary-400",
        success: "text-success-600 dark:text-success-400",
        warning: "text-warning-600 dark:text-warning-400",
        error: "text-error-600 dark:text-error-400",
        neutral: "text-neutral-600 dark:text-neutral-400",
      },
      size: {
        xs: "text-xs gap-1",
        sm: "text-sm gap-1.5",
        default: "text-sm gap-2",
        lg: "text-base gap-2",
        xl: "text-lg gap-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const spinnerVariants = cva(
  "animate-spin rounded-full border-solid border-t-transparent shrink-0",
  {
    variants: {
      variant: {
        default: "border-primary-600 dark:border-primary-400 border-t-transparent",
        secondary: "border-secondary-600 dark:border-secondary-400 border-t-transparent",
        success: "border-success-600 dark:border-success-400 border-t-transparent",
        warning: "border-warning-600 dark:border-warning-400 border-t-transparent",
        error: "border-error-600 dark:border-error-400 border-t-transparent",
        neutral: "border-neutral-600 dark:border-neutral-400 border-t-transparent",
      },
      size: {
        xs: "size-3 border-[1.5px]",
        sm: "size-3.5 border-[1.5px]",
        default: "size-4 border-2",
        lg: "size-5 border-2",
        xl: "size-6 border-[2.5px]",
      },
      speed: {
        slow: "animate-[spin_2s_linear_infinite]",
        normal: "animate-[spin_1s_linear_infinite]",
        fast: "animate-[spin_0.5s_linear_infinite]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      speed: "normal",
    },
  }
)

const dotsVariants = cva(
  "inline-flex gap-1 items-center shrink-0",
  {
    variants: {
      variant: {
        default: "[&>div]:bg-primary-600 dark:[&>div]:bg-primary-400",
        secondary: "[&>div]:bg-secondary-600 dark:[&>div]:bg-secondary-400",
        success: "[&>div]:bg-success-600 dark:[&>div]:bg-success-400",
        warning: "[&>div]:bg-warning-600 dark:[&>div]:bg-warning-400",
        error: "[&>div]:bg-error-600 dark:[&>div]:bg-error-400",
        neutral: "[&>div]:bg-neutral-600 dark:[&>div]:bg-neutral-400",
      },
      size: {
        xs: "[&>div]:size-1",
        sm: "[&>div]:size-1.5",
        default: "[&>div]:size-2",
        lg: "[&>div]:size-2.5",
        xl: "[&>div]:size-3",
      },
      speed: {
        slow: "[&>div]:animate-[pulse_2s_ease-in-out_infinite]",
        normal: "[&>div]:animate-[pulse_1.5s_ease-in-out_infinite]",
        fast: "[&>div]:animate-[pulse_1s_ease-in-out_infinite]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      speed: "normal",
    },
  }
)

const pulseVariants = cva(
  "rounded-full animate-pulse shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-primary-400/60 to-primary-600/80 dark:from-primary-300/40 dark:to-primary-500/60",
        secondary: "bg-gradient-to-br from-secondary-400/60 to-secondary-600/80 dark:from-secondary-300/40 dark:to-secondary-500/60",
        success: "bg-gradient-to-br from-success-400/60 to-success-600/80 dark:from-success-300/40 dark:to-success-500/60",
        warning: "bg-gradient-to-br from-warning-400/60 to-warning-600/80 dark:from-warning-300/40 dark:to-warning-500/60",
        error: "bg-gradient-to-br from-error-400/60 to-error-600/80 dark:from-error-300/40 dark:to-error-500/60",
        neutral: "bg-gradient-to-br from-neutral-400/60 to-neutral-600/80 dark:from-neutral-300/40 dark:to-neutral-500/60",
      },
      size: {
        xs: "size-6",
        sm: "size-8",
        default: "size-10",
        lg: "size-12",
        xl: "size-16",
      },
      speed: {
        slow: "animate-[pulse_3s_ease-in-out_infinite]",
        normal: "animate-[pulse_2s_ease-in-out_infinite]",
        fast: "animate-[pulse_1s_ease-in-out_infinite]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      speed: "normal",
    },
  }
)

export interface LoadingProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loadingVariants> {
  type?: "spinner" | "dots" | "pulse" | "text"
  speed?: "slow" | "normal" | "fast"
  text?: string
}

// Spinner Component
function Spinner({
  className,
  variant = "default",
  size = "default",
  speed = "normal",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & 
  VariantProps<typeof spinnerVariants> & { 
    speed?: "slow" | "normal" | "fast" 
  }) {
  return (
    <div
      className={cn(spinnerVariants({ variant, size, speed, className }))}
      {...props}
    />
  )
}

// Dots Component
function Dots({
  className,
  variant = "default",
  size = "default",
  speed = "normal",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & 
  VariantProps<typeof dotsVariants> & { 
    speed?: "slow" | "normal" | "fast" 
  }) {
  return (
    <div className={cn(dotsVariants({ variant, size, speed, className }))} {...props}>
      <div className="rounded-full animate-[pulse_1.5s_ease-in-out_0s_infinite]" />
      <div className="rounded-full animate-[pulse_1.5s_ease-in-out_0.2s_infinite]" />
      <div className="rounded-full animate-[pulse_1.5s_ease-in-out_0.4s_infinite]" />
    </div>
  )
}

// Pulse Component
function Pulse({
  className,
  variant = "default",
  size = "default",
  speed = "normal",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & 
  VariantProps<typeof pulseVariants> & { 
    speed?: "slow" | "normal" | "fast" 
  }) {
  return (
    <div
      className={cn(pulseVariants({ variant, size, speed, className }))}
      {...props}
    />
  )
}

// Main Loading Component
function Loading({
  className,
  variant = "default",
  size = "default",
  type = "spinner",
  speed = "normal",
  text = "Loading...",
  ...props
}: LoadingProps) {
  const renderLoader = () => {
    switch (type) {
      case "spinner":
        return <Spinner variant={variant} size={size} speed={speed} />
      case "dots":
        return <Dots variant={variant} size={size} speed={speed} />
      case "pulse":
        return <Pulse variant={variant} size={size} speed={speed} />
      case "text":
        return null
      default:
        return <Spinner variant={variant} size={size} speed={speed} />
    }
  }

  return (
    <div
      className={cn(loadingVariants({ variant, size, className }))}
      role="status"
      aria-live="polite"
      aria-label={text}
      {...props}
    >
      {renderLoader()}
      {text && type !== "pulse" && <span>{text}</span>}
    </div>
  )
}

export { Loading, Spinner, Dots, Pulse, loadingVariants, spinnerVariants, dotsVariants, pulseVariants }