import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Loading, Spinner, Dots, Pulse } from '@/components/ui/loading'
import { Button } from '@/components/ui/button'
import { 
  Download, 
  Save, 
  Trash2, 
  Settings,
  RefreshCw,
  Upload,
  Clock,
  Loader2
} from 'lucide-react'

const meta: Meta<typeof Loading> = {
  title: 'UI/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive loading component system with multiple animations (spinner, dots, pulse) and customizable variants, sizes, and speeds using design tokens.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'success', 'warning', 'error', 'neutral'],
      description: 'The color variant using design token semantic colors',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'default', 'lg', 'xl'],
      description: 'The size of the loading indicator',
    },
    type: {
      control: { type: 'select' },
      options: ['spinner', 'dots', 'pulse', 'text'],
      description: 'The type of loading animation',
    },
    speed: {
      control: { type: 'select' },
      options: ['slow', 'normal', 'fast'],
      description: 'The animation speed',
    },
    text: {
      control: { type: 'text' },
      description: 'Loading text to display',
    },
  },
  args: {
    text: 'Loading...',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'spinner',
  },
}

export const AllTypes: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
      <div className="text-center space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Spinner</h3>
        <Loading type="spinner" text="Loading..." />
      </div>
      <div className="text-center space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Dots</h3>
        <Loading type="dots" text="Processing..." />
      </div>
      <div className="text-center space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Pulse</h3>
        <Loading type="pulse" />
      </div>
      <div className="text-center space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Text Only</h3>
        <Loading type="text" text="Please wait..." />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available loading animation types: spinner, dots, pulse, and text-only.',
      },
    },
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8">
      <div className="text-center space-y-3">
        <h3 className="text-sm font-medium">Default</h3>
        <Loading variant="default" text="Loading..." />
      </div>
      <div className="text-center space-y-3">
        <h3 className="text-sm font-medium">Secondary</h3>
        <Loading variant="secondary" text="Processing..." />
      </div>
      <div className="text-center space-y-3">
        <h3 className="text-sm font-medium">Success</h3>
        <Loading variant="success" text="Saving..." />
      </div>
      <div className="text-center space-y-3">
        <h3 className="text-sm font-medium">Warning</h3>
        <Loading variant="warning" text="Validating..." />
      </div>
      <div className="text-center space-y-3">
        <h3 className="text-sm font-medium">Error</h3>
        <Loading variant="error" text="Retrying..." />
      </div>
      <div className="text-center space-y-3">
        <h3 className="text-sm font-medium">Neutral</h3>
        <Loading variant="neutral" text="Please wait..." />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All color variants using design token semantic colors with proper dark mode support.',
      },
    },
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end justify-center gap-8 p-8">
      <div className="text-center space-y-3">
        <h3 className="text-xs font-medium text-muted-foreground">XS</h3>
        <Loading size="xs" text="Loading..." />
      </div>
      <div className="text-center space-y-3">
        <h3 className="text-xs font-medium text-muted-foreground">SM</h3>
        <Loading size="sm" text="Loading..." />
      </div>
      <div className="text-center space-y-3">
        <h3 className="text-xs font-medium text-muted-foreground">Default</h3>
        <Loading size="default" text="Loading..." />
      </div>
      <div className="text-center space-y-3">
        <h3 className="text-xs font-medium text-muted-foreground">LG</h3>
        <Loading size="lg" text="Loading..." />
      </div>
      <div className="text-center space-y-3">
        <h3 className="text-xs font-medium text-muted-foreground">XL</h3>
        <Loading size="xl" text="Loading..." />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different loading sizes from extra small to extra large using design token spacing.',
      },
    },
  },
}

export const AllSpeeds: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8 p-8">
      <div className="text-center space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Slow</h3>
        <Loading speed="slow" text="Slow animation" />
      </div>
      <div className="text-center space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Normal</h3>
        <Loading speed="normal" text="Normal speed" />
      </div>
      <div className="text-center space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Fast</h3>
        <Loading speed="fast" text="Fast animation" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different animation speeds: slow, normal, and fast.',
      },
    },
  },
}

