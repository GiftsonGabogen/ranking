import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Tooltip } from '@/components/ui/tooltip'
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
  Check,
  Info,
  AlertCircle,
  AlertTriangle,
  HelpCircle
} from 'lucide-react'

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A modern tooltip component with smooth animations, multiple variants, smart positioning, and beautiful visual effects. Features auto-positioning to stay within viewport bounds and supports various trigger modes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error', 'light', 'glass'],
      description: 'The visual style variant of the tooltip',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
      description: 'The size of the tooltip',
    },
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Preferred position of the tooltip (auto-adjusts if no space)',
    },
    showArrow: {
      control: { type: 'boolean' },
      description: 'Whether to show the tooltip arrow',
    },
    delay: {
      control: { type: 'number', min: 0, max: 2000, step: 100 },
      description: 'Delay in milliseconds before showing tooltip',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the tooltip',
    },
    trigger: {
      control: { type: 'select' },
      options: ['hover', 'focus', 'click'],
      description: 'How the tooltip is triggered',
    },
  },
  args: {
    content: 'This is a tooltip',
    showArrow: true,
    delay: 200,
    disabled: false,
    trigger: 'hover',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="p-8">
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-8 p-8">
      <div className="text-center space-y-3">
        <Tooltip content="Default tooltip with dark theme" variant="default">
          <Button variant="outline">Default</Button>
        </Tooltip>
        <p className="text-xs text-muted-foreground">Default</p>
      </div>
      
      <div className="text-center space-y-3">
        <Tooltip content="Primary branded tooltip" variant="primary">
          <Button>Primary</Button>
        </Tooltip>
        <p className="text-xs text-muted-foreground">Primary</p>
      </div>
      
      <div className="text-center space-y-3">
        <Tooltip content="Secondary styled tooltip" variant="secondary">
          <Button variant="secondary">Secondary</Button>
        </Tooltip>
        <p className="text-xs text-muted-foreground">Secondary</p>
      </div>
      
      <div className="text-center space-y-3">
        <Tooltip content="Success message tooltip" variant="success">
          <Button variant="success">
            <Check className="w-4 h-4" />
          </Button>
        </Tooltip>
        <p className="text-xs text-muted-foreground">Success</p>
      </div>
      
      <div className="text-center space-y-3">
        <Tooltip content="Warning notification tooltip" variant="warning">
          <Button variant="warning">
            <AlertTriangle className="w-4 h-4" />
          </Button>
        </Tooltip>
        <p className="text-xs text-muted-foreground">Warning</p>
      </div>
      
      <div className="text-center space-y-3">
        <Tooltip content="Error or danger tooltip" variant="error">
          <Button variant="destructive">
            <Trash2 className="w-4 h-4" />
          </Button>
        </Tooltip>
        <p className="text-xs text-muted-foreground">Error</p>
      </div>
      
      <div className="text-center space-y-3">
        <Tooltip content="Light theme tooltip" variant="light">
          <Button variant="outline">Light</Button>
        </Tooltip>
        <p className="text-xs text-muted-foreground">Light</p>
      </div>
      
      <div className="text-center space-y-3">
        <Tooltip content="Glass morphism tooltip effect" variant="glass">
          <Button variant="glass">Glass</Button>
        </Tooltip>
        <p className="text-xs text-muted-foreground">Glass</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available tooltip variants showcasing different visual styles with design token semantic colors.',
      },
    },
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-8 p-8">
      <div className="text-center space-y-3">
        <Tooltip content="Small tooltip" size="sm">
          <Button size="sm">Small</Button>
        </Tooltip>
        <p className="text-xs text-muted-foreground">Small</p>
      </div>
      
      <div className="text-center space-y-3">
        <Tooltip content="Default size tooltip with more content" size="default">
          <Button>Default</Button>
        </Tooltip>
        <p className="text-xs text-muted-foreground">Default</p>
      </div>
      
      <div className="text-center space-y-3">
        <Tooltip content="Large tooltip with even more detailed content" size="lg">
          <Button size="lg">Large</Button>
        </Tooltip>
        <p className="text-xs text-muted-foreground">Large</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different tooltip sizes from small to large using design token spacing.',
      },
    },
  },
}

