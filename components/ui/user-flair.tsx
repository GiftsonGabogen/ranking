import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { 
  Crown, 
  Star, 
  Award, 
  Shield, 
  Zap, 
  Sparkles, 
  Medal,
  Trophy,
  Gem,
  Heart,
  ThumbsUp,
  Users,
  CheckCircle,
  Verified,
  BadgeCheck,
  Clock,
  Flame,
  Target
} from "lucide-react"

import { cn } from "@/lib/design-token-utils"
import { Badge } from "@/components/ui/badge"

const userFlairVariants = cva(
  "inline-flex items-center gap-1.5 transition-all duration-300 ease-out",
  {
    variants: {
      layout: {
        horizontal: "flex-row flex-wrap",
        vertical: "flex-col items-start",
        compact: "flex-row flex-wrap gap-1",
        grid: "grid grid-cols-2 gap-1.5",
      },
      animation: {
        none: "",
        subtle: "hover:scale-[1.02] hover:shadow-lg hover:shadow-neutral-900/10 dark:hover:shadow-neutral-900/20",
        glow: "hover:shadow-xl hover:shadow-primary-500/20 dark:hover:shadow-primary-500/15",
        bounce: "hover:animate-pulse",
        shimmer: "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:transition-transform before:duration-700",
      },
    },
    defaultVariants: {
      layout: "horizontal",
      animation: "subtle",
    },
  }
)

const flairBadgeVariants = cva(
  "inline-flex items-center justify-center gap-1 text-xs font-medium transition-all duration-300 ease-out focus:outline-none shrink-0 select-none whitespace-nowrap relative overflow-hidden will-change-transform antialiased group/badge cursor-help",
  {
    variants: {
      type: {
        achievement: 
          "bg-gradient-to-br from-warning-400 to-warning-600 text-white border-warning-400/50 shadow-lg shadow-warning-500/25 hover:shadow-xl hover:shadow-warning-500/30 hover:-translate-y-0.5 dark:from-warning-500 dark:to-warning-600",
        role:
          "bg-gradient-to-br from-primary-500 to-primary-600 text-white border-primary-500/50 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5 dark:from-primary-400 dark:to-primary-500",
        status:
          "bg-gradient-to-br from-success-500 to-success-600 text-white border-success-500/50 shadow-lg shadow-success-500/25 hover:shadow-xl hover:shadow-success-500/30 hover:-translate-y-0.5 dark:from-success-400 dark:to-success-500",
        premium:
          "bg-gradient-to-r from-warning-500 via-warning-600 to-error-500 text-white border-warning-500/50 shadow-lg shadow-warning-500/30 hover:shadow-xl hover:shadow-warning-500/40 hover:-translate-y-0.5 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700",
        milestone:
          "bg-gradient-to-br from-secondary-500 to-secondary-600 text-white border-secondary-500/50 shadow-lg shadow-secondary-500/25 hover:shadow-xl hover:shadow-secondary-500/30 hover:-translate-y-0.5 dark:from-secondary-400 dark:to-secondary-500",
        special:
          "bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 text-white border-primary-500/50 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700",
        verified:
          "bg-gradient-to-br from-primary-600 to-primary-700 text-white border-primary-600/50 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-0.5",
        legendary:
          "bg-gradient-to-r from-error-500 via-warning-500 to-error-600 text-white border-error-500/50 shadow-lg shadow-error-500/30 hover:shadow-xl hover:shadow-error-500/40 hover:-translate-y-0.5 animate-pulse before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700",
      },
      style: {
        filled: "rounded-full border backdrop-blur-sm focus:ring-2 focus:ring-offset-2",
        iconOnly: "rounded-none border-0 bg-transparent backdrop-blur-0 shadow-none hover:shadow-none p-0 focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0",
        minimal: "rounded-lg border border-neutral-200 dark:border-neutral-700 bg-transparent backdrop-blur-0 shadow-sm hover:shadow-md hover:bg-neutral-50 dark:hover:bg-neutral-800/50 focus:ring-2 focus:ring-offset-2",
      },
      size: {
        xs: "px-1.5 text-xs gap-0.5 h-4 min-w-4 data-[icon-only=true]:p-0 data-[icon-only=true]:w-4 data-[icon-only=true]:h-4",
        sm: "px-2 text-xs gap-1 h-5 min-w-5 data-[icon-only=true]:p-0 data-[icon-only=true]:w-5 data-[icon-only=true]:h-5",
        default: "px-2.5 text-xs gap-1 h-6 min-w-6 data-[icon-only=true]:p-0 data-[icon-only=true]:w-6 data-[icon-only=true]:h-6",
        lg: "px-3 text-sm gap-1.5 h-7 min-w-7 data-[icon-only=true]:p-0 data-[icon-only=true]:w-7 data-[icon-only=true]:h-7",
        xl: "px-4 text-sm gap-2 h-8 min-w-8 data-[icon-only=true]:p-0 data-[icon-only=true]:w-8 data-[icon-only=true]:h-8",
      },
      rarity: {
        common: "opacity-90",
        uncommon: "opacity-95 ring-1 ring-primary-400/30",
        rare: "opacity-100 ring-2 ring-secondary-400/40 animate-pulse",
        epic: "opacity-100 ring-2 ring-warning-400/50 shadow-[0_0_20px_rgba(var(--warning-500),0.3)]",
        legendary: "opacity-100 ring-2 ring-error-400/60 shadow-[0_0_25px_rgba(var(--error-500),0.4)] animate-pulse",
      },
    },
    defaultVariants: {
      type: "achievement",
      size: "default",
      rarity: "common",
      style: "filled",
    },
  }
)

