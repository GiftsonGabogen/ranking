import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/design-token-utils"

const breadcrumbVariants = cva(
  "flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-400 transition-colors duration-150",
  {
    variants: {
      size: {
        xs: "text-xs gap-1",
        sm: "text-sm gap-1.5", 
        default: "text-sm gap-2",
        lg: "text-base gap-2.5",
      }
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const breadcrumbItemVariants = cva(
  "inline-flex items-center gap-1.5 font-medium transition-all duration-200 hover:text-primary-600 dark:hover:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/20 focus-visible:rounded-sm",
  {
    variants: {
      variant: {
        default: "",
        current: "text-primary-600 dark:text-primary-400 pointer-events-none",
        ghost: "hover:bg-primary-50 dark:hover:bg-primary-950/50 px-2 py-1 rounded-md",
      },
      size: {
        xs: "text-xs min-h-[1.25rem]",
        sm: "text-sm min-h-[1.5rem]",
        default: "text-sm min-h-[1.75rem]",
        lg: "text-base min-h-[2rem]",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const breadcrumbSeparatorVariants = cva(
  "flex shrink-0 text-neutral-400 dark:text-neutral-600 transition-colors duration-200",
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-sm",
        default: "text-sm", 
        lg: "text-base",
      }
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const BreadcrumbList = React.forwardRef<
  React.ElementRef<"ol">,
  React.ComponentPropsWithoutRef<"ol"> & VariantProps<typeof breadcrumbVariants>
>(({ className, size, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(breadcrumbVariants({ size, className }))}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef<
  React.ElementRef<"li">,
  React.ComponentPropsWithoutRef<"li"> & VariantProps<typeof breadcrumbItemVariants> & {
    asChild?: boolean
  }
>(({ className, variant, size, asChild = false, children, ...props }, ref) => {
  const Comp = asChild ? Slot : "li"

  return (
    <Comp
      ref={ref}
      className={cn(breadcrumbItemVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </Comp>
  )
})
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>(({ className, asChild = false, children, style, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      className={cn(
        "inline-flex items-center gap-1.5 font-medium transform-gpu will-change-transform transition-all duration-200 hover:text-primary-600 dark:hover:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/20 focus-visible:rounded-sm scale-95 hover:scale-100 active:scale-90 cursor-pointer",
        className
      )}
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
      {children}
    </Comp>
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = React.forwardRef<
  React.ElementRef<"span">,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn(
      "inline-flex items-center gap-1.5 font-semibold text-primary-700 dark:text-primary-300 transition-colors duration-200",
      className
    )}
    {...props}
  />
))
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = React.forwardRef<
  React.ElementRef<"li">,
  React.ComponentPropsWithoutRef<"li"> & VariantProps<typeof breadcrumbSeparatorVariants> & {
    children?: React.ReactNode
  }
>(({ className, size, children, ...props }, ref) => (
  <li
    ref={ref}
    role="presentation"
    aria-hidden="true"
    className={cn(breadcrumbSeparatorVariants({ size, className }))}
    {...props}
  >
    {children ?? <ChevronRight className="h-3.5 w-3.5" />}
  </li>
))
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = React.forwardRef<
  React.ElementRef<"span">,
  React.ComponentPropsWithoutRef<"span"> & {
    expanded?: boolean
    onExpand?: () => void
  }
>(({ className, expanded = false, onExpand, style, ...props }, ref) => (
  <span
    ref={ref}
    role="presentation"
    aria-hidden="true"
    className={cn(
      "flex items-center justify-center w-6 h-6 text-neutral-500 dark:text-neutral-400 transform-gpu will-change-transform transition-all duration-200 hover:text-primary-600 dark:hover:text-primary-400 scale-95 hover:scale-100 cursor-pointer rounded-full hover:bg-primary-50 dark:hover:bg-primary-950/50",
      expanded && "rotate-90",
      className
    )}
    style={{
      // Anti-blur properties
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      filter: "blur(0px)",
      backfaceVisibility: "hidden",
      ...style,
    }}
    onClick={onExpand}
    {...props}
  >
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3.5 w-3.5 transition-transform duration-200"
    >
      <path
        d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM13.625 7.5C13.625 8.12132 13.1213 8.625 12.5 8.625C11.8787 8.625 11.375 8.12132 11.375 7.5C11.375 6.87868 11.8787 6.375 12.5 6.375C13.1213 6.375 13.625 6.87868 13.625 7.5Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  </span>
))
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis"

// Compound component container
const Breadcrumb = React.forwardRef<
  React.ElementRef<"nav">,
  React.ComponentPropsWithoutRef<"nav">
>(({ className, ...props }, ref) => (
  <nav
    ref={ref}
    aria-label="breadcrumb"
    className={cn("relative", className)}
    {...props}
  />
))
Breadcrumb.displayName = "Breadcrumb"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  breadcrumbVariants,
  breadcrumbItemVariants,
  breadcrumbSeparatorVariants
}