import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/design-token-utils"
import { components, spacing, animation, semanticColors, zIndex } from "@/lib/design-tokens"

// Search icon component
const SearchIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
)

// Clear icon component
const XIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
)

// Suggestion item type
export interface SearchSuggestion {
  id: string | number
  label: string
  value: string
  description?: string
  category?: string
  icon?: React.ReactNode
  meta?: string
}

const searchVariants = cva(
  "flex w-full rounded-lg text-sm transition-all duration-300 outline-none relative",
  {
    variants: {
      variant: {
        default:
          "border border-neutral-200 bg-white shadow-sm shadow-neutral-900/5 hover:shadow-md hover:shadow-neutral-900/10 hover:border-neutral-300 focus-within:border-primary-500 focus-within:ring-[3px] focus-within:ring-primary-500/20 focus-within:shadow-lg focus-within:shadow-primary-500/10 dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-neutral-950/20 dark:hover:border-neutral-700 dark:hover:shadow-neutral-950/30 dark:focus-within:border-primary-400 dark:focus-within:ring-primary-400/20 dark:focus-within:shadow-primary-400/10",
        outline:
          "border-2 border-neutral-300 bg-transparent shadow-sm hover:shadow-md hover:border-primary-400 focus-within:border-primary-500 focus-within:ring-[3px] focus-within:ring-primary-500/20 focus-within:shadow-lg focus-within:shadow-primary-500/10 dark:border-neutral-700 dark:hover:border-primary-500 dark:focus-within:border-primary-400 dark:focus-within:ring-primary-400/20 dark:focus-within:shadow-primary-400/10",
        ghost:
          "border border-transparent bg-neutral-50/50 hover:bg-neutral-100 hover:shadow-sm hover:shadow-neutral-900/5 focus-within:bg-white focus-within:border-neutral-200 focus-within:ring-[3px] focus-within:ring-neutral-500/10 focus-within:shadow-md focus-within:shadow-neutral-900/10 dark:bg-neutral-900/30 dark:hover:bg-neutral-900/50 dark:hover:shadow-neutral-950/20 dark:focus-within:bg-neutral-900 dark:focus-within:border-neutral-700 dark:focus-within:ring-neutral-400/10 dark:focus-within:shadow-neutral-950/20",
        filled:
          "border border-transparent bg-neutral-100 shadow-inner shadow-neutral-900/5 hover:bg-neutral-50 hover:shadow-sm hover:shadow-neutral-900/5 focus-within:bg-white focus-within:border-neutral-200 focus-within:ring-[3px] focus-within:ring-primary-500/20 focus-within:shadow-md focus-within:shadow-primary-500/5 dark:bg-neutral-900 dark:shadow-neutral-950/20 dark:hover:bg-neutral-800 dark:hover:shadow-neutral-950/10 dark:focus-within:bg-neutral-800 dark:focus-within:border-neutral-700 dark:focus-within:ring-primary-400/20 dark:focus-within:shadow-primary-400/5",
      },
      size: {
        xs: "h-7 text-xs",
        sm: "h-8 text-sm",
        default: "h-10 text-sm",
        lg: "h-12 text-base",
        xl: "h-14 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const suggestionListVariants = cva(
  "absolute top-full left-0 right-0 mt-1 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-lg shadow-neutral-900/10 dark:shadow-neutral-950/30 overflow-hidden transition-all duration-200 transform-gpu will-change-transform",
  {
    variants: {
      state: {
        hidden: "opacity-0 scale-95 translate-y-[-8px] pointer-events-none",
        visible: "opacity-100 scale-100 translate-y-0 pointer-events-auto",
      },
    },
    defaultVariants: {
      state: "hidden",
    },
  }
)

const suggestionItemVariants = cva(
  "flex items-center gap-3 px-3 py-2 text-sm cursor-pointer transition-all duration-150 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 border-b border-neutral-100 dark:border-neutral-800 last:border-b-0",
  {
    variants: {
      isHighlighted: {
        true: "bg-primary-50 dark:bg-primary-950/30 text-primary-900 dark:text-primary-100 border-primary-100 dark:border-primary-800",
        false: "",
      },
    },
    defaultVariants: {
      isHighlighted: false,
    },
  }
)

export interface SearchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'>,
    VariantProps<typeof searchVariants> {
  suggestions?: SearchSuggestion[]
  onSuggestionSelect?: (suggestion: SearchSuggestion) => void
  onChange?: (value: string) => void
  onSearch?: (value: string) => void
  loading?: boolean
  showClearButton?: boolean
  maxSuggestions?: number
  filterSuggestions?: boolean
  highlightMatches?: boolean
  placeholder?: string
  emptyStateMessage?: string
  containerClassName?: string
}

export const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  ({
    className,
    variant,
    size = "default",
    suggestions = [],
    onSuggestionSelect,
    onChange,
    onSearch,
    loading = false,
    showClearButton = true,
    maxSuggestions = 10,
    filterSuggestions = true,
    highlightMatches = true,
    placeholder = "Search...",
    emptyStateMessage = "No results found",
    containerClassName,
    onFocus,
    onBlur,
    onKeyDown,
    value: controlledValue,
    defaultValue,
    ...props
  }, ref) => {
    const [value, setValue] = React.useState(controlledValue?.toString() || defaultValue?.toString() || "")
    const [isFocused, setIsFocused] = React.useState(false)
    const [isOpen, setIsOpen] = React.useState(false)
    const [highlightedIndex, setHighlightedIndex] = React.useState(-1)
    const inputRef = React.useRef<HTMLInputElement>(null)
    const suggestionRefs = React.useRef<(HTMLDivElement | null)[]>([])
    
    // Use controlled value if provided
    const displayValue = controlledValue !== undefined ? controlledValue.toString() : value
    
    // Filter and limit suggestions
    const filteredSuggestions = React.useMemo(() => {
      if (!suggestions.length) return []
      
      let filtered = suggestions
      
      if (filterSuggestions && displayValue.trim()) {
        filtered = suggestions.filter(suggestion =>
          suggestion.label.toLowerCase().includes(displayValue.toLowerCase()) ||
          suggestion.value.toLowerCase().includes(displayValue.toLowerCase()) ||
          suggestion.description?.toLowerCase().includes(displayValue.toLowerCase()) ||
          suggestion.category?.toLowerCase().includes(displayValue.toLowerCase())
        )
      }
      
      return filtered.slice(0, maxSuggestions)
    }, [suggestions, displayValue, filterSuggestions, maxSuggestions])
    
    // Highlight text matches
    const highlightText = React.useCallback((text: string, query: string) => {
      if (!highlightMatches || !query.trim()) return text
      
      const regex = new RegExp(`(${query})`, 'gi')
      const parts = text.split(regex)
      
      return parts.map((part, index) => 
        regex.test(part) ? 
          <mark key={index} className="bg-primary-100 dark:bg-primary-900/50 text-primary-900 dark:text-primary-100 px-0.5 rounded">{part}</mark> : 
          part
      )
    }, [highlightMatches])
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      setValue(newValue)
      onChange?.(newValue)
      setHighlightedIndex(-1)
      
      if (newValue.trim() && suggestions.length > 0) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    }
    
    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)
      if (displayValue.trim() && filteredSuggestions.length > 0) {
        setIsOpen(true)
      }
      onFocus?.(e)
    }
    
    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      // Delay closing to allow suggestion clicks
      setTimeout(() => {
        setIsOpen(false)
        setHighlightedIndex(-1)
      }, 150)
      onBlur?.(e)
    }
    
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      onKeyDown?.(e)
      
      if (!isOpen || filteredSuggestions.length === 0) {
        if (e.key === 'Enter') {
          onSearch?.(displayValue)
        }
        return
      }
      
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setHighlightedIndex(prev => 
            prev < filteredSuggestions.length - 1 ? prev + 1 : -1
          )
          break
        case 'ArrowUp':
          e.preventDefault()
          setHighlightedIndex(prev => 
            prev > -1 ? prev - 1 : filteredSuggestions.length - 1
          )
          break
        case 'Enter':
          e.preventDefault()
          if (highlightedIndex >= 0 && highlightedIndex < filteredSuggestions.length) {
            handleSuggestionSelect(filteredSuggestions[highlightedIndex])
          } else {
            onSearch?.(displayValue)
          }
          break
        case 'Escape':
          setIsOpen(false)
          setHighlightedIndex(-1)
          inputRef.current?.blur()
          break
        case 'Tab':
          setIsOpen(false)
          setHighlightedIndex(-1)
          break
      }
    }
    
    const handleSuggestionSelect = (suggestion: SearchSuggestion) => {
      setValue(suggestion.value)
      onChange?.(suggestion.value)
      onSuggestionSelect?.(suggestion)
      setIsOpen(false)
      setHighlightedIndex(-1)
      inputRef.current?.focus()
    }
    
    const handleClear = () => {
      setValue("")
      onChange?.("")
      setIsOpen(false)
      setHighlightedIndex(-1)
      inputRef.current?.focus()
    }
    
    const shouldShowClearButton = showClearButton && displayValue.length > 0 && !loading
    
    // Scroll highlighted suggestion into view
    React.useEffect(() => {
      if (highlightedIndex >= 0 && suggestionRefs.current[highlightedIndex]) {
        suggestionRefs.current[highlightedIndex]?.scrollIntoView({
          block: 'nearest',
          behavior: 'smooth'
        })
      }
    }, [highlightedIndex])
    
    // Combine refs
    React.useImperativeHandle(ref, () => inputRef.current!, [])
    
    return (
      <div className={cn("relative", containerClassName)} style={{ zIndex: isOpen ? zIndex.dropdown : 'auto' }}>
        {/* Search Input Container */}
        <div className={cn(searchVariants({ variant, size, className }))}>
          {/* Search Icon */}
          <div
            className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-neutral-400 dark:text-neutral-500 transition-colors duration-300 pointer-events-none"
            style={{
              width: components.input.iconSize[size],
              height: components.input.iconSize[size]
            }}
          >
            <SearchIcon 
              className={cn(
                "transition-all duration-300",
                isFocused && "text-primary-500 dark:text-primary-400 scale-110"
              )}
            />
          </div>
          
          {/* Input Field */}
          <input
            ref={inputRef}
            type="text"
            value={displayValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className={cn(
              "flex-1 bg-transparent border-none outline-none placeholder:text-neutral-400 dark:placeholder:text-neutral-500",
              "transition-all duration-300",
              isFocused && "placeholder:text-neutral-300 dark:placeholder:text-neutral-600"
            )}
            style={{
              paddingLeft: components.input.paddingWithIcon[size].left,
              paddingRight: shouldShowClearButton ? components.input.paddingWithIcon[size].right : components.input.padding[size].x,
              paddingTop: components.input.padding[size].y,
              paddingBottom: components.input.padding[size].y,
            }}
            {...props}
          />
          
          {/* Loading Spinner */}
          {loading && (
            <div
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center"
              style={{
                width: components.input.iconSize[size],
                height: components.input.iconSize[size]
              }}
            >
              <div className="animate-spin rounded-full border-2 border-neutral-300 border-t-primary-500 w-4 h-4" />
            </div>
          )}
          
          {/* Clear Button */}
          {shouldShowClearButton && (
            <button
              type="button"
              onClick={handleClear}
              className={cn(
                "absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center",
                "text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300",
                "transition-all duration-200 hover:scale-110 active:scale-95",
                "rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 p-1"
              )}
              style={{
                width: components.input.iconSize[size],
                height: components.input.iconSize[size]
              }}
            >
              <XIcon className="w-3 h-3" />
            </button>
          )}
        </div>
        
        {/* Suggestions Dropdown */}
        {(isOpen && filteredSuggestions.length > 0) && (
          <div className={cn(
            suggestionListVariants({ state: "visible" }),
            "max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-700"
          )}>
            {filteredSuggestions.map((suggestion, index) => (
              <div
                key={suggestion.id}
                ref={el => suggestionRefs.current[index] = el}
                className={cn(
                  suggestionItemVariants({
                    isHighlighted: highlightedIndex === index
                  }),
                  "group"
                )}
                onClick={() => handleSuggestionSelect(suggestion)}
                onMouseEnter={() => setHighlightedIndex(index)}
              >
                {/* Suggestion Icon */}
                {suggestion.icon && (
                  <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-neutral-500 dark:text-neutral-400">
                    {suggestion.icon}
                  </div>
                )}
                
                {/* Suggestion Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="font-medium text-neutral-900 dark:text-neutral-100 truncate">
                      {highlightText(suggestion.label, displayValue)}
                    </div>
                    {suggestion.meta && (
                      <div className="text-xs text-neutral-500 dark:text-neutral-400 flex-shrink-0">
                        {suggestion.meta}
                      </div>
                    )}
                  </div>
                  
                  {suggestion.description && (
                    <div className="text-xs text-neutral-600 dark:text-neutral-400 truncate mt-0.5">
                      {highlightText(suggestion.description, displayValue)}
                    </div>
                  )}
                  
                  {suggestion.category && (
                    <div className="text-xs text-primary-600 dark:text-primary-400 mt-0.5">
                      {suggestion.category}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Empty State */}
        {isOpen && displayValue.trim() && filteredSuggestions.length === 0 && !loading && (
          <div className={cn(
            suggestionListVariants({ state: "visible" }),
            "px-4 py-6 text-center text-neutral-500 dark:text-neutral-400"
          )}>
            <div className="text-sm">{emptyStateMessage}</div>
          </div>
        )}
      </div>
    )
  }
)

Search.displayName = "Search"

// Export types and variants
export { searchVariants, suggestionListVariants, suggestionItemVariants }