import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  Toast,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastContainer,
} from '@/components/ui/toast'
import {
  Check,
  AlertCircle,
  Info,
  AlertTriangle,
  Heart,
  Star,
  Download,
  Settings,
  Bell,
  Mail,
  User,
  Shield,
} from 'lucide-react'
import React from 'react'

const meta: Meta<typeof Toast> = {
  title: 'UI/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A modern toast notification component with multiple variants, animations, and auto-close functionality. Built with design tokens and supports semantic colors.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'destructive', 'warning', 'info', 'glass'],
      description: 'The visual style variant of the toast',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
      description: 'The size of the toast',
    },
    showCloseButton: {
      control: { type: 'boolean' },
      description: 'Show the close button',
    },
    autoClose: {
      control: { type: 'boolean' },
      description: 'Automatically close the toast after duration',
    },
    duration: {
      control: { type: 'number' },
      description: 'Duration in milliseconds before auto-close',
    },
  },
  args: {
    onClose: () => console.log('Toast closed'),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <ToastTitle>Default Toast</ToastTitle>
        <ToastDescription>This is a basic toast notification.</ToastDescription>
      </>
    ),
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 p-8 max-w-md">
      <Toast variant="default">
        <ToastTitle>Default Toast</ToastTitle>
        <ToastDescription>A standard notification message.</ToastDescription>
      </Toast>
      
      <Toast variant="success">
        <ToastTitle>Success Toast</ToastTitle>
        <ToastDescription>Your changes have been saved successfully!</ToastDescription>
      </Toast>
      
      <Toast variant="destructive">
        <ToastTitle>Error Toast</ToastTitle>
        <ToastDescription>Something went wrong. Please try again.</ToastDescription>
      </Toast>
      
      <Toast variant="warning">
        <ToastTitle>Warning Toast</ToastTitle>
        <ToastDescription>Please review your settings before proceeding.</ToastDescription>
      </Toast>
      
      <Toast variant="info">
        <ToastTitle>Info Toast</ToastTitle>
        <ToastDescription>New features are available in your account.</ToastDescription>
      </Toast>
      
      <Toast variant="glass">
        <ToastTitle>Glass Toast</ToastTitle>
        <ToastDescription>A modern glass morphism effect notification.</ToastDescription>
      </Toast>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available toast variants showcasing different semantic colors and styles using design tokens.',
      },
    },
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 p-8 max-w-md">
      <Toast size="sm" variant="info">
        <ToastTitle>Small Toast</ToastTitle>
        <ToastDescription>Compact notification for subtle messages.</ToastDescription>
      </Toast>
      
      <Toast size="default" variant="success">
        <ToastTitle>Default Toast</ToastTitle>
        <ToastDescription>Standard size notification with balanced proportions.</ToastDescription>
      </Toast>
      
      <Toast size="lg" variant="warning">
        <ToastTitle>Large Toast</ToastTitle>
        <ToastDescription>Larger notification for important messages that need more attention.</ToastDescription>
      </Toast>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different toast sizes using design token spacing system.',
      },
    },
  },
}

export const WithCustomIcons: Story = {
  render: () => (
    <div className="space-y-4 p-8 max-w-md">
      <Toast variant="success" icon={<Heart className="size-5 text-success-600 dark:text-success-400" />}>
        <ToastTitle>Liked!</ToastTitle>
        <ToastDescription>You liked this post.</ToastDescription>
      </Toast>
      
      <Toast variant="info" icon={<Star className="size-5 text-primary-600 dark:text-primary-400" />}>
        <ToastTitle>Starred</ToastTitle>
        <ToastDescription>Item added to your favorites.</ToastDescription>
      </Toast>
      
      <Toast variant="default" icon={<Download className="size-5 text-text-secondary" />}>
        <ToastTitle>Download Complete</ToastTitle>
        <ToastDescription>Your file has been downloaded successfully.</ToastDescription>
      </Toast>
      
      <Toast variant="warning" icon={<Settings className="size-5 text-warning-600 dark:text-warning-400" />}>
        <ToastTitle>Settings Updated</ToastTitle>
        <ToastDescription>Your preferences have been updated.</ToastDescription>
      </Toast>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toast notifications with custom icons that complement the design token colors.',
      },
    },
  },
}

