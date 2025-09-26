import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Select } from '../components/ui/select'
import { User, Mail, Phone, Globe, Star, Heart, Bookmark } from 'lucide-react'
import { useState } from 'react'

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable select/dropdown component with animations, search, and multi-select functionality.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'success', 'warning', 'outline', 'ghost'],
      description: 'Visual variant of the select component'
    },
    size: {
      control: 'select', 
      options: ['xs', 'sm', 'default', 'lg', 'xl'],
      description: 'Size variant of the select component'
    },
    contentVariant: {
      control: 'select',
      options: ['default', 'glass'],
      description: 'Visual variant of the dropdown content'
    },
    searchable: {
      control: 'boolean',
      description: 'Enable search functionality'
    },
    clearable: {
      control: 'boolean', 
      description: 'Enable clear functionality'
    },
    multiple: {
      control: 'boolean',
      description: 'Enable multiple selection'
    },
    isInvalid: {
      control: 'boolean',
      description: 'Show invalid state'
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the select'
    }
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Sample options for stories
const basicOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
  { value: 'fig', label: 'Fig' },
  { value: 'grape', label: 'Grape' },
  { value: 'honeydew', label: 'Honeydew' },
]

const optionsWithIcons = [
  { value: 'user', label: 'User Profile', icon: <User className="h-4 w-4" /> },
  { value: 'email', label: 'Email Settings', icon: <Mail className="h-4 w-4" /> },
  { value: 'phone', label: 'Phone Number', icon: <Phone className="h-4 w-4" /> },
  { value: 'website', label: 'Website URL', icon: <Globe className="h-4 w-4" /> },
]

const optionsWithDescriptions = [
  { 
    value: 'premium', 
    label: 'Premium Plan',
    icon: <Star className="h-4 w-4" />,
    description: 'Full access to all features'
  },
  { 
    value: 'standard', 
    label: 'Standard Plan',
    icon: <Heart className="h-4 w-4" />,
    description: 'Access to core features'
  },
  { 
    value: 'basic', 
    label: 'Basic Plan',
    icon: <Bookmark className="h-4 w-4" />,
    description: 'Limited access to features'
  },
]

const manyOptions = Array.from({ length: 50 }, (_, i) => ({
  value: `option-${i}`,
  label: `Option ${i + 1}`,
  description: `This is option number ${i + 1}`
}))

// Default Story
export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <Select
        {...args}
        value={value}
        onValueChange={setValue}
      />
    )
  },
  args: {
    options: basicOptions,
    placeholder: 'Select a fruit...',
    width: '240px',
  }
}

// Controlled Component Story
export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <Select
        {...args}
        value={value}
        onValueChange={setValue}
      />
    )
  },
  args: {
    options: basicOptions,
    placeholder: 'Select a fruit...',
  }
}

// With Icons
export const WithIcons: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <Select
        {...args}
        value={value}
        onValueChange={setValue}
      />
    )
  },
  args: {
    options: optionsWithIcons,
    placeholder: 'Select a setting...',
    leftIcon: <User className="h-4 w-4" />
  }
}

// With Descriptions
export const WithDescriptions: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <Select
        {...args}
        value={value}
        onValueChange={setValue}
      />
    )
  },
  args: {
    options: optionsWithDescriptions,
    placeholder: 'Choose your plan...',
  }
}

// Searchable
export const Searchable: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <Select
        {...args}
        value={value}
        onValueChange={setValue}
      />
    )
  },
  args: {
    options: manyOptions,
    placeholder: 'Search and select...',
    searchable: true,
  }
}

// Clearable
export const Clearable: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <Select
        {...args}
        value={value}
        onValueChange={setValue}
      />
    )
  },
  args: {
    options: basicOptions,
    placeholder: 'Select a fruit...',
    clearable: true,
  }
}

// Multiple Selection
export const Multiple: Story = {
  render: (args) => {
    const [values, setValues] = useState<string[]>([])
    return (
      <Select
        {...args}
        multipleValues={values}
        onMultipleValueChange={setValues}
      />
    )
  },
  args: {
    options: basicOptions,
    placeholder: 'Select fruits...',
    multiple: true,
    searchable: true,
    clearable: true,
  }
}

// All Variants
export const Variants: Story = {
  render: () => {
    const [values, setValues] = useState<Record<string, string>>({})
    const updateValue = (key: string, value: string) => {
      setValues(prev => ({ ...prev, [key]: value }))
    }
    
    return (
      <div className="grid grid-cols-2 gap-4 w-96">
        <Select
          options={basicOptions}
          placeholder="Default"
          variant="default"
          value={values.default || ''}
          onValueChange={(value) => updateValue('default', value)}
        />
        <Select
          options={basicOptions}
          placeholder="Outline"
          variant="outline"
          value={values.outline || ''}
          onValueChange={(value) => updateValue('outline', value)}
        />
        <Select
          options={basicOptions}
          placeholder="Ghost"
          variant="ghost"
          value={values.ghost || ''}
          onValueChange={(value) => updateValue('ghost', value)}
        />
        <Select
          options={basicOptions}
          placeholder="Success"
          variant="success"
          value={values.success || ''}
          onValueChange={(value) => updateValue('success', value)}
        />
        <Select
          options={basicOptions}
          placeholder="Warning"
          variant="warning"
          value={values.warning || ''}
          onValueChange={(value) => updateValue('warning', value)}
        />
        <Select
          options={basicOptions}
          placeholder="Destructive"
          variant="destructive"
          value={values.destructive || ''}
          onValueChange={(value) => updateValue('destructive', value)}
        />
      </div>
    )
  }
}

