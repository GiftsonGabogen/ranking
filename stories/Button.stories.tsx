import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button } from '@/components/ui/button'
import { 
  Heart, 
  Download, 
  Plus, 
  Settings, 
  Trash2, 
  ArrowRight,
  Star,
  Share,
  Edit,
  Check
} from 'lucide-react'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A modern, animated button component with multiple variants, sizes, and enhanced visual effects including shadows, gradients, and smooth animations.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'success', 'warning', 'glass', 'gradient', 'shine'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'default', 'lg', 'xl', 'icon', 'icon-xs', 'icon-sm', 'icon-lg', 'icon-xl'],
      description: 'The size of the button',
    },
    asChild: {
      control: { type: 'boolean' },
      description: 'Render as a child element',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the button',
    },
  },
  args: {
    onClick: () => console.log('Button clicked'),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4 p-8">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="glass">Glass</Button>
      <Button variant="gradient">Gradient</Button>
      <Button variant="shine">Shine Effect</Button>
      <div></div> {/* Empty cell for layout */}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available button variants showcasing different visual styles including new design token semantic colors (success, warning).',
      },
    },
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4 p-8">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different button sizes from extra small to extra large using design token spacing.',
      },
    },
  },
}

export const WithIcons: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 p-8">
      <Button>
        <Plus className="mr-2" />
        Add Item
      </Button>
      <Button variant="success">
        <Check className="mr-2" />
        Save Changes
      </Button>
      <Button variant="warning">
        <Settings className="mr-2" />
        Configure
      </Button>
      <Button variant="destructive">
        <Trash2 className="mr-2" />
        Delete
      </Button>
      <Button variant="outline">
        <Download className="mr-2" />
        Download
      </Button>
      <Button variant="secondary">
        <Share className="mr-2" />
        Share
      </Button>
      <Button variant="ghost">
        <Edit className="mr-2" />
        Edit
      </Button>
      <Button variant="gradient">
        <Star className="mr-2" />
        Favorite
      </Button>
      <Button variant="glass">
        <Heart className="mr-2" />
        Like
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons with icons demonstrating icon integration across all variants including new semantic colors.',
      },
    },
  },
}

export const IconButtons: Story = {
  render: () => (
    <div className="space-y-4 p-8">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Icon Button Sizes</h3>
        <div className="flex items-end gap-4">
          <Button size="icon-xs" variant="outline">
            <Heart />
          </Button>
          <Button size="icon-sm" variant="outline">
            <Plus />
          </Button>
          <Button size="icon">
            <Settings />
          </Button>
          <Button size="icon-lg" variant="destructive">
            <Trash2 />
          </Button>
          <Button size="icon-xl" variant="success">
            <Check />
          </Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Icon Button Variants</h3>
        <div className="grid grid-cols-6 gap-4">
          <Button size="icon" variant="default">
            <Plus />
          </Button>
          <Button size="icon" variant="secondary">
            <Settings />
          </Button>
          <Button size="icon" variant="success">
            <Check />
          </Button>
          <Button size="icon" variant="warning">
            <Star />
          </Button>
          <Button size="icon" variant="destructive">
            <Trash2 />
          </Button>
          <Button size="icon" variant="outline">
            <Heart />
          </Button>
          <Button size="icon" variant="ghost">
            <Edit />
          </Button>
          <Button size="icon" variant="glass">
            <Share />
          </Button>
          <Button size="icon" variant="gradient">
            <Star />
          </Button>
          <Button size="icon" variant="shine">
            <Download />
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icon-only buttons showcasing all sizes (xs to xl) and all variants with design token integration.',
      },
    },
  },
}

export const InteractiveStates: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Normal States</h3>
        <div className="flex gap-4">
          <Button>Normal</Button>
          <Button variant="outline">Hover me</Button>
          <Button variant="glass">Glass Effect</Button>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Disabled States</h3>
        <div className="flex gap-4">
          <Button disabled>Disabled</Button>
          <Button variant="destructive" disabled>
            Disabled
          </Button>
          <Button variant="outline" disabled>
            Disabled
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive states showing normal and disabled button appearances.',
      },
    },
  },
}

export const ModernShowcase: Story = {
  render: () => (
    <div className="space-y-8 p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Modern Button Showcase</h2>
        <p className="text-muted-foreground">Experience enhanced depth, animations, and visual effects</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Primary Actions</h3>
          <div className="space-y-3">
            <Button size="lg" className="w-full">
              <ArrowRight className="mr-2" />
              Get Started
            </Button>
            <Button variant="gradient" size="lg" className="w-full">
              <Star className="mr-2" />
              Premium Feature
            </Button>
            <Button variant="shine" size="lg" className="w-full">
              <Check className="mr-2" />
              Complete Action
            </Button>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Secondary Actions</h3>
          <div className="space-y-3">
            <Button variant="outline" size="lg" className="w-full">
              <Edit className="mr-2" />
              Edit Content
            </Button>
            <Button variant="glass" size="lg" className="w-full">
              <Share className="mr-2" />
              Share Item
            </Button>
            <Button variant="ghost" size="lg" className="w-full">
              <Settings className="mr-2" />
              View Settings
            </Button>
          </div>
        </div>
      </div>
      
      <div className="text-center space-y-4">
        <h3 className="text-lg font-semibold">Destructive Actions</h3>
        <div className="flex justify-center gap-4">
          <Button variant="destructive">
            <Trash2 className="mr-2" />
            Delete Item
          </Button>
          <Button variant="destructive" size="lg">
            <Trash2 className="mr-2" />
            Permanent Delete
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A comprehensive showcase demonstrating the modern button component in real-world usage scenarios with enhanced visual effects.',
      },
    },
  },
}

