import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Checkbox } from '@/components/ui/checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A checkbox component that can be used in forms.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'success', 'warning'],
      description: 'The visual style variant of the checkbox',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the checkbox',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the checkbox',
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
    <div className="grid grid-cols-2 gap-4 p-8">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms-destructive" variant="destructive" />
        <label
          htmlFor="terms-destructive"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Destructive checkbox
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms-success" variant="success" />
        <label
          htmlFor="terms-success"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Success checkbox
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms-warning" variant="warning" />
        <label
          htmlFor="terms-warning"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Warning checkbox
        </label>
      </div>
    </div>
  ),
}

export const AllSizes: Story = {
    render: () => (
      <div className="flex items-center gap-4 p-8">
        <div className="flex items-center space-x-2">
            <Checkbox id="terms-sm" size="sm" />
            <label
            htmlFor="terms-sm"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
            Small
            </label>
        </div>
        <div className="flex items-center space-x-2">
            <Checkbox id="terms-md" size="md" />
            <label
            htmlFor="terms-md"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
            Medium
            </label>
        </div>
        <div className="flex items-center space-x-2">
            <Checkbox id="terms-lg" size="lg" />
            <label
            htmlFor="terms-lg"
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
    <div className="flex items-center space-x-2">
      <Checkbox id="terms-with-label" />
      <label
        htmlFor="terms-with-label"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
}

export const Disabled: Story = {
    render: () => (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms-disabled" disabled />
        <label
          htmlFor="terms-disabled"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    ),
  }