// All Sizes
export const Sizes: Story = {
  render: () => {
    const [values, setValues] = useState<Record<string, string>>({})
    const updateValue = (key: string, value: string) => {
      setValues(prev => ({ ...prev, [key]: value }))
    }
    
    return (
      <div className="space-y-4 w-64">
        <Select
          options={basicOptions}
          placeholder="Extra Small"
          size="xs"
          value={values.xs || ''}
          onValueChange={(value) => updateValue('xs', value)}
        />
        <Select
          options={basicOptions}
          placeholder="Small"
          size="sm"
          value={values.sm || ''}
          onValueChange={(value) => updateValue('sm', value)}
        />
        <Select
          options={basicOptions}
          placeholder="Default"
          size="default"
          value={values.default || ''}
          onValueChange={(value) => updateValue('default', value)}
        />
        <Select
          options={basicOptions}
          placeholder="Large"
          size="lg"
          value={values.lg || ''}
          onValueChange={(value) => updateValue('lg', value)}
        />
        <Select
          options={basicOptions}
          placeholder="Extra Large"
          size="xl"
          value={values.xl || ''}
          onValueChange={(value) => updateValue('xl', value)}
        />
      </div>
    )
  }
}

// Content Variants
export const ContentVariants: Story = {
  render: () => {
    const [values, setValues] = useState<Record<string, string>>({})
    const updateValue = (key: string, value: string) => {
      setValues(prev => ({ ...prev, [key]: value }))
    }
    
    return (
      <div className="grid grid-cols-2 gap-4 w-96">
        <Select
          options={basicOptions}
          placeholder="Default Content"
          contentVariant="default"
          value={values.default || ''}
          onValueChange={(value) => updateValue('default', value)}
        />
        <Select
          options={basicOptions}
          placeholder="Glass Content"
          contentVariant="glass"
          value={values.glass || ''}
          onValueChange={(value) => updateValue('glass', value)}
        />
      </div>
    )
  }
}

// Loading State
export const Loading: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <Select
        {...args}
        value={value}
        onValueChange={setValue}
      />
    )
  },
  args: {
    options: [],
    placeholder: 'Loading...',
    loading: true,
    loadingText: 'Loading options...'
  }
}

// Error State
export const ErrorState: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <Select
        {...args}
        value={value}
        onValueChange={setValue}
      />
    )
  },
  args: {
    options: basicOptions,
    placeholder: 'Select a fruit...',
    isInvalid: true,
    variant: 'destructive'
  }
}

// Disabled
export const Disabled: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <Select
        {...args}
        value={value}
        onValueChange={setValue}
      />
    )
  },
  args: {
    options: basicOptions,
    placeholder: 'Disabled select...',
    disabled: true
  }
}

// Empty Options
export const EmptyOptions: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <Select
        {...args}
        value={value}
        onValueChange={setValue}
      />
    )
  },
  args: {
    options: [],
    placeholder: 'No options...',
    emptyText: 'No fruits available'
  }
}

// With Disabled Options
export const DisabledOptions: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <Select
        {...args}
        value={value}
        onValueChange={setValue}
      />
    )
  },
  args: {
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana', disabled: true },
      { value: 'cherry', label: 'Cherry' },
      { value: 'date', label: 'Date', disabled: true },
      { value: 'elderberry', label: 'Elderberry' },
    ],
    placeholder: 'Some options disabled...'
  }
}

// Large Dataset
export const LargeDataset: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <Select
        {...args}
        value={value}
        onValueChange={setValue}
      />
    )
  },
  args: {
    options: manyOptions,
    placeholder: 'Search through many options...',
    searchable: true,
    maxHeight: '200px'
  }
}

// Fixed Width Demo
export const FixedWidthDemo: Story = {
  render: () => {
    const [value, setValue] = useState('')
    const varyingLengthOptions = [
      { value: 'a', label: 'A' },
      { value: 'short', label: 'Short' },
      { value: 'medium-length', label: 'Medium Length Option' },
      { value: 'very-very-very-long', label: 'Very Very Very Long Option Name Here' },
    ]
    
    return (
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          This demonstrates that the select maintains a consistent width (300px) 
          regardless of the selected option text length.
        </p>
        <Select
          options={varyingLengthOptions}
          placeholder="Select an option with varying text length..."
          value={value}
          onValueChange={setValue}
          width="300px"
        />
        {value && (
          <p className="text-xs text-gray-500 mt-2">
            Selected: "{varyingLengthOptions.find(opt => opt.value === value)?.label}"
          </p>
        )}
      </div>
    )
  }
}