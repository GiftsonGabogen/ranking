import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Radio, RadioGroup } from '@/components/ui/radio'
import { useState } from 'react'

const meta: Meta<typeof Radio> = {
  title: 'UI/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A modern radio button component with smooth animations, shadow effects, and design token integration. Features custom styling with accessibility support.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the radio button is checked',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the radio button is disabled',
    },
    name: {
      control: { type: 'text' },
      description: 'The name attribute for the radio input',
    },
    value: {
      control: { type: 'text' },
      description: 'The value attribute for the radio input',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'default-radio',
    value: 'option1',
    children: 'Default Radio',
  },
}

export const Checked: Story = {
  args: {
    name: 'checked-radio',
    value: 'option1',
    checked: true,
    children: 'Checked Radio',
  },
}

export const Disabled: Story = {
  args: {
    name: 'disabled-radio',
    value: 'option1',
    disabled: true,
    children: 'Disabled Radio',
  },
}

export const DisabledChecked: Story = {
  args: {
    name: 'disabled-checked-radio',
    value: 'option1',
    checked: true,
    disabled: true,
    children: 'Disabled Checked Radio',
  },
}

export const WithoutLabel: Story = {
  args: {
    name: 'no-label-radio',
    value: 'option1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio button without label text, showing just the radio control.',
      },
    },
  },
}

export const RadioGroupExample: Story = {
  render: () => {
    const [value, setValue] = useState('helios')
    
    return (
      <RadioGroup name="color-options" value={value} onValueChange={setValue}>
        <Radio value="helios">Helios Blue</Radio>
        <Radio value="cygnus">Cygnus Magenta</Radio>
        <Radio value="orion">Orion Lime</Radio>
      </RadioGroup>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'A controlled radio group with multiple options, showcasing the interactive behavior.',
      },
    },
  },
}

export const UncontrolledRadioGroup: Story = {
  render: () => (
    <RadioGroup name="uncontrolled-options" defaultValue="option2">
      <Radio value="option1">First Option</Radio>
      <Radio value="option2">Second Option (Default)</Radio>
      <Radio value="option3">Third Option</Radio>
      <Radio value="option4" disabled>Disabled Option</Radio>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'An uncontrolled radio group with a default selection and one disabled option.',
      },
    },
  },
}

export const InteractiveStates: Story = {
  render: () => (
    <div className="space-y-8 p-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Normal States</h3>
        <div className="space-y-3">
          <Radio name="normal-states" value="unchecked">Unchecked (Hover me)</Radio>
          <Radio name="normal-states" value="checked" checked>Checked with glow effect</Radio>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Disabled States</h3>
        <div className="space-y-3">
          <Radio name="disabled-states" value="unchecked" disabled>Disabled Unchecked</Radio>
          <Radio name="disabled-states" value="checked" checked disabled>Disabled Checked</Radio>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of all interactive states including hover effects and disabled states.',
      },
    },
  },
}

export const DesignTokensShowcase: Story = {
  render: () => {
    const [primaryValue, setPrimaryValue] = useState('primary-500')
    const [settingsValue, setSettingsValue] = useState('notifications')
    
    return (
      <div className="space-y-8 p-8 max-w-4xl">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Radio Button Design Tokens</h1>
          <p className="text-muted-foreground">
            Modern radio buttons with OKLCH colors, smooth animations, and shadow effects
          </p>
        </div>
        
        {/* Color Theme Selection */}
        <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
          <h2 className="text-xl font-semibold">Primary Color Selection</h2>
          <RadioGroup name="primary-colors" value={primaryValue} onValueChange={setPrimaryValue}>
            <Radio value="primary-300">Light Primary (300)</Radio>
            <Radio value="primary-500">Default Primary (500)</Radio>
            <Radio value="primary-700">Dark Primary (700)</Radio>
          </RadioGroup>
        </div>
        
        {/* Settings Configuration */}
        <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
          <h2 className="text-xl font-semibold">Settings Configuration</h2>
          <RadioGroup name="settings" value={settingsValue} onValueChange={setSettingsValue}>
            <Radio value="notifications">Enable notifications</Radio>
            <Radio value="emails">Email updates only</Radio>
            <Radio value="none">No communications</Radio>
            <Radio value="premium" disabled>Premium notifications (Upgrade required)</Radio>
          </RadioGroup>
        </div>
        
        {/* Animation Demo */}
        <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
          <h2 className="text-xl font-semibold">Animation Effects</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Featuring smooth scale transitions, glow effects, and design token spacing
          </p>
          <RadioGroup name="animation-demo" defaultValue="scale">
            <Radio value="scale">Scale animation on selection</Radio>
            <Radio value="glow">Shadow glow effect when active</Radio>
            <Radio value="hover">Hover scale effect on interaction</Radio>
          </RadioGroup>
        </div>
        
        {/* Real-world Example */}
        <div className="space-y-4 p-6 border rounded-lg bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-950 dark:to-secondary-950">
          <h2 className="text-xl font-semibold">Payment Method Selection</h2>
          <RadioGroup name="payment" defaultValue="card">
            <Radio value="card">Credit/Debit Card</Radio>
            <Radio value="paypal">PayPal</Radio>
            <Radio value="bank">Bank Transfer</Radio>
            <Radio value="crypto" disabled>Cryptocurrency (Coming Soon)</Radio>
          </RadioGroup>
        </div>
        
        {/* Design Token Benefits */}
        <div className="space-y-4 p-6 bg-gradient-to-r from-success-50 to-warning-50 dark:from-success-950 dark:to-warning-950 rounded-lg">
          <h2 className="text-xl font-semibold">Design Token Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="space-y-2">
              <h3 className="font-medium">🎨 OKLCH Colors</h3>
              <p className="text-muted-foreground">
                Perceptually uniform primary colors with consistent visual weight
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">✨ Smooth Animations</h3>
              <p className="text-muted-foreground">
                Design token-based timing functions and shadow effects
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">📱 Accessibility</h3>
              <p className="text-muted-foreground">
                Screen reader support with proper ARIA attributes and focus states
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive showcase demonstrating radio button integration with the OKLCH design token system, featuring real-world usage scenarios and visual effects.',
      },
    },
  },
}

export const CompactLayout: Story = {
  render: () => (
    <div className="space-y-4 p-6 max-w-md">
      <h3 className="text-lg font-semibold">Subscription Plan</h3>
      <RadioGroup name="plan" defaultValue="pro" className="space-y-2">
        <Radio value="free">
          <div className="flex flex-col">
            <span className="font-medium">Free Plan</span>
            <span className="text-sm text-muted-foreground">$0/month • Basic features</span>
          </div>
        </Radio>
        <Radio value="pro">
          <div className="flex flex-col">
            <span className="font-medium">Pro Plan</span>
            <span className="text-sm text-muted-foreground">$29/month • Advanced features</span>
          </div>
        </Radio>
        <Radio value="enterprise">
          <div className="flex flex-col">
            <span className="font-medium">Enterprise</span>
            <span className="text-sm text-muted-foreground">$99/month • Full access</span>
          </div>
        </Radio>
      </RadioGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Compact radio group layout with rich content including descriptions and pricing.',
      },
    },
  },
}