export const IndividualComponents: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Individual Spinner Components</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center space-y-2">
            <h4 className="text-sm font-medium">Spinner Only</h4>
            <div className="flex justify-center">
              <Spinner variant="default" size="lg" />
            </div>
          </div>
          <div className="text-center space-y-2">
            <h4 className="text-sm font-medium">Dots Only</h4>
            <div className="flex justify-center">
              <Dots variant="secondary" size="lg" />
            </div>
          </div>
          <div className="text-center space-y-2">
            <h4 className="text-sm font-medium">Pulse Only</h4>
            <div className="flex justify-center">
              <Pulse variant="success" size="lg" />
            </div>
          </div>
          <div className="text-center space-y-2">
            <h4 className="text-sm font-medium">Custom Speed</h4>
            <div className="flex justify-center">
              <Spinner variant="warning" size="lg" speed="fast" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Individual loading components that can be used independently: Spinner, Dots, and Pulse.',
      },
    },
  },
}

export const InButtons: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Loading States in Buttons</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Button disabled className="w-full">
              <Spinner size="sm" variant="neutral" />
              Downloading...
            </Button>
            <Button variant="outline" disabled className="w-full">
              <Dots size="sm" variant="neutral" />
              Processing...
            </Button>
            <Button variant="secondary" disabled className="w-full">
              <Loading size="sm" type="spinner" variant="neutral" text="" />
              Uploading...
            </Button>
          </div>
          <div className="space-y-3">
            <Button variant="success" disabled className="w-full">
              <Spinner size="sm" variant="neutral" />
              Saving Changes...
            </Button>
            <Button variant="destructive" disabled className="w-full">
              <Loading size="sm" type="dots" variant="neutral" text="" />
              Deleting...
            </Button>
            <Button variant="gradient" disabled className="w-full">
              <RefreshCw className="animate-spin" size={16} />
              Refreshing...
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Loading components integrated with buttons to show loading states in various contexts.',
      },
    },
  },
}

export const RealWorldScenarios: Story = {
  render: () => (
    <div className="space-y-8 p-8 max-w-4xl">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Real-World Loading Scenarios</h2>
        <p className="text-muted-foreground">Common use cases with appropriate loading animations</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* File Operations */}
        <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
          <h3 className="font-semibold flex items-center gap-2">
            <Download size={18} />
            File Operations
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white dark:bg-neutral-800 rounded-md">
              <span className="text-sm">Downloading report.pdf</span>
              <Loading size="sm" type="spinner" text="" />
            </div>
            <div className="flex items-center justify-between p-3 bg-white dark:bg-neutral-800 rounded-md">
              <span className="text-sm">Uploading images</span>
              <Loading size="sm" type="dots" variant="secondary" text="" />
            </div>
            <div className="flex items-center justify-between p-3 bg-white dark:bg-neutral-800 rounded-md">
              <span className="text-sm">Processing archive</span>
              <Loading size="sm" type="pulse" variant="warning" text="" />
            </div>
          </div>
        </div>

        {/* Data Operations */}
        <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
          <h3 className="font-semibold flex items-center gap-2">
            <Settings size={18} />
            Data Operations
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white dark:bg-neutral-800 rounded-md">
              <span className="text-sm">Saving settings</span>
              <Loading size="sm" variant="success" text="" />
            </div>
            <div className="flex items-center justify-between p-3 bg-white dark:bg-neutral-800 rounded-md">
              <span className="text-sm">Validating data</span>
              <Loading size="sm" type="dots" variant="warning" text="" />
            </div>
            <div className="flex items-center justify-between p-3 bg-white dark:bg-neutral-800 rounded-md">
              <span className="text-sm">Syncing changes</span>
              <Loading size="sm" type="spinner" variant="secondary" text="" />
            </div>
          </div>
        </div>

        {/* Page Loading States */}
        <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
          <h3 className="font-semibold flex items-center gap-2">
            <Clock size={18} />
            Page Loading States
          </h3>
          <div className="space-y-4">
            <div className="text-center py-8">
              <Loading size="lg" type="pulse" variant="default" />
              <p className="text-sm text-muted-foreground mt-2">Loading dashboard...</p>
            </div>
            <div className="text-center py-4 border-t">
              <Loading type="dots" variant="secondary" text="Fetching user data..." />
            </div>
          </div>
        </div>

        {/* Error Recovery */}
        <div className="space-y-4 p-6 border rounded-lg bg-error-50/50 dark:bg-error-900/10">
          <h3 className="font-semibold flex items-center gap-2 text-error-700 dark:text-error-400">
            <Loader2 size={18} />
            Error Recovery
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white dark:bg-neutral-800 rounded-md">
              <span className="text-sm">Retrying connection...</span>
              <Loading size="sm" type="spinner" variant="error" text="" />
            </div>
            <div className="flex items-center justify-between p-3 bg-white dark:bg-neutral-800 rounded-md">
              <span className="text-sm">Recovering data...</span>
              <Loading size="sm" type="dots" variant="warning" text="" />
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
        story: 'Real-world scenarios showing how to use loading components in various contexts like file operations, data processing, and error recovery.',
      },
    },
  },
}

