import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { useState, useEffect } from "react"
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardMedia,
  CardBadge,
  CardActions,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton, SkeletonText, SkeletonButton, SkeletonAvatar } from "@/components/ui/skeleton"

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "A flexible card component with animations and multiple variants for displaying content in an organized way."
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "elevated", "glass", "outline", "interactive", "shimmer", "gradient", "gradientPrimary", "gradientSecondary", "gradientMulti", "gradientWarm", "gradientCool"],
      description: "Visual variant of the card"
    },
    size: {
      control: { type: "select" },
      options: ["sm", "default", "lg", "xl", "full"],
      description: "Size of the card"
    },
    color: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "success", "warning", "error"],
      description: "Color theme of the card"
    },
    state: {
      control: { type: "select" },
      options: ["default", "loading", "disabled"],
      description: "State of the card"
    },
    skeletonLayout: {
      control: { type: "select" },
      options: ["default", "media", "avatar", "product", "dashboard"],
      description: "Skeleton layout for loading state"
    },
    asChild: {
      control: { type: "boolean" },
      description: "Render as child component"
    },
  },
  args: {
    variant: "default",
    size: "default",
    color: "default",
    state: "default",
  },
}

export default meta
type Story = StoryObj<typeof Card>

// Basic card examples
export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a basic card with default styling.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Card content goes here. This can include any type of content you need to display.
        </p>
      </CardContent>
    </Card>
  )
}

export const WithFooter: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card with Footer</CardTitle>
        <CardDescription>This card includes a footer with actions.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          This card demonstrates how to use the CardFooter component for actions or additional information.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">Cancel</Button>
        <Button size="sm">Confirm</Button>
      </CardFooter>
    </Card>
  )
}

export const WithMedia: Story = {
  render: (args) => (
    <Card {...args} className="overflow-hidden relative">
      <CardMedia
        src="https://picsum.photos/400/200"
        alt="Demo image"
        aspectRatio="video"
      />
      <CardBadge variant="primary" position="top-right">New</CardBadge>
      <CardHeader>
        <CardTitle>Card with Media</CardTitle>
        <CardDescription>This card includes an image with hover effects.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The media component supports different aspect ratios and includes hover animations.
        </p>
      </CardContent>
      <CardActions>
        <Button variant="ghost" size="sm">Share</Button>
        <Button size="sm">View Details</Button>
      </CardActions>
    </Card>
  )
}

// Variant examples
export const Elevated: Story = {
  args: { variant: "elevated" },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
        <CardDescription>This card has an elevated appearance with shadow effects.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The elevated variant includes scale animations and enhanced shadows.
        </p>
      </CardContent>
    </Card>
  )
}

export const Glass: Story = {
  args: { variant: "glass" },
  render: (args) => (
    <div className="bg-gradient-to-br from-primary-400 to-secondary-400 p-8 rounded-lg">
      <Card {...args}>
        <CardHeader>
          <CardTitle>Glass Card</CardTitle>
          <CardDescription>This card has a frosted glass appearance with backdrop blur.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Perfect for overlaying content with a modern glass morphism effect.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export const Interactive: Story = {
  args: { variant: "interactive" },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardDescription>This card is clickable with enhanced hover effects.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Click anywhere on this card to see the interactive animations and effects.
        </p>
      </CardContent>
    </Card>
  )
}

export const Shimmer: Story = {
  args: { variant: "shimmer" },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Shimmer Card</CardTitle>
        <CardDescription>This card includes a shimmer effect on hover.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Hover over this card to see the subtle shimmer animation effect.
        </p>
      </CardContent>
    </Card>
  )
}

export const Gradient: Story = {
  args: { variant: "gradient" },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Gradient Card</CardTitle>
        <CardDescription>This card features a subtle gradient background with multi-color glow.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Hover to see the beautiful multi-color glow and inner light effects.
        </p>
      </CardContent>
    </Card>
  )
}

export const GradientPrimary: Story = {
  args: { variant: "gradientPrimary" },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Primary Gradient</CardTitle>
        <CardDescription>Card with primary color gradient and matching glow effect.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Features primary color theming with elegant lighting effects.
        </p>
      </CardContent>
    </Card>
  )
}

export const GradientMulti: Story = {
  args: { variant: "gradientMulti" },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Multi-Color Gradient</CardTitle>
        <CardDescription>Card with multiple color gradient from primary to secondary.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Beautiful multi-color gradient with sophisticated glow effects on hover.
        </p>
      </CardContent>
    </Card>
  )
}

