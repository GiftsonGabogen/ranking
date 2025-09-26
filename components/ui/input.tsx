import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/design-token-utils"
import { components } from "@/lib/design-tokens"

const inputVariants = cva(
  "flex w-full rounded-lg text-sm transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 outline-none",
  {
    variants: {
      variant: {
        default:
          "border border-neutral-200 bg-white shadow-sm shadow-neutral-900/5 hover:shadow-md hover:shadow-neutral-900/10 hover:border-neutral-300 focus:border-primary-500 focus:ring-[3px] focus:ring-primary-500/20 focus:shadow-lg focus:shadow-primary-500/10 dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-neutral-950/20 dark:hover:border-neutral-700 dark:hover:shadow-neutral-950/30 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 dark:focus:shadow-primary-400/10",
        destructive:
          "border border-error-200 bg-error-50/30 text-error-900 shadow-sm shadow-error-900/5 placeholder:text-error-400 hover:shadow-md hover:shadow-error-500/10 hover:border-error-300 focus:border-error-500 focus:ring-[3px] focus:ring-error-500/20 focus:shadow-lg focus:shadow-error-500/10 dark:border-error-900/50 dark:bg-error-950/20 dark:text-error-100 dark:shadow-error-950/20 dark:placeholder:text-error-500 dark:hover:border-error-800 dark:hover:shadow-error-950/30 dark:focus:border-error-400 dark:focus:ring-error-400/20 dark:focus:shadow-error-400/10",
        success:
          "border border-success-200 bg-success-50/30 text-success-900 shadow-sm shadow-success-900/5 placeholder:text-success-400 hover:shadow-md hover:shadow-success-500/10 hover:border-success-300 focus:border-success-500 focus:ring-[3px] focus:ring-success-500/20 focus:shadow-lg focus:shadow-success-500/10 dark:border-success-900/50 dark:bg-success-950/20 dark:text-success-100 dark:shadow-success-950/20 dark:placeholder:text-success-500 dark:hover:border-success-800 dark:hover:shadow-success-950/30 dark:focus:border-success-400 dark:focus:ring-success-400/20 dark:focus:shadow-success-400/10",
        warning:
          "border border-warning-200 bg-warning-50/30 text-warning-900 shadow-sm shadow-warning-900/5 placeholder:text-warning-400 hover:shadow-md hover:shadow-warning-500/10 hover:border-warning-300 focus:border-warning-500 focus:ring-[3px] focus:ring-warning-500/20 focus:shadow-lg focus:shadow-warning-500/10 dark:border-warning-900/50 dark:bg-warning-950/20 dark:text-warning-100 dark:shadow-warning-950/20 dark:placeholder:text-warning-500 dark:hover:border-warning-800 dark:hover:shadow-warning-950/30 dark:focus:border-warning-400 dark:focus:ring-warning-400/20 dark:focus:shadow-warning-400/10",
        outline:
          "border-2 border-neutral-300 bg-transparent shadow-sm hover:shadow-md hover:border-primary-400 focus:border-primary-500 focus:ring-[3px] focus:ring-primary-500/20 focus:shadow-lg focus:shadow-primary-500/10 dark:border-neutral-700 dark:hover:border-primary-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 dark:focus:shadow-primary-400/10",
        ghost:
          "border border-transparent bg-neutral-50/50 hover:bg-neutral-100 hover:shadow-sm hover:shadow-neutral-900/5 focus:bg-white focus:border-neutral-200 focus:ring-[3px] focus:ring-neutral-500/10 focus:shadow-md focus:shadow-neutral-900/10 dark:bg-neutral-900/30 dark:hover:bg-neutral-900/50 dark:hover:shadow-neutral-950/20 dark:focus:bg-neutral-900 dark:focus:border-neutral-700 dark:focus:ring-neutral-400/10 dark:focus:shadow-neutral-950/20",
        filled:
          "border border-transparent bg-neutral-100 shadow-inner shadow-neutral-900/5 hover:bg-neutral-50 hover:shadow-sm hover:shadow-neutral-900/5 focus:bg-white focus:border-neutral-200 focus:ring-[3px] focus:ring-primary-500/20 focus:shadow-md focus:shadow-primary-500/5 dark:bg-neutral-900 dark:shadow-neutral-950/20 dark:hover:bg-neutral-800 dark:hover:shadow-neutral-950/10 dark:focus:bg-neutral-800 dark:focus:border-neutral-700 dark:focus:ring-primary-400/20 dark:focus:shadow-primary-400/5",
      },
      size: {
        xs: "h-7 text-xs",
        sm: "h-8 text-sm",
        default: "h-10 text-sm",
        lg: "h-12 text-base",
        xl: "h-14 text-lg",
      },
      isInvalid: {
        true: "border-error-500 shadow-sm shadow-error-500/10 focus:border-error-500 focus:ring-error-500/20 focus:shadow-error-500/10 dark:border-error-400 dark:shadow-error-400/10 dark:focus:border-error-400 dark:focus:ring-error-400/20 dark:focus:shadow-error-400/10 animate-shake",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      isInvalid: false,
    },
  }
)

// Helper to get padding classes based on size and icon presence
const getInputPadding = (
  size: 'xs' | 'sm' | 'default' | 'lg' | 'xl',
  hasLeftIcon: boolean,
  hasRightIcon: boolean
) => {
  const { padding, paddingWithIcon } = components.input
  
  if (hasLeftIcon && hasRightIcon) {
    // Both icons
    return {
      paddingLeft: paddingWithIcon[size].left,
      paddingRight: paddingWithIcon[size].right,
      paddingY: padding[size].y
    }
  } else if (hasLeftIcon) {
    // Left icon only
    return {
      paddingLeft: paddingWithIcon[size].left,
      paddingRight: padding[size].x,
      paddingY: padding[size].y
    }
  } else if (hasRightIcon) {
    // Right icon only
    return {
      paddingLeft: padding[size].x,
      paddingRight: paddingWithIcon[size].right,
      paddingY: padding[size].y
    }
  } else {
    // No icons
    return {
      paddingLeft: padding[size].x,
      paddingRight: padding[size].x,
      paddingY: padding[size].y
    }
  }
}

// Convert spacing values to Tailwind classes
const spacingToClass = (value: string): string => {
  // Extract the numeric part from rem values
  const match = value.match(/^(\d+(?:\.\d+)?)(rem|px)?$/)
  if (!match) return ''
  
  const [, num, unit] = match
  
  if (unit === 'px' && num === '1') return 'px'
  if (!unit || unit === 'rem') {
    // Convert rem back to Tailwind scale
    const remToScale: Record<string, string> = {
      '0': '0',
      '0.125': '0.5',
      '0.25': '1',
      '0.375': '1.5',
      '0.5': '2',
      '0.625': '2.5',
      '0.75': '3',
      '0.875': '3.5',
      '1': '4',
      '1.25': '5',
      '1.5': '6',
      '1.75': '7',
      '2': '8',
      '2.25': '9',
      '2.5': '10',
      '2.75': '11',
      '3': '12',
      '3.5': '14',
      '4': '16',
    }
    return remToScale[num] || num
  }
  return num
}

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  leftElement?: React.ReactNode
  rightElement?: React.ReactNode
  containerClassName?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type, 
    variant, 
    size = "default", 
    isInvalid,
    leftIcon,
    rightIcon,
    leftElement,
    rightElement,
    containerClassName,
    disabled,
    onFocus,
    onBlur,
    ...props 
  }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const currentSize = size || "default"
    
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)
      onFocus?.(e)
    }
    
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      onBlur?.(e)
    }

    // Get padding configuration from design tokens
    const hasLeft = !!(leftIcon || leftElement)
    const hasRight = !!(rightIcon || rightElement)
    const padding = getInputPadding(currentSize, hasLeft, hasRight)
    
    // Build padding classes
    const paddingClasses = cn(
      `pl-${spacingToClass(padding.paddingLeft)}`,
      `pr-${spacingToClass(padding.paddingRight)}`,
      `py-${spacingToClass(padding.paddingY)}`
    )

    // Get icon configuration from design tokens
    const iconSizeClass = `h-[${components.input.iconSize[currentSize]}] w-[${components.input.iconSize[currentSize]}]`
    const iconLeftClass = `left-[${components.input.iconOffset[currentSize]}]`
    const iconRightClass = `right-[${components.input.iconOffset[currentSize]}]`

    // If there are icons or elements, wrap in a container
    if (leftIcon || rightIcon || leftElement || rightElement) {
      return (
        <div className={cn(
          "relative group",
          containerClassName
        )}>
          {/* Left Icon */}
          {leftIcon && !leftElement && (
            <div 
              className={cn(
                "absolute top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center transition-colors duration-300",
                !isFocused && !isInvalid && variant !== "destructive" && variant !== "success" && variant !== "warning" && "text-neutral-400 dark:text-neutral-500",
                isFocused && !isInvalid && variant !== "destructive" && variant !== "success" && variant !== "warning" && "text-primary-500 dark:text-primary-400",
                (isInvalid || variant === "destructive") && "text-error-500 dark:text-error-400",
                variant === "success" && !isFocused && "text-neutral-400 dark:text-neutral-500",
                variant === "success" && isFocused && "text-success-600 dark:text-success-400",
                variant === "warning" && !isFocused && "text-neutral-400 dark:text-neutral-500",
                variant === "warning" && isFocused && "text-warning-600 dark:text-warning-400"
              )}
              style={{ 
                left: components.input.iconOffset[currentSize],
                width: components.input.iconSize[currentSize],
                height: components.input.iconSize[currentSize]
              }}
            >
              {leftIcon}
            </div>
          )}
          
          {/* Left Element */}
          {leftElement && (
            <div 
              className={cn(
                "absolute top-1/2 -translate-y-1/2 flex items-center justify-center",
                "text-neutral-600 dark:text-neutral-400"
              )}
              style={{ 
                left: components.input.iconOffset[currentSize],
                fontSize: components.input.fontSize[currentSize]
              }}
            >
              {leftElement}
            </div>
          )}
          
          {/* Input Field */}
          <input
            type={type}
            className={cn(
              inputVariants({ variant, size, isInvalid, className })
            )}
            style={{
              paddingLeft: padding.paddingLeft,
              paddingRight: padding.paddingRight,
              paddingTop: padding.paddingY,
              paddingBottom: padding.paddingY,
            }}
            ref={ref}
            disabled={disabled}
            aria-invalid={isInvalid || undefined}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
          
          {/* Right Icon */}
          {rightIcon && !rightElement && (
            <div 
              className={cn(
                "absolute top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center transition-colors duration-300",
                !isFocused && !isInvalid && variant !== "destructive" && variant !== "success" && variant !== "warning" && "text-neutral-400 dark:text-neutral-500",
                isFocused && !isInvalid && variant !== "destructive" && variant !== "success" && variant !== "warning" && "text-primary-500 dark:text-primary-400",
                (isInvalid || variant === "destructive") && "text-error-500 dark:text-error-400",
                variant === "success" && !isFocused && "text-neutral-400 dark:text-neutral-500",
                variant === "success" && isFocused && "text-success-600 dark:text-success-400",
                variant === "warning" && !isFocused && "text-neutral-400 dark:text-neutral-500",
                variant === "warning" && isFocused && "text-warning-600 dark:text-warning-400"
              )}
              style={{ 
                right: components.input.iconOffset[currentSize],
                width: components.input.iconSize[currentSize],
                height: components.input.iconSize[currentSize]
              }}
            >
              {rightIcon}
            </div>
          )}
          
          {/* Right Element */}
          {rightElement && (
            <div 
              className={cn(
                "absolute top-1/2 -translate-y-1/2 flex items-center justify-center",
                "[&>button]:transition-all [&>button]:duration-200",
                "[&>button:hover]:scale-110",
                "[&>button]:text-neutral-500 [&>button:hover]:text-neutral-700",
                "dark:[&>button]:text-neutral-400 dark:[&>button:hover]:text-neutral-200"
              )}
              style={{ 
                right: components.input.iconOffset[currentSize]
              }}
            >
              {rightElement}
            </div>
          )}
        </div>
      )
    }

    // Simple input without icons
    return (
      <input
        type={type}
        className={cn(
          inputVariants({ variant, size, isInvalid, className })
        )}
        style={{
          paddingLeft: components.input.padding[currentSize].x,
          paddingRight: components.input.padding[currentSize].x,
          paddingTop: components.input.padding[currentSize].y,
          paddingBottom: components.input.padding[currentSize].y,
        }}
        ref={ref}
        disabled={disabled}
        aria-invalid={isInvalid || undefined}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

// Additional components for form field composition
export interface FormFieldProps {
  label?: string
  error?: string
  hint?: string
  required?: boolean
  children: React.ReactNode
  className?: string
}

export const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ label, error, hint, required, children, className }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-2", className)}>
        {label && (
          <label className="text-sm font-medium text-foreground flex items-center gap-1">
            {label}
            {required && <span className="text-error-500">*</span>}
          </label>
        )}
        {children}
        {hint && !error && (
          <p className="text-xs text-muted-foreground animate-in fade-in duration-200">{hint}</p>
        )}
        {error && (
          <p className="text-xs text-error-600 dark:text-error-400 animate-in fade-in slide-in-from-top-1 duration-200">
            {error}
          </p>
        )}
      </div>
    )
  }
)
FormField.displayName = "FormField"

