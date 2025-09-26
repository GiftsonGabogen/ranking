import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { ChevronDown, ChevronUp, Check, X } from "lucide-react"
import { cn } from "@/lib/design-token-utils"
import { components } from "@/lib/design-tokens"

const selectTriggerVariants = cva(
  "relative flex items-center rounded-lg text-sm transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 outline-none cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "border border-neutral-200 bg-white shadow-sm shadow-neutral-900/5 hover:shadow-md hover:shadow-neutral-900/10 hover:border-neutral-300 focus:border-primary-500 focus:ring-[3px] focus:ring-primary-500/20 focus:shadow-lg focus:shadow-primary-500/10 data-[state=open]:border-primary-500 data-[state=open]:ring-[3px] data-[state=open]:ring-primary-500/20 data-[state=open]:shadow-lg data-[state=open]:shadow-primary-500/10 dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-neutral-950/20 dark:hover:border-neutral-700 dark:hover:shadow-neutral-950/30 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 dark:focus:shadow-primary-400/10 dark:data-[state=open]:border-primary-400 dark:data-[state=open]:ring-primary-400/20 dark:data-[state=open]:shadow-primary-400/10",
        destructive:
          "border border-error-200 bg-error-50/30 text-error-900 shadow-sm shadow-error-900/5 placeholder:text-error-400 hover:shadow-md hover:shadow-error-500/10 hover:border-error-300 focus:border-error-500 focus:ring-[3px] focus:ring-error-500/20 focus:shadow-lg focus:shadow-error-500/10 data-[state=open]:border-error-500 data-[state=open]:ring-[3px] data-[state=open]:ring-error-500/20 data-[state=open]:shadow-lg data-[state=open]:shadow-error-500/10 dark:border-error-900/50 dark:bg-error-950/20 dark:text-error-100 dark:shadow-error-950/20 dark:placeholder:text-error-500 dark:hover:border-error-800 dark:hover:shadow-error-950/30 dark:focus:border-error-400 dark:focus:ring-error-400/20 dark:focus:shadow-error-400/10 dark:data-[state=open]:border-error-400 dark:data-[state=open]:ring-error-400/20 dark:data-[state=open]:shadow-error-400/10",
        success:
          "border border-success-200 bg-success-50/30 text-success-900 shadow-sm shadow-success-900/5 placeholder:text-success-400 hover:shadow-md hover:shadow-success-500/10 hover:border-success-300 focus:border-success-500 focus:ring-[3px] focus:ring-success-500/20 focus:shadow-lg focus:shadow-success-500/10 data-[state=open]:border-success-500 data-[state=open]:ring-[3px] data-[state=open]:ring-success-500/20 data-[state=open]:shadow-lg data-[state=open]:shadow-success-500/10 dark:border-success-900/50 dark:bg-success-950/20 dark:text-success-100 dark:shadow-success-950/20 dark:placeholder:text-success-500 dark:hover:border-success-800 dark:hover:shadow-success-950/30 dark:focus:border-success-400 dark:focus:ring-success-400/20 dark:focus:shadow-success-400/10 dark:data-[state=open]:border-success-400 dark:data-[state=open]:ring-success-400/20 dark:data-[state=open]:shadow-success-400/10",
        warning:
          "border border-warning-200 bg-warning-50/30 text-warning-900 shadow-sm shadow-warning-900/5 placeholder:text-warning-400 hover:shadow-md hover:shadow-warning-500/10 hover:border-warning-300 focus:border-warning-500 focus:ring-[3px] focus:ring-warning-500/20 focus:shadow-lg focus:shadow-warning-500/10 data-[state=open]:border-warning-500 data-[state=open]:ring-[3px] data-[state=open]:ring-warning-500/20 data-[state=open]:shadow-lg data-[state=open]:shadow-warning-500/10 dark:border-warning-900/50 dark:bg-warning-950/20 dark:text-warning-100 dark:shadow-warning-950/20 dark:placeholder:text-warning-500 dark:hover:border-warning-800 dark:hover:shadow-warning-950/30 dark:focus:border-warning-400 dark:focus:ring-warning-400/20 dark:focus:shadow-warning-400/10 dark:data-[state=open]:border-warning-400 dark:data-[state=open]:ring-warning-400/20 dark:data-[state=open]:shadow-warning-400/10",
        outline:
          "border-2 border-neutral-300 bg-transparent shadow-sm hover:shadow-md hover:border-primary-400 focus:border-primary-500 focus:ring-[3px] focus:ring-primary-500/20 focus:shadow-lg focus:shadow-primary-500/10 data-[state=open]:border-primary-500 data-[state=open]:ring-[3px] data-[state=open]:ring-primary-500/20 data-[state=open]:shadow-lg data-[state=open]:shadow-primary-500/10 dark:border-neutral-700 dark:hover:border-primary-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 dark:focus:shadow-primary-400/10 dark:data-[state=open]:border-primary-400 dark:data-[state=open]:ring-primary-400/20 dark:data-[state=open]:shadow-primary-400/10",
        ghost:
          "border border-transparent bg-neutral-50/50 hover:bg-neutral-100 hover:shadow-sm hover:shadow-neutral-900/5 focus:bg-white focus:border-neutral-200 focus:ring-[3px] focus:ring-neutral-500/10 focus:shadow-md focus:shadow-neutral-900/10 data-[state=open]:bg-white data-[state=open]:border-neutral-200 data-[state=open]:ring-[3px] data-[state=open]:ring-neutral-500/10 data-[state=open]:shadow-md data-[state=open]:shadow-neutral-900/10 dark:bg-neutral-900/30 dark:hover:bg-neutral-900/50 dark:hover:shadow-neutral-950/20 dark:focus:bg-neutral-900 dark:focus:border-neutral-700 dark:focus:ring-neutral-400/10 dark:focus:shadow-neutral-950/20 dark:data-[state=open]:bg-neutral-900 dark:data-[state=open]:border-neutral-700 dark:data-[state=open]:ring-neutral-400/10 dark:data-[state=open]:shadow-neutral-950/20",
      },
      size: {
        xs: "h-7 text-xs",
        sm: "h-8 text-sm", 
        default: "h-10 text-sm",
        lg: "h-12 text-base",
        xl: "h-14 text-lg",
      },
      isInvalid: {
        true: "border-error-500 shadow-sm shadow-error-500/10 focus:border-error-500 focus:ring-error-500/20 focus:shadow-error-500/10 data-[state=open]:border-error-500 data-[state=open]:ring-error-500/20 data-[state=open]:shadow-error-500/10 dark:border-error-400 dark:shadow-error-400/10 dark:focus:border-error-400 dark:focus:ring-error-400/20 dark:focus:shadow-error-400/10 dark:data-[state=open]:border-error-400 dark:data-[state=open]:ring-error-400/20 dark:data-[state=open]:shadow-error-400/10 animate-shake",
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

const selectContentVariants = cva(
  "relative z-50 overflow-hidden rounded-lg border shadow-lg animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      variant: {
        default: "bg-white border-neutral-200 shadow-xl shadow-neutral-900/10 dark:bg-neutral-950 dark:border-neutral-800 dark:shadow-neutral-950/30",
        glass: "bg-white/80 backdrop-blur-md border-white/20 shadow-xl shadow-neutral-900/20 dark:bg-neutral-950/80 dark:border-white/10 dark:shadow-neutral-950/40",
      }
    },
    defaultVariants: {
      variant: "default",
    }
  }
)

