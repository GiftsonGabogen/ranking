import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent,
  AccordionItemEnhanced,
  NestedAccordion,
  Collapsible 
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { 
  FileText, 
  Settings, 
  User, 
  ChevronRight,
  Star,
  Folder,
  File,
  Download,
  Eye,
  Lock,
  Shield,
  Zap
} from 'lucide-react'

const meta: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable accordion component with animations, variants, and enhanced features for organizing collapsible content.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'elevated', 'glass', 'outline', 'flush'],
      description: 'Visual variant of the accordion',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
      description: 'Size of the accordion text',
    },
    spacing: {
      control: { type: 'select' },
      options: ['compact', 'comfortable', 'relaxed'],
      description: 'Spacing between accordion items',
    },
    type: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
      description: 'Whether multiple items can be open at once',
    },
    collapsible: {
      control: { type: 'boolean' },
      description: 'Whether items can be collapsed when type is single',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl mx-auto p-6">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Accordion>

// Basic Accordion
export const Default: Story = {
  args: {
    type: 'single',
    collapsible: true,
    variant: 'default',
    size: 'default',
    spacing: 'comfortable',
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is your refund policy?</AccordionTrigger>
        <AccordionContent>
          We offer a 30-day money-back guarantee. If you&apos;re not satisfied with your purchase, 
          you can request a full refund within 30 days of your purchase date. Simply contact 
          our support team with your order details.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How do I track my order?</AccordionTrigger>
        <AccordionContent>
          Once your order ships, you&apos;ll receive a tracking email with a tracking number. 
          You can use this number to track your package on our website or directly with 
          the shipping carrier.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Do you offer international shipping?</AccordionTrigger>
        <AccordionContent>
          Yes, we ship to over 50 countries worldwide. International shipping costs and 
          delivery times vary by location. You can see the exact cost and estimated 
          delivery time at checkout.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

// Multiple Selection Accordion
export const Multiple: Story = {
  args: {
    type: 'multiple',
    variant: 'elevated',
    size: 'default',
    spacing: 'comfortable',
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="features">
        <AccordionTrigger>Key Features</AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2">
            <li>• Advanced search capabilities</li>
            <li>• Real-time collaboration</li>
            <li>• Cloud synchronization</li>
            <li>• Mobile-responsive design</li>
            <li>• API integrations</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="pricing">
        <AccordionTrigger>Pricing Plans</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <div>
              <strong>Basic:</strong> $9/month - Up to 5 projects
            </div>
            <div>
              <strong>Pro:</strong> $29/month - Unlimited projects + advanced features
            </div>
            <div>
              <strong>Enterprise:</strong> Custom pricing - Full customization + support
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="support">
        <AccordionTrigger>Support Options</AccordionTrigger>
        <AccordionContent>
          We offer multiple support channels including email support, live chat, 
          and a comprehensive knowledge base. Enterprise customers also get dedicated 
          account management and priority support.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

// Enhanced Accordion with icons and badges
export const Enhanced: Story = {
  args: {
    type: 'single',
    collapsible: true,
    variant: 'glass',
    size: 'default',
    spacing: 'comfortable',
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItemEnhanced
        value="account"
        title="Account Settings"
        subtitle="Manage your profile and preferences"
        icon={<User className="h-4 w-4" />}
        badge={<Badge variant="default" dot pulse size="xs">New</Badge>}
      >
        <div className="space-y-3">
          <p>Configure your account settings including profile information, password, and notification preferences.</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-primary-100 text-primary-700 rounded-md text-sm">
              Edit Profile
            </button>
            <button className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-md text-sm">
              Change Password
            </button>
          </div>
        </div>
      </AccordionItemEnhanced>
      <AccordionItemEnhanced
        value="notifications"
        title="Notification Settings"
        subtitle="Control how you receive updates"
        icon={<Settings className="h-4 w-4" />}
      >
        <div className="space-y-3">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded" defaultChecked />
            Email notifications
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            Push notifications
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded" defaultChecked />
            SMS notifications
          </label>
        </div>
      </AccordionItemEnhanced>
      <AccordionItemEnhanced
        value="security"
        title="Security & Privacy"
        subtitle="Manage your security settings"
        icon={<Shield className="h-4 w-4" />}
        badge={<Badge variant="success" size="xs">Secure</Badge>}
      >
        <div className="space-y-3">
          <p>Your account is protected with end-to-end encryption and two-factor authentication.</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <Lock className="h-3 w-3 text-success-500" />
              2FA Enabled
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-3 w-3 text-success-500" />
              SSL Protected
            </div>
          </div>
        </div>
      </AccordionItemEnhanced>
    </Accordion>
  ),
}

// Nested Accordion
export const Nested: Story = {
  args: {
    type: 'single',
    collapsible: true,
    variant: 'outline',
    size: 'default',
    spacing: 'comfortable',
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItemEnhanced
        value="documentation"
        title="Documentation"
        subtitle="API references and guides"
        icon={<FileText className="h-4 w-4" />}
      >
        <NestedAccordion type="single" collapsible>
          <AccordionItemEnhanced
            value="getting-started"
            title="Getting Started"
            icon={<Zap className="h-4 w-4" />}
          >
            <div className="space-y-2">
              <p>Quick start guide to get you up and running in minutes.</p>
              <NestedAccordion type="single" collapsible level={2}>
                <AccordionItem value="installation">
                  <AccordionTrigger>Installation</AccordionTrigger>
                  <AccordionContent>
                    <code className="block bg-neutral-100 p-2 rounded text-sm">
                      npm install @company/sdk
                    </code>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="configuration">
                  <AccordionTrigger>Configuration</AccordionTrigger>
                  <AccordionContent>
                    Set up your API keys and configure the SDK for your environment.
                  </AccordionContent>
                </AccordionItem>
              </NestedAccordion>
            </div>
          </AccordionItemEnhanced>
          <AccordionItemEnhanced
            value="api-reference"
            title="API Reference"
            icon={<File className="h-4 w-4" />}
          >
            <div className="space-y-2">
              <p>Complete API documentation with examples and response schemas.</p>
              <div className="text-sm text-neutral-600">
                • Authentication endpoints
                <br />
                • User management
                <br />
                • Data operations
              </div>
            </div>
          </AccordionItemEnhanced>
        </NestedAccordion>
      </AccordionItemEnhanced>
      <AccordionItemEnhanced
        value="resources"
        title="Resources"
        subtitle="Downloads and examples"
        icon={<Download className="h-4 w-4" />}
      >
        <NestedAccordion type="multiple">
          <AccordionItem value="examples">
            <AccordionTrigger>Code Examples</AccordionTrigger>
            <AccordionContent>
              Sample projects and code snippets to help you get started quickly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="templates">
            <AccordionTrigger>Templates</AccordionTrigger>
            <AccordionContent>
              Ready-to-use project templates for different frameworks and use cases.
            </AccordionContent>
          </AccordionItem>
        </NestedAccordion>
      </AccordionItemEnhanced>
    </Accordion>
  ),
}

// Variants Showcase
export const Variants: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  render: () => (
    <div className="space-y-6">
      {/* Default */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Default</h3>
        <Accordion type="single" collapsible variant="default">
          <AccordionItem value="item-1">
            <AccordionTrigger>Default Accordion</AccordionTrigger>
            <AccordionContent>
              This is the default variant with a clean white background and subtle borders.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Elevated */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Elevated</h3>
        <Accordion type="single" collapsible variant="elevated">
          <AccordionItem value="item-1">
            <AccordionTrigger>Elevated Accordion</AccordionTrigger>
            <AccordionContent>
              This variant has a shadow and elevated appearance for more visual depth.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Glass */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Glass</h3>
        <Accordion type="single" collapsible variant="glass">
          <AccordionItem value="item-1">
            <AccordionTrigger>Glass Accordion</AccordionTrigger>
            <AccordionContent>
              This variant has a frosted glass effect with backdrop blur.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Outline */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Outline</h3>
        <Accordion type="single" collapsible variant="outline">
          <AccordionItem value="item-1">
            <AccordionTrigger>Outline Accordion</AccordionTrigger>
            <AccordionContent>
              This variant has a transparent background with a prominent border.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Flush */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Flush</h3>
        <Accordion type="single" collapsible variant="flush">
          <AccordionItem value="item-1">
            <AccordionTrigger>Flush Accordion</AccordionTrigger>
            <AccordionContent>
              This variant has no background or borders for a minimal appearance.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
}

// Collapsible Component
export const CollapsibleExample: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  render: () => (
    <div className="space-y-4">
      <Collapsible
        title="Quick Settings"
        subtitle="Toggle common preferences"
        icon={<Settings className="h-4 w-4" />}
        badge={<Badge variant="secondary" size="xs">Beta</Badge>}
        variant="elevated"
        defaultOpen={true}
      >
        <div className="space-y-3">
          <label className="flex items-center justify-between">
            <span>Dark mode</span>
            <input type="checkbox" className="rounded" />
          </label>
          <label className="flex items-center justify-between">
            <span>Notifications</span>
            <input type="checkbox" className="rounded" defaultChecked />
          </label>
          <label className="flex items-center justify-between">
            <span>Auto-save</span>
            <input type="checkbox" className="rounded" defaultChecked />
          </label>
        </div>
      </Collapsible>
      
      <Collapsible
        title="Recent Activity"
        subtitle="View your recent actions"
        icon={<Eye className="h-4 w-4" />}
        variant="glass"
      >
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Logged in</span>
            <span className="text-neutral-500">2 minutes ago</span>
          </div>
          <div className="flex justify-between">
            <span>Updated profile</span>
            <span className="text-neutral-500">1 hour ago</span>
          </div>
          <div className="flex justify-between">
            <span>Changed password</span>
            <span className="text-neutral-500">Yesterday</span>
          </div>
        </div>
      </Collapsible>
    </div>
  ),
}

// Spacing Variants
export const Spacing: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Compact Spacing</h3>
        <Accordion type="single" collapsible spacing="compact">
          <AccordionItem value="item-1">
            <AccordionTrigger>First Item</AccordionTrigger>
            <AccordionContent>Content with compact spacing.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Second Item</AccordionTrigger>
            <AccordionContent>More content with compact spacing.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Comfortable Spacing (Default)</h3>
        <Accordion type="single" collapsible spacing="comfortable">
          <AccordionItem value="item-1">
            <AccordionTrigger>First Item</AccordionTrigger>
            <AccordionContent>Content with comfortable spacing.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Second Item</AccordionTrigger>
            <AccordionContent>More content with comfortable spacing.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Relaxed Spacing</h3>
        <Accordion type="single" collapsible spacing="relaxed">
          <AccordionItem value="item-1">
            <AccordionTrigger>First Item</AccordionTrigger>
            <AccordionContent>Content with relaxed spacing.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Second Item</AccordionTrigger>
            <AccordionContent>More content with relaxed spacing.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
}

// Custom Icons
export const CustomIcons: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  render: () => (
    <Accordion type="single" collapsible variant="outline">
      <AccordionItemEnhanced
        value="folder"
        title="Project Files"
        subtitle="Browse your project structure"
        icon={<Folder className="h-4 w-4" />}
        chevronIcon={<ChevronRight className="h-4 w-4" />}
      >
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <File className="h-3 w-3" />
            <span>index.tsx</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <File className="h-3 w-3" />
            <span>styles.css</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Folder className="h-3 w-3" />
            <span>components/</span>
          </div>
        </div>
      </AccordionItemEnhanced>
      <AccordionItemEnhanced
        value="starred"
        title="Starred Items"
        subtitle="Your favorited content"
        icon={<Star className="h-4 w-4 text-warning-500" />}
        hideChevron={false}
      >
        <p className="text-sm text-neutral-600">
          You haven&apos;t starred any items yet. Star items to access them quickly from here.
        </p>
      </AccordionItemEnhanced>
    </Accordion>
  ),
}