// Textarea component using the same design tokens
const textareaVariants = cva(
  "flex min-h-[80px] w-full rounded-lg text-sm transition-all duration-300 resize-vertical placeholder:text-neutral-400 dark:placeholder:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:resize-none outline-none",
  {
    variants: {
      variant: {
        default:
          "border border-neutral-200 bg-white shadow-sm shadow-neutral-900/5 hover:shadow-md hover:shadow-neutral-900/10 hover:border-neutral-300 focus:border-primary-500 focus:ring-[3px] focus:ring-primary-500/20 focus:shadow-lg focus:shadow-primary-500/10 dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-neutral-950/20 dark:hover:border-neutral-700 dark:hover:shadow-neutral-950/30 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 dark:focus:shadow-primary-400/10",
        destructive:
          "border border-error-200 bg-error-50/30 text-error-900 shadow-sm shadow-error-900/5 placeholder:text-error-400 hover:shadow-md hover:shadow-error-500/10 hover:border-error-300 focus:border-error-500 focus:ring-[3px] focus:ring-error-500/20 focus:shadow-lg focus:shadow-error-500/10 dark:border-error-900/50 dark:bg-error-950/20 dark:text-error-100 dark:shadow-error-950/20 dark:placeholder:text-error-500 dark:hover:border-error-800 dark:hover:shadow-error-950/30 dark:focus:border-error-400 dark:focus:ring-error-400/20 dark:focus:shadow-error-400/10",
        success:
          "border border-success-200 bg-success-50/30 text-success-900 shadow-sm shadow-success-900/5 placeholder:text-success-400 hover:shadow-md hover:shadow-success-500/10 hover:border-success-300 focus:border-success-500 focus:ring-[3px] focus:ring-success-500/20 focus:shadow-lg focus:shadow-success-500/10 dark:border-success-900/50 dark:bg-success-950/20 dark:text-success-100 dark:shadow-success-950/20 dark:placeholder:text-success-500 dark:hover:border-success-800 dark:hover:shadow-success-950/30 dark:focus:border-success-400 dark:focus:ring-success-400/20 dark:focus:shadow-success-400/10",
        warning:
          "border border-warning-200 bg-warning-50/30 text-warning-900 shadow-sm shadow-warning-900/5 placeholder:text-warning-400 hover:shadow-md hover:shadow-warning-500/10 hover:border-warning-300 focus:border-warning-500 focus:ring-[3px] focus:ring-warning-500/20 focus:shadow-lg focus:shadow-warning-500/10 dark:border-warning-900/50 dark:bg-warning-950/20 dark:text-warning-100 dark:shadow-warning-950/20 dark:placeholder:text-warning-500 dark:hover:border-warning-800 dark:hover:shadow-warning-950/30 dark:focus:border-warning-400 dark:focus:ring-warning-400/20 dark:focus:shadow-warning-400/10",
        outline:
          "border-2 border-neutral-300 bg-transparent shadow-sm hover:shadow-md hover:border-primary-400 focus:border-primary-500 focus:ring-[3px] focus:ring-primary-500/20 focus:shadow-lg focus:shadow-primary-500/10 dark:border-neutral-700 dark:hover:border-primary-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 dark:focus:shadow-primary-400/10",
        ghost:
          "border border-transparent bg-neutral-50/50 hover:bg-neutral-100 hover:shadow-sm hover:shadow-neutral-900/5 focus:bg-white focus:border-neutral-200 focus:ring-[3px] focus:ring-neutral-500/10 focus:shadow-md focus:shadow-neutral-900/10 dark:bg-neutral-900/30 dark:hover:bg-neutral-900/50 dark:hover:shadow-neutral-950/20 dark:focus:bg-neutral-900 dark:focus:border-neutral-700 dark:focus:ring-neutral-400/10 dark:focus:shadow-neutral-950/20",
        filled:
          "border border-transparent bg-neutral-100 shadow-inner shadow-neutral-900/5 hover:bg-neutral-50 hover:shadow-sm hover:shadow-neutral-900/5 focus:bg-white focus:border-neutral-200 focus:ring-[3px] focus:ring-primary-500/20 focus:shadow-md focus:shadow-primary-500/5 dark:bg-neutral-900 dark:shadow-neutral-950/20 dark:hover:bg-neutral-800 dark:hover:shadow-neutral-950/10 dark:focus:bg-neutral-800 dark:focus:border-neutral-700 dark:focus:ring-primary-400/20 dark:focus:shadow-primary-400/5",
      },
      size: {
        xs: "text-xs min-h-[60px]",
        sm: "text-sm min-h-[70px]",
        default: "text-sm min-h-[80px]",
        lg: "text-base min-h-[100px]",
        xl: "text-lg min-h-[120px]",
      },
      isInvalid: {
        true: "border-error-500 shadow-sm shadow-error-500/10 focus:border-error-500 focus:ring-error-500/20 focus:shadow-error-500/10 dark:border-error-400 dark:shadow-error-400/10 dark:focus:border-error-400 dark:focus:ring-error-400/20 dark:focus:shadow-error-400/10",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      isInvalid: false,
    },
  }
)

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, size = "default", isInvalid, onFocus, onBlur, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const currentSize = size || "default"
    
    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true)
      onFocus?.(e)
    }
    
    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false)
      onBlur?.(e)
    }
    
    return (
      <textarea
        className={cn(
          textareaVariants({ variant, size, isInvalid, className }),
          "transition-transform duration-200",
          isFocused && !isInvalid && "scale-[1.01]"
        )}
        style={{
          paddingLeft: components.input.padding[currentSize].x,
          paddingRight: components.input.padding[currentSize].x,
          paddingTop: components.input.padding[currentSize].y,
          paddingBottom: components.input.padding[currentSize].y,
        }}
        ref={ref}
        aria-invalid={isInvalid || undefined}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

// Add keyframe animation for shake effect
if (typeof window !== 'undefined') {
  const styleId = 'input-animations'
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style')
    style.id = styleId
    style.textContent = `
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
        20%, 40%, 60%, 80% { transform: translateX(2px); }
      }
      .animate-shake {
        animation: shake 0.5s ease-in-out;
      }
    `
    document.head.appendChild(style)
  }
}

export { Input, Textarea, inputVariants, textareaVariants }