// Predefined icons for different flair types
const flairIcons = {
  // Achievement icons
  firstPost: Crown,
  topContributor: Trophy,
  yearActive: Medal,
  helpfulVotes: ThumbsUp,
  communitySupport: Users,
  streakMaster: Flame,
  perfectScore: Target,
  
  // Role icons
  moderator: Shield,
  admin: Crown,
  developer: Zap,
  designer: Sparkles,
  community: Users,
  verified: CheckCircle,
  
  // Status icons
  online: CheckCircle,
  premium: Gem,
  vip: Crown,
  beta: Star,
  early: Clock,
  
  // Special icons
  legendary: Trophy,
  special: Sparkles,
  milestone: Award,
} as const

export interface FlairItem {
  id: string
  label: string
  description?: string
  type: "achievement" | "role" | "status" | "premium" | "milestone" | "special" | "verified" | "legendary"
  icon?: keyof typeof flairIcons | React.ReactNode
  rarity?: "common" | "uncommon" | "rare" | "epic" | "legendary"
  value?: string | number
  earnedAt?: Date
  progress?: {
    current: number
    total: number
  }
  metadata?: Record<string, any>
}

export interface UserFlairProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof userFlairVariants> {
  flairs: readonly FlairItem[]
  maxVisible?: number
  showTooltip?: boolean
  onFlairClick?: (flair: FlairItem) => void
  size?: "xs" | "sm" | "default" | "lg" | "xl"
  variant?: "filled" | "iconOnly" | "minimal"
  showProgress?: boolean
  showLabels?: boolean
}

