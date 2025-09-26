"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/design-token-utils"

const checkboxVariants = cva(
  "peer shrink-0 rounded-sm border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 ease-in-out active:scale-95",
  {
    variants: {
      variant: {
        default: "border-neutral-300 dark:border-neutral-700 data-[state=checked]:bg-primary data-[state=checked]:border-primary text-primary-foreground",
        destructive: "border-error-300 dark:border-error-700 data-[state=checked]:bg-error data-[state=checked]:border-error text-error-foreground",
        success: "border-success-300 dark:border-success-700 data-[state=checked]:bg-success data-[state=checked]:border-success text-success-foreground",
        warning: "border-warning-300 dark:border-warning-700 data-[state=checked]:bg-warning data-[state=checked]:border-warning text-warning-foreground",
      },
      size: {
        sm: "h-4 w-4 rounded-sm",
        md: "h-5 w-5 rounded-md",
        lg: "h-6 w-6 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

const iconSize = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> &
    VariantProps<typeof checkboxVariants>
>(({ className, variant, size, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(checkboxVariants({ variant, size, className }))}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current data-[state=checked]:animate-in data-[state=checked]:fade-in-0 data-[state=checked]:zoom-in-90")}
    >
      <Check className={cn(iconSize[size || 'md'])} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
