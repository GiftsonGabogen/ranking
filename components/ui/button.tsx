import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/design-token-utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transform-gpu will-change-transform transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-error-500/20 dark:aria-invalid:ring-error-500/40 aria-invalid:border-error-500 relative overflow-hidden scale-98 hover:scale-100 active:scale-95 active:transition-transform active:duration-75 [text-box-trim:trim-both] [text-box-edge:cap_alphabetic]",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5 hover:from-primary-500 hover:to-primary-600 dark:from-primary-500 dark:to-primary-600 dark:shadow-primary-500/20 dark:hover:shadow-primary-500/25 cursor-pointer",
        destructive:
          "bg-gradient-to-br from-error-600 to-error-700 text-white shadow-lg shadow-error-500/25 hover:shadow-xl hover:shadow-error-500/30 hover:-translate-y-0.5 hover:from-error-500 hover:to-error-600 focus-visible:ring-error-500/20 dark:focus-visible:ring-error-500/40 dark:shadow-error-500/15 cursor-pointer",
        outline:
          "border border-neutral-300 bg-gradient-to-br from-background to-neutral-50/80 backdrop-blur-sm shadow-lg shadow-neutral-900/5 hover:shadow-xl hover:shadow-neutral-900/10 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground hover:border-neutral-400 dark:border-neutral-600 dark:from-background/80 dark:to-neutral-800/60 dark:hover:from-accent/80 dark:hover:to-accent/60 dark:hover:border-neutral-500 cursor-pointer",
        secondary:
          "bg-gradient-to-br from-secondary-600 to-secondary-700 text-white shadow-lg shadow-secondary-500/20 hover:shadow-xl hover:shadow-secondary-500/25 hover:-translate-y-0.5 hover:from-secondary-500 hover:to-secondary-600 dark:from-secondary-500 dark:to-secondary-600 cursor-pointer",
        ghost:
          "hover:bg-accent hover:text-accent-foreground hover:shadow-md hover:shadow-neutral-500/20 dark:hover:bg-accent/50 hover:-translate-y-0.5 cursor-pointer",
        link: "text-primary-600 underline-offset-4 hover:underline hover:-translate-y-0.5 dark:text-primary-400 cursor-pointer",
        success:
          "bg-gradient-to-br from-success-600 to-success-700 text-white shadow-lg shadow-success-500/25 hover:shadow-xl hover:shadow-success-500/30 hover:-translate-y-0.5 hover:from-success-500 hover:to-success-600 dark:from-success-500 dark:to-success-600 cursor-pointer",
        warning:
          "bg-gradient-to-br from-warning-600 to-warning-700 text-white shadow-lg shadow-warning-500/25 hover:shadow-xl hover:shadow-warning-500/30 hover:-translate-y-0.5 hover:from-warning-500 hover:to-warning-600 dark:from-warning-500 dark:to-warning-600 cursor-pointer",
        glass:
          "bg-white/10 backdrop-blur-md border border-white/20 text-foreground shadow-lg shadow-neutral-900/10 hover:bg-white/20 hover:shadow-xl hover:shadow-neutral-900/15 hover:-translate-y-0.5 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 cursor-pointer",
        gradient:
          "bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5 hover:from-primary-400 hover:via-secondary-400 hover:to-primary-500 cursor-pointer",
        shine:
          "bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700 cursor-pointer",
      },
      size: {
        xs: "h-7 px-3 py-1.5 text-xs gap-1 has-[>svg]:px-2",
        sm: "h-8 px-4 py-2 text-sm gap-1.5 has-[>svg]:px-3",
        default: "h-10 px-5 py-2.5 text-sm gap-2 has-[>svg]:px-4",
        lg: "h-12 px-7 py-3 text-base gap-2 has-[>svg]:px-5",
        xl: "h-14 px-8 py-4 text-lg gap-3 has-[>svg]:px-6 font-semibold",
        icon: "size-10 p-0",
        "icon-xs": "size-7 p-0 rounded-md",
        "icon-sm": "size-8 p-0 rounded-md",
        "icon-lg": "size-12 p-0 rounded-lg",
        "icon-xl": "size-14 p-0 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  style,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      style={{
        // Anti-blur properties
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        filter: "blur(0px)",
        backfaceVisibility: "hidden",
        ...style,
      }}
      {...props}
    />
  )
}

export { Button, buttonVariants }
