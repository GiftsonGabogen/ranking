import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/design-token-utils"

const progressVariants = cva(
  "relative h-2 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800 transform-gpu will-change-transform transition-all duration-300 ease-out",
  {
    variants: {
      variant: {
        default: "bg-neutral-200 dark:bg-neutral-800",
        primary: "bg-primary-100 dark:bg-primary-900/30",
        secondary: "bg-secondary-100 dark:bg-secondary-900/30",
        success: "bg-success-100 dark:bg-success-900/30",
        warning: "bg-warning-100 dark:bg-warning-900/30",
        error: "bg-error-100 dark:bg-error-900/30",
        glass: "bg-white/10 backdrop-blur-sm border border-white/20 dark:bg-white/5 dark:border-white/10",
        gradient: "bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700",
      },
      size: {
        xs: "h-1",
        sm: "h-1.5", 
        default: "h-2",
        lg: "h-3",
        xl: "h-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const progressBarVariants = cva(
  "h-full w-full flex-1 bg-primary-600 transition-all duration-300 ease-out transform-gpu will-change-transform shadow-sm relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary-600 dark:bg-primary-500",
        primary: "bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500",
        secondary: "bg-gradient-to-r from-secondary-500 to-secondary-600 dark:from-secondary-400 dark:to-secondary-500",
        success: "bg-gradient-to-r from-success-500 to-success-600 dark:from-success-400 dark:to-success-500",
        warning: "bg-gradient-to-r from-warning-500 to-warning-600 dark:from-warning-400 dark:to-warning-500",
        error: "bg-gradient-to-r from-error-500 to-error-600 dark:from-error-400 dark:to-error-500",
        glass: "bg-gradient-to-r from-white/40 to-white/60 backdrop-blur-sm dark:from-white/20 dark:to-white/30",
        gradient: "bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 dark:from-primary-400 dark:via-secondary-400 dark:to-primary-500",
      },
      animation: {
        none: "",
        pulse: "animate-pulse",
        shimmer: "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent",
        glow: "shadow-lg shadow-current/20 animate-pulse",
        slide: "animate-[progressSlide_2s_ease-in-out_infinite]",
      },
    },
    defaultVariants: {
      variant: "default",
      animation: "none",
    },
  }
)

