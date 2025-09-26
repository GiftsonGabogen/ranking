"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/design-token-utils"

const switchVariants = cva(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-neutral-200 dark:data-[state=unchecked]:bg-neutral-700 shadow-inner active:scale-95 hover:shadow-lg",
  {
    variants: {
      variant: {
        default: "data-[state=checked]:bg-primary-600 data-[state=checked]:shadow-primary-500/25 hover:data-[state=checked]:shadow-primary-500/40",
        success: "data-[state=checked]:bg-success-600 data-[state=checked]:shadow-success-500/25 hover:data-[state=checked]:shadow-success-500/40",
        warning: "data-[state=checked]:bg-warning-600 data-[state=checked]:shadow-warning-500/25 hover:data-[state=checked]:shadow-warning-500/40",
        destructive: "data-[state=checked]:bg-error-600 data-[state=checked]:shadow-error-500/25 hover:data-[state=checked]:shadow-error-500/40",
        secondary: "data-[state=checked]:bg-secondary-600 data-[state=checked]:shadow-secondary-500/25 hover:data-[state=checked]:shadow-secondary-500/40",
      },
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-7 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

const switchThumbVariants = cva(
  "pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-all duration-300 ease-out data-[state=unchecked]:translate-x-0 border border-neutral-200/50",
  {
    variants: {
      size: {
        sm: "h-4 w-4 data-[state=checked]:translate-x-4",
        md: "h-5 w-5 data-[state=checked]:translate-x-5",
        lg: "h-6 w-6 data-[state=checked]:translate-x-5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> &
    VariantProps<typeof switchVariants>
>(({ className, variant, size, ...props }, ref) => (
  <SwitchPrimitive.Root
    className={cn(switchVariants({ variant, size, className }))}
    {...props}
    ref={ref}
  >
    <SwitchPrimitive.Thumb
      className={cn(switchThumbVariants({ size }))}
    />
  </SwitchPrimitive.Root>
))
Switch.displayName = SwitchPrimitive.Root.displayName

export { Switch }