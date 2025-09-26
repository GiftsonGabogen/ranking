import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Switch } from '@/components/ui/switch'
import React from 'react'

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A switch component for toggling between on/off states with smooth animations.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'destructive', 'secondary'],
      description: 'The visual style variant of the switch',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the switch',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the switch',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'The checked state of the switch',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6 p-8">
      <div className="flex items-center space-x-3">
        <Switch id="default" />
        <label
          htmlFor="default"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Default
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <Switch id="success" variant="success" />
        <label
          htmlFor="success"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Success
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <Switch id="warning" variant="warning" />
        <label
          htmlFor="warning"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Warning
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <Switch id="destructive" variant="destructive" />
        <label
          htmlFor="destructive"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Destructive
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <Switch id="secondary" variant="secondary" />
        <label
          htmlFor="secondary"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Secondary
        </label>
      </div>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-8 p-8">
      <div className="flex items-center space-x-3">
        <Switch id="small" size="sm" />
        <label
          htmlFor="small"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Small
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <Switch id="medium" size="md" />
        <label
          htmlFor="medium"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Medium
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <Switch id="large" size="lg" />
        <label
          htmlFor="large"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Large
        </label>
      </div>
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-3">
      <Switch id="notifications" />
      <label
        htmlFor="notifications"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Enable notifications
      </label>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-8">
      <div className="flex items-center space-x-3">
        <Switch id="disabled-off" disabled />
        <label
          htmlFor="disabled-off"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Disabled (off)
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <Switch id="disabled-on" disabled checked />
        <label
          htmlFor="disabled-on"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Disabled (on)
        </label>
      </div>
    </div>
  ),
}

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false)
    
    return (
      <div className="flex items-center space-x-3">
        <Switch
          id="interactive"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <label
          htmlFor="interactive"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {checked ? 'ON' : 'OFF'}
        </label>
      </div>
    )
  },
}