const progressLabelVariants = cva(
  "text-sm font-medium transition-colors duration-200",
  {
    variants: {
      variant: {
        default: "text-neutral-700 dark:text-neutral-300",
        primary: "text-primary-700 dark:text-primary-300",
        secondary: "text-secondary-700 dark:text-secondary-300", 
        success: "text-success-700 dark:text-success-300",
        warning: "text-warning-700 dark:text-warning-300",
        error: "text-error-700 dark:text-error-300",
        glass: "text-neutral-800 dark:text-neutral-200",
        gradient: "bg-gradient-to-r from-primary-700 via-secondary-700 to-primary-700 bg-clip-text text-transparent dark:from-primary-300 dark:via-secondary-300 dark:to-primary-300",
      },
      size: {
        xs: "text-xs",
        sm: "text-xs", 
        default: "text-sm",
        lg: "text-base",
        xl: "text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressVariants> {
  value?: number
  max?: number
  showLabel?: boolean
  showPercentage?: boolean
  label?: string
  animation?: "none" | "pulse" | "shimmer" | "glow" | "slide"
  indeterminate?: boolean
  formatValue?: (value: number, max: number) => string
  "aria-label"?: string
  "aria-describedby"?: string
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({
    className,
    variant = "default",
    size = "default",
    value = 0,
    max = 100,
    showLabel = false,
    showPercentage = false,
    label,
    animation = "none",
    indeterminate = false,
    formatValue,
    style,
    ...props
  }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
    const displayValue = formatValue ? formatValue(value, max) : `${Math.round(percentage)}%`
    
    // Determine animation class for indeterminate state
    const indeterminateClass = indeterminate 
      ? "before:absolute before:inset-y-0 before:left-0 before:w-1/3 before:bg-current before:animate-[indeterminateProgress_2s_ease-in-out_infinite]" 
      : ""
    
    const progressBarClass = indeterminate 
      ? "bg-transparent" 
      : progressBarVariants({ variant, animation })

    return (
      <div className="space-y-2">
        {(showLabel || showPercentage) && (
          <div className="flex justify-between items-center">
            {showLabel && label && (
              <span className={cn(progressLabelVariants({ variant, size }))}>
                {label}
              </span>
            )}
            {showPercentage && (
              <span className={cn(progressLabelVariants({ variant, size }), "tabular-nums")}>
                {displayValue}
              </span>
            )}
          </div>
        )}
        <div
          ref={ref}
          className={cn(progressVariants({ variant, size, className }))}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={max}
          aria-valuenow={indeterminate ? undefined : value}
          aria-label={props["aria-label"] || label || "Progress"}
          aria-describedby={props["aria-describedby"]}
          data-variant={variant}
          data-indeterminate={indeterminate}
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
          <div
            className={cn(
              progressBarClass,
              indeterminateClass,
              "rounded-full relative overflow-hidden"
            )}
            style={{
              transform: indeterminate ? undefined : `translateX(-${100 - percentage}%)`,
              transition: indeterminate ? undefined : "transform 300ms ease-out",
            }}
          />
        </div>
      </div>
    )
  }
)

Progress.displayName = "Progress"

// Upload Progress Component - specialized for file uploads
const UploadProgress = React.forwardRef<HTMLDivElement, ProgressProps & {
  fileName?: string
  fileSize?: string
  uploadSpeed?: string
  timeRemaining?: string
}>(
  ({
    fileName,
    fileSize,
    uploadSpeed,
    timeRemaining,
    label = "Uploading",
    variant = "primary",
    animation = "shimmer",
    ...props
  }, ref) => {
    return (
      <div className="space-y-3 p-4 bg-neutral-50 dark:bg-neutral-900/50 rounded-lg border transition-colors duration-200">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            {fileName && (
              <div className="font-medium text-sm truncate text-neutral-900 dark:text-neutral-100">
                {fileName}
              </div>
            )}
            <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              {fileSize && <span>{fileSize}</span>}
              {uploadSpeed && (
                <>
                  <span>•</span>
                  <span>{uploadSpeed}</span>
                </>
              )}
              {timeRemaining && (
                <>
                  <span>•</span>
                  <span>{timeRemaining}</span>
                </>
              )}
            </div>
          </div>
        </div>
        <Progress
          ref={ref}
          label={label}
          variant={variant}
          animation={animation}
          showPercentage
          {...props}
        />
      </div>
    )
  }
)

UploadProgress.displayName = "UploadProgress"

// Task Progress Component - for task/job progress tracking
const TaskProgress = React.forwardRef<HTMLDivElement, ProgressProps & {
  title?: string
  description?: string
  status?: "pending" | "running" | "completed" | "error"
  steps?: { label: string; completed: boolean }[]
}>(
  ({
    title,
    description,
    status = "running",
    steps,
    variant,
    ...props
  }, ref) => {
    // Auto-select variant based on status
    const statusVariant = variant || (
      status === "completed" ? "success" :
      status === "error" ? "error" :
      status === "pending" ? "default" : "primary"
    )
    
    const statusAnimation = status === "running" ? "shimmer" : "none"

    return (
      <div className="space-y-4 p-4 bg-white dark:bg-neutral-800 rounded-lg border shadow-sm transition-all duration-200">
        <div className="space-y-1">
          {title && (
            <div className="font-semibold text-neutral-900 dark:text-neutral-100">
              {title}
            </div>
          )}
          {description && (
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              {description}
            </div>
          )}
        </div>
        
        <Progress
          ref={ref}
          variant={statusVariant}
          animation={statusAnimation}
          showPercentage
          size="lg"
          {...props}
        />
        
        {steps && (
          <div className="space-y-2 text-sm">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={cn(
                  "flex items-center gap-2 transition-colors duration-200",
                  step.completed 
                    ? "text-success-700 dark:text-success-300" 
                    : "text-neutral-500 dark:text-neutral-400"
                )}
              >
                <div className={cn(
                  "size-1.5 rounded-full transition-colors duration-200",
                  step.completed 
                    ? "bg-success-500" 
                    : "bg-neutral-300 dark:bg-neutral-600"
                )} />
                {step.label}
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
)

TaskProgress.displayName = "TaskProgress"

export { 
  Progress, 
  UploadProgress,
  TaskProgress,
  progressVariants,
  progressBarVariants,
  progressLabelVariants
}