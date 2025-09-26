import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn, cardAnimations } from "@/lib/design-token-utils"

const tabsVariants = cva(
  "relative",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        card: [
          "bg-white dark:bg-neutral-900",
          "border border-neutral-200 dark:border-neutral-700",
          "rounded-lg shadow-sm",
          cardAnimations.base,
          cardAnimations.softDepth
        ].join(' '),
        glass: [
          "bg-white/80 dark:bg-neutral-900/80",
          "backdrop-blur-sm border border-white/20 dark:border-neutral-700/50",
          "rounded-lg",
          cardAnimations.base,
          cardAnimations.primaryGlow
        ].join(' '),
        outline: [
          "border-2 border-neutral-200 dark:border-neutral-700",
          "rounded-lg",
          cardAnimations.base
        ].join(' '),
      },
      orientation: {
        horizontal: "flex flex-col",
        vertical: "flex flex-row",
      },
      size: {
        sm: "text-sm",
        default: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      orientation: "horizontal",
      size: "default",
    },
  }
)

const tabsListVariants = cva(
  [
    "relative flex",
    "transition-all duration-300 ease-out",
  ].join(' '),
  {
    variants: {
      variant: {
        default: [
          "bg-neutral-100 dark:bg-neutral-800",
          "border border-neutral-200 dark:border-neutral-700",
          "rounded-lg p-1",
        ].join(' '),
        line: [
          "bg-transparent",
          "border-b border-neutral-200 dark:border-neutral-700",
        ].join(' '),
        pills: [
          "bg-neutral-50 dark:bg-neutral-900/50",
          "rounded-lg p-1 gap-1",
        ].join(' '),
        floating: [
          "bg-white dark:bg-neutral-800",
          "shadow-lg shadow-neutral-900/10 dark:shadow-neutral-900/20",
          "border border-neutral-200 dark:border-neutral-700",
          "rounded-xl p-2 gap-2",
          "backdrop-blur-sm",
        ].join(' '),
        cards: [
          "bg-transparent gap-1",
        ].join(' '),
      },
      orientation: {
        horizontal: "flex-row",
        vertical: "flex-col min-w-0",
      },
      size: {
        sm: "gap-0.5",
        default: "gap-1",
        lg: "gap-2",
      },
    },
    defaultVariants: {
      variant: "default",
      orientation: "horizontal",
      size: "default",
    },
  }
)