export const Positions: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-16 p-16">
      <div className="text-center space-y-3">
        <Tooltip content="Tooltip appears above" position="top">
          <Button variant="outline">Top</Button>
        </Tooltip>
        <p className="text-xs text-muted-foreground">Top Position</p>
      </div>
      
      <div className="text-center space-y-3">
        <Tooltip content="Tooltip appears below" position="bottom">
          <Button variant="outline">Bottom</Button>
        </Tooltip>
        <p className="text-xs text-muted-foreground">Bottom Position</p>
      </div>
      
      <div className="text-center space-y-3">
        <Tooltip content="Tooltip appears to the left" position="left">
          <Button variant="outline">Left</Button>
        </Tooltip>
        <p className="text-xs text-muted-foreground">Left Position</p>
      </div>
      
      <div className="text-center space-y-3">
        <Tooltip content="Tooltip appears to the right" position="right">
          <Button variant="outline">Right</Button>
        </Tooltip>
        <p className="text-xs text-muted-foreground">Right Position</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltip positioning in all four directions. The tooltip will automatically adjust position if there\'s insufficient space.',
      },
    },
  },
}

export const TriggerTypes: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8 p-8">
      <div className="text-center space-y-3">
        <Tooltip content="Hover to see this tooltip" trigger="hover">
          <Button variant="outline">Hover Trigger</Button>
        </Tooltip>
        <p className="text-xs text-muted-foreground">Hover (default)</p>
      </div>
      
      <div className="text-center space-y-3">
        <Tooltip content="Focus to see this tooltip" trigger="focus">
          <Button variant="secondary">Focus Trigger</Button>
        </Tooltip>
        <p className="text-xs text-muted-foreground">Focus</p>
      </div>
      
      <div className="text-center space-y-3">
        <Tooltip content="Click to toggle this tooltip" trigger="click">
          <Button>Click Trigger</Button>
        </Tooltip>
        <p className="text-xs text-muted-foreground">Click</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different trigger types: hover (default), focus for accessibility, and click for manual control.',
      },
    },
  },
}

export const WithoutArrow: Story = {
  render: () => (
    <div className="flex gap-8 p-8">
      <Tooltip content="Tooltip with arrow" showArrow={true}>
        <Button variant="outline">With Arrow</Button>
      </Tooltip>
      
      <Tooltip content="Tooltip without arrow" showArrow={false}>
        <Button variant="outline">Without Arrow</Button>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltips can optionally hide the arrow pointer for a cleaner look.',
      },
    },
  },
}

export const WithIcons: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-6 p-8">
      <Tooltip content="Add new item to your collection">
        <Button size="icon" variant="outline">
          <Plus className="w-4 h-4" />
        </Button>
      </Tooltip>
      
      <Tooltip content="Download file to your device" variant="primary">
        <Button size="icon">
          <Download className="w-4 h-4" />
        </Button>
      </Tooltip>
      
      <Tooltip content="Share with your team members" variant="secondary">
        <Button size="icon" variant="secondary">
          <Share className="w-4 h-4" />
        </Button>
      </Tooltip>
      
      <Tooltip content="Add to favorites list" variant="warning">
        <Button size="icon" variant="warning">
          <Star className="w-4 h-4" />
        </Button>
      </Tooltip>
      
      <Tooltip content="Edit this content" variant="success">
        <Button size="icon" variant="success">
          <Edit className="w-4 h-4" />
        </Button>
      </Tooltip>
      
      <Tooltip content="Delete permanently" variant="error">
        <Button size="icon" variant="destructive">
          <Trash2 className="w-4 h-4" />
        </Button>
      </Tooltip>
      
      <Tooltip content="Configure settings" variant="glass">
        <Button size="icon" variant="glass">
          <Settings className="w-4 h-4" />
        </Button>
      </Tooltip>
      
      <Tooltip content="Get help and support">
        <Button size="icon" variant="ghost">
          <HelpCircle className="w-4 h-4" />
        </Button>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltips work perfectly with icon buttons to provide context and improve accessibility.',
      },
    },
  },
}