export const WithActions: Story = {
  render: () => (
    <div className="space-y-4 p-8 max-w-md">
      <Toast variant="info">
        <ToastTitle>Update Available</ToastTitle>
        <ToastDescription>A new version of the app is available.</ToastDescription>
        <div className="flex gap-2 mt-3">
          <ToastAction onClick={() => console.log('Update clicked')}>
            Update Now
          </ToastAction>
          <ToastAction variant="outline" onClick={() => console.log('Later clicked')}>
            Later
          </ToastAction>
        </div>
      </Toast>
      
      <Toast variant="success">
        <ToastTitle>Changes Saved</ToastTitle>
        <ToastDescription>Your document has been saved to the cloud.</ToastDescription>
        <div className="flex gap-2 mt-3">
          <ToastAction onClick={() => console.log('View clicked')}>
            View Document
          </ToastAction>
        </div>
      </Toast>
      
      <Toast variant="destructive">
        <ToastTitle>Connection Error</ToastTitle>
        <ToastDescription>Failed to sync your data. Check your connection.</ToastDescription>
        <div className="flex gap-2 mt-3">
          <ToastAction onClick={() => console.log('Retry clicked')}>
            Retry
          </ToastAction>
          <ToastAction variant="outline" onClick={() => console.log('Dismiss clicked')}>
            Dismiss
          </ToastAction>
        </div>
      </Toast>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toast notifications with action buttons for user interaction.',
      },
    },
  },
}

export const AutoCloseDemo: Story = {
  render: () => {
    const [toasts, setToasts] = React.useState<Array<{ id: number; variant: any; title: string; description: string }>>([])
    const [counter, setCounter] = React.useState(0)

    const addToast = (variant: any, title: string, description: string) => {
      const id = counter
      setCounter(c => c + 1)
      setToasts(prev => [...prev, { id, variant, title, description }])
      
      // Remove after 3 seconds
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id))
      }, 3000)
    }

    return (
      <div className="space-y-4 p-8 max-w-md">
        <div className="space-y-2">
          <h3 className="font-medium">Auto-close Demo (3 seconds)</h3>
          <div className="flex flex-wrap gap-2">
            <button
              className="px-3 py-1 bg-success-600 text-white rounded text-sm hover:bg-success-700 transition-colors"
              onClick={() => addToast('success', 'Success!', 'Operation completed successfully.')}
            >
              Add Success
            </button>
            <button
              className="px-3 py-1 bg-error-600 text-white rounded text-sm hover:bg-error-700 transition-colors"
              onClick={() => addToast('destructive', 'Error!', 'Something went wrong.')}
            >
              Add Error
            </button>
            <button
              className="px-3 py-1 bg-warning-600 text-white rounded text-sm hover:bg-warning-700 transition-colors"
              onClick={() => addToast('warning', 'Warning!', 'Please be careful.')}
            >
              Add Warning
            </button>
            <button
              className="px-3 py-1 bg-primary-600 text-white rounded text-sm hover:bg-primary-700 transition-colors"
              onClick={() => addToast('info', 'Info!', 'Here\'s some information.')}
            >
              Add Info
            </button>
          </div>
        </div>
        
        <div className="space-y-2">
          {toasts.map(toast => (
            <Toast
              key={toast.id}
              variant={toast.variant}
              autoClose={true}
              duration={3000}
              onClose={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
            >
              <ToastTitle>{toast.title}</ToastTitle>
              <ToastDescription>{toast.description}</ToastDescription>
            </Toast>
          ))}
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo showing auto-close functionality with different toast types.',
      },
    },
  },
}

