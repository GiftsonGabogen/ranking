import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Badge } from '@/components/ui/badge'
import { 
  Star, 
  Heart, 
  Check, 
  AlertTriangle, 
  X,
  Bell,
  Crown,
  Shield,
  Zap,
  Sparkles,
  Award,
  Bookmark,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react'

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile badge component with animations, gradients, and interactive features. Built with OKLCH design tokens for consistent visual hierarchy and semantic meaning.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'success', 'warning', 'error', 'outline', 'muted', 'glass', 'gradient', 'shine'],
      description: 'The visual style variant of the badge',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'default', 'lg', 'xl'],
      description: 'The size of the badge',
    },
    shape: {
      control: { type: 'select' },
      options: ['default', 'rounded', 'square'],
      description: 'The border radius style of the badge',
    },
    dot: {
      control: { type: 'boolean' },
      description: 'Show a status dot indicator',
    },
    pulse: {
      control: { type: 'boolean' },
      description: 'Enable pulsing animation',
    },
    removable: {
      control: { type: 'boolean' },
      description: 'Show remove button',
    },
    icon: {
      control: false,
      description: 'Icon to display in the badge',
    },
  },
  args: {
    onRemove: () => console.log('Badge removed'),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Badge',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-4 p-8">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="muted">Muted</Badge>
      <Badge variant="glass">Glass</Badge>
      <Badge variant="gradient">Gradient</Badge>
      <Badge variant="shine">Shine</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available badge variants showcasing OKLCH color system with consistent semantic meaning.',
      },
    },
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-8">
      <Badge size="xs">XS</Badge>
      <Badge size="sm">Small</Badge>
      <Badge size="default">Default</Badge>
      <Badge size="lg">Large</Badge>
      <Badge size="xl">XL</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different badge sizes using design token spacing for consistent scaling.',
      },
    },
  },
}

export const AllShapes: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-8">
      <Badge shape="default">Pill Shape</Badge>
      <Badge shape="rounded">Rounded</Badge>
      <Badge shape="square">Square</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different badge shapes for various use cases and design preferences.',
      },
    },
  },
}

export const WithIcons: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 p-8">
      <Badge variant="default" icon={<Crown />}>Premium</Badge>
      <Badge variant="success" icon={<Check />}>Verified</Badge>
      <Badge variant="warning" icon={<AlertTriangle />}>Warning</Badge>
      <Badge variant="error" icon={<X />}>Error</Badge>
      <Badge variant="secondary" icon={<Star />}>Featured</Badge>
      <Badge variant="outline" icon={<Shield />}>Secure</Badge>
      <Badge variant="glass" icon={<Sparkles />}>Magic</Badge>
      <Badge variant="gradient" icon={<Zap />}>Pro</Badge>
      <Badge variant="shine" icon={<Award />}>Winner</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badges with icons for enhanced visual communication and meaning.',
      },
    },
  },
}

export const StatusIndicators: Story = {
  render: () => (
    <div className="space-y-6 p-8">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Status Dots</h3>
        <div className="flex gap-4">
          <Badge variant="success" dot>Online</Badge>
          <Badge variant="warning" dot>Away</Badge>
          <Badge variant="error" dot>Offline</Badge>
          <Badge variant="muted" dot>Unknown</Badge>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Pulsing Indicators</h3>
        <div className="flex gap-4">
          <Badge variant="success" dot pulse>Live</Badge>
          <Badge variant="warning" pulse icon={<Bell />}>Alert</Badge>
          <Badge variant="error" pulse>Critical</Badge>
          <Badge variant="gradient" pulse icon={<TrendingUp />}>Trending</Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Status indicators with dots and pulsing animations for real-time feedback.',
      },
    },
  },
}

export const RemovableBadges: Story = {
  render: () => (
    <div className="space-y-6 p-8">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Filter Tags</h3>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="outline" removable>React</Badge>
          <Badge variant="outline" removable>TypeScript</Badge>
          <Badge variant="outline" removable>Next.js</Badge>
          <Badge variant="outline" removable>Tailwind CSS</Badge>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">User Badges</h3>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="success" removable icon={<Check />}>Approved</Badge>
          <Badge variant="secondary" removable icon={<Star />}>Favorite</Badge>
          <Badge variant="warning" removable icon={<Clock />}>Pending</Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Removable badges for tags, filters, and user-manageable content.',
      },
    },
  },
}

