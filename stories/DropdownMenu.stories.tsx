import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { 
  DropdownMenu, 
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  type DropdownMenuItem as DropdownMenuItemType 
} from '../components/ui/dropdown-menu'
import { 
  Settings, 
  User, 
  LogOut, 
  Plus, 
  Edit, 
  Trash2, 
  Download, 
  Share, 
  Copy, 
  Scissors, 
  ClipboardPaste,
  Mail,
  MessageSquare,
  Github,
  Twitter,
  FileText,
  Image as ImageIcon,
  Video,
  Music
} from 'lucide-react'
import React, { useState } from 'react'

const meta = {
  title: 'UI/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile dropdown menu component with animations and keyboard navigation support. Built with customizable variants, sizes, and full accessibility features.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'secondary', 'ghost', 'destructive'],
      description: 'Visual variant of the trigger button',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'default', 'lg', 'xl'],
      description: 'Size of the trigger button and menu items',
    },
    contentVariant: {
      control: 'select',
      options: ['default', 'glass'],
      description: 'Visual variant of the dropdown content',
    },
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Preferred side to position the dropdown',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'How to align the dropdown relative to the trigger',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the dropdown trigger is disabled',
    },
  },
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

const basicItems: DropdownMenuItemType[] = [
  {
    key: 'profile',
    label: 'Profile',
    icon: <User />,
    onClick: () => {
      console.log('Profile clicked')
    },
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: <Settings />,
    shortcut: '⌘,',
    onClick: () => {
      console.log('Settings clicked')
    },
  },
  {
    key: 'logout',
    label: 'Log out',
    icon: <LogOut />,
    variant: 'destructive',
    shortcut: '⌘⇧Q',
    onClick: () => {
      console.log('Logout clicked')
    },
  },
]

const actionItems: DropdownMenuItemType[] = [
  {
    key: 'new',
    label: 'New',
    icon: <Plus />,
    shortcut: '⌘N',
  },
  {
    key: 'edit',
    label: 'Edit',
    icon: <Edit />,
    shortcut: '⌘E',
  },
  {
    key: 'duplicate',
    label: 'Duplicate',
    icon: <Copy />,
    shortcut: '⌘D',
  },
  {
    key: 'delete',
    label: 'Delete',
    icon: <Trash2 />,
    variant: 'destructive',
    shortcut: '⌫',
  },
]

const editItems: DropdownMenuItemType[] = [
  {
    key: 'cut',
    label: 'Cut',
    icon: <Scissors />,
    shortcut: '⌘X',
  },
  {
    key: 'copy',
    label: 'Copy',
    icon: <Copy />,
    shortcut: '⌘C',
  },
  {
    key: 'paste',
    label: 'Paste',
    icon: <ClipboardPaste />,
    shortcut: '⌘V',
    disabled: true,
  },
]

const shareItems: DropdownMenuItemType[] = [
  {
    key: 'email',
    label: 'Email',
    icon: <Mail />,
  },
  {
    key: 'message',
    label: 'Message',
    icon: <MessageSquare />,
  },
  {
    key: 'social',
    label: 'Social Media',
    icon: <Share />,
    children: [
      {
        key: 'twitter',
        label: 'Twitter',
        icon: <Twitter />,
      },
      {
        key: 'github',
        label: 'GitHub',
        icon: <Github />,
      },
    ],
  },
  {
    key: 'download',
    label: 'Download',
    icon: <Download />,
    variant: 'success',
  },
]

const mediaItems: DropdownMenuItemType[] = [
  {
    key: 'document',
    label: 'Document',
    icon: <FileText />,
  },
  {
    key: 'image',
    label: 'Image',
    icon: <ImageIcon />,
  },
  {
    key: 'video',
    label: 'Video',
    icon: <Video />,
  },
  {
    key: 'audio',
    label: 'Audio',
    icon: <Music />,
    disabled: true,
  },
]

// Default story
export const Default: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    items: basicItems,
    children: 'Open Menu',
  },
}

// Different variants
export const Variants: Story = {
  args: {
    items: basicItems,
    children: 'Menu Variant',
  },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <DropdownMenu variant="default" items={basicItems}>
        Default
      </DropdownMenu>
      <DropdownMenu variant="outline" items={basicItems}>
        Outline
      </DropdownMenu>
      <DropdownMenu variant="secondary" items={basicItems}>
        Secondary
      </DropdownMenu>
      <DropdownMenu variant="ghost" items={basicItems}>
        Ghost
      </DropdownMenu>
      <DropdownMenu variant="destructive" items={basicItems}>
        Destructive
      </DropdownMenu>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants of the dropdown menu trigger button.',
      },
    },
  },
}