const tabsTriggerVariants = cva(
  [
    "relative inline-flex items-center justify-center whitespace-nowrap",
    "font-medium transition-all duration-200 ease-out",
    "disabled:pointer-events-none disabled:opacity-50",
    "outline-none ring-0 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
    "dark:focus-visible:ring-offset-neutral-900",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
    "cursor-pointer select-none",
  ].join(' '),
  {
    variants: {
      variant: {
        default: [
          "rounded-md px-3 py-1.5",
          "text-neutral-600 dark:text-neutral-400",
          "hover:text-neutral-900 dark:hover:text-neutral-100",
          "data-[state=active]:bg-white dark:data-[state=active]:bg-neutral-900",
          "data-[state=active]:text-neutral-900 dark:data-[state=active]:text-neutral-100",
          "data-[state=active]:shadow-sm",
          "hover:bg-white/50 dark:hover:bg-neutral-900/50",
        ].join(' '),
        line: [
          "border-b-2 border-transparent px-4 py-2",
          "text-neutral-600 dark:text-neutral-400",
          "hover:text-neutral-900 dark:hover:text-neutral-100",
          "data-[state=active]:border-primary-500",
          "data-[state=active]:text-primary-600 dark:data-[state=active]:text-primary-400",
          "hover:border-neutral-300 dark:hover:border-neutral-600",
        ].join(' '),
        pills: [
          "rounded-full px-4 py-2",
          "text-neutral-600 dark:text-neutral-400",
          "hover:text-neutral-900 dark:hover:text-neutral-100",
          "data-[state=active]:bg-primary-500 data-[state=active]:text-white",
          "data-[state=active]:shadow-lg data-[state=active]:shadow-primary-500/25",
          "hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50",
          "data-[state=active]:hover:bg-primary-600",
        ].join(' '),
        floating: [
          "rounded-lg px-4 py-2.5",
          "text-neutral-600 dark:text-neutral-400",
          "hover:text-neutral-900 dark:hover:text-neutral-100",
          "data-[state=active]:bg-primary-500 data-[state=active]:text-white",
          "data-[state=active]:shadow-md data-[state=active]:shadow-primary-500/20",
          "hover:bg-neutral-100 dark:hover:bg-neutral-700/50",
          "data-[state=active]:hover:bg-primary-600",
          "data-[state=active]:-translate-y-0.5",
        ].join(' '),
        cards: [
          "rounded-lg px-4 py-3 border",
          "border-neutral-200 dark:border-neutral-700",
          "bg-white dark:bg-neutral-900",
          "text-neutral-600 dark:text-neutral-400",
          "hover:text-neutral-900 dark:hover:text-neutral-100",
          "hover:border-neutral-300 dark:hover:border-neutral-600",
          "data-[state=active]:border-primary-500",
          "data-[state=active]:bg-primary-50 dark:data-[state=active]:bg-primary-950/50",
          "data-[state=active]:text-primary-700 dark:data-[state=active]:text-primary-300",
          "shadow-sm hover:shadow-md",
          "data-[state=active]:shadow-lg data-[state=active]:shadow-primary-500/10",
        ].join(' '),
      },
      size: {
        sm: "text-xs gap-1.5 min-h-7",
        default: "text-sm gap-2 min-h-9",
        lg: "text-base gap-2.5 min-h-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const tabsContentVariants = cva(
  [
    "outline-none ring-0 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
    "dark:focus-visible:ring-offset-neutral-900",
    "animate-in fade-in-0 duration-200",
  ].join(' '),
  {
    variants: {
      variant: {
        default: "mt-4",
        line: "mt-6",
        pills: "mt-4",
        floating: "mt-6",
        cards: "mt-4",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface TabsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsVariants> {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  asChild?: boolean
}

export interface TabsListProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsListVariants> {
  asChild?: boolean
}

export interface TabsTriggerProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof tabsTriggerVariants> {
  value: string
  asChild?: boolean
  disabled?: boolean
}

export interface TabsContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsContentVariants> {
  value: string
  asChild?: boolean
}

interface TabsContextValue {
  value?: string
  onValueChange?: (value: string) => void
  orientation?: "horizontal" | "vertical"
  variant?: "default" | "line" | "pills" | "floating" | "cards"
  size?: "sm" | "default" | "lg"
}

const TabsContext = React.createContext<TabsContextValue | null>(null)

const useTabsContext = () => {
  const context = React.useContext(TabsContext)
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs component")
  }
  return context
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className, variant, orientation, size, value, defaultValue, onValueChange, asChild = false, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState<string>(defaultValue || "")
    
    const currentValue = value !== undefined ? value : internalValue
    const handleValueChange = React.useCallback((newValue: string) => {
      if (value === undefined) {
        setInternalValue(newValue)
      }
      onValueChange?.(newValue)
    }, [value, onValueChange])

    const Comp = asChild ? Slot : "div"
    
    const contextValue: TabsContextValue = React.useMemo(() => ({
      value: currentValue,
      onValueChange: handleValueChange,
      orientation: orientation ?? undefined,
      variant: variant === "card" || variant === "glass" || variant === "outline" ? "default" : "default",
      size: size ?? undefined,
    }), [currentValue, handleValueChange, orientation, variant, size])

    return (
      <TabsContext.Provider value={contextValue}>
        <Comp
          ref={ref}
          data-slot="tabs"
          data-orientation={orientation}
          className={cn(tabsVariants({ variant, orientation, size, className }))}
          {...props}
        />
      </TabsContext.Provider>
    )
  }
)
Tabs.displayName = "Tabs"

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, variant, orientation, size, asChild = false, ...props }, ref) => {
    const context = useTabsContext()
    const Comp = asChild ? Slot : "div"
    
    return (
      <Comp
        ref={ref}
        data-slot="tabs-list"
        role="tablist"
        aria-orientation={orientation || context.orientation}
        className={cn(tabsListVariants({ 
          variant: variant || "default",
          orientation: orientation || context.orientation,
          size: size || context.size,
          className 
        }))}
        {...props}
      />
    )
  }
)
TabsList.displayName = "TabsList"

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, variant, size, value, disabled, asChild = false, ...props }, ref) => {
    const context = useTabsContext()
    const Comp = asChild ? Slot : "button"
    
    const isActive = context.value === value
    
    const handleClick = React.useCallback(() => {
      if (!disabled && context.onValueChange) {
        context.onValueChange(value)
      }
    }, [disabled, context.onValueChange, value])

    return (
      <Comp
        ref={ref}
        data-slot="tabs-trigger"
        role="tab"
        type="button"
        aria-selected={isActive}
        aria-controls={`tabs-content-${value}`}
        data-state={isActive ? "active" : "inactive"}
        data-value={value}
        tabIndex={isActive ? 0 : -1}
        disabled={disabled}
        onClick={handleClick}
        className={cn(tabsTriggerVariants({ 
          variant: variant || "default",
          size: size || context.size,
          className 
        }))}
        {...props}
      />
    )
  }
)
TabsTrigger.displayName = "TabsTrigger"

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, variant, value, asChild = false, ...props }, ref) => {
    const context = useTabsContext()
    const Comp = asChild ? Slot : "div"
    
    const isActive = context.value === value
    
    if (!isActive) {
      return null
    }

    return (
      <Comp
        ref={ref}
        data-slot="tabs-content"
        role="tabpanel"
        id={`tabs-content-${value}`}
        aria-labelledby={`tabs-trigger-${value}`}
        data-state="active"
        tabIndex={0}
        className={cn(tabsContentVariants({ 
          variant: variant || "default",
          className 
        }))}
        {...props}
      />
    )
  }
)
TabsContent.displayName = "TabsContent"

// Indicator component for enhanced visual feedback
const TabsIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "line" | "pill" | "glow"
  }
>(({ className, variant = "line", ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="tabs-indicator"
      className={cn(
        "absolute transition-all duration-300 ease-out pointer-events-none",
        {
          "bottom-0 h-0.5 bg-primary-500 rounded-full": variant === "line",
          "inset-0 bg-primary-500 rounded-md shadow-sm": variant === "pill", 
          "inset-0 bg-primary-500/20 border border-primary-500/40 rounded-md shadow-lg shadow-primary-500/25": variant === "glow",
        },
        className
      )}
      {...props}
    />
  )
})
TabsIndicator.displayName = "TabsIndicator"

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsIndicator,
  tabsVariants,
  tabsListVariants,
  tabsTriggerVariants,
  tabsContentVariants,
}