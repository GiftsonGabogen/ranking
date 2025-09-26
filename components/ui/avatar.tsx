import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { User, Camera, Edit3 } from "lucide-react"

import { cn } from "@/lib/design-token-utils"

const avatarVariants = cva(
  "relative inline-flex shrink-0 overflow-hidden transform-gpu will-change-transform transition-all duration-300 ease-out outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 border border-neutral-200 dark:border-neutral-600",
        primary: "bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/40 dark:to-primary-800/40 border border-primary-200 dark:border-primary-700",
        secondary: "bg-gradient-to-br from-secondary-100 to-secondary-200 dark:from-secondary-900/40 dark:to-secondary-800/40 border border-secondary-200 dark:border-secondary-700",
        success: "bg-gradient-to-br from-success-100 to-success-200 dark:from-success-900/40 dark:to-success-800/40 border border-success-200 dark:border-success-700",
        warning: "bg-gradient-to-br from-warning-100 to-warning-200 dark:from-warning-900/40 dark:to-warning-800/40 border border-warning-200 dark:border-warning-700",
        error: "bg-gradient-to-br from-error-100 to-error-200 dark:from-error-900/40 dark:to-error-800/40 border border-error-200 dark:border-error-700",
        glass: "bg-white/20 dark:bg-white/5 backdrop-blur-sm border border-white/30 dark:border-white/10",
        ring: "bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 ring-2 ring-primary-500/20 dark:ring-primary-400/30",
        glow: "bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/40 dark:to-primary-800/40 shadow-lg shadow-primary-500/25 dark:shadow-primary-500/15",
      },
      size: {
        xs: "size-6 text-xs",
        sm: "size-8 text-sm",
        default: "size-10 text-base",
        lg: "size-12 text-lg",
        xl: "size-16 text-xl",
        "2xl": "size-20 text-2xl",
        "3xl": "size-24 text-3xl",
      },
      shape: {
        circle: "rounded-full",
        rounded: "rounded-lg",
        square: "rounded-none",
      },
      animation: {
        none: "scale-100",
        subtle: "scale-95 hover:scale-100 hover:shadow-lg hover:shadow-neutral-900/15 dark:hover:shadow-neutral-900/25 active:scale-95",
        bounce: "scale-95 hover:scale-100 hover:animate-pulse hover:shadow-lg hover:shadow-primary-500/20 dark:hover:shadow-primary-500/15 active:scale-90",
        glow: "scale-95 hover:scale-100 hover:shadow-xl hover:shadow-primary-500/25 dark:hover:shadow-primary-500/15 hover:ring-2 hover:ring-primary-500/20 active:scale-90",
        shimmer: "scale-95 relative overflow-hidden hover:scale-100 hover:shadow-lg before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-700",
      },
      status: {
        none: "",
        online: "after:absolute after:bottom-0 after:right-0 after:size-1/4 after:min-w-2 after:min-h-2 after:bg-success-500 after:border-2 after:border-white dark:after:border-neutral-900 after:rounded-full after:animate-pulse",
        offline: "after:absolute after:bottom-0 after:right-0 after:size-1/4 after:min-w-2 after:min-h-2 after:bg-neutral-400 after:border-2 after:border-white dark:after:border-neutral-900 after:rounded-full",
        busy: "after:absolute after:bottom-0 after:right-0 after:size-1/4 after:min-w-2 after:min-h-2 after:bg-error-500 after:border-2 after:border-white dark:after:border-neutral-900 after:rounded-full",
        away: "after:absolute after:bottom-0 after:right-0 after:size-1/4 after:min-w-2 after:min-h-2 after:bg-warning-500 after:border-2 after:border-white dark:after:border-neutral-900 after:rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "circle",
      animation: "subtle",
      status: "none",
    },
  }
)

const avatarImageVariants = cva(
  "aspect-square h-full w-full object-cover transition-transform duration-300 transform-gpu will-change-transform",
  {
    variants: {
      animation: {
        none: "scale-100",
        subtle: "scale-105 group-hover:scale-100",
        bounce: "scale-105 group-hover:scale-100 group-hover:rotate-2",
        glow: "scale-105 group-hover:scale-100",
        shimmer: "scale-105 group-hover:scale-100",
      },
    },
    defaultVariants: {
      animation: "subtle",
    },
  }
)

const avatarFallbackVariants = cva(
  "flex h-full w-full items-center justify-center font-medium text-neutral-700 dark:text-neutral-300 transition-colors duration-200",
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
        ring: "text-neutral-700 dark:text-neutral-300",
        glow: "text-primary-700 dark:text-primary-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  asChild?: boolean
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, variant, size, shape, animation, status, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"

    return (
      <Comp
        ref={ref}
        data-slot="avatar"
        className={cn("group", avatarVariants({ variant, size, shape, animation, status, className }))}
        {...props}
      />
    )
  }
)
Avatar.displayName = "Avatar"

const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement> & {
    animation?: "none" | "subtle" | "bounce" | "glow" | "shimmer"
  }
>(({ className, alt, animation = "subtle", style, ...props }, ref) => (
  <img
    ref={ref}
    data-slot="avatar-image"
    alt={alt}
    className={cn(avatarImageVariants({ animation, className }))}
    style={{
      // Anti-blur properties
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      filter: "blur(0px)",
      backfaceVisibility: "hidden",
      imageRendering: "-webkit-optimize-contrast",
      ...style,
    }}
    {...props}
  />
))
AvatarImage.displayName = "AvatarImage"