export const DelayVariations: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-8 p-8">
      <div className="text-center space-y-3">
        <Tooltip content="Instant tooltip" delay={0}>
          <Button variant="outline">No Delay</Button>
        </Tooltip>
        <p className="text-xs text-muted-foreground">0ms delay</p>
      </div>
      
      <div className="text-center space-y-3">
        <Tooltip content="Quick tooltip" delay={100}>
          <Button variant="outline">Quick</Button>
        </Tooltip>
        <p className="text-xs text-muted-foreground">100ms delay</p>
      </div>
      
      <div className="text-center space-y-3">
        <Tooltip content="Default timing tooltip" delay={200}>
          <Button variant="outline">Default</Button>
        </Tooltip>
        <p className="text-xs text-muted-foreground">200ms delay</p>
      </div>
      
      <div className="text-center space-y-3">
        <Tooltip content="Slow tooltip" delay={500}>
          <Button variant="outline">Slow</Button>
        </Tooltip>
        <p className="text-xs text-muted-foreground">500ms delay</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different delay timings for tooltip appearance. Default is 200ms for optimal user experience.',
      },
    },
  },
}

export const RichContent: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-12 p-8">
      <Tooltip 
        content={
          <div className="space-y-2">
            <div className="font-semibold">Rich Tooltip Content</div>
            <div>This tooltip contains multiple lines of content with enhanced formatting.</div>
          </div>
        }
        size="lg"
        variant="primary"
      >
        <Button>Rich Content</Button>
      </Tooltip>
      
      <Tooltip 
        content={
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4" />
            <span>Tooltip with icon</span>
          </div>
        }
        variant="light"
      >
        <Button variant="outline">With Icon</Button>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltips can contain rich content including multiple lines, formatting, and icons.',
      },
    },
  },
}

export const AutoPositioning: Story = {
  render: () => (
    <div className="p-4 space-y-8">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold">Auto-positioning Demo</h3>
        <p className="text-muted-foreground text-sm">
          Try hovering near the edges - tooltips will automatically reposition to stay in view
        </p>
      </div>
      
      {/* Top edge */}
      <div className="flex justify-center">
        <Tooltip content="I wanted to be on top, but I'll show below instead!" position="top">
          <Button variant="outline" size="sm">Top Edge</Button>
        </Tooltip>
      </div>
      
      {/* Side edges */}
      <div className="flex justify-between">
        <Tooltip content="I wanted to be on the left, but I'll show on the right!" position="left">
          <Button variant="outline" size="sm">Left Edge</Button>
        </Tooltip>
        
        <Tooltip content="I wanted to be on the right, but I'll show on the left!" position="right">
          <Button variant="outline" size="sm">Right Edge</Button>
        </Tooltip>
      </div>
      
      {/* Center positioning works normally */}
      <div className="flex justify-center gap-8">
        <Tooltip content="Perfect positioning here!" position="top">
          <Button>Center Top</Button>
        </Tooltip>
        <Tooltip content="Perfect positioning here!" position="bottom">
          <Button>Center Bottom</Button>
        </Tooltip>
        <Tooltip content="Perfect positioning here!" position="left">
          <Button>Center Left</Button>
        </Tooltip>
        <Tooltip content="Perfect positioning here!" position="right">
          <Button>Center Right</Button>
        </Tooltip>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Smart auto-positioning system that automatically adjusts tooltip position when there\'s insufficient space in the preferred direction.',
      },
    },
  },
}

export const AccessibilityShowcase: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-semibold">Accessibility Features</h2>
        <p className="text-muted-foreground">Focus triggers and keyboard navigation support</p>
      </div>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="font-medium">Focus Triggers</h3>
          <div className="space-y-3">
            <Tooltip content="Tab to focus and see this tooltip" trigger="focus">
              <Button variant="outline" className="w-full">Focus Me (Tab)</Button>
            </Tooltip>
            <Tooltip content="Another focusable tooltip" trigger="focus">
              <Button variant="outline" className="w-full">Focus Me Too</Button>
            </Tooltip>
            <Tooltip content="Last focusable tooltip" trigger="focus">
              <Button variant="outline" className="w-full">And Me</Button>
            </Tooltip>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-medium">Form Context</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <input 
                className="flex-1 px-3 py-2 border rounded-md"
                placeholder="Username"
              />
              <Tooltip content="Your username must be unique" variant="primary">
                <Button size="icon-sm" variant="ghost">
                  <HelpCircle className="w-4 h-4" />
                </Button>
              </Tooltip>
            </div>
            
            <div className="flex items-center gap-2">
              <input 
                type="password"
                className="flex-1 px-3 py-2 border rounded-md"
                placeholder="Password"
              />
              <Tooltip 
                content="Password must be at least 8 characters with letters and numbers"
                variant="warning"
                size="lg"
              >
                <Button size="icon-sm" variant="ghost">
                  <Info className="w-4 h-4" />
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Accessibility-focused examples showing focus triggers and proper ARIA implementation.',
      },
    },
  },
}

