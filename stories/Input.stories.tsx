import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Input, Textarea, FormField } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { 
  Search, 
  Mail, 
  Lock,
  User,
  Phone,
  Calendar,
  CreditCard,
  Eye,
  EyeOff,
  Check,
  X,
  AlertCircle,
  Info,
  DollarSign,
  Link,
  MapPin,
  FileText,
  Hash,
  Loader2
} from 'lucide-react'
import { useState } from 'react'

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A modern input component with multiple variants, sizes, and states using OKLCH design tokens for consistent colors and spacing.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'success', 'warning', 'outline', 'ghost', 'filled'],
      description: 'The visual style variant of the input',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'default', 'lg', 'xl'],
      description: 'The size of the input',
    },
    isInvalid: {
      control: { type: 'boolean' },
      description: 'Whether the input is in an invalid state',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 w-[400px]">
      <div className="space-y-2">
        <label className="text-sm font-medium">Default</label>
        <Input variant="default" placeholder="Default input" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Success</label>
        <Input variant="success" placeholder="Success input" defaultValue="Valid input" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Warning</label>
        <Input variant="warning" placeholder="Warning input" defaultValue="Check this value" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Destructive</label>
        <Input variant="destructive" placeholder="Error input" defaultValue="Invalid input" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Outline</label>
        <Input variant="outline" placeholder="Outline input" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Ghost</label>
        <Input variant="ghost" placeholder="Ghost input" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Filled</label>
        <Input variant="filled" placeholder="Filled input" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available input variants showcasing different visual styles using design token semantic colors.',
      },
    },
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 w-[400px]">
      <Input size="xs" placeholder="Extra small input" />
      <Input size="sm" placeholder="Small input" />
      <Input size="default" placeholder="Default input" />
      <Input size="lg" placeholder="Large input" />
      <Input size="xl" placeholder="Extra large input" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different input sizes from extra small to extra large using design token spacing.',
      },
    },
  },
}

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4 w-[400px]">
      <Input 
        leftIcon={<Search className="h-4 w-4" />}
        placeholder="Search..."
      />
      <Input 
        leftIcon={<Mail className="h-4 w-4" />}
        type="email"
        placeholder="Email address"
      />
      <Input 
        leftIcon={<Lock className="h-4 w-4" />}
        rightIcon={<Eye className="h-4 w-4" />}
        type="password"
        placeholder="Password"
      />
      <Input 
        leftIcon={<User className="h-4 w-4" />}
        placeholder="Username"
      />
      <Input 
        leftIcon={<Phone className="h-4 w-4" />}
        type="tel"
        placeholder="Phone number"
      />
      <Input 
        leftIcon={<Calendar className="h-4 w-4" />}
        type="date"
      />
      <Input 
        leftIcon={<CreditCard className="h-4 w-4" />}
        placeholder="Card number"
      />
      <Input 
        leftIcon={<DollarSign className="h-4 w-4" />}
        type="number"
        placeholder="0.00"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input fields with left and right icons for common use cases.',
      },
    },
  },
}

export const WithElements: Story = {
  render: () => {
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    
    return (
      <div className="space-y-4 w-[400px]">
        <Input 
          leftElement={<span className="text-xs font-medium text-muted-foreground">https://</span>}
          placeholder="example.com"
        />
        <Input 
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          rightElement={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          }
        />
        <Input 
          placeholder="Username"
          rightElement={
            loading ? (
              <Loader2 className="h-4 w-4 animate-spin text-primary-500" />
            ) : (
              <Check className="h-4 w-4 text-success-500" />
            )
          }
        />
        <Input 
          leftElement={<span className="text-sm font-medium">$</span>}
          rightElement={<span className="text-xs text-muted-foreground">USD</span>}
          type="number"
          placeholder="0.00"
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Input fields with interactive elements like buttons and status indicators.',
      },
    },
  },
}

export const ValidationStates: Story = {
  render: () => (
    <div className="space-y-4 w-[400px]">
      <FormField label="Valid Input" hint="This input is valid">
        <Input 
          variant="success"
          defaultValue="john.doe@example.com"
          rightIcon={<Check className="h-4 w-4 text-success-500" />}
        />
      </FormField>
      
      <FormField label="Warning Input" hint="Please verify this information">
        <Input 
          variant="warning"
          defaultValue="john123"
          rightIcon={<AlertCircle className="h-4 w-4 text-warning-500" />}
        />
      </FormField>
      
      <FormField label="Invalid Input" error="This field is required">
        <Input 
          variant="destructive"
          isInvalid
          placeholder="Enter value..."
          rightIcon={<X className="h-4 w-4 text-error-500" />}
        />
      </FormField>
      
      <FormField label="Disabled Input" hint="This field is disabled">
        <Input 
          disabled
          defaultValue="Cannot edit"
        />
      </FormField>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different validation states with helper text and error messages.',
      },
    },
  },
}