export const DesignTokenShowcase: Story = {
  render: () => (
    <div className="space-y-8 p-8 max-w-6xl">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Design Token Integration</h1>
        <p className="text-muted-foreground">Loading components using OKLCH color space and consistent design tokens</p>
      </div>
      
      {/* Color Scale Consistency */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">OKLCH Color Scale Consistency</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Primary Scale</h3>
            <div className="space-y-3 p-4 bg-primary-50/50 dark:bg-primary-900/10 rounded-lg">
              <Loading variant="default" size="sm" text="Primary loading" />
              <Loading type="dots" variant="default" size="sm" text="Processing" />
              <Loading type="pulse" variant="default" size="lg" />
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Semantic Colors</h3>
            <div className="space-y-3 p-4 bg-success-50/50 dark:bg-success-900/10 rounded-lg">
              <Loading variant="success" size="sm" text="Success state" />
              <Loading variant="warning" size="sm" text="Warning state" />
              <Loading variant="error" size="sm" text="Error state" />
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Secondary & Neutral</h3>
            <div className="space-y-3 p-4 bg-secondary-50/50 dark:bg-secondary-900/10 rounded-lg">
              <Loading variant="secondary" size="sm" text="Secondary" />
              <Loading variant="neutral" size="sm" text="Neutral" />
              <Loading type="pulse" variant="secondary" size="lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Animation Speed Variations */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Animation Speed Control</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center p-6 border rounded-lg">
            <h3 className="text-lg font-medium mb-4">Slow & Gentle</h3>
            <div className="space-y-3">
              <Loading type="spinner" speed="slow" size="lg" text="Relaxed loading" />
              <Loading type="pulse" speed="slow" size="lg" variant="success" />
            </div>
          </div>
          
          <div className="text-center p-6 border rounded-lg">
            <h3 className="text-lg font-medium mb-4">Standard Speed</h3>
            <div className="space-y-3">
              <Loading type="spinner" speed="normal" size="lg" text="Normal loading" />
              <Loading type="dots" speed="normal" size="lg" variant="secondary" text="" />
            </div>
          </div>
          
          <div className="text-center p-6 border rounded-lg">
            <h3 className="text-lg font-medium mb-4">Fast & Urgent</h3>
            <div className="space-y-3">
              <Loading type="spinner" speed="fast" size="lg" text="Quick loading" />
              <Loading type="pulse" speed="fast" size="lg" variant="warning" />
            </div>
          </div>
        </div>
      </div>

      {/* Accessibility Features */}
      <div className="space-y-4 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-950 dark:to-secondary-950 rounded-lg">
        <h2 className="text-xl font-semibold">Accessibility & UX Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="space-y-2">
            <h3 className="font-medium">🔊 Screen Reader Support</h3>
            <p className="text-muted-foreground">ARIA labels and live regions for assistive technology.</p>
            <Loading text="Accessible loading" size="sm" />
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">🎨 Reduced Motion Respect</h3>
            <p className="text-muted-foreground">Respects user's motion preferences automatically.</p>
            <Loading type="pulse" size="sm" variant="success" />
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">🌙 Dark Mode Ready</h3>
            <p className="text-muted-foreground">Automatic color adjustments for optimal contrast.</p>
            <Loading type="dots" size="sm" variant="secondary" text="" />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive showcase of the loading component system integrated with OKLCH design tokens, demonstrating color consistency, animation controls, and accessibility features.',
      },
    },
  },
}