export interface AvatarFallbackProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    Pick<VariantProps<typeof avatarFallbackVariants>, "variant"> {}

const AvatarFallback = React.forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  ({ className, variant, children, ...props }, ref) => (
    <span
      ref={ref}
      data-slot="avatar-fallback"
      className={cn(avatarFallbackVariants({ variant, className }))}
      {...props}
    >
      {children || <User className="size-1/2" />}
    </span>
  )
)
AvatarFallback.displayName = "AvatarFallback"

const AvatarGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    max?: number
    spacing?: "tight" | "normal" | "loose"
  }
>(({ className, max = 5, spacing = "normal", children, ...props }, ref) => {
  const spacingClasses = {
    tight: "-space-x-1",
    normal: "-space-x-2",
    loose: "-space-x-3",
  }

  const childrenArray = React.Children.toArray(children)
  const visibleChildren = max ? childrenArray.slice(0, max) : childrenArray
  const hiddenCount = max ? childrenArray.length - max : 0

  return (
    <div
      ref={ref}
      data-slot="avatar-group"
      className={cn("flex items-center", spacingClasses[spacing], className)}
      {...props}
    >
      {visibleChildren}
      {hiddenCount > 0 && (
        <Avatar variant="default" className="border-2 border-white dark:border-neutral-900 z-0">
          <AvatarFallback className="text-xs font-medium">
            +{hiddenCount}
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  )
})
AvatarGroup.displayName = "AvatarGroup"

const AvatarBadge = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & {
    variant?: "default" | "primary" | "secondary" | "success" | "warning" | "error"
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left"
    size?: "sm" | "default" | "lg"
  }
>(({ className, variant = "primary", position = "bottom-right", size = "default", children, ...props }, ref) => {
  const badgeVariants = {
    default: "bg-neutral-500 text-white border-white dark:border-neutral-900",
    primary: "bg-primary-500 text-white border-white dark:border-neutral-900",
    secondary: "bg-secondary-500 text-white border-white dark:border-neutral-900",
    success: "bg-success-500 text-white border-white dark:border-neutral-900",
    warning: "bg-warning-500 text-white border-white dark:border-neutral-900",
    error: "bg-error-500 text-white border-white dark:border-neutral-900",
  }

  const positionClasses = {
    "top-right": "-top-1 -right-1",
    "top-left": "-top-1 -left-1",
    "bottom-right": "-bottom-1 -right-1",
    "bottom-left": "-bottom-1 -left-1",
  }

  const sizeClasses = {
    sm: "min-w-4 h-4 text-xs px-1",
    default: "min-w-5 h-5 text-xs px-1.5",
    lg: "min-w-6 h-6 text-sm px-2",
  }

  return (
    <span
      ref={ref}
      data-slot="avatar-badge"
      className={cn(
        "absolute inline-flex items-center justify-center rounded-full border-2 font-medium z-10 animate-pulse",
        positionClasses[position],
        sizeClasses[size],
        badgeVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
})
AvatarBadge.displayName = "AvatarBadge"

const AvatarUpload = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    onUpload?: (file: File) => void
    accept?: string
    disabled?: boolean
    variant?: "default" | "primary" | "secondary" | "success" | "warning" | "error" | "glass" | "ring" | "glow"
    size?: "xs" | "sm" | "default" | "lg" | "xl" | "2xl" | "3xl"
    shape?: "circle" | "rounded" | "square"
  }
>(({ 
  className, 
  onUpload, 
  accept = "image/*", 
  disabled = false, 
  variant = "default",
  size = "default",
  shape = "circle",
  children, 
  ...props 
}, ref) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && onUpload) {
      onUpload(file)
    }
  }

  return (
    <div
      ref={ref}
      data-slot="avatar-upload"
      className={cn(
        "group relative cursor-pointer",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
        disabled={disabled}
      />
      
      <Avatar variant={variant} size={size} shape={shape} animation="glow">
        {children}
      </Avatar>
      
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-[inherit]">
        <div className="flex flex-col items-center gap-1">
          <Camera className="size-1/3 text-white" />
          <span className="text-xs text-white font-medium">Upload</span>
        </div>
      </div>
    </div>
  )
})
AvatarUpload.displayName = "AvatarUpload"

const AvatarEdit = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: "sm" | "default" | "lg"
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left"
  }
>(({ className, size = "default", position = "bottom-right", ...props }, ref) => {
  const positionClasses = {
    "top-right": "-top-1 -right-1",
    "top-left": "-top-1 -left-1",
    "bottom-right": "-bottom-1 -right-1",
    "bottom-left": "-bottom-1 -left-1",
  }

  const sizeClasses = {
    sm: "size-6",
    default: "size-8",
    lg: "size-10",
  }

  const iconSizes = {
    sm: "size-3",
    default: "size-4",
    lg: "size-5",
  }

  return (
    <button
      ref={ref}
      data-slot="avatar-edit"
      className={cn(
        "absolute z-10 inline-flex items-center justify-center rounded-full bg-primary-500 text-white border-2 border-white dark:border-neutral-900 hover:bg-primary-600 hover:scale-110 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-primary-500/25 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900",
        positionClasses[position],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <Edit3 className={iconSizes[size]} />
    </button>
  )
})
AvatarEdit.displayName = "AvatarEdit"

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarBadge,
  AvatarUpload,
  AvatarEdit,
  avatarVariants,
}