function UserFlair({
  className,
  layout,
  animation,
  flairs,
  maxVisible = 10,
  showTooltip = true,
  onFlairClick,
  size = "default",
  variant = "filled",
  showProgress = false,
  showLabels = true,
  ...props
}: UserFlairProps) {
  const [showAll, setShowAll] = React.useState(false)
  const [hoveredFlair, setHoveredFlair] = React.useState<string | null>(null)

  const visibleFlairs = showAll ? flairs : flairs.slice(0, maxVisible)
  const hiddenCount = flairs.length - maxVisible

  const getFlairIcon = (flair: FlairItem) => {
    if (!flair.icon) return null
    
    if (typeof flair.icon === "string" && flair.icon in flairIcons) {
      const IconComponent = flairIcons[flair.icon as keyof typeof flairIcons]
      return <IconComponent className="h-full w-full" />
    }
    
    if (React.isValidElement(flair.icon)) {
      return flair.icon
    }
    
    // Default icons based on type
    const defaultIcons = {
      achievement: Award,
      role: Shield,
      status: CheckCircle,
      premium: Gem,
      milestone: Medal,
      special: Sparkles,
      verified: Verified,
      legendary: Crown,
    }
    
    const DefaultIcon = defaultIcons[flair.type]
    return <DefaultIcon className="h-full w-full" />
  }

  const handleFlairClick = (flair: FlairItem, event: React.MouseEvent) => {
    event.stopPropagation()
    onFlairClick?.(flair)
  }

  return (
    <div
      className={cn(userFlairVariants({ layout, animation }), className)}
      {...props}
    >
      {visibleFlairs.map((flair) => {
        const icon = getFlairIcon(flair)
        
        return (
          <div
            key={flair.id}
            className="relative group"
            onMouseEnter={() => setHoveredFlair(flair.id)}
            onMouseLeave={() => setHoveredFlair(null)}
          >
            <div
              className={cn(
                flairBadgeVariants({ 
                  type: variant === "iconOnly" ? undefined : flair.type, 
                  size, 
                  rarity: variant === "iconOnly" ? undefined : flair.rarity,
                  style: variant
                }),
                // Override any rarity rings for icon-only mode
                variant === "iconOnly" && "ring-0 shadow-none"
              )}
              onClick={(e) => handleFlairClick(flair, e)}
              role="button"
              tabIndex={0}
              aria-label={`${flair.label}${flair.description ? `: ${flair.description}` : ""}`}
              data-icon-only={variant === "iconOnly"}
            >
              {icon && (
                <div className={cn(
                  "shrink-0 flex items-center justify-center",
                  variant === "iconOnly" ? 
                    "w-full h-full" :
                    size === "xs" ? "w-2.5 h-2.5" :
                    size === "sm" ? "w-3 h-3" :
                    size === "lg" ? "w-4 h-4" :
                    size === "xl" ? "w-5 h-5" :
                    "w-3.5 h-3.5",
                  // Apply type-based colors for icon-only mode
                  variant === "iconOnly" && flair.type === "achievement" && "text-warning-600 hover:text-warning-700 dark:text-warning-400 dark:hover:text-warning-300",
                  variant === "iconOnly" && flair.type === "role" && "text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300",
                  variant === "iconOnly" && flair.type === "status" && "text-success-600 hover:text-success-700 dark:text-success-400 dark:hover:text-success-300",
                  variant === "iconOnly" && flair.type === "premium" && "text-warning-600 hover:text-warning-700 dark:text-warning-400 dark:hover:text-warning-300",
                  variant === "iconOnly" && flair.type === "milestone" && "text-secondary-600 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-300",
                  variant === "iconOnly" && flair.type === "special" && "text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300",
                  variant === "iconOnly" && flair.type === "verified" && "text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300",
                  variant === "iconOnly" && flair.type === "legendary" && "text-error-600 hover:text-error-700 dark:text-error-400 dark:hover:text-error-300",
                  // Add rarity-based effects for icon-only mode
                  variant === "iconOnly" && flair.rarity === "legendary" && "animate-pulse drop-shadow-lg",
                  variant === "iconOnly" && flair.rarity === "epic" && "drop-shadow-md",
                  variant === "iconOnly" && flair.rarity === "rare" && "drop-shadow-sm",
                )}>
                  {icon}
                </div>
              )}
              
              {showLabels && variant !== "iconOnly" && (
                <span 
                  className="inline-grid place-items-center leading-tight"
                  style={{ 
                    transform: 'translateY(-0.05em)',
                    fontFeatureSettings: '"kern" 1, "liga" 1'
                  }}
                >
                  {flair.label}
                  {flair.value && !flair.label.includes(String(flair.value)) && (
                    <span className="ml-1 opacity-80">
                      {typeof flair.value === "number" ? flair.value.toLocaleString() : flair.value}
                    </span>
                  )}
                </span>
              )}

              {/* Rarity glow effect */}
              {flair.rarity === "legendary" && variant !== "iconOnly" && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_ease-in-out_infinite] opacity-60" />
              )}
            </div>

            {/* Progress indicator */}
            {showProgress && flair.progress && variant !== "iconOnly" && (
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-black/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white/60 rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${(flair.progress.current / flair.progress.total) * 100}%`
                  }}
                />
              </div>
            )}

            {/* Tooltip */}
            {showTooltip && hoveredFlair === flair.id && (
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 z-50 animate-in fade-in-0 zoom-in-95 duration-200">
                <div className="bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 px-3 py-2 rounded-lg shadow-xl text-xs whitespace-nowrap max-w-xs">
                  <div className="font-medium">{flair.label}</div>
                  {flair.description && (
                    <div className="text-neutral-300 dark:text-neutral-600 mt-1">
                      {flair.description}
                    </div>
                  )}
                  {flair.earnedAt && (
                    <div className="text-neutral-400 dark:text-neutral-500 text-xs mt-1">
                      Earned {flair.earnedAt.toLocaleDateString()}
                    </div>
                  )}
                  {flair.progress && (
                    <div className="text-neutral-400 dark:text-neutral-500 text-xs mt-1">
                      Progress: {flair.progress.current}/{flair.progress.total}
                    </div>
                  )}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-neutral-900 dark:border-t-neutral-100" />
                </div>
              </div>
            )}
          </div>
        )
      })}

      {/* Show more button */}
      {hiddenCount > 0 && !showAll && variant !== "iconOnly" && (
        <button
          className={cn(
            flairBadgeVariants({ size, style: "minimal" }),
            "bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 border-neutral-300 dark:border-neutral-600 hover:bg-neutral-300 dark:hover:bg-neutral-600"
          )}
          onClick={() => setShowAll(true)}
          aria-label={`Show ${hiddenCount} more ${hiddenCount === 1 ? 'badge' : 'badges'}`}
        >
          +{hiddenCount}
        </button>
      )}

      {/* Show less button */}
      {showAll && flairs.length > maxVisible && variant !== "iconOnly" && (
        <button
          className={cn(
            flairBadgeVariants({ size, style: "minimal" }),
            "bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 border-neutral-300 dark:border-neutral-600 hover:bg-neutral-300 dark:hover:bg-neutral-600"
          )}
          onClick={() => setShowAll(false)}
          aria-label="Show fewer badges"
        >
          <span className="text-xs">Less</span>
        </button>
      )}
    </div>
  )
}

// Helper function to create flair items easily
export function createFlairItem(
  id: string,
  label: string,
  type: FlairItem["type"],
  options: Partial<Omit<FlairItem, "id" | "label" | "type">> = {}
): FlairItem {
  return {
    id,
    label,
    type,
    ...options,
  }
}

// Predefined common flair collections
export const commonFlairs = {
  achievements: [
    createFlairItem("first-post", "First Post", "achievement", {
      icon: "firstPost",
      description: "Made their first post",
      rarity: "common"
    }),
    createFlairItem("top-contributor", "Top Contributor", "achievement", {
      icon: "topContributor",
      description: "One of the most active contributors",
      rarity: "rare"
    }),
    createFlairItem("year-active", "1 Year", "milestone", {
      icon: "yearActive",
      description: "Active member for 1 year",
      rarity: "uncommon"
    }),
    createFlairItem("helpful-votes", "100 Likes", "achievement", {
      icon: "helpfulVotes",
      description: "Received 100+ helpful votes",
      value: 100,
      rarity: "uncommon"
    }),
  ],
  
  roles: [
    createFlairItem("moderator", "Moderator", "role", {
      icon: "moderator",
      description: "Community moderator",
      rarity: "rare"
    }),
    createFlairItem("admin", "Admin", "role", {
      icon: "admin",
      description: "Site administrator",
      rarity: "epic"
    }),
    createFlairItem("verified", "Verified", "verified", {
      icon: "verified",
      description: "Verified account",
      rarity: "uncommon"
    }),
  ],
  
  status: [
    createFlairItem("premium", "Premium", "premium", {
      icon: "premium",
      description: "Premium member",
      rarity: "rare"
    }),
    createFlairItem("vip", "VIP", "special", {
      icon: "vip",
      description: "Very Important Person",
      rarity: "legendary"
    }),
    createFlairItem("beta", "Beta Tester", "status", {
      icon: "beta",
      description: "Participated in beta testing",
      rarity: "uncommon"
    }),
  ]
} as const

export { UserFlair, userFlairVariants, flairBadgeVariants }