export const LoadingExample: Story = {
  render: () => (
    <div className="flex gap-4 p-8">
      <Button disabled>
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
        Loading...
      </Button>
      <Button variant="outline" disabled>
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
        Processing
      </Button>
      <Button variant="gradient" disabled>
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
        Saving...
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Loading states with spinner animations.',
      },
    },
  },
}

export const DesignTokensShowcase: Story = {
  render: () => (
    <div className="space-y-8 p-8 max-w-6xl">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Design Tokens Integration</h1>
        <p className="text-muted-foreground">Comprehensive demonstration of the button component using OKLCH design tokens</p>
      </div>
      
      {/* Semantic Color Actions */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Semantic Color Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="success" size="lg" className="w-full">
            <Check className="mr-2" />
            Save Changes
          </Button>
          <Button variant="warning" size="lg" className="w-full">
            <Settings className="mr-2" />
            Proceed with Caution
          </Button>
          <Button variant="destructive" size="lg" className="w-full">
            <Trash2 className="mr-2" />
            Delete Account
          </Button>
          <Button variant="outline" size="lg" className="w-full">
            Cancel
          </Button>
        </div>
      </div>
      
      {/* Color Scale Demonstration */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">OKLCH Color Scale Consistency</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Primary Scale</h3>
            <div className="space-y-2">
              <Button variant="default" size="sm" className="w-full bg-primary-300 hover:bg-primary-400">Light Primary</Button>
              <Button variant="default" size="sm" className="w-full bg-primary-500 hover:bg-primary-600">Default Primary</Button>
              <Button variant="default" size="sm" className="w-full bg-primary-700 hover:bg-primary-800">Dark Primary</Button>
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Secondary Scale</h3>
            <div className="space-y-2">
              <Button variant="secondary" size="sm" className="w-full bg-secondary-300 hover:bg-secondary-400">Light Secondary</Button>
              <Button variant="secondary" size="sm" className="w-full bg-secondary-500 hover:bg-secondary-600">Default Secondary</Button>
              <Button variant="secondary" size="sm" className="w-full bg-secondary-700 hover:bg-secondary-800 text-white">Dark Secondary</Button>
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Neutral Scale</h3>
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800">Light Neutral</Button>
              <Button variant="outline" size="sm" className="w-full bg-neutral-300 hover:bg-neutral-400 text-neutral-800">Mid Neutral</Button>
              <Button variant="outline" size="sm" className="w-full bg-neutral-700 hover:bg-neutral-800 text-white border-neutral-600">Dark Neutral</Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Size Scale with Design Tokens */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Design Token Spacing Scale</h2>
        <div className="flex items-end gap-4 justify-center">
          <div className="text-center space-y-2">
            <Button size="xs">XS</Button>
            <p className="text-xs text-muted-foreground">h-7 px-3</p>
          </div>
          <div className="text-center space-y-2">
            <Button size="sm">SM</Button>
            <p className="text-xs text-muted-foreground">h-8 px-4</p>
          </div>
          <div className="text-center space-y-2">
            <Button size="default">Default</Button>
            <p className="text-xs text-muted-foreground">h-10 px-5</p>
          </div>
          <div className="text-center space-y-2">
            <Button size="lg">LG</Button>
            <p className="text-xs text-muted-foreground">h-12 px-7</p>
          </div>
          <div className="text-center space-y-2">
            <Button size="xl">XL</Button>
            <p className="text-xs text-muted-foreground">h-14 px-8</p>
          </div>
        </div>
      </div>
      
      {/* Real-world Usage Scenarios */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Real-world Usage Scenarios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <h3 className="font-medium">Form Actions</h3>
            <div className="flex gap-3">
              <Button variant="success" size="sm">
                <Check className="mr-2" />
                Submit
              </Button>
              <Button variant="outline" size="sm">
                <Edit className="mr-2" />
                Edit
              </Button>
              <Button variant="ghost" size="sm">
                Cancel
              </Button>
            </div>
          </div>
          
          <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <h3 className="font-medium">Confirmation Dialog</h3>
            <div className="flex gap-3">
              <Button variant="destructive" size="sm">
                <Trash2 className="mr-2" />
                Delete
              </Button>
              <Button variant="outline" size="sm">
                Cancel
              </Button>
            </div>
          </div>
          
          <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <h3 className="font-medium">Dashboard Actions</h3>
            <div className="flex gap-3">
              <Button variant="gradient" size="sm">
                <Star className="mr-2" />
                Upgrade
              </Button>
              <Button variant="glass" size="sm">
                <Share className="mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2" />
                Export
              </Button>
            </div>
          </div>
          
          <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <h3 className="font-medium">Warning Actions</h3>
            <div className="flex gap-3">
              <Button variant="warning" size="sm">
                <Settings className="mr-2" />
                Configure
              </Button>
              <Button variant="outline" size="sm">
                <ArrowRight className="mr-2" />
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Design Token Benefits */}
      <div className="space-y-4 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-950 dark:to-secondary-950 rounded-lg">
        <h2 className="text-xl font-semibold">Design Token Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="space-y-2">
            <h3 className="font-medium">🎨 OKLCH Color Space</h3>
            <p className="text-muted-foreground">Perceptually uniform colors with consistent lightness and chroma across all variants.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">📐 Consistent Spacing</h3>
            <p className="text-muted-foreground">Mathematical spacing scale ensuring visual harmony across all component sizes.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">🌙 Dark Mode Ready</h3>
            <p className="text-muted-foreground">Automatic dark mode support with properly adjusted color scales for optimal contrast.</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'A comprehensive showcase demonstrating the button component integration with the OKLCH design token system, showcasing semantic colors, consistent spacing, and real-world usage patterns.',
      },
    },
  },
}