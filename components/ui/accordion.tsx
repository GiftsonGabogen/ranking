import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cva, type VariantProps } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn, accordionAnimations, accordionVariants } from "@/lib/design-token-utils"

const accordionVariantsCVA = cva(
  "w-full min-w-0",
  {
    variants: {
      variant: {
        default: [
          accordionVariants.surface.default,
          accordionVariants.spacing.comfortable,
        ].join(' '),
        elevated: [
          accordionVariants.surface.elevated,
          accordionVariants.spacing.comfortable,
        ].join(' '),
        glass: [
          accordionVariants.surface.glass,
          accordionVariants.spacing.comfortable,
        ].join(' '),
        outline: [
          accordionVariants.surface.outline,
          accordionVariants.spacing.comfortable,
        ].join(' '),
        flush: [
          accordionVariants.surface.flush,
          accordionVariants.spacing.relaxed,
        ].join(' '),
      },
      size: {
        sm: accordionVariants.size.sm,
        default: accordionVariants.size.default,
        lg: accordionVariants.size.lg,
      },
      spacing: {
        compact: accordionVariants.spacing.compact,
        comfortable: accordionVariants.spacing.comfortable,
        relaxed: accordionVariants.spacing.relaxed,
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      spacing: "comfortable",
    },
  }
)

export interface AccordionProps
  extends Omit<React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>, 'type' | 'value' | 'defaultValue' | 'onValueChange' | 'collapsible'>,
    VariantProps<typeof accordionVariantsCVA> {
  type?: 'single' | 'multiple'
  value?: string | string[]
  defaultValue?: string | string[]
  onValueChange?: ((value: string) => void) | ((value: string[]) => void)
  collapsible?: boolean
}

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ className, variant, size, spacing, type = 'single', value, defaultValue, onValueChange, collapsible, ...props }, ref) => {
  const rootProps = type === 'single' 
    ? { 
        type: 'single' as const, 
        value: Array.isArray(value) ? value[0] : value,
        defaultValue: Array.isArray(defaultValue) ? defaultValue[0] : defaultValue,
        onValueChange: onValueChange as ((value: string) => void) | undefined,
        collapsible,
        ...props 
      }
    : { 
        type: 'multiple' as const, 
        value: Array.isArray(value) ? value : (value ? [value] : undefined),
        defaultValue: Array.isArray(defaultValue) ? defaultValue : (defaultValue ? [defaultValue] : undefined),
        onValueChange: onValueChange as ((value: string[]) => void) | undefined,
        ...props 
      }

  return (
    <AccordionPrimitive.Root
      ref={ref}
      {...rootProps}
      className={cn(accordionVariantsCVA({ variant, size, spacing, className }))}
    />
  )
})
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      accordionAnimations.item.base,
      accordionAnimations.item.hover,
      accordionAnimations.item.focus,
      accordionAnimations.item.active,
      accordionAnimations.border.divider,
      "group w-full min-w-0",
      className
    )}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    hideIcon?: boolean
    icon?: React.ReactNode
  }
>(({ className, children, hideIcon = false, icon, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex w-full min-w-0">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 px-6 font-medium transition-all",
        "text-left outline-none ring-offset-background focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "w-full min-w-0",
        accordionAnimations.trigger.base,
        accordionAnimations.trigger.hover,
        accordionAnimations.trigger.active,
        "[&[data-state=open]>svg]:rotate-180",
        className
      )}
      style={{
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        filter: "blur(0px)",
        backfaceVisibility: "hidden",
      }}
      {...props}
    >
      <span className="flex-1 text-sm font-medium text-neutral-900 dark:text-neutral-50 min-w-0 truncate">
        {children}
      </span>
      {!hideIcon && (
        <span className={cn(
          "ml-3 shrink-0",
          accordionAnimations.chevron.base,
          accordionAnimations.chevron.rotate,
          accordionAnimations.chevron.scale
        )}>
          {icon || <ChevronDown className="h-4 w-4" />}
        </span>
      )}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm w-full min-w-0",
      accordionAnimations.content.base,
      accordionAnimations.content.collapsing,
      className
    )}
    {...props}
  >
    <div className="px-6 pb-4 pt-0 text-neutral-700 dark:text-neutral-300 leading-relaxed w-full min-w-0">
      {children}
    </div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