const selectItemVariants = cva(
  "relative flex cursor-default select-none items-center transition-all duration-200 outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      size: {
        xs: "px-2 py-1 text-xs min-h-[24px]",
        sm: "px-2.5 py-1.5 text-sm min-h-[28px]",
        default: "px-3 py-2 text-sm min-h-[32px]", 
        lg: "px-3.5 py-2.5 text-base min-h-[36px]",
        xl: "px-4 py-3 text-lg min-h-[40px]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
  icon?: React.ReactNode
  description?: string
}

export interface SelectProps 
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size' | 'value' | 'onChange'>,
    VariantProps<typeof selectTriggerVariants> {
  options: SelectOption[]
  value: string
  onValueChange: (value: string) => void
  placeholder?: string
  searchable?: boolean
  clearable?: boolean
  multiple?: boolean
  multipleValues?: string[]
  onMultipleValueChange?: (values: string[]) => void
  leftIcon?: React.ReactNode
  contentClassName?: string
  itemClassName?: string
  maxHeight?: string
  loading?: boolean
  loadingText?: string
  emptyText?: string
  contentVariant?: VariantProps<typeof selectContentVariants>['variant']
  width?: string | number
}

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  ({
    className,
    variant,
    size = "default",
    isInvalid,
    options = [],
    value,
    placeholder = "Select an option...",
    onValueChange,
    searchable = false,
    clearable = false,
    multiple = false,
    multipleValues = [],
    onMultipleValueChange,
    leftIcon,
    contentClassName,
    itemClassName,
    maxHeight = "300px",
    loading = false,
    loadingText = "Loading...",
    emptyText = "No options available",
    contentVariant = "default",
    disabled,
    width = "200px",
    ...props
  }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [searchQuery, setSearchQuery] = React.useState("")
    const [focusedIndex, setFocusedIndex] = React.useState(-1)
    const [isMounted, setIsMounted] = React.useState(false)
    
    const selectRef = React.useRef<HTMLButtonElement>(null)
    const contentRef = React.useRef<HTMLDivElement>(null)
    const searchInputRef = React.useRef<HTMLInputElement>(null)
    const listRef = React.useRef<HTMLDivElement>(null)
    
    const currentSize = size || "default"

    React.useEffect(() => {
      setIsMounted(true)
    }, [])

    React.useImperativeHandle(ref, () => selectRef.current!, [])

    // Filter options based on search
    const filteredOptions = React.useMemo(() => {
      if (!searchQuery) return options
      return options.filter(option => 
        option.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        option.value.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }, [options, searchQuery])

    // Get selected option(s) display
    const getDisplayValue = React.useCallback(() => {
      if (multiple) {
        const selectedOptions = options.filter(opt => multipleValues.includes(opt.value))
        if (selectedOptions.length === 0) return placeholder
        if (selectedOptions.length === 1) return selectedOptions[0].label
        return `${selectedOptions.length} selected`
      }
      
      const selectedOption = options.find(opt => opt.value === value)
      return selectedOption?.label || placeholder
    }, [multiple, multipleValues, options, value, placeholder])

    // Handle keyboard navigation
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (!isOpen) return
        
        switch (event.key) {
          case 'ArrowDown':
            event.preventDefault()
            setFocusedIndex(prev => 
              prev < filteredOptions.length - 1 ? prev + 1 : 0
            )
            break
          case 'ArrowUp':
            event.preventDefault()
            setFocusedIndex(prev => 
              prev > 0 ? prev - 1 : filteredOptions.length - 1
            )
            break
          case 'Enter':
            event.preventDefault()
            if (focusedIndex >= 0 && focusedIndex < filteredOptions.length) {
              handleSelect(filteredOptions[focusedIndex])
            }
            break
          case 'Escape':
            event.preventDefault()
            setIsOpen(false)
            selectRef.current?.focus()
            break
        }
      }

      if (isOpen) {
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
      }
    }, [isOpen, focusedIndex, filteredOptions])

    // Handle clicking outside to close
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          contentRef.current &&
          !contentRef.current.contains(event.target as Node) &&
          selectRef.current &&
          !selectRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false)
        }
      }

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [isOpen])

    // Handle option selection
    const handleSelect = React.useCallback((option: SelectOption) => {
      if (option.disabled) return
      
      if (multiple) {
        const newValues = multipleValues.includes(option.value)
          ? multipleValues.filter(v => v !== option.value)
          : [...multipleValues, option.value]
        onMultipleValueChange?.(newValues)
      } else {
        onValueChange?.(option.value)
        setIsOpen(false)
        selectRef.current?.focus()
      }
    }, [multiple, multipleValues, onMultipleValueChange, onValueChange])

    // Handle clear selection
    const handleClear = React.useCallback((event: React.MouseEvent) => {
      event.stopPropagation()
      if (multiple) {
        onMultipleValueChange?.([])
      } else {
        onValueChange?.("")
      }
    }, [multiple, onMultipleValueChange, onValueChange])

    // Toggle open state
    const handleToggle = React.useCallback(() => {
      if (disabled || loading) return
      setIsOpen(prev => !prev)
      setSearchQuery("")
      setFocusedIndex(-1)
    }, [disabled, loading])

    // Focus search input when opened
    React.useEffect(() => {
      if (isOpen && searchable && searchInputRef.current) {
        setTimeout(() => searchInputRef.current?.focus(), 50)
      }
    }, [isOpen, searchable])

    // Get padding based on size and icons
    const getTriggerPadding = () => {
      const hasLeft = !!leftIcon
      const hasRight = true // Always has chevron
      
      if (hasLeft && hasRight) {
        return {
          paddingLeft: components.input.paddingWithIcon[currentSize].left,
          paddingRight: components.input.paddingWithIcon[currentSize].right,
          paddingTop: components.input.padding[currentSize].y,
          paddingBottom: components.input.padding[currentSize].y,
        }
      } else if (hasLeft) {
        return {
          paddingLeft: components.input.paddingWithIcon[currentSize].left,
          paddingRight: components.input.padding[currentSize].x,
          paddingTop: components.input.padding[currentSize].y,
          paddingBottom: components.input.padding[currentSize].y,
        }
      } else {
        return {
          paddingLeft: components.input.padding[currentSize].x,
          paddingRight: components.input.paddingWithIcon[currentSize].right,
          paddingTop: components.input.padding[currentSize].y,
          paddingBottom: components.input.padding[currentSize].y,
        }
      }
    }

    const triggerPadding = getTriggerPadding()
    const hasSelection = multiple ? multipleValues.length > 0 : !!value

    if (!isMounted) {
      return (
        <div className="relative" style={{ width }}>
          <button
            className={cn(selectTriggerVariants({ variant, size, isInvalid, className }))}
            style={{ 
              width: '100%',
              paddingLeft: components.input.padding[currentSize].x,
              paddingRight: components.input.paddingWithIcon[currentSize].right,
              paddingTop: components.input.padding[currentSize].y,
              paddingBottom: components.input.padding[currentSize].y,
            }}
            disabled
          >
            <span className="flex-1 text-left truncate text-neutral-400 mr-2">{placeholder}</span>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none" style={{ right: components.input.iconOffset[currentSize] }}>
              <ChevronDown className={cn(
                "shrink-0 opacity-50 transition-transform duration-200",
                `h-[${components.input.iconSize[currentSize]}] w-[${components.input.iconSize[currentSize]}]`
              )} />
            </div>
          </button>
        </div>
      )
    }

    return (
      <div className="relative" style={{ width }}>
        {/* Trigger Button */}
        <button
          ref={selectRef}
          type="button"
          className={cn(
            selectTriggerVariants({ variant, size, isInvalid, className }),
            "group"
          )}
          style={{ 
            ...triggerPadding,
            width: '100%'
          }}
          data-state={isOpen ? "open" : "closed"}
          disabled={disabled || loading}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          onClick={handleToggle}
          {...props}
        >
          {/* Left Icon */}
          {leftIcon && (
            <div 
              className={cn(
                "absolute top-1/2 -translate-y-1/2 flex items-center justify-center transition-colors duration-300 pointer-events-none",
                !isOpen && !isInvalid && variant !== "destructive" && variant !== "success" && variant !== "warning" && "text-neutral-400 dark:text-neutral-500",
                isOpen && !isInvalid && variant !== "destructive" && variant !== "success" && variant !== "warning" && "text-primary-500 dark:text-primary-400",
                (isInvalid || variant === "destructive") && "text-error-500 dark:text-error-400",
                variant === "success" && !isOpen && "text-neutral-400 dark:text-neutral-500",
                variant === "success" && isOpen && "text-success-600 dark:text-success-400",
                variant === "warning" && !isOpen && "text-neutral-400 dark:text-neutral-500",
                variant === "warning" && isOpen && "text-warning-600 dark:text-warning-400"
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

          {/* Display Value */}
          <span className={cn(
            "flex-1 text-left truncate transition-colors duration-200 mr-2",
            !hasSelection && "text-neutral-400 dark:text-neutral-500",
            hasSelection && "text-foreground"
          )}>
            {loading ? loadingText : getDisplayValue()}
          </span>

          {/* Actions - Positioned absolutely on the right */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-1" style={{ right: components.input.iconOffset[currentSize] }}>
            {/* Clear Button */}
            {clearable && hasSelection && !loading && (
              <button
                type="button"
                className={cn(
                  "flex items-center justify-center rounded-md transition-all duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 opacity-0 group-hover:opacity-100 hover:scale-110",
                  `h-[${components.input.iconSize[currentSize]}] w-[${components.input.iconSize[currentSize]}]`
                )}
                onClick={handleClear}
                tabIndex={-1}
              >
                <X className="h-3 w-3" />
              </button>
            )}

            {/* Chevron */}
            <div className="flex items-center justify-center pointer-events-none">
              {isOpen ? (
                <ChevronUp className={cn(
                  "shrink-0 text-neutral-500 transition-all duration-200 dark:text-neutral-400",
                  `h-[${components.input.iconSize[currentSize]}] w-[${components.input.iconSize[currentSize]}]`,
                  !isInvalid && variant !== "destructive" && variant !== "success" && variant !== "warning" && "group-focus:text-primary-500 dark:group-focus:text-primary-400",
                  (isInvalid || variant === "destructive") && "group-focus:text-error-500 dark:group-focus:text-error-400",
                  variant === "success" && "group-focus:text-success-600 dark:group-focus:text-success-400",
                  variant === "warning" && "group-focus:text-warning-600 dark:group-focus:text-warning-400"
                )} />
              ) : (
                <ChevronDown className={cn(
                  "shrink-0 text-neutral-500 transition-all duration-200 dark:text-neutral-400",
                  `h-[${components.input.iconSize[currentSize]}] w-[${components.input.iconSize[currentSize]}]`,
                  !isInvalid && variant !== "destructive" && variant !== "success" && variant !== "warning" && "group-hover:text-primary-500 dark:group-hover:text-primary-400",
                  (isInvalid || variant === "destructive") && "group-hover:text-error-500 dark:group-hover:text-error-400",
                  variant === "success" && "group-hover:text-success-600 dark:group-hover:text-success-400",
                  variant === "warning" && "group-hover:text-warning-600 dark:group-hover:text-warning-400"
                )} />
              )}
            </div>
          </div>
        </button>

        {/* Content */}
        {isOpen && (
          <div
            ref={contentRef}
            className={cn(
              selectContentVariants({ variant: contentVariant }),
              "absolute z-[1000] mt-1",
              contentClassName
            )}
            data-state="open"
            style={{ 
              maxHeight,
              width: '100%'
            }}
          >
            {/* Search Input */}
            {searchable && (
              <div className="p-2 border-b border-neutral-200 dark:border-neutral-700">
                <input
                  ref={searchInputRef}
                  type="text"
                  className="w-full px-2 py-1 text-sm bg-transparent border-0 outline-none placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
                  placeholder="Search options..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setFocusedIndex(-1)
                  }}
                />
              </div>
            )}

            {/* Options List */}
            <div
              ref={listRef}
              className="overflow-auto"
              style={{ maxHeight: searchable ? `calc(${maxHeight} - 60px)` : maxHeight }}
              role="listbox"
            >
              {loading ? (
                <div 
                  className={cn(selectItemVariants({ size }), "justify-center text-neutral-500 w-full")}
                >
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-500 mr-2"></div>
                  {loadingText}
                </div>
              ) : filteredOptions.length === 0 ? (
                <div 
                  className={cn(selectItemVariants({ size }), "justify-center text-neutral-500 w-full")}
                >
                  {emptyText}
                </div>
              ) : (
                filteredOptions.map((option, index) => {
                  const isSelected = multiple 
                    ? multipleValues.includes(option.value)
                    : value === option.value
                  const isFocused = index === focusedIndex

                  return (
                    <div
                      key={option.value}
                      className={cn(
                        selectItemVariants({ size }),
                        "hover:bg-neutral-50 focus:bg-neutral-50 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900 w-full",
                        isSelected && "bg-primary-50 text-primary-900 dark:bg-primary-950 dark:text-primary-100",
                        isFocused && "bg-neutral-100 dark:bg-neutral-800",
                        option.disabled && "opacity-50 cursor-not-allowed",
                        itemClassName
                      )}
                      data-disabled={option.disabled}
                      data-selected={isSelected}
                      onClick={() => handleSelect(option)}
                      role="option"
                      aria-selected={isSelected}
                    >
                      {/* Option Icon */}
                      {option.icon && (
                        <div className="mr-2 flex items-center justify-center flex-shrink-0">
                          {option.icon}
                        </div>
                      )}

                      {/* Option Content */}
                      <div className="flex-1 min-w-0">
                        <div className="truncate">{option.label}</div>
                        {option.description && (
                          <div className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                            {option.description}
                          </div>
                        )}
                      </div>

                      {/* Selection Indicator */}
                      {multiple ? (
                        <div className={cn(
                          "ml-2 flex items-center justify-center w-4 h-4 rounded border border-neutral-300 dark:border-neutral-600 transition-all duration-200",
                          isSelected && "bg-primary-500 border-primary-500"
                        )}>
                          {isSelected && <Check className="h-3 w-3 text-white" />}
                        </div>
                      ) : (
                        isSelected && (
                          <Check className="ml-2 h-4 w-4 text-primary-500 flex-shrink-0" />
                        )
                      )}
                    </div>
                  )
                })
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
)
Select.displayName = "Select"

// Add keyframe animation for shake effect (same as input component)
if (typeof window !== 'undefined') {
  const styleId = 'select-animations'
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

export { Select, selectTriggerVariants, selectContentVariants, selectItemVariants }