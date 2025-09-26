import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDown, ChevronRight, Check, Circle } from "lucide-react";
import { cn } from "@/lib/design-token-utils";
import { zIndex, animation } from "@/lib/design-tokens";

const dropdownTriggerVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] relative overflow-hidden active:scale-[0.98] active:transition-transform active:duration-75 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5 hover:from-primary-500 hover:to-primary-600 data-[state=open]:shadow-xl data-[state=open]:shadow-primary-500/30 data-[state=open]:-translate-y-0.5 dark:from-primary-500 dark:to-primary-600 dark:shadow-primary-500/20 dark:hover:shadow-primary-500/25",
        outline:
          "border border-neutral-300 bg-gradient-to-br from-background to-neutral-50/80 backdrop-blur-sm shadow-lg shadow-neutral-900/5 hover:shadow-xl hover:shadow-neutral-900/10 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground hover:border-neutral-400 data-[state=open]:shadow-xl data-[state=open]:shadow-neutral-900/10 data-[state=open]:-translate-y-0.5 data-[state=open]:bg-accent data-[state=open]:border-neutral-400 dark:border-neutral-600 dark:from-background/80 dark:to-neutral-800/60 dark:hover:from-accent/80 dark:hover:to-accent/60 dark:hover:border-neutral-500",
        secondary:
          "bg-gradient-to-br from-secondary-600 to-secondary-700 text-white shadow-lg shadow-secondary-500/20 hover:shadow-xl hover:shadow-secondary-500/25 hover:-translate-y-0.5 hover:from-secondary-500 hover:to-secondary-600 data-[state=open]:shadow-xl data-[state=open]:shadow-secondary-500/25 data-[state=open]:-translate-y-0.5 dark:from-secondary-500 dark:to-secondary-600",
        ghost:
          "hover:bg-accent hover:text-accent-foreground hover:shadow-md hover:shadow-neutral-500/20 dark:hover:bg-accent/50 hover:-translate-y-0.5 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:shadow-md data-[state=open]:-translate-y-0.5",
        destructive:
          "bg-gradient-to-br from-error-600 to-error-700 text-white shadow-lg shadow-error-500/25 hover:shadow-xl hover:shadow-error-500/30 hover:-translate-y-0.5 hover:from-error-500 hover:to-error-600 data-[state=open]:shadow-xl data-[state=open]:shadow-error-500/30 data-[state=open]:-translate-y-0.5 focus-visible:ring-error-500/20 dark:shadow-error-500/15",
      },
      size: {
        xs: "h-7 px-3 py-1.5 text-xs gap-1 [&_svg]:h-3 [&_svg]:w-3",
        sm: "h-8 px-4 py-2 text-sm gap-1.5 [&_svg]:h-3.5 [&_svg]:w-3.5",
        default: "h-10 px-5 py-2.5 text-sm gap-2 [&_svg]:h-4 [&_svg]:w-4",
        lg: "h-12 px-7 py-3 text-base gap-2 [&_svg]:h-5 [&_svg]:w-5",
        xl: "h-14 px-8 py-4 text-lg gap-3 [&_svg]:h-6 [&_svg]:w-6 font-semibold",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "default",
    },
  }
);