export const FormExample: Story = {
  render: () => (
    <div className="w-[500px] space-y-6 p-6 border rounded-lg bg-card">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Account Settings</h2>
        <p className="text-sm text-muted-foreground">Update your account information</p>
      </div>
      
      <div className="space-y-4">
        <FormField label="Full Name" required>
          <Input 
            leftIcon={<User className="h-4 w-4" />}
            placeholder="John Doe"
            defaultValue="John Doe"
          />
        </FormField>
        
        <FormField label="Email Address" required>
          <Input 
            type="email"
            leftIcon={<Mail className="h-4 w-4" />}
            placeholder="john@example.com"
            defaultValue="john@example.com"
          />
        </FormField>
        
        <FormField label="Phone Number">
          <Input 
            type="tel"
            leftIcon={<Phone className="h-4 w-4" />}
            placeholder="+1 (555) 000-0000"
          />
        </FormField>
        
        <FormField label="Website">
          <Input 
            type="url"
            leftIcon={<Link className="h-4 w-4" />}
            placeholder="https://example.com"
          />
        </FormField>
        
        <FormField label="Location">
          <Input 
            leftIcon={<MapPin className="h-4 w-4" />}
            placeholder="San Francisco, CA"
          />
        </FormField>
        
        <FormField label="Bio" hint="Brief description about yourself">
          <Textarea 
            placeholder="Tell us about yourself..."
            rows={4}
          />
        </FormField>
      </div>
      
      <div className="flex gap-3">
        <Button variant="success">
          <Check className="mr-2" />
          Save Changes
        </Button>
        <Button variant="outline">Cancel</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A complete form example showcasing various input types with labels and FormField composition.',
      },
    },
  },
}

export const TextareaVariants: Story = {
  render: () => (
    <div className="space-y-4 w-[500px]">
      <FormField label="Default Textarea">
        <Textarea placeholder="Enter your message..." />
      </FormField>
      
      <FormField label="Success Textarea">
        <Textarea 
          variant="success" 
          defaultValue="Your submission has been received successfully!"
        />
      </FormField>
      
      <FormField label="Warning Textarea">
        <Textarea 
          variant="warning" 
          defaultValue="Please review this content before submitting."
        />
      </FormField>
      
      <FormField label="Error Textarea" error="Message is too short">
        <Textarea 
          variant="destructive" 
          isInvalid
          defaultValue="Hi"
        />
      </FormField>
      
      <FormField label="Filled Textarea">
        <Textarea 
          variant="filled" 
          placeholder="Type your response here..."
        />
      </FormField>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Textarea component variants matching the input styles.',
      },
    },
  },
}

export const InputTypes: Story = {
  render: () => (
    <div className="space-y-4 w-[400px]">
      <FormField label="Text">
        <Input type="text" placeholder="Enter text..." />
      </FormField>
      
      <FormField label="Email">
        <Input type="email" placeholder="email@example.com" />
      </FormField>
      
      <FormField label="Password">
        <Input type="password" placeholder="••••••••" />
      </FormField>
      
      <FormField label="Number">
        <Input type="number" placeholder="123" min="0" max="100" />
      </FormField>
      
      <FormField label="Date">
        <Input type="date" />
      </FormField>
      
      <FormField label="Time">
        <Input type="time" />
      </FormField>
      
      <FormField label="DateTime">
        <Input type="datetime-local" />
      </FormField>
      
      <FormField label="Search">
        <Input type="search" placeholder="Search..." />
      </FormField>
      
      <FormField label="URL">
        <Input type="url" placeholder="https://example.com" />
      </FormField>
      
      <FormField label="Tel">
        <Input type="tel" placeholder="+1 (555) 000-0000" />
      </FormField>
      
      <FormField label="Color">
        <Input type="color" defaultValue="#556CD6" />
      </FormField>
      
      <FormField label="Range">
        <Input type="range" min="0" max="100" defaultValue="50" />
      </FormField>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Various HTML5 input types with appropriate placeholders and constraints.',
      },
    },
  },
}