export const ToastContainerDemo: Story = {
  render: () => {
    const [position, setPosition] = React.useState<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'>('top-right')
    const [toasts, setToasts] = React.useState<Array<{ id: number; variant: any; title: string; description: string }>>([])
    const [counter, setCounter] = React.useState(0)

    const addToast = () => {
      const variants = ['success', 'destructive', 'warning', 'info', 'default']
      const variant = variants[Math.floor(Math.random() * variants.length)]
      const id = counter
      setCounter(c => c + 1)
      setToasts(prev => [...prev, { 
        id, 
        variant, 
        title: `Toast #${id + 1}`, 
        description: `This is toast notification number ${id + 1}` 
      }])
      
      // Remove after 4 seconds
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id))
      }, 4000)
    }

    return (
      <div className="relative min-h-[600px] p-8 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 rounded-lg">
        <div className="space-y-4 max-w-md">
          <h3 className="font-medium">Toast Container Positioning</h3>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium">Position:</label>
            <select 
              value={position} 
              onChange={(e) => setPosition(e.target.value as any)}
              className="px-3 py-2 border rounded-md bg-background text-sm"
            >
              <option value="top-right">Top Right</option>
              <option value="top-left">Top Left</option>
              <option value="bottom-right">Bottom Right</option>
              <option value="bottom-left">Bottom Left</option>
              <option value="top-center">Top Center</option>
              <option value="bottom-center">Bottom Center</option>
            </select>
          </div>
          
          <button
            className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            onClick={addToast}
          >
            Add Toast
          </button>
          
          <button
            className="ml-2 px-4 py-2 bg-neutral-600 text-white rounded-md hover:bg-neutral-700 transition-colors"
            onClick={() => setToasts([])}
          >
            Clear All
          </button>
        </div>

        <ToastContainer position={position}>
          {toasts.map(toast => (
            <Toast
              key={toast.id}
              variant={toast.variant}
              autoClose={true}
              duration={4000}
              onClose={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
            >
              <ToastTitle>{toast.title}</ToastTitle>
              <ToastDescription>{toast.description}</ToastDescription>
            </Toast>
          ))}
        </ToastContainer>
      </div>
    )
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Interactive demo showing toast container with different positioning options and multiple toasts.',
      },
    },
  },
}

export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-6 p-8 max-w-lg">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Real-world Toast Examples</h3>
        
        {/* Authentication */}
        <Toast variant="success" icon={<Shield className="size-5 text-success-600 dark:text-success-400" />}>
          <ToastTitle>Login Successful</ToastTitle>
          <ToastDescription>Welcome back! You've been successfully logged in.</ToastDescription>
        </Toast>
        
        {/* Notifications */}
        <Toast variant="info" icon={<Bell className="size-5 text-primary-600 dark:text-primary-400" />}>
          <ToastTitle>New Notification</ToastTitle>
          <ToastDescription>You have 3 unread messages in your inbox.</ToastDescription>
          <div className="flex gap-2 mt-3">
            <ToastAction onClick={() => console.log('View clicked')}>
              View Messages
            </ToastAction>
            <ToastAction variant="outline">
              Mark as Read
            </ToastAction>
          </div>
        </Toast>
        
        {/* Email */}
        <Toast variant="default" icon={<Mail className="size-5 text-text-secondary" />}>
          <ToastTitle>Email Sent</ToastTitle>
          <ToastDescription>Your message has been delivered to john@example.com</ToastDescription>
        </Toast>
        
        {/* User Actions */}
        <Toast variant="success" icon={<User className="size-5 text-success-600 dark:text-success-400" />}>
          <ToastTitle>Profile Updated</ToastTitle>
          <ToastDescription>Your profile information has been saved successfully.</ToastDescription>
          <div className="flex gap-2 mt-3">
            <ToastAction onClick={() => console.log('View profile clicked')}>
              View Profile
            </ToastAction>
          </div>
        </Toast>
        
        {/* System Errors */}
        <Toast variant="destructive">
          <ToastTitle>Server Error</ToastTitle>
          <ToastDescription>Unable to connect to the server. Please check your internet connection.</ToastDescription>
          <div className="flex gap-2 mt-3">
            <ToastAction onClick={() => console.log('Retry clicked')}>
              Retry
            </ToastAction>
            <ToastAction variant="outline">
              Go Offline
            </ToastAction>
          </div>
        </Toast>
        
        {/* Form Validation */}
        <Toast variant="warning">
          <ToastTitle>Form Incomplete</ToastTitle>
          <ToastDescription>Please fill in all required fields before submitting.</ToastDescription>
        </Toast>
        
        {/* Premium Features */}
        <Toast variant="glass" icon={<Star className="size-5 text-foreground/80" />}>
          <ToastTitle>Premium Feature</ToastTitle>
          <ToastDescription>Upgrade to Pro to unlock advanced analytics and reporting.</ToastDescription>
          <div className="flex gap-2 mt-3">
            <ToastAction onClick={() => console.log('Upgrade clicked')}>
              Upgrade Now
            </ToastAction>
            <ToastAction variant="outline">
              Learn More
            </ToastAction>
          </div>
        </Toast>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world toast notification examples showing common use cases with appropriate variants, icons, and actions.',
      },
    },
  },
}