export const NumberBadges: Story = {
  render: () => (
    <div className="space-y-6 p-8">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Notification Counts</h3>
        <div className="flex items-center gap-6">
          <div className="relative">
            <Bell className="w-6 h-6" />
            <Badge 
              variant="error" 
              size="xs" 
              className="absolute -top-1 -right-1"
            >
              3
            </Badge>
          </div>
          <div className="relative">
            <Users className="w-6 h-6" />
            <Badge 
              variant="success" 
              size="xs" 
              className="absolute -top-1 -right-1"
            >
              12
            </Badge>
          </div>
          <div className="relative">
            <Heart className="w-6 h-6" />
            <Badge 
              variant="gradient" 
              size="xs" 
              className="absolute -top-1 -right-1"
            >
              99+
            </Badge>
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Metric Badges</h3>
        <div className="flex gap-4">
          <Badge variant="outline">Downloads: 1.2k</Badge>
          <Badge variant="success">Rating: 4.9★</Badge>
          <Badge variant="secondary">Version: 2.1.0</Badge>
          <Badge variant="glass">Size: 45KB</Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Number badges for counts, metrics, and quantitative information.',
      },
    },
  },
}

export const InteractiveShowcase: Story = {
  render: () => (
    <div className="space-y-8 p-8 max-w-4xl">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Interactive Badge Showcase</h2>
        <p className="text-muted-foreground">Hover and interact with the badges to see animations</p>
      </div>
      
      {/* Hover Effects */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Hover Effects</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Badge variant="default" size="lg" icon={<Crown />}>Premium Plan</Badge>
          <Badge variant="success" size="lg" icon={<Check />}>Verified Account</Badge>
          <Badge variant="warning" size="lg" icon={<AlertTriangle />}>Needs Review</Badge>
          <Badge variant="error" size="lg" icon={<Shield />}>Security Alert</Badge>
          <Badge variant="gradient" size="lg" icon={<Sparkles />}>Limited Edition</Badge>
          <Badge variant="shine" size="lg" icon={<Award />}>Top Contributor</Badge>
        </div>
      </div>
      
      {/* Real-world Usage */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">E-commerce Product Tags</h3>
        <div className="p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
          <div className="space-y-3">
            <h4 className="font-medium">Premium Wireless Headphones</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="success" icon={<Check />}>In Stock</Badge>
              <Badge variant="gradient" icon={<Star />}>Best Seller</Badge>
              <Badge variant="warning">Limited Time</Badge>
              <Badge variant="outline">Free Shipping</Badge>
              <Badge variant="glass" icon={<Zap />}>Fast Delivery</Badge>
            </div>
          </div>
        </div>
      </div>
      
      {/* User Profile Badges */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">User Profile Achievements</h3>
        <div className="p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-semibold">
                JD
              </div>
              <div>
                <h4 className="font-medium">John Developer</h4>
                <p className="text-sm text-muted-foreground">Software Engineer</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="gradient" icon={<Crown />} size="sm">Pro Member</Badge>
              <Badge variant="success" icon={<Check />} size="sm">Verified</Badge>
              <Badge variant="secondary" icon={<Award />} size="sm">Top 10%</Badge>
              <Badge variant="outline" size="sm">5 Years</Badge>
              <Badge variant="glass" icon={<Star />} size="sm">1.2k Reviews</Badge>
            </div>
          </div>
        </div>
      </div>
      
      {/* Status Dashboard */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">System Status Dashboard</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3 p-4 border rounded-lg">
            <h4 className="font-medium flex items-center gap-2">
              <div className="w-2 h-2 bg-success-500 rounded-full"></div>
              Services Status
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">API Gateway</span>
                <Badge variant="success" dot size="sm">Operational</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Database</span>
                <Badge variant="success" dot size="sm">Healthy</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Cache Layer</span>
                <Badge variant="warning" dot size="sm">Degraded</Badge>
              </div>
            </div>
          </div>
          
          <div className="space-y-3 p-4 border rounded-lg">
            <h4 className="font-medium flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              Live Metrics
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Active Users</span>
                <Badge variant="gradient" pulse size="sm">2.4k</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Requests/min</span>
                <Badge variant="outline" size="sm">15.2k</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Response Time</span>
                <Badge variant="success" size="sm">45ms</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'A comprehensive interactive showcase demonstrating real-world badge usage patterns with hover effects, status indicators, and practical applications.',
      },
    },
  },
}

export const DesignTokensShowcase: Story = {
  render: () => (
    <div className="space-y-8 p-8 max-w-6xl">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Badge Design Tokens Integration</h1>
        <p className="text-muted-foreground">Comprehensive demonstration using OKLCH color system and consistent spacing tokens</p>
      </div>
      
      {/* OKLCH Color Scale */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">OKLCH Color Scale Consistency</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Primary Variants</h3>
            <div className="space-y-2">
              <Badge variant="default">Default Primary</Badge>
              <Badge variant="gradient">Gradient Primary</Badge>
              <Badge variant="shine">Shine Primary</Badge>
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Semantic Colors</h3>
            <div className="space-y-2">
              <Badge variant="success" icon={<Check />}>Success State</Badge>
              <Badge variant="warning" icon={<AlertTriangle />}>Warning State</Badge>
              <Badge variant="error" icon={<X />}>Error State</Badge>
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Surface Variants</h3>
            <div className="space-y-2">
              <Badge variant="outline">Outline Style</Badge>
              <Badge variant="muted">Muted Style</Badge>
              <Badge variant="glass">Glass Effect</Badge>
            </div>
          </div>
        </div>
      </div>
      
      {/* Size Scale with Design Tokens */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Design Token Size Scale</h2>
        <div className="flex items-center gap-6 justify-center">
          <div className="text-center space-y-2">
            <Badge size="xs" variant="outline">XS</Badge>
            <p className="text-xs text-muted-foreground">h-4 px-1.5</p>
          </div>
          <div className="text-center space-y-2">
            <Badge size="sm" variant="outline">SM</Badge>
            <p className="text-xs text-muted-foreground">h-5 px-2</p>
          </div>
          <div className="text-center space-y-2">
            <Badge size="default" variant="outline">Default</Badge>
            <p className="text-xs text-muted-foreground">h-6 px-2.5</p>
          </div>
          <div className="text-center space-y-2">
            <Badge size="lg" variant="outline">LG</Badge>
            <p className="text-xs text-muted-foreground">h-7 px-3</p>
          </div>
          <div className="text-center space-y-2">
            <Badge size="xl" variant="outline">XL</Badge>
            <p className="text-xs text-muted-foreground">h-8 px-4</p>
          </div>
        </div>
      </div>
      
      {/* Animation & Effects */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Animation & Visual Effects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <h3 className="font-medium">Hover Animations</h3>
            <div className="space-y-3">
              <Badge variant="default" size="lg">Scale on Hover</Badge>
              <Badge variant="gradient" size="lg">Shadow Enhancement</Badge>
              <Badge variant="glass" size="lg">Backdrop Blur Effect</Badge>
            </div>
          </div>
          
          <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <h3 className="font-medium">Pulse & Motion</h3>
            <div className="space-y-3">
              <Badge variant="success" pulse dot>Pulsing Status</Badge>
              <Badge variant="shine" size="lg">Shine Animation</Badge>
              <Badge variant="error" removable>Removable with Exit</Badge>
            </div>
          </div>
        </div>
      </div>
      
      {/* Accessibility Features */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Accessibility & UX Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3 p-4 border rounded-lg">
            <h3 className="font-medium">Focus Management</h3>
            <div className="space-y-2">
              <Badge variant="outline" removable>Focusable Remove</Badge>
              <p className="text-xs text-muted-foreground">Tab navigation support</p>
            </div>
          </div>
          
          <div className="space-y-3 p-4 border rounded-lg">
            <h3 className="font-medium">Semantic Meaning</h3>
            <div className="space-y-2">
              <Badge variant="success" icon={<Check />}>Clear Success</Badge>
              <p className="text-xs text-muted-foreground">Color + icon redundancy</p>
            </div>
          </div>
          
          <div className="space-y-3 p-4 border rounded-lg">
            <h3 className="font-medium">Responsive Design</h3>
            <div className="space-y-2">
              <Badge variant="gradient">Auto-sizing</Badge>
              <p className="text-xs text-muted-foreground">Consistent across screens</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Design Token Benefits */}
      <div className="space-y-4 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-950 dark:to-secondary-950 rounded-lg">
        <h2 className="text-xl font-semibold">Design Token Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="space-y-2">
            <h3 className="font-medium">🎨 OKLCH Precision</h3>
            <p className="text-muted-foreground">Perceptually uniform color scaling ensures consistent visual hierarchy across all badge variants.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">📐 Mathematical Spacing</h3>
            <p className="text-muted-foreground">Consistent size relationships using design token spacing scale for perfect visual balance.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">🌙 Theme Adaptability</h3>
            <p className="text-muted-foreground">Automatic dark mode with properly adjusted contrast ratios and semantic color mapping.</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'A comprehensive showcase demonstrating the badge component integration with the OKLCH design token system, showcasing color consistency, spacing harmony, and advanced visual effects.',
      },
    },
  },
}