const dropdownContentVariants = cva(
  "relative z-50 overflow-hidden rounded-lg border shadow-xl backdrop-blur-sm animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      variant: {
        default:
          "bg-white/95 border-neutral-200 shadow-2xl shadow-neutral-900/15 dark:bg-neutral-950/95 dark:border-neutral-800 dark:shadow-neutral-950/50",
        glass:
          "bg-white/80 backdrop-blur-md border-white/20 shadow-2xl shadow-neutral-900/25 dark:bg-neutral-950/80 dark:border-white/10 dark:shadow-neutral-950/60",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const dropdownItemVariants = cva(
  "relative flex cursor-pointer select-none items-center transition-all duration-200 outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 group",
  {
    variants: {
      size: {
        xs: "px-2 py-1 text-xs min-h-[24px] gap-1.5 [&_svg]:h-3 [&_svg]:w-3",
        sm: "px-2.5 py-1.5 text-sm min-h-[28px] gap-2 [&_svg]:h-3.5 [&_svg]:w-3.5",
        default: "px-3 py-2 text-sm min-h-[32px] gap-2 [&_svg]:h-4 [&_svg]:w-4",
        lg: "px-3.5 py-2.5 text-base min-h-[36px] gap-2.5 [&_svg]:h-5 [&_svg]:w-5",
        xl: "px-4 py-3 text-lg min-h-[40px] gap-3 [&_svg]:h-6 [&_svg]:w-6",
      },
      variant: {
        default:
          "hover:bg-neutral-50/80 focus:bg-neutral-50/80 hover:text-accent-foreground focus:text-accent-foreground dark:hover:bg-neutral-900/80 dark:focus:bg-neutral-900/80",
        destructive:
          "text-error-600 hover:bg-error-50/80 focus:bg-error-50/80 hover:text-error-700 focus:text-error-700 dark:text-error-400 dark:hover:bg-error-950/50 dark:focus:bg-error-950/50 dark:hover:text-error-300 dark:focus:text-error-300",
        success:
          "text-success-600 hover:bg-success-50/80 focus:bg-success-50/80 hover:text-success-700 focus:text-success-700 dark:text-success-400 dark:hover:bg-success-950/50 dark:focus:bg-success-950/50 dark:hover:text-success-300 dark:focus:text-success-300",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
);

const dropdownSeparatorVariants = cva(
  "my-1 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent dark:via-neutral-700",
  {
    variants: {
      size: {
        xs: "mx-1",
        sm: "mx-1.5",
        default: "mx-2",
        lg: "mx-2.5",
        xl: "mx-3",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const dropdownLabelVariants = cva(
  "font-medium text-neutral-900 dark:text-neutral-100",
  {
    variants: {
      size: {
        xs: "px-2 py-1 text-xs",
        sm: "px-2.5 py-1.5 text-xs",
        default: "px-3 py-2 text-sm",
        lg: "px-3.5 py-2.5 text-sm",
        xl: "px-4 py-3 text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface DropdownMenuItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  variant?: "default" | "destructive" | "success";
  shortcut?: string;
  onClick?: () => void;
  children?: DropdownMenuItem[];
}

export interface DropdownMenuProps
  extends React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof dropdownTriggerVariants> {
  children: React.ReactNode;
  items?: DropdownMenuItem[];
  onItemSelect?: (item: DropdownMenuItem) => void;
  trigger?: React.ReactNode;
  contentClassName?: string;
  contentVariant?: VariantProps<typeof dropdownContentVariants>["variant"];
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  alignOffset?: number;
  modal?: boolean;
  dir?: "ltr" | "rtl";
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
  open?: boolean;
}

// Sub-components
const DropdownMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button"> &
    VariantProps<typeof dropdownTriggerVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(dropdownTriggerVariants({ variant, size, className }))}
    {...props}
  >
    {children}
    <ChevronDown className="transition-transform duration-200 data-[state=open]:rotate-180" />
  </button>
));
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

const DropdownMenuContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof dropdownContentVariants>
>(({ className, variant, children, style, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(dropdownContentVariants({ variant, className }))}
    style={{
      zIndex: zIndex.dropdown,
      animationDuration: animation.duration[200],
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
));
DropdownMenuContent.displayName = "DropdownMenuContent";

const DropdownMenuItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof dropdownItemVariants> & {
      disabled?: boolean;
      shortcut?: string;
      icon?: React.ReactNode;
      inset?: boolean;
    }
>(
  (
    {
      className,
      variant,
      size,
      disabled,
      shortcut,
      icon,
      inset,
      children,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        dropdownItemVariants({ variant, size }),
        inset && "pl-8",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
      data-disabled={disabled}
      {...props}
    >
      {icon && (
        <span className="flex items-center justify-center flex-shrink-0">
          {icon}
        </span>
      )}
      <span className="flex-1 truncate">{children}</span>
      {shortcut && (
        <span className="text-xs text-neutral-400 dark:text-neutral-500 ml-auto flex-shrink-0">
          {shortcut}
        </span>
      )}
    </div>
  )
);
DropdownMenuItem.displayName = "DropdownMenuItem";

const DropdownMenuSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof dropdownSeparatorVariants>
>(({ className, size, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(dropdownSeparatorVariants({ size, className }))}
    {...props}
  />
));
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";

const DropdownMenuLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof dropdownLabelVariants> & {
      inset?: boolean;
    }
>(({ className, size, inset, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(dropdownLabelVariants({ size }), inset && "pl-8", className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = "DropdownMenuLabel";

const DropdownMenuCheckboxItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof dropdownItemVariants> & {
      checked?: boolean;
      disabled?: boolean;
      onCheckedChange?: (checked: boolean) => void;
    }
>(
  (
    {
      className,
      variant,
      size,
      checked,
      disabled,
      onCheckedChange,
      children,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        dropdownItemVariants({ variant, size }),
        "pl-8 cursor-pointer",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
      data-disabled={disabled}
      onClick={() => !disabled && onCheckedChange?.(!checked)}
      {...props}
    >
      <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
        {checked && <Check className="h-4 w-4" />}
      </span>
      {children}
    </div>
  )
);
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";

const DropdownMenuRadioGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value?: string;
    onValueChange?: (value: string) => void;
  }
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));
DropdownMenuRadioGroup.displayName = "DropdownMenuRadioGroup";

const DropdownMenuRadioItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof dropdownItemVariants> & {
      value: string;
      disabled?: boolean;
      checked?: boolean;
      onSelect?: (value: string) => void;
    }
>(
  (
    {
      className,
      variant,
      size,
      value,
      disabled,
      checked,
      onSelect,
      children,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        dropdownItemVariants({ variant, size }),
        "pl-8 cursor-pointer",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
      data-disabled={disabled}
      onClick={() => !disabled && onSelect?.(value)}
      {...props}
    >
      <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
        {checked && <Circle className="h-2 w-2 fill-current" />}
      </span>
      {children}
    </div>
  )
);
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";

const DropdownMenuSub = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));
DropdownMenuSub.displayName = "DropdownMenuSub";

const DropdownMenuSubTrigger = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof dropdownItemVariants> & {
      disabled?: boolean;
      inset?: boolean;
      icon?: React.ReactNode;
    }
>(
  (
    { className, variant, size, disabled, inset, icon, children, ...props },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        dropdownItemVariants({ variant, size }),
        "cursor-pointer",
        inset && "pl-8",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
      data-disabled={disabled}
      {...props}
    >
      {icon && (
        <span className="flex items-center justify-center flex-shrink-0">
          {icon}
        </span>
      )}
      <span className="flex-1 truncate">{children}</span>
      <ChevronRight className="ml-auto h-4 w-4" />
    </div>
  )
);
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";

const DropdownMenuSubContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof dropdownContentVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      dropdownContentVariants({ variant }),
      "min-w-[8rem]",
      className
    )}
    style={{ zIndex: zIndex.dropdown + 1 }}
    {...props}
  />
));
DropdownMenuSubContent.displayName = "DropdownMenuSubContent";

// Main compound component with hook-based logic
const DropdownMenu = React.forwardRef<HTMLButtonElement, DropdownMenuProps>(
  (
    {
      className,
      variant,
      size,
      children,
      items = [],
      onItemSelect,
      trigger,
      contentClassName,
      contentVariant = "default",
      side = "bottom",
      align = "start",
      sideOffset = 4,
      alignOffset = 0,
      onOpenChange,
      defaultOpen = false,
      open: controlledOpen,
      disabled,
      ...props
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
    const [focusedIndex, setFocusedIndex] = React.useState(-1);
    const [isMounted, setIsMounted] = React.useState(false);
    const [openSubmenus, setOpenSubmenus] = React.useState<Set<string>>(
      new Set()
    );
    const submenuTimeouts = React.useRef<Map<string, NodeJS.Timeout>>(
      new Map()
    );

    const triggerRef = React.useRef<HTMLButtonElement>(null);
    const contentRef = React.useRef<HTMLDivElement>(null);

    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const setIsOpen = React.useCallback(
      (open: boolean) => {
        if (controlledOpen === undefined) {
          setInternalOpen(open);
        }
        onOpenChange?.(open);
      },
      [controlledOpen, onOpenChange]
    );

    React.useImperativeHandle(ref, () => triggerRef.current!, []);

    React.useEffect(() => {
      setIsMounted(true);
    }, []);

    // Handle keyboard navigation
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (!isOpen) return;

        switch (event.key) {
          case "ArrowDown":
            event.preventDefault();
            setFocusedIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
            break;
          case "ArrowUp":
            event.preventDefault();
            setFocusedIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
            break;
          case "Enter":
          case " ":
            event.preventDefault();
            if (focusedIndex >= 0 && focusedIndex < items.length) {
              const item = items[focusedIndex];
              if (!item.disabled) {
                onItemSelect?.(item);
                item.onClick?.();
                if (!item.children?.length) {
                  setIsOpen(false);
                  triggerRef.current?.focus();
                }
              }
            }
            break;
          case "Escape":
            event.preventDefault();
            setIsOpen(false);
            submenuTimeouts.current.forEach((timeout) => clearTimeout(timeout));
            submenuTimeouts.current.clear();
            setOpenSubmenus(new Set());
            triggerRef.current?.focus();
            break;
        }
      };

      if (isOpen) {
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
      }
    }, [isOpen, focusedIndex, items, onItemSelect, setIsOpen]);

    // Handle clicking outside to close
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          contentRef.current &&
          !contentRef.current.contains(event.target as Node) &&
          triggerRef.current &&
          !triggerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
          submenuTimeouts.current.forEach((timeout) => clearTimeout(timeout));
          submenuTimeouts.current.clear();
          setOpenSubmenus(new Set());
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
          document.removeEventListener("mousedown", handleClickOutside);
      }
    }, [isOpen, setIsOpen]);

    // Toggle open state
    const handleToggle = React.useCallback(() => {
      if (disabled) return;
      const newIsOpen = !isOpen;
      setIsOpen(newIsOpen);
      setFocusedIndex(-1);
      if (!newIsOpen) {
        // Clear submenus and timeouts when closing
        submenuTimeouts.current.forEach((timeout) => clearTimeout(timeout));
        submenuTimeouts.current.clear();
        setOpenSubmenus(new Set());
      }
    }, [disabled, isOpen, setIsOpen]);

    const handleItemClick = React.useCallback(
      (item: DropdownMenuItem, index: number) => {
        if (item.disabled) return;
        setFocusedIndex(index);
        onItemSelect?.(item);
        item.onClick?.();

        if (!item.children?.length) {
          setIsOpen(false);
          triggerRef.current?.focus();
        }
      },
      [onItemSelect, setIsOpen]
    );

    // Handle submenu interactions
    const handleSubmenuEnter = React.useCallback((itemKey: string) => {
      // Clear any existing timeout for this submenu
      const existingTimeout = submenuTimeouts.current.get(itemKey);
      if (existingTimeout) {
        clearTimeout(existingTimeout);
        submenuTimeouts.current.delete(itemKey);
      }
      setOpenSubmenus((prev) => new Set([...prev, itemKey]));
    }, []);

    const handleSubmenuLeave = React.useCallback((itemKey: string) => {
      // Set timeout to close submenu after delay
      const timeout = setTimeout(() => {
        setOpenSubmenus((prev) => {
          const newSet = new Set(prev);
          newSet.delete(itemKey);
          return newSet;
        });
        submenuTimeouts.current.delete(itemKey);
      }, 300);
      submenuTimeouts.current.set(itemKey, timeout);
    }, []);

    const handleSubmenuClick = React.useCallback(
      (item: DropdownMenuItem, index: number) => {
        if (item.children?.length) {
          setOpenSubmenus((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(item.key)) {
              newSet.delete(item.key);
            } else {
              newSet.add(item.key);
            }
            return newSet;
          });
        } else {
          handleItemClick(item, index);
        }
      },
      [handleItemClick]
    );

    if (!isMounted) {
      return (
        <div className="relative">
          <button
            className={cn(
              dropdownTriggerVariants({ variant, size, className })
            )}
            disabled
          >
            {trigger || children}
            <ChevronDown className="transition-transform duration-200" />
          </button>
        </div>
      );
    }

    return (
      <div className="relative">
        {/* Trigger Button */}
        <button
          ref={triggerRef}
          className={cn(dropdownTriggerVariants({ variant, size, className }))}
          data-state={isOpen ? "open" : "closed"}
          disabled={disabled}
          aria-expanded={isOpen}
          aria-haspopup="menu"
          onClick={handleToggle}
          {...props}
        >
          {trigger || children}
          <ChevronDown className="transition-transform duration-200 data-[state=open]:rotate-180" />
        </button>

        {/* Content */}
        {isOpen && (
          <div
            ref={contentRef}
            className={cn(
              dropdownContentVariants({ variant: contentVariant }),
              "absolute min-w-[8rem] mt-1 overflow-visible",
              side === "top" && "bottom-full mb-1 mt-0",
              side === "left" && "right-full mr-1 mt-0",
              side === "right" && "left-full ml-1 mt-0",
              align === "end" && "right-0",
              align === "center" && "left-1/2 -translate-x-1/2",
              contentClassName
            )}
            data-state="open"
            style={{
              marginTop: side === "bottom" ? sideOffset : undefined,
              marginBottom: side === "top" ? sideOffset : undefined,
              marginLeft: side === "right" ? sideOffset : alignOffset,
              marginRight: side === "left" ? sideOffset : -alignOffset,
            }}
            role="menu"
          >
            {items.map((item, index) => (
              <div key={item.key} className="relative overflow-visible">
                <div
                  className={cn(
                    dropdownItemVariants({
                      variant: item.variant || "default",
                      size,
                    }),
                    focusedIndex === index &&
                      "bg-neutral-100 dark:bg-neutral-800",
                    item.disabled && "cursor-not-allowed opacity-50",
                    item.children?.length &&
                      openSubmenus.has(item.key) &&
                      "bg-primary-50 text-primary-900 dark:bg-primary-950/50 dark:text-primary-100"
                  )}
                  onClick={() =>
                    item.children?.length
                      ? handleSubmenuClick(item, index)
                      : handleItemClick(item, index)
                  }
                  onMouseEnter={() => {
                    setFocusedIndex(index);
                    if (item.children?.length) {
                      handleSubmenuEnter(item.key);
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.children?.length) {
                      handleSubmenuLeave(item.key);
                    }
                  }}
                  role="menuitem"
                  aria-haspopup={item.children?.length ? "menu" : undefined}
                  aria-expanded={
                    item.children?.length
                      ? openSubmenus.has(item.key)
                      : undefined
                  }
                >
                  {item.icon && (
                    <span className="flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </span>
                  )}
                  <span className="flex-1 truncate">{item.label}</span>
                  {item.shortcut && (
                    <span className="text-xs text-neutral-400 dark:text-neutral-500 ml-auto flex-shrink-0">
                      {item.shortcut}
                    </span>
                  )}
                  {item.children && item.children.length > 0 && (
                    <ChevronRight className="ml-auto h-4 w-4" />
                  )}
                </div>

                {/* Submenu */}
                {item.children &&
                  item.children.length > 0 &&
                  openSubmenus.has(item.key) && (
                    <div
                      className={cn(
                        dropdownContentVariants({ variant: contentVariant }),
                        "absolute left-full top-0 min-w-[12rem] ml-2 z-[1001]",
                        "animate-in slide-in-from-left-2 fade-in-0 duration-200",
                        "shadow-lg border border-neutral-200/60 dark:border-neutral-700/60",
                        "backdrop-blur-sm bg-white/95 dark:bg-neutral-950/95"
                      )}
                      style={{ zIndex: zIndex.dropdown + 1 }}
                      onMouseEnter={() => handleSubmenuEnter(item.key)}
                      onMouseLeave={() => handleSubmenuLeave(item.key)}
                      role="menu"
                    >
                      {item.children.map((childItem, childIndex) => (
                        <div
                          key={childItem.key}
                          className={cn(
                            dropdownItemVariants({
                              variant: childItem.variant || "default",
                              size,
                            }),
                            "relative", // Remove excessive indentation
                            childItem.disabled &&
                              "cursor-not-allowed opacity-50",
                            "hover:bg-primary-50 hover:text-primary-900 dark:hover:bg-primary-950/50 dark:hover:text-primary-100",
                            "transition-colors duration-150"
                          )}
                          data-disabled={childItem.disabled}
                          onClick={() => {
                            if (!childItem.disabled) {
                              onItemSelect?.(childItem);
                              childItem.onClick?.();
                              setIsOpen(false);
                              triggerRef.current?.focus();
                            }
                          }}
                          role="menuitem"
                          aria-disabled={childItem.disabled}
                        >
                          {childItem.icon && (
                            <span className="flex items-center justify-center flex-shrink-0">
                              {childItem.icon}
                            </span>
                          )}
                          <span className="flex-1 truncate">
                            {childItem.label}
                          </span>
                          {childItem.shortcut && (
                            <span className="text-xs text-neutral-400 dark:text-neutral-500 ml-auto flex-shrink-0">
                              {childItem.shortcut}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);
DropdownMenu.displayName = "DropdownMenu";

// Add keyframe animations
if (typeof window !== "undefined") {
  const styleId = "dropdown-menu-animations";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes fade-out {
        from { opacity: 1; }
        to { opacity: 0; }
      }
      @keyframes zoom-in-95 {
        from { transform: scale(0.95); }
        to { transform: scale(1); }
      }
      @keyframes zoom-out-95 {
        from { transform: scale(1); }
        to { transform: scale(0.95); }
      }
      @keyframes slide-in-from-top-2 {
        from { transform: translateY(-0.5rem); }
        to { transform: translateY(0); }
      }
      @keyframes slide-in-from-bottom-2 {
        from { transform: translateY(0.5rem); }
        to { transform: translateY(0); }
      }
      @keyframes slide-in-from-left-2 {
        from { transform: translateX(-0.5rem); }
        to { transform: translateX(0); }
      }
      @keyframes slide-in-from-right-2 {
        from { transform: translateX(0.5rem); }
        to { transform: translateX(0); }
      }
      .animate-in {
        animation-fill-mode: both;
      }
      .fade-in-0 {
        animation: fade-in 150ms ease-out;
      }
      .fade-out-0 {
        animation: fade-out 150ms ease-in;
      }
      .zoom-in-95 {
        animation: zoom-in-95 150ms ease-out;
      }
      .zoom-out-95 {
        animation: zoom-out-95 150ms ease-in;
      }
      .slide-in-from-top-2 {
        animation: slide-in-from-top-2 150ms ease-out;
      }
      .slide-in-from-bottom-2 {
        animation: slide-in-from-bottom-2 150ms ease-out;
      }
      .slide-in-from-left-2 {
        animation: slide-in-from-left-2 150ms ease-out;
      }
      .slide-in-from-right-2 {
        animation: slide-in-from-right-2 150ms ease-out;
      }
      .data-\\[state\\=closed\\]\\:animate-out[data-state="closed"] {
        animation-fill-mode: forwards;
      }
      .data-\\[state\\=closed\\]\\:fade-out-0[data-state="closed"] {
        animation: fade-out 150ms ease-in;
      }
      .data-\\[state\\=closed\\]\\:zoom-out-95[data-state="closed"] {
        animation: zoom-out-95 150ms ease-in;
      }
      .data-\\[state\\=open\\]\\:rotate-180[data-state="open"] {
        transform: rotate(180deg);
      }
    `;
    document.head.appendChild(style);
  }
}

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  dropdownTriggerVariants,
  dropdownContentVariants,
  dropdownItemVariants,
  type DropdownMenuItem as DropdownMenuItemType,
  type DropdownMenuProps as DropdownMenuPropsType,
};