export const WithoutCloseButton: Story = {
  render: () => (
    <div className="space-y-4 p-8 max-w-md">
      <Toast variant="success" showCloseButton={false} autoClose={false}>
        <ToastTitle>No Close Button</ToastTitle>
        <ToastDescription>This toast has no close button and won't auto-close.</ToastDescription>
      </Toast>
      
      <Toast variant="info" showCloseButton={false} autoClose={true} duration={3000}>
        <ToastTitle>Auto-close Only</ToastTitle>
        <ToastDescription>This toast will auto-close in 3 seconds without a close button.</ToastDescription>
      </Toast>
      
      <Toast variant="warning" showCloseButton={false}>
        <ToastTitle>Clean Design</ToastTitle>
        <ToastDescription>Perfect for notifications that don't need manual dismissal.</ToastDescription>
      </Toast>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toast notifications without close buttons for cleaner designs or auto-close only scenarios.',
      },
    },
  },
}

export const AnimationShowcase: Story = {
  render: () => {
    const [toasts, setToasts] = React.useState<Array<{ id: number; variant: any; title: string; description: string; showClose: boolean }>>([])
    const [counter, setCounter] = React.useState(0)

    const addToast = (showClose: boolean = true) => {
      const variants = ['success', 'destructive', 'warning', 'info', 'default']
      const variant = variants[Math.floor(Math.random() * variants.length)]
      const id = counter
      setCounter(c => c + 1)
      setToasts(prev => [...prev, { 
        id, 
        variant, 
        title: `Animated Toast #${id + 1}`, 
        description: `Watch the smooth slide and fade animation!`,
        showClose
      }])
    }

    return (
      <div className="space-y-4 p-8 max-w-md">
        <div className="space-y-2">
          <h3 className="font-medium">Enhanced Animations Demo</h3>
          <p className="text-sm text-muted-foreground">
            Toasts now have smooth slide + fade animations with GPU acceleration
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              className="px-3 py-1 bg-primary-600 text-white rounded text-sm hover:bg-primary-700 transition-colors"
              onClick={() => addToast(true)}
            >
              Add with Close Button
            </button>
            <button
              className="px-3 py-1 bg-secondary-600 text-white rounded text-sm hover:bg-secondary-700 transition-colors"
              onClick={() => addToast(false)}
            >
              Add without Close Button
            </button>
            <button
              className="px-3 py-1 bg-neutral-600 text-white rounded text-sm hover:bg-neutral-700 transition-colors"
              onClick={() => setToasts([])}
            >
              Clear All
            </button>
          </div>
        </div>
        
        <div className="space-y-2">
          {toasts.map(toast => (
            <Toast
              key={toast.id}
              variant={toast.variant}
              showCloseButton={toast.showClose}
              autoClose={true}
              duration={5000}
              onClose={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
            >
              <ToastTitle>{toast.title}</ToastTitle>
              <ToastDescription>{toast.description}</ToastDescription>
            </Toast>
          ))}
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo showing enhanced slide and fade animations with GPU acceleration for smooth performance.',
      },
    },
  },
}