// Enhanced Accordion with additional features
export interface EnhancedAccordionItemProps {
  title: React.ReactNode
  children: React.ReactNode
  value: string
  disabled?: boolean
  badge?: React.ReactNode
  subtitle?: React.ReactNode
  icon?: React.ReactNode
  chevronIcon?: React.ReactNode
  hideChevron?: boolean
  contentClassName?: string
  triggerClassName?: string
}

const AccordionItemEnhanced = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  Omit<React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>, 'children'> & 
  EnhancedAccordionItemProps
>(({ 
  className, 
  title, 
  children, 
  value, 
  disabled = false,
  badge,
  subtitle,
  icon,
  chevronIcon,
  hideChevron = false,
  contentClassName,
  triggerClassName,
  ...props 
}, ref) => (
  <AccordionItem ref={ref} value={value} disabled={disabled} className={className} {...props}>
    <AccordionTrigger
      hideIcon={hideChevron}
      icon={chevronIcon}
      className={cn(
        "group-data-[disabled]:opacity-50 group-data-[disabled]:cursor-not-allowed",
        triggerClassName
      )}
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {icon && (
          <span className="shrink-0 text-neutral-600 dark:text-neutral-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
            {icon}
          </span>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-medium text-neutral-900 dark:text-neutral-50 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 min-w-0 truncate">
              {title}
            </span>
            {badge && (
              <span className="shrink-0">
                {badge}
              </span>
            )}
          </div>
          {subtitle && (
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 text-left">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </AccordionTrigger>
    <AccordionContent className={contentClassName}>
      {children}
    </AccordionContent>
  </AccordionItem>
))
AccordionItemEnhanced.displayName = "AccordionItemEnhanced"

// Nested Accordion for hierarchical content
const NestedAccordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps & {
    level?: number
  }
>(({ level = 1, ...props }, ref) => (
  <Accordion
    ref={ref}
    variant="flush"
    className={cn(
      "ml-4 border-l-2 border-neutral-200 dark:border-neutral-700",
      level > 1 && "ml-2",
      accordionAnimations.border.nested,
      props.className
    )}
    {...props}
  />
))
NestedAccordion.displayName = "NestedAccordion"

// Collapsible component (single item accordion)
export interface CollapsibleProps {
  // Accordion props
  className?: string
  variant?: 'default' | 'elevated' | 'glass' | 'outline' | 'flush'
  size?: 'sm' | 'default' | 'lg'
  spacing?: 'compact' | 'comfortable' | 'relaxed'
  
  // Enhanced item props
  title: React.ReactNode
  children: React.ReactNode
  disabled?: boolean
  badge?: React.ReactNode
  subtitle?: React.ReactNode
  icon?: React.ReactNode
  chevronIcon?: React.ReactNode
  hideChevron?: boolean
  contentClassName?: string
  triggerClassName?: string
  itemClassName?: string
  
  // Collapsible specific
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const Collapsible = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  CollapsibleProps
>(({ 
  title,
  children,
  disabled = false,
  badge,
  subtitle,
  icon,
  chevronIcon,
  hideChevron = false,
  contentClassName,
  triggerClassName,
  itemClassName,
  defaultOpen = false,
  open,
  onOpenChange,
  variant,
  size,
  spacing,
  className
}, ref) => {
  const value = 'collapsible-item'
  const defaultValue = defaultOpen ? [value] : undefined
  const controlledValue = open !== undefined ? (open ? [value] : []) : undefined

  return (
    <Accordion
      ref={ref}
      type="single"
      collapsible
      value={controlledValue}
      defaultValue={defaultValue}
      onValueChange={(newValue: string[]) => {
        onOpenChange?.(newValue.includes(value))
      }}
      variant={variant}
      size={size}
      spacing={spacing}
      className={className}
    >
      <AccordionItemEnhanced
        value={value}
        title={title as string}
        disabled={disabled}
        badge={badge}
        subtitle={subtitle}
        icon={icon}
        chevronIcon={chevronIcon}
        hideChevron={hideChevron}
        contentClassName={contentClassName}
        triggerClassName={triggerClassName}
        className={itemClassName}
      >
        {children}
      </AccordionItemEnhanced>
    </Accordion>
  )
})
Collapsible.displayName = "Collapsible"

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionItemEnhanced,
  NestedAccordion,
  Collapsible,
}