// Size examples
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Card size="sm">
        <CardHeader>
          <CardTitle className="text-base">Small Card</CardTitle>
          <CardDescription>Compact size for minimal content.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-neutral-600 dark:text-neutral-400">Small card content.</p>
        </CardContent>
      </Card>
      
      <Card size="default">
        <CardHeader>
          <CardTitle>Default Card</CardTitle>
          <CardDescription>Standard size for most use cases.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">Default card content.</p>
        </CardContent>
      </Card>
      
      <Card size="lg">
        <CardHeader>
          <CardTitle className="text-2xl">Large Card</CardTitle>
          <CardDescription>Spacious layout for detailed content.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-base text-neutral-600 dark:text-neutral-400">Large card with more content space.</p>
        </CardContent>
      </Card>
      
      <Card size="xl">
        <CardHeader>
          <CardTitle className="text-3xl">Extra Large Card</CardTitle>
          <CardDescription className="text-base">Maximum space for extensive content.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">Extra large card with maximum content space.</p>
        </CardContent>
      </Card>
    </div>
  )
}

// Gradient variants showcase
export const GradientVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {(["gradient", "gradientPrimary", "gradientSecondary", "gradientMulti", "gradientWarm", "gradientCool"] as const).map((variant) => (
        <Card key={variant} variant={variant}>
          <CardHeader>
            <CardTitle className="capitalize">{variant.replace('gradient', 'Gradient ')} Card</CardTitle>
            <CardDescription>Beautiful gradient background with lighting effects.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Hover to see the glow and inner light effects on this {variant} card.
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

// Color variants
export const ColorVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {(["default", "primary", "secondary", "success", "warning", "error"] as const).map((color) => (
        <Card key={color} color={color} variant="elevated">
          <CardHeader>
            <CardTitle className="capitalize">{color} Card</CardTitle>
            <CardDescription>Card with {color} color theme.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              This card uses the {color} color variant for themed content.
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

// States
export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <Card state="default">
        <CardHeader>
          <CardTitle>Default State</CardTitle>
          <CardDescription>Normal interactive card.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">This card is in its default state.</p>
        </CardContent>
      </Card>
      
      <Card state="loading" skeletonLayout="default">
        {/* Content is ignored in loading state - skeleton is shown instead */}
      </Card>
      
      <Card state="disabled">
        <CardHeader>
          <CardTitle>Disabled State</CardTitle>
          <CardDescription>Non-interactive disabled card.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">This card is disabled and not interactive.</p>
        </CardContent>
      </Card>
    </div>
  )
}

// Skeleton loading states
export const SkeletonStates: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Default Skeleton</h3>
        <Card state="loading" skeletonLayout="default" />
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Media Skeleton</h3>
        <Card state="loading" skeletonLayout="media" />
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Avatar Skeleton</h3>
        <Card state="loading" skeletonLayout="avatar" />
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Product Skeleton</h3>
        <Card state="loading" skeletonLayout="product" />
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Dashboard Skeleton</h3>
        <Card state="loading" skeletonLayout="dashboard" />
      </div>
    </div>
  )
}

// Complex example
export const ProductCard: Story = {
  render: () => (
    <Card variant="gradientMulti" className="max-w-sm overflow-hidden relative">
      <CardMedia
        src="https://picsum.photos/400/300"
        alt="Product image"
        aspectRatio="square"
      />
      <CardBadge variant="success" position="top-right">In Stock</CardBadge>
      <CardHeader>
        <CardTitle>Premium Product</CardTitle>
        <CardDescription>High-quality item with excellent reviews.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary-600">$99.99</span>
            <span className="text-sm text-neutral-500 line-through">$129.99</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-4 h-4 fill-warning-400 text-warning-400"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-neutral-600">(24 reviews)</span>
          </div>
        </div>
      </CardContent>
      <CardActions justify="between">
        <Button variant="ghost" size="sm">❤️</Button>
        <Button size="sm" className="flex-1 ml-2">Add to Cart</Button>
      </CardActions>
    </Card>
  )
}

// Loading simulation
export const LoadingSimulation: Story = {
  render: () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 3000) // Show skeleton for 3 seconds

      return () => clearTimeout(timer)
    }, [])

    const handleReload = () => {
      setIsLoading(true)
      setTimeout(() => setIsLoading(false), 3000)
    }

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Loading Simulation</h3>
          <Button onClick={handleReload} size="sm">
            Reload
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card 
            state={isLoading ? "loading" : "default"}
            skeletonLayout="media"
            variant="elevated"
          >
            {!isLoading && (
              <>
                <CardMedia
                  src="https://picsum.photos/400/200"
                  alt="Loaded image"
                  aspectRatio="video"
                />
                <CardHeader>
                  <CardTitle>Content Loaded!</CardTitle>
                  <CardDescription>This content appeared after the skeleton finished loading.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    The skeleton provided a smooth loading experience while the real content was fetched.
                  </p>
                </CardContent>
              </>
            )}
          </Card>

          <Card 
            state={isLoading ? "loading" : "default"}
            skeletonLayout="product"
            variant="gradientPrimary"
          >
            {!isLoading && (
              <>
                <CardMedia
                  src="https://picsum.photos/300/300"
                  alt="Product"
                  aspectRatio="square"
                />
                <CardBadge variant="success" position="top-right">New</CardBadge>
                <CardHeader>
                  <CardTitle>Amazing Product</CardTitle>
                  <CardDescription>Now available after loading!</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-600">$59.99</span>
                    <span className="text-sm text-neutral-500 line-through">$79.99</span>
                  </div>
                </CardContent>
                <CardActions justify="between">
                  <Button variant="ghost" size="sm">❤️</Button>
                  <Button size="sm" className="flex-1 ml-2">Add to Cart</Button>
                </CardActions>
              </>
            )}
          </Card>
        </div>
      </div>
    )
  }
}