// Different sizes
export const Sizes: Story = {
  args: {
    items: basicItems,
    children: 'Menu Size',
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <DropdownMenu size="xs" items={basicItems}>
        Extra Small
      </DropdownMenu>
      <DropdownMenu size="sm" items={basicItems}>
        Small
      </DropdownMenu>
      <DropdownMenu size="default" items={basicItems}>
        Default
      </DropdownMenu>
      <DropdownMenu size="lg" items={basicItems}>
        Large
      </DropdownMenu>
      <DropdownMenu size="xl" items={basicItems}>
        Extra Large
      </DropdownMenu>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different sizes of the dropdown menu trigger button and menu items.',
      },
    },
  },
}

// Content variants
export const ContentVariants: Story = {
  args: {
    items: basicItems,
    children: 'Content Variant',
  },
  render: () => (
    <div className="flex gap-4">
      <DropdownMenu contentVariant="default" items={basicItems}>
        Default Content
      </DropdownMenu>
      <DropdownMenu contentVariant="glass" items={basicItems}>
        Glass Content
      </DropdownMenu>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants of the dropdown content background.',
      },
    },
  },
}

// Different positions
export const Positions: Story = {
  args: {
    items: basicItems,
    children: 'Positioned Menu',
  },
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-8">
      <div className="flex justify-center">
        <DropdownMenu side="bottom" align="start" items={basicItems}>
          Bottom Start
        </DropdownMenu>
      </div>
      <div className="flex justify-center">
        <DropdownMenu side="bottom" align="end" items={basicItems}>
          Bottom End
        </DropdownMenu>
      </div>
      <div className="flex justify-center">
        <DropdownMenu side="right" items={basicItems}>
          Right Side
        </DropdownMenu>
      </div>
      <div className="flex justify-center">
        <DropdownMenu side="left" items={basicItems}>
          Left Side
        </DropdownMenu>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different positioning options for the dropdown menu.',
      },
    },
  },
}

// With shortcuts
export const WithShortcuts: Story = {
  args: {
    items: actionItems,
    children: 'Actions',
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown menu with keyboard shortcuts displayed.',
      },
    },
  },
}

// With disabled items
export const WithDisabledItems: Story = {
  args: {
    items: editItems,
    children: 'Edit',
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown menu with some items disabled.',
      },
    },
  },
}

// With item variants
export const WithItemVariants: Story = {
  args: {
    items: shareItems,
    children: 'Share & Download',
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown menu with different item variants (destructive, success).',
      },
    },
  },
}

// Mixed media types
export const MediaTypes: Story = {
  args: {
    items: mediaItems,
    children: 'Create New',
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown menu for creating different types of media files.',
      },
    },
  },
}

