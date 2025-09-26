import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/design-token-utils"
import { Button } from "@/components/ui/button"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  showPrevNext?: boolean
  showFirstLast?: boolean
  maxVisiblePages?: number
  variant?: "default" | "outline" | "glass" | "minimal"
  size?: "sm" | "default" | "lg"
  className?: string
  disabled?: boolean
}

interface PaginationItemProps {
  children: React.ReactNode
  isActive?: boolean
  disabled?: boolean
  onClick?: () => void
  variant?: PaginationProps["variant"]
  size?: PaginationProps["size"]
  className?: string
}

const PaginationItem = React.forwardRef<HTMLButtonElement, PaginationItemProps>(
  ({ children, isActive, disabled, onClick, variant = "default", size = "default", className, ...props }, ref) => {
    const baseClasses = cn(
      // Base styles with hardware acceleration
      "transform-gpu will-change-transform transition-all duration-200 ease-out",
      "inline-flex items-center justify-center whitespace-nowrap font-medium",
      "disabled:pointer-events-none disabled:opacity-50",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/30 focus-visible:ring-offset-2",
      "relative overflow-hidden",
      
      // Anti-blur optimizations - start slightly smaller
      "scale-98 hover:scale-100 active:scale-95",
      
      // Size variants using design tokens
      size === "sm" && "h-8 min-w-8 px-2 text-sm rounded-md",
      size === "default" && "h-9 min-w-9 px-3 text-sm rounded-md",
      size === "lg" && "h-10 min-w-10 px-4 text-base rounded-lg",
    )

    const variantClasses = cn(
      // Variant styles with enhanced visual effects
      variant === "default" && [
        isActive 
          ? "bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5" 
          : "bg-gradient-to-br from-neutral-50 to-neutral-100 text-neutral-700 hover:from-neutral-100 hover:to-neutral-200 hover:text-neutral-900 hover:shadow-md hover:-translate-y-0.5 dark:from-neutral-800 dark:to-neutral-700 dark:text-neutral-300 dark:hover:from-neutral-700 dark:hover:to-neutral-600 dark:hover:text-neutral-100"
      ],
      
      variant === "outline" && [
        isActive
          ? "border-2 border-primary-600 bg-primary-50 text-primary-700 shadow-lg shadow-primary-500/15 hover:bg-primary-100 hover:shadow-xl hover:-translate-y-0.5 dark:bg-primary-950/50 dark:text-primary-300 dark:hover:bg-primary-950/80"
          : "border border-neutral-300 bg-transparent text-neutral-600 hover:border-neutral-400 hover:bg-neutral-50 hover:text-neutral-900 hover:shadow-md hover:-translate-y-0.5 dark:border-neutral-600 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:bg-neutral-800/50 dark:hover:text-neutral-100"
      ],
      
      variant === "glass" && [
        isActive
          ? "bg-primary-600/80 backdrop-blur-md text-white shadow-lg shadow-primary-500/25 hover:bg-primary-600/90 hover:shadow-xl hover:-translate-y-0.5"
          : "bg-white/10 backdrop-blur-md border border-white/20 text-neutral-700 hover:bg-white/20 hover:shadow-lg hover:-translate-y-0.5 dark:bg-white/5 dark:border-white/10 dark:text-neutral-300 dark:hover:bg-white/10"
      ],
      
      variant === "minimal" && [
        isActive
          ? "text-primary-600 font-semibold relative after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-primary-600 after:rounded-full dark:text-primary-400 dark:after:bg-primary-400"
          : "text-neutral-600 hover:text-primary-600 hover:bg-primary-50/50 dark:text-neutral-400 dark:hover:text-primary-400 dark:hover:bg-primary-950/30"
      ]
    )

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variantClasses, className)}
        disabled={disabled}
        onClick={onClick}
        style={{
          // Anti-blur properties
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          filter: "blur(0px)",
          backfaceVisibility: "hidden",
        }}
        {...props}
      >
        {children}
      </button>
    )
  }
)
PaginationItem.displayName = "PaginationItem"

const PaginationEllipsis = ({ variant = "default", size = "default", className }: {
  variant?: PaginationProps["variant"]
  size?: PaginationProps["size"]
  className?: string
}) => (
  <div 
    className={cn(
      "flex items-center justify-center transform-gpu will-change-transform transition-all duration-200",
      "scale-95 hover:scale-100 hover:rotate-90 hover:text-primary-600 dark:hover:text-primary-400",
      size === "sm" && "h-8 min-w-8 text-sm",
      size === "default" && "h-9 min-w-9 text-sm", 
      size === "lg" && "h-10 min-w-10 text-base",
      variant === "minimal" && "text-neutral-400 hover:text-primary-500",
      className
    )}
    style={{
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    }}
  >
    <MoreHorizontal className="h-4 w-4" />
  </div>
)