// Flexible skeleton sizing
export const FlexibleSkeletonSizing: Story = {
  render: () => (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Individual Skeleton Components</h3>
          <div className="space-y-4 max-w-md">
            <div>
              <p className="text-sm text-neutral-600 mb-2">Default skeleton with configurable width/height:</p>
              <div className="space-y-2">
                <Skeleton width="full" height={4} />
                <Skeleton width="3/4" height={4} />
                <Skeleton width="1/2" height={4} />
                <Skeleton width="1/3" height={4} />
                <Skeleton width="1/4" height={6} />
              </div>
            </div>
            
            <div>
              <p className="text-sm text-neutral-600 mb-2">SkeletonText with varied widths (best practice):</p>
              <SkeletonText lines={4} randomWidths={true} />
            </div>
            
            <div>
              <p className="text-sm text-neutral-600 mb-2">SkeletonText with uniform widths:</p>
              <SkeletonText lines={3} randomWidths={false} />
            </div>
            
            <div>
              <p className="text-sm text-neutral-600 mb-2">SkeletonButton with different widths:</p>
              <div className="flex gap-2 flex-wrap">
                <SkeletonButton size="sm" buttonWidth="narrow" />
                <SkeletonButton size="sm" buttonWidth="medium" />
                <SkeletonButton size="md" buttonWidth="wide" />
                <SkeletonButton size="lg" buttonWidth="full" />
              </div>
            </div>
            
            <div>
              <p className="text-sm text-neutral-600 mb-2">SkeletonAvatar sizes:</p>
              <div className="flex gap-2 items-center">
                <SkeletonAvatar size="sm" />
                <SkeletonAvatar size="md" />
                <SkeletonAvatar size="lg" />
                <SkeletonAvatar size="xl" />
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Before vs After: Skeleton Best Practices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-neutral-600 mb-2 font-medium text-red-600">❌ Poor Practice: All full width</p>
              <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 space-y-4">
                <Skeleton width="full" height={6} />
                <Skeleton width="full" height={4} />
                <Skeleton width="full" height={4} />
                <Skeleton width="full" height={4} />
                <div className="flex gap-2">
                  <Skeleton width="full" height={10} />
                  <Skeleton width="full" height={10} />
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-green-600 mb-2 font-medium">✅ Best Practice: Varied, realistic widths</p>
              <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 space-y-4">
                <Skeleton width="2/3" height={6} />
                <SkeletonText lines={3} randomWidths={true} />
                <div className="flex gap-2">
                  <SkeletonButton size="md" buttonWidth="narrow" />
                  <SkeletonButton size="md" buttonWidth="medium" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Animation Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-neutral-600 mb-2">Pulse Animation (default):</p>
              <SkeletonText lines={3} animation="pulse" />
            </div>
            <div>
              <p className="text-sm text-neutral-600 mb-2">Wave Animation:</p>
              <SkeletonText lines={3} animation="wave" />
            </div>
            <div>
              <p className="text-sm text-neutral-600 mb-2">No Animation:</p>
              <SkeletonText lines={3} animation="none" />
            </div>
          </div>
        </div>
      </div>
    )
}

// Dashboard card example
export const DashboardCard: Story = {
  render: () => (
    <Card variant="glass" color="primary">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Total Revenue</CardTitle>
          <div className="p-2 bg-primary-100 dark:bg-primary-900/50 rounded-lg">
            <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">$45,231.89</div>
          <div className="flex items-center gap-1 text-sm">
            <span className="text-success-600 dark:text-success-400">+20.1%</span>
            <span className="text-neutral-600 dark:text-neutral-400">from last month</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}