// Compound component example
export const CompoundComponents: Story = {
  args: {
    items: basicItems,
    children: 'Compound Menu',
  },
  render: () => {
    const [bookmarked, setBookmarked] = useState(false)
    const [notifications, setNotifications] = useState(true)
    const [theme, setTheme] = useState('light')

    // Complex menu items with various interactive elements
    const complexItems: DropdownMenuItemType[] = [
      {
        key: 'profile',
        label: 'Profile',
        icon: <User />,
        onClick: () => console.log('Profile clicked'),
      },
      {
        key: 'settings',
        label: 'Settings',
        icon: <Settings />,
        shortcut: '⌘,',
        onClick: () => console.log('Settings clicked'),
      },
      {
        key: 'share',
        label: 'Share',
        icon: <Share />,
        children: [
          {
            key: 'email',
            label: 'Email',
            icon: <Mail />,
            onClick: () => console.log('Share via email'),
          },
          {
            key: 'message',
            label: 'Message',
            icon: <MessageSquare />,
            onClick: () => console.log('Share via message'),
          },
          {
            key: 'twitter',
            label: 'Twitter',
            icon: <Twitter />,
            onClick: () => console.log('Share via Twitter'),
          },
        ],
      },
      {
        key: 'logout',
        label: 'Log out',
        icon: <LogOut />,
        variant: 'destructive' as const,
        shortcut: '⌘⇧Q',
        onClick: () => console.log('Logout clicked'),
      },
    ]

    return (
      <div className="space-y-6">
        <h3 className="text-lg font-semibold mb-4">Complex Menu Structures</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2 text-neutral-600 dark:text-neutral-400">With Nested Submenus</h4>
            <DropdownMenu items={complexItems}>
              Account Menu
            </DropdownMenu>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2 text-neutral-600 dark:text-neutral-400">Interactive State Demo</h4>
            <div className="flex gap-4 items-center">
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    checked={bookmarked} 
                    onChange={(e) => setBookmarked(e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm">Bookmarked: {bookmarked ? 'Yes' : 'No'}</span>
                </label>
                
                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    checked={notifications} 
                    onChange={(e) => setNotifications(e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm">Notifications: {notifications ? 'On' : 'Off'}</span>
                </label>
                
                <div className="text-sm">
                  <span>Theme: </span>
                  <select 
                    value={theme} 
                    onChange={(e) => setTheme(e.target.value)}
                    className="ml-1 px-2 py-1 border rounded text-sm"
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="system">System</option>
                  </select>
                </div>
              </div>
              
              <div className="text-sm text-neutral-500 dark:text-neutral-400">
                ← This demonstrates the type of complex state management that compound components would enable within the dropdown menu itself
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2 text-neutral-600 dark:text-neutral-400">Multiple Menu Sizes</h4>
            <div className="flex gap-3 items-center">
              <DropdownMenu size="xs" items={basicItems}>
                XS Menu
              </DropdownMenu>
              <DropdownMenu size="sm" items={basicItems}>
                SM Menu  
              </DropdownMenu>
              <DropdownMenu size="default" items={basicItems}>
                Default Menu
              </DropdownMenu>
              <DropdownMenu size="lg" items={basicItems}>
                LG Menu
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates complex menu structures with nested submenus and various interactive patterns. While this example uses the items array API, it shows the type of functionality that compound components would enable for more complex state management scenarios.',
      },
    },
  },
}

// Interactive example with state
export const Interactive: Story = {
  args: {
    items: [],
    children: 'Interactive Menu',
  },
  render: () => {
    const [selectedAction, setSelectedAction] = useState<string>('')
    const [lastClicked, setLastClicked] = useState<string>('')

    const handleItemSelect = (item: DropdownMenuItemType) => {
      setSelectedAction(item.key)
      setLastClicked(item.label)
    }

    const interactiveItems: DropdownMenuItemType[] = [
      {
        key: 'save',
        label: 'Save',
        icon: <Download />,
        shortcut: '⌘S',
        onClick: () => {
          console.log('Save action triggered')
        },
      },
      {
        key: 'duplicate',
        label: 'Duplicate',
        icon: <Copy />,
        shortcut: '⌘D',
        onClick: () => {
          console.log('Duplicate action triggered')
        },
      },
      {
        key: 'delete',
        label: 'Delete',
        icon: <Trash2 />,
        variant: 'destructive',
        shortcut: '⌫',
        onClick: () => {
          console.log('Delete action triggered')
        },
      },
    ]

    return (
      <div className="space-y-4">
        <DropdownMenu 
          items={interactiveItems}
          onItemSelect={handleItemSelect}
        >
          Interactive Menu
        </DropdownMenu>
        
        {lastClicked && (
          <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Last clicked: <span className="font-semibold">{lastClicked}</span>
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Selected key: <span className="font-mono">{selectedAction}</span>
            </p>
          </div>
        )}
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive dropdown that responds to item selection and shows the current state.',
      },
    },
  },
}

// Disabled state
export const Disabled: Story = {
  args: {
    items: basicItems,
    children: 'Disabled Menu',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown menu in disabled state.',
      },
    },
  },
}

// Loading state simulation
export const LoadingState: Story = {
  args: {
    items: [],
    children: 'Loading Menu',
  },
  render: () => {
    const [isLoading, setIsLoading] = useState(false)
    const [items, setItems] = useState<DropdownMenuItemType[]>([])

    const loadItems = React.useCallback(async () => {
      setIsLoading(true)
      // Simulate API call
      setTimeout(() => {
        setItems(basicItems)
        setIsLoading(false)
      }, 2000)
    }, [])

    React.useEffect(() => {
      loadItems()
    }, [loadItems])

    const loadingItems: DropdownMenuItemType[] = [
      {
        key: 'loading',
        label: 'Loading...',
        disabled: true,
      },
    ]

    return (
      <div className="space-y-4">
        <DropdownMenu items={isLoading ? loadingItems : items}>
          {isLoading ? 'Loading...' : 'Loaded Menu'}
        </DropdownMenu>
        
        <button
          type="button"
          onClick={loadItems}
          className="px-4 py-2 bg-primary-500 text-white rounded-lg text-sm hover:bg-primary-600 transition-colors"
        >
          Reload Items
        </button>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown menu that simulates loading state.',
      },
    },
  },
}