export const DesignTokensShowcase: Story = {
  render: () => (
    <div className="space-y-8 p-8 max-w-4xl">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Design Tokens in Input Components</h1>
        <p className="text-muted-foreground">Comprehensive demonstration of input components using OKLCH design tokens</p>
      </div>
      
      {/* Semantic Color Inputs */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Semantic Color States</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="Success State" hint="Valid and confirmed">
            <Input 
              variant="success"
              defaultValue="Successfully validated"
              rightIcon={<Check className="h-4 w-4" />}
            />
          </FormField>
          
          <FormField label="Warning State" hint="Needs attention">
            <Input 
              variant="warning"
              defaultValue="Please verify"
              rightIcon={<AlertCircle className="h-4 w-4" />}
            />
          </FormField>
          
          <FormField label="Error State" error="Invalid input">
            <Input 
              variant="destructive"
              isInvalid
              defaultValue="Invalid value"
              rightIcon={<X className="h-4 w-4" />}
            />
          </FormField>
          
          <FormField label="Default State">
            <Input 
              variant="default"
              placeholder="Standard input"
            />
          </FormField>
        </div>
      </div>
      
      {/* Size Scale with Design Tokens */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Design Token Spacing Scale</h2>
        <div className="space-y-3">
          <div className="grid grid-cols-[100px_1fr_auto] gap-4 items-center">
            <span className="text-sm font-medium">XS (h-7)</span>
            <Input size="xs" placeholder="Extra small input with h-7 px-2" />
            <span className="text-xs text-muted-foreground">h-7 px-2</span>
          </div>
          <div className="grid grid-cols-[100px_1fr_auto] gap-4 items-center">
            <span className="text-sm font-medium">SM (h-8)</span>
            <Input size="sm" placeholder="Small input with h-8 px-3" />
            <span className="text-xs text-muted-foreground">h-8 px-3</span>
          </div>
          <div className="grid grid-cols-[100px_1fr_auto] gap-4 items-center">
            <span className="text-sm font-medium">Default (h-10)</span>
            <Input size="default" placeholder="Default input with h-10 px-4" />
            <span className="text-xs text-muted-foreground">h-10 px-4</span>
          </div>
          <div className="grid grid-cols-[100px_1fr_auto] gap-4 items-center">
            <span className="text-sm font-medium">LG (h-12)</span>
            <Input size="lg" placeholder="Large input with h-12 px-5" />
            <span className="text-xs text-muted-foreground">h-12 px-5</span>
          </div>
          <div className="grid grid-cols-[100px_1fr_auto] gap-4 items-center">
            <span className="text-sm font-medium">XL (h-14)</span>
            <Input size="xl" placeholder="Extra large input with h-14 px-6" />
            <span className="text-xs text-muted-foreground">h-14 px-6</span>
          </div>
        </div>
      </div>
      
      {/* Real-world Form Examples */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Real-world Usage Patterns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <h3 className="font-medium">Login Form</h3>
            <FormField label="Email">
              <Input 
                type="email"
                leftIcon={<Mail className="h-4 w-4" />}
                placeholder="user@example.com"
              />
            </FormField>
            <FormField label="Password">
              <Input 
                type="password"
                leftIcon={<Lock className="h-4 w-4" />}
                placeholder="••••••••"
              />
            </FormField>
            <Button variant="default" className="w-full">Sign In</Button>
          </div>
          
          <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <h3 className="font-medium">Payment Information</h3>
            <FormField label="Card Number">
              <Input 
                leftIcon={<CreditCard className="h-4 w-4" />}
                placeholder="4242 4242 4242 4242"
              />
            </FormField>
            <div className="grid grid-cols-2 gap-4">
              <FormField label="Expiry">
                <Input placeholder="MM/YY" />
              </FormField>
              <FormField label="CVV">
                <Input placeholder="123" type="number" />
              </FormField>
            </div>
            <Button variant="success" className="w-full">
              <Check className="mr-2" />
              Process Payment
            </Button>
          </div>
          
          <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <h3 className="font-medium">Search & Filter</h3>
            <Input 
              leftIcon={<Search className="h-4 w-4" />}
              placeholder="Search products..."
              size="lg"
            />
            <div className="flex gap-2">
              <Input placeholder="Min price" type="number" size="sm" />
              <Input placeholder="Max price" type="number" size="sm" />
            </div>
          </div>
          
          <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <h3 className="font-medium">Contact Form</h3>
            <FormField label="Message" required>
              <Textarea 
                placeholder="How can we help you?"
                rows={3}
              />
            </FormField>
            <Button variant="outline" className="w-full">Send Message</Button>
          </div>
        </div>
      </div>
      
      {/* Interactive States */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Interactive States & Focus Rings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Focus State</label>
            <Input placeholder="Click to see focus ring" />
            <p className="text-xs text-muted-foreground">3px ring with primary-500/20</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Hover State</label>
            <Input placeholder="Hover to see border change" />
            <p className="text-xs text-muted-foreground">Border color transitions on hover</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Disabled State</label>
            <Input placeholder="Disabled input" disabled />
            <p className="text-xs text-muted-foreground">50% opacity when disabled</p>
          </div>
        </div>
      </div>
      
      {/* Design Token Benefits */}
      <div className="space-y-4 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-950 dark:to-secondary-950 rounded-lg">
        <h2 className="text-xl font-semibold">Design Token Benefits in Inputs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="space-y-2">
            <h3 className="font-medium">🎨 Consistent Colors</h3>
            <p className="text-muted-foreground">OKLCH color scales ensure perfect visual harmony across all input states and variants.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">📐 Predictable Spacing</h3>
            <p className="text-muted-foreground">Mathematical spacing system creates consistent padding and heights across all sizes.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">✨ Smooth Transitions</h3>
            <p className="text-muted-foreground">200ms transitions with design tokens create fluid, professional interactions.</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'A comprehensive showcase demonstrating input components with OKLCH design tokens, semantic colors, consistent spacing, and real-world patterns.',
      },
    },
  },
}