export const DesignTokensShowcase: Story = {
  render: () => (
    <div className="space-y-8 p-8 max-w-4xl">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Toast Design Tokens Integration</h1>
        <p className="text-muted-foreground">Comprehensive demonstration of toast notifications using OKLCH design tokens</p>
      </div>
      
      {/* Semantic Colors */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Semantic Color System</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Toast variant="success" size="sm">
            <ToastTitle>Success State</ToastTitle>
            <ToastDescription>Using success semantic colors from design tokens</ToastDescription>
          </Toast>
          
          <Toast variant="destructive" size="sm">
            <ToastTitle>Error State</ToastTitle>
            <ToastDescription>Using error semantic colors from design tokens</ToastDescription>
          </Toast>
          
          <Toast variant="warning" size="sm">
            <ToastTitle>Warning State</ToastTitle>
            <ToastDescription>Using warning semantic colors from design tokens</ToastDescription>
          </Toast>
          
          <Toast variant="info" size="sm">
            <ToastTitle>Info State</ToastTitle>
            <ToastDescription>Using primary colors for informational states</ToastDescription>
          </Toast>
        </div>
      </div>
      
      {/* Animation & Effects */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Animation & Effects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Toast variant="glass" className="transform hover:scale-[1.02] transition-transform">
            <ToastTitle>Glass Morphism</ToastTitle>
            <ToastDescription>Backdrop blur with glass effect using design token animations</ToastDescription>
          </Toast>
          
          <Toast variant="default" className="relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700">
            <ToastTitle>Shine Effect</ToastTitle>
            <ToastDescription>Hover for a subtle shine animation effect</ToastDescription>
          </Toast>
        </div>
      </div>
      
      {/* Spacing Scale */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Design Token Spacing Scale</h2>
        <div className="space-y-3">
          <Toast variant="info" size="sm">
            <ToastTitle>Small (sm)</ToastTitle>
            <ToastDescription>Compact spacing using design token scale - padding: 0.75rem, gap: 0.5rem</ToastDescription>
          </Toast>
          
          <Toast variant="success" size="default">
            <ToastTitle>Default Size</ToastTitle>
            <ToastDescription>Standard spacing using design token scale - padding: 1rem, gap: 0.75rem</ToastDescription>
          </Toast>
          
          <Toast variant="warning" size="lg">
            <ToastTitle>Large (lg)</ToastTitle>
            <ToastDescription>Generous spacing using design token scale - padding: 1.25rem, gap: 1rem for important notifications</ToastDescription>
          </Toast>
        </div>
      </div>
      
      {/* Z-Index & Layering */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Z-Index Layering</h2>
        <div className="relative">
          <Toast variant="default" className="relative z-10">
            <ToastTitle>Layered Notifications</ToastTitle>
            <ToastDescription>Using design token z-index values (z-toast: 1080) for proper layering</ToastDescription>
          </Toast>
          
          <div className="text-sm text-muted-foreground mt-2 p-3 bg-neutral-100 dark:bg-neutral-800 rounded-md">
            <p><strong>Z-Index Hierarchy:</strong></p>
            <ul className="list-disc list-inside space-y-1 mt-1">
              <li>Toast: 1080 (highest priority notifications)</li>
              <li>Tooltip: 1070</li>
              <li>Popover: 1060</li>
              <li>Modal: 1050</li>
              <li>Modal Backdrop: 1040</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Benefits Summary */}
      <div className="p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-950 dark:to-secondary-950 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Design Token Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="space-y-2">
            <h3 className="font-medium">🎨 OKLCH Colors</h3>
            <p className="text-muted-foreground">Perceptually uniform colors with consistent contrast ratios across all toast variants.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">📐 Systematic Spacing</h3>
            <p className="text-muted-foreground">Mathematical spacing scale ensuring visual harmony across all toast sizes.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">🚀 Smooth Animations</h3>
            <p className="text-muted-foreground">Consistent timing functions and durations for polished user experience.</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive showcase of toast component integration with the OKLCH design token system, demonstrating semantic colors, animations, spacing scale, and z-index layering.',
      },
    },
  },
}