const PaginationNavButton = React.forwardRef<HTMLButtonElement, {
  direction: "prev" | "next"
  disabled?: boolean
  onClick?: () => void
  variant?: PaginationProps["variant"]
  size?: PaginationProps["size"]
  showLabel?: boolean
  className?: string
}>(({ direction, disabled, onClick, variant = "default", size = "default", showLabel = true, className }, ref) => {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight
  
  return (
    <Button
      ref={ref}
      variant={variant === "default" ? "outline" : variant === "glass" ? "glass" : "ghost"}
      size={size}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "gap-2 group",
        // Enhanced hover animations
        "hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200",
        direction === "prev" && "hover:-translate-x-0.5",
        direction === "next" && "hover:translate-x-0.5",
        className
      )}
    >
      {direction === "prev" && <Icon className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />}
      {showLabel && (
        <span className="hidden sm:inline">
          {direction === "prev" ? "Previous" : "Next"}
        </span>
      )}
      {direction === "next" && <Icon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
    </Button>
  )
})
PaginationNavButton.displayName = "PaginationNavButton"

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  showPrevNext = true,
  showFirstLast = true,
  maxVisiblePages = 7,
  variant = "default",
  size = "default",
  className,
  disabled = false,
  ...props
}: PaginationProps) {
  // Calculate visible page range
  const getVisiblePages = React.useMemo(() => {
    const pages: (number | 'ellipsis')[] = []
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
      return pages
    }

    const halfVisible = Math.floor(maxVisiblePages / 2)
    
    if (currentPage <= halfVisible + 1) {
      // Current page is near the beginning
      for (let i = 1; i <= maxVisiblePages - 2; i++) {
        pages.push(i)
      }
      pages.push('ellipsis')
      pages.push(totalPages)
    } else if (currentPage >= totalPages - halfVisible) {
      // Current page is near the end
      pages.push(1)
      pages.push('ellipsis')
      for (let i = totalPages - (maxVisiblePages - 3); i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Current page is in the middle
      pages.push(1)
      pages.push('ellipsis')
      for (let i = currentPage - halfVisible + 2; i <= currentPage + halfVisible - 2; i++) {
        pages.push(i)
      }
      pages.push('ellipsis')
      pages.push(totalPages)
    }
    
    return pages
  }, [currentPage, totalPages, maxVisiblePages])

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage && !disabled) {
      onPageChange(page)
    }
  }

  if (totalPages <= 1) return null

  return (
    <nav
      className={cn(
        // Container with stagger animation
        "flex items-center gap-1 animate-in fade-in-0 slide-in-from-bottom-4 duration-500",
        variant === "glass" && "p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg dark:bg-white/5 dark:border-white/10",
        variant === "outline" && "p-2 border border-neutral-200 rounded-lg bg-neutral-50/50 dark:border-neutral-700 dark:bg-neutral-800/50",
        className
      )}
      aria-label="Pagination"
      {...props}
    >
      {/* Previous button */}
      {showPrevNext && (
        <PaginationNavButton
          direction="prev"
          disabled={disabled || currentPage <= 1}
          onClick={() => handlePageChange(currentPage - 1)}
          variant={variant}
          size={size}
          showLabel={variant !== "minimal"}
        />
      )}

      {/* Page number buttons */}
      {getVisiblePages.map((page, index) => (
        <React.Fragment key={index}>
          {page === 'ellipsis' ? (
            <PaginationEllipsis variant={variant} size={size} />
          ) : (
            <PaginationItem
              isActive={currentPage === page}
              disabled={disabled}
              onClick={() => handlePageChange(page)}
              variant={variant}
              size={size}
              className="animate-in fade-in-0 zoom-in-95 duration-200"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {page}
            </PaginationItem>
          )}
        </React.Fragment>
      ))}

      {/* Next button */}
      {showPrevNext && (
        <PaginationNavButton
          direction="next"
          disabled={disabled || currentPage >= totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          variant={variant}
          size={size}
          showLabel={variant !== "minimal"}
        />
      )}
    </nav>
  )
}

export { PaginationItem, PaginationEllipsis, PaginationNavButton }