export const RealWorldUsage: Story = {
  render: () => (
    <div className="space-y-8 p-8 max-w-4xl">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Real-world Usage Examples</h1>
        <p className="text-muted-foreground">Common tooltip patterns in user interfaces</p>
      </div>
      
      {/* Toolbar */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Toolbar Actions</h2>
        <div className="flex items-center gap-1 p-2 border rounded-lg bg-neutral-50 dark:bg-neutral-900">
          <Tooltip content="Create new document">
            <Button size="icon-sm" variant="ghost">
              <Plus className="w-4 h-4" />
            </Button>
          </Tooltip>
          <Tooltip content="Save current document">
            <Button size="icon-sm" variant="ghost">
              <Check className="w-4 h-4" />
            </Button>
          </Tooltip>
          <div className="w-px h-6 bg-border mx-1" />
          <Tooltip content="Download as PDF">
            <Button size="icon-sm" variant="ghost">
              <Download className="w-4 h-4" />
            </Button>
          </Tooltip>
          <Tooltip content="Share with team">
            <Button size="icon-sm" variant="ghost">
              <Share className="w-4 h-4" />
            </Button>
          </Tooltip>
          <div className="w-px h-6 bg-border mx-1" />
          <Tooltip content="Settings and preferences">
            <Button size="icon-sm" variant="ghost">
              <Settings className="w-4 h-4" />
            </Button>
          </Tooltip>
        </div>
      </div>
      
      {/* Status indicators */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Status Indicators</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg space-y-3">
            <h3 className="font-medium">Project Status</h3>
            <div className="flex items-center gap-2">
              <Tooltip content="Project is running smoothly" variant="success">
                <div className="w-3 h-3 bg-success-500 rounded-full cursor-help"></div>
              </Tooltip>
              <span className="text-sm">Development Phase</span>
            </div>
            <div className="flex items-center gap-2">
              <Tooltip content="Needs attention - review pending" variant="warning">
                <div className="w-3 h-3 bg-warning-500 rounded-full cursor-help"></div>
              </Tooltip>
              <span className="text-sm">Code Review</span>
            </div>
            <div className="flex items-center gap-2">
              <Tooltip content="Blocked - dependencies missing" variant="error">
                <div className="w-3 h-3 bg-error-500 rounded-full cursor-help"></div>
              </Tooltip>
              <span className="text-sm">Integration Tests</span>
            </div>
          </div>
          
          <div className="p-4 border rounded-lg space-y-3">
            <h3 className="font-medium">System Health</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">CPU Usage</span>
                <Tooltip content="Current: 45% - Normal operation">
                  <div className="w-16 h-2 bg-neutral-200 rounded-full">
                    <div className="w-7 h-2 bg-success-500 rounded-full"></div>
                  </div>
                </Tooltip>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Memory</span>
                <Tooltip content="Current: 78% - Monitor closely" variant="warning">
                  <div className="w-16 h-2 bg-neutral-200 rounded-full">
                    <div className="w-12 h-2 bg-warning-500 rounded-full"></div>
                  </div>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Data tables */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Data Table Actions</h2>
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-neutral-50 dark:bg-neutral-900">
              <tr>
                <th className="text-left p-3 font-medium">Name</th>
                <th className="text-left p-3 font-medium">Status</th>
                <th className="text-right p-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">John Doe</td>
                <td className="p-3">
                  <Tooltip content="User is currently online" variant="success">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-success-100 text-success-800 text-xs rounded-full">
                      <div className="w-1.5 h-1.5 bg-success-500 rounded-full"></div>
                      Active
                    </span>
                  </Tooltip>
                </td>
                <td className="p-3">
                  <div className="flex justify-end gap-1">
                    <Tooltip content="Edit user profile">
                      <Button size="icon-sm" variant="ghost">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </Tooltip>
                    <Tooltip content="Send message">
                      <Button size="icon-sm" variant="ghost">
                        <Share className="w-4 h-4" />
                      </Button>
                    </Tooltip>
                    <Tooltip content="Delete user" variant="error">
                      <Button size="icon-sm" variant="ghost">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive real-world usage examples showing tooltips in toolbars, status indicators, and data tables.',
      },
    },
  },
}