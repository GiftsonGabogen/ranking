import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Avatar, AvatarImage, AvatarFallback, AvatarGroup, AvatarBadge, AvatarUpload, AvatarEdit } from '@/components/ui/avatar'
import { avatarUtils } from '@/lib/design-token-utils'
import { 
  User, 
  Crown, 
  Star, 
  Shield, 
  Heart, 
  Zap,
  Gift,
  Camera,
  Settings,
  Bell
} from 'lucide-react'

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile avatar component with multiple variants, sizes, animations, and advanced features including status indicators, badges, groups, and upload functionality. Built with OKLCH design tokens for consistent and accessible colors.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error', 'glass', 'ring', 'glow'],
      description: 'The visual style variant of the avatar',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'default', 'lg', 'xl', '2xl', '3xl'],
      description: 'The size of the avatar',
    },
    shape: {
      control: { type: 'select' },
      options: ['circle', 'rounded', 'square'],
      description: 'The shape of the avatar',
    },
    animation: {
      control: { type: 'select' },
      options: ['none', 'subtle', 'bounce', 'glow', 'shimmer'],
      description: 'The hover animation style',
    },
    status: {
      control: { type: 'select' },
      options: ['none', 'online', 'offline', 'busy', 'away'],
      description: 'The status indicator',
    },
  },
  args: {
    onClick: () => console.log('Avatar clicked'),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <AvatarFallback>JD</AvatarFallback>,
  },
}

export const WithImage: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="John Doe" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatar with an image that falls back to initials if the image fails to load.',
      },
    },
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6 p-8">
      <div className="text-center space-y-2">
        <Avatar variant="default">
          <AvatarFallback>DF</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground">Default</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar variant="primary">
          <AvatarFallback variant="primary">PR</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground">Primary</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar variant="secondary">
          <AvatarFallback variant="secondary">SC</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground">Secondary</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar variant="success">
          <AvatarFallback variant="success">OK</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground">Success</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar variant="warning">
          <AvatarFallback variant="warning">WN</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground">Warning</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar variant="error">
          <AvatarFallback variant="error">ER</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground">Error</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar variant="glass">
          <AvatarFallback variant="glass">GL</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground">Glass</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar variant="ring">
          <AvatarFallback variant="ring">RG</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground">Ring</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar variant="glow">
          <AvatarFallback variant="glow">GW</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground">Glow</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available avatar variants showcasing different visual styles using OKLCH design tokens.',
      },
    },
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4 p-8">
      <div className="text-center space-y-2">
        <Avatar size="xs">
          <AvatarFallback>XS</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground">XS</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar size="sm">
          <AvatarFallback>SM</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground">SM</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar size="default">
          <AvatarFallback>MD</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground">Default</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar size="lg">
          <AvatarFallback>LG</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground">LG</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar size="xl">
          <AvatarFallback>XL</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground">XL</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar size="2xl">
          <AvatarFallback>2X</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground">2XL</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar size="3xl">
          <AvatarFallback>3X</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground">3XL</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different avatar sizes from extra small to 3XL using design token spacing.',
      },
    },
  },
}

export const AllShapes: Story = {
  render: () => (
    <div className="flex items-center gap-6 p-8">
      <div className="text-center space-y-2">
        <Avatar shape="circle" size="lg">
          <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="Circle" />
          <AvatarFallback>CI</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground">Circle</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar shape="rounded" size="lg">
          <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" alt="Rounded" />
          <AvatarFallback>RD</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground">Rounded</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar shape="square" size="lg">
          <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" alt="Square" />
          <AvatarFallback>SQ</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground">Square</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different avatar shapes: circle (default), rounded corners, and square.',
      },
    },
  },
}

export const AnimationTypes: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-6 p-8">
      <div className="text-center space-y-2">
        <Avatar animation="none" size="lg" variant="primary">
          <AvatarFallback variant="primary">NO</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground">None</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar animation="subtle" size="lg" variant="secondary">
          <AvatarFallback variant="secondary">SU</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground">Subtle</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar animation="bounce" size="lg" variant="success">
          <AvatarFallback variant="success">BO</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground">Bounce</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar animation="glow" size="lg" variant="warning">
          <AvatarFallback variant="warning">GL</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground">Glow</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar animation="shimmer" size="lg" variant="error">
          <AvatarFallback variant="error">SH</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground">Shimmer</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different animation types for interactive avatar effects.',
      },
    },
  },
}

export const StatusIndicators: Story = {
  render: () => (
    <div className="flex items-center gap-6 p-8">
      <div className="text-center space-y-2">
        <Avatar status="online" size="lg">
          <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Online User" />
          <AvatarFallback>ON</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground">Online</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar status="offline" size="lg">
          <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="Offline User" />
          <AvatarFallback>OF</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground">Offline</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar status="busy" size="lg">
          <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" alt="Busy User" />
          <AvatarFallback>BS</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground">Busy</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar status="away" size="lg">
          <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" alt="Away User" />
          <AvatarFallback>AW</AvatarFallback>
        </Avatar>
        <p className="text-xs text-muted-foreground">Away</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Status indicators showing user presence with animated dots.',
      },
    },
  },
}

export const WithBadges: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-8 p-8">
      <div className="text-center space-y-2">
        <div className="relative">
          <Avatar size="lg">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User with crown" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <AvatarBadge variant="warning">
            <Crown className="size-3" />
          </AvatarBadge>
        </div>
        <p className="text-xs text-muted-foreground">Admin</p>
      </div>
      <div className="text-center space-y-2">
        <div className="relative">
          <Avatar size="lg" variant="success">
            <AvatarFallback variant="success">VF</AvatarFallback>
          </Avatar>
          <AvatarBadge variant="success" size="sm">
            <Shield className="size-2.5" />
          </AvatarBadge>
        </div>
        <p className="text-xs text-muted-foreground">Verified</p>
      </div>
      <div className="text-center space-y-2">
        <div className="relative">
          <Avatar size="lg" variant="primary">
            <AvatarFallback variant="primary">PR</AvatarFallback>
          </Avatar>
          <AvatarBadge variant="primary" position="top-right">
            <Star className="size-3" />
          </AvatarBadge>
        </div>
        <p className="text-xs text-muted-foreground">Pro</p>
      </div>
      <div className="text-center space-y-2">
        <div className="relative">
          <Avatar size="lg" variant="error">
            <AvatarFallback variant="error">N5</AvatarFallback>
          </Avatar>
          <AvatarBadge variant="error" size="default">5</AvatarBadge>
        </div>
        <p className="text-xs text-muted-foreground">Notifications</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatars with badges for roles, status, or notification counts.',
      },
    },
  },
}

export const AvatarGroups: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Default Spacing</h3>
        <AvatarGroup>
          <Avatar size="lg">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User 1" />
            <AvatarFallback>U1</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="User 2" />
            <AvatarFallback>U2</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" alt="User 3" />
            <AvatarFallback>U3</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback>U4</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Tight Spacing with Max Limit</h3>
        <AvatarGroup spacing="tight" max={3}>
          <Avatar size="lg">
            <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" alt="User 1" />
            <AvatarFallback>A1</AvatarFallback>
          </Avatar>
          <Avatar size="lg" variant="primary">
            <AvatarFallback variant="primary">A2</AvatarFallback>
          </Avatar>
          <Avatar size="lg" variant="secondary">
            <AvatarFallback variant="secondary">A3</AvatarFallback>
          </Avatar>
          <Avatar size="lg" variant="success">
            <AvatarFallback variant="success">A4</AvatarFallback>
          </Avatar>
          <Avatar size="lg" variant="warning">
            <AvatarFallback variant="warning">A5</AvatarFallback>
          </Avatar>
          <Avatar size="lg" variant="error">
            <AvatarFallback variant="error">A6</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Loose Spacing</h3>
        <AvatarGroup spacing="loose">
          <Avatar size="lg" status="online">
            <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616c96d1018?w=150&h=150&fit=crop&crop=face" alt="Online User" />
            <AvatarFallback>ON</AvatarFallback>
          </Avatar>
          <Avatar size="lg" status="busy" variant="warning">
            <AvatarFallback variant="warning">BS</AvatarFallback>
          </Avatar>
          <Avatar size="lg" status="away" variant="secondary">
            <AvatarFallback variant="secondary">AW</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Groups of avatars with different spacing options and overflow handling.',
      },
    },
  },
}

export const UploadAvatar: Story = {
  render: () => {
    const handleUpload = (file: File) => {
      console.log('File uploaded:', file.name)
      // Handle file upload logic here
    }

    return (
      <div className="grid grid-cols-3 gap-8 p-8">
        <div className="text-center space-y-4">
          <AvatarUpload onUpload={handleUpload} size="lg">
            <AvatarFallback>
              <Camera className="size-1/2" />
            </AvatarFallback>
          </AvatarUpload>
          <p className="text-sm font-medium">Upload New</p>
          <p className="text-xs text-muted-foreground">Click to select image</p>
        </div>
        
        <div className="text-center space-y-4">
          <AvatarUpload onUpload={handleUpload} size="lg" variant="primary">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Current avatar" />
            <AvatarFallback variant="primary">JD</AvatarFallback>
          </AvatarUpload>
          <p className="text-sm font-medium">Replace Existing</p>
          <p className="text-xs text-muted-foreground">Hover to see upload option</p>
        </div>
        
        <div className="text-center space-y-4">
          <AvatarUpload onUpload={handleUpload} disabled size="lg" variant="default">
            <AvatarFallback>DS</AvatarFallback>
          </AvatarUpload>
          <p className="text-sm font-medium">Disabled</p>
          <p className="text-xs text-muted-foreground">Upload not allowed</p>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Upload functionality with hover overlay and disabled state.',
      },
    },
  },
}

export const EditableAvatar: Story = {
  render: () => (
    <div className="flex items-center gap-8 p-8">
      <div className="text-center space-y-2">
        <div className="relative">
          <Avatar size="xl">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Editable avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <AvatarEdit onClick={() => console.log('Edit clicked')} />
        </div>
        <p className="text-sm font-medium">With Edit Button</p>
      </div>
      
      <div className="text-center space-y-2">
        <div className="relative">
          <Avatar size="xl" variant="primary">
            <AvatarFallback variant="primary">PR</AvatarFallback>
          </Avatar>
          <AvatarEdit size="lg" position="top-right" onClick={() => console.log('Large edit clicked')} />
        </div>
        <p className="text-sm font-medium">Large Edit Button</p>
      </div>
      
      <div className="text-center space-y-2">
        <div className="relative">
          <Avatar size="lg" variant="glass">
            <AvatarFallback variant="glass">GL</AvatarFallback>
          </Avatar>
          <AvatarEdit size="sm" position="top-left" onClick={() => console.log('Small edit clicked')} />
        </div>
        <p className="text-sm font-medium">Small Edit Button</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatars with edit buttons in different sizes and positions.',
      },
    },
  },
}

export const RealWorldExamples: Story = {
  render: () => {
    const users = [
      { name: 'John Doe', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face', status: 'online', role: 'admin' },
      { name: 'Jane Smith', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face', status: 'busy', role: 'user' },
      { name: 'Mike Johnson', image: '', status: 'away', role: 'pro' },
      { name: 'Sarah Wilson', image: 'https://images.unsplash.com/photo-1494790108755-2616c96d1018?w=150&h=150&fit=crop&crop=face', status: 'offline', role: 'user' },
    ]

    return (
      <div className="space-y-8 p-8 max-w-4xl">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">User Profile Cards</h3>
          <div className="grid grid-cols-2 gap-6">
            {users.map((user, index) => (
              <div key={index} className="flex items-center gap-4 p-4 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
                <div className="relative">
                  <Avatar 
                    size="lg" 
                    status={user.status as any}
                    variant={avatarUtils.getVariantFromString(user.name)}
                    animation="glow"
                  >
                    {user.image ? (
                      <AvatarImage src={user.image} alt={user.name} />
                    ) : null}
                    <AvatarFallback variant={avatarUtils.getVariantFromString(user.name)}>
                      {avatarUtils.getInitials(user.name)}
                    </AvatarFallback>
                  </Avatar>
                  {user.role === 'admin' && (
                    <AvatarBadge variant="warning" size="sm">
                      <Crown className="size-2.5" />
                    </AvatarBadge>
                  )}
                  {user.role === 'pro' && (
                    <AvatarBadge variant="primary" size="sm">
                      <Star className="size-2.5" />
                    </AvatarBadge>
                  )}
                </div>
                <div>
                  <h4 className="font-medium">{user.name}</h4>
                  <p className="text-sm text-muted-foreground capitalize">{user.status} • {user.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Team Section</h3>
          <div className="flex items-center justify-between p-6 border rounded-lg bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-950/50 dark:to-secondary-950/50">
            <div>
              <h4 className="font-semibold text-lg">Design Team</h4>
              <p className="text-sm text-muted-foreground">4 members online</p>
            </div>
            <AvatarGroup max={4} spacing="tight">
              <Avatar size="lg" status="online">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Team member" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar size="lg" status="online" variant="primary">
                <AvatarFallback variant="primary">JS</AvatarFallback>
              </Avatar>
              <Avatar size="lg" status="busy" variant="secondary">
                <AvatarFallback variant="secondary">MJ</AvatarFallback>
              </Avatar>
              <Avatar size="lg" status="online" variant="success">
                <AvatarFallback variant="success">SW</AvatarFallback>
              </Avatar>
              <Avatar size="lg" status="away" variant="warning">
                <AvatarFallback variant="warning">AL</AvatarFallback>
              </Avatar>
            </AvatarGroup>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Message Thread</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Avatar size="sm" status="online">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="John" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 bg-white dark:bg-neutral-800 p-3 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm">John Doe</span>
                  <span className="text-xs text-muted-foreground">2 min ago</span>
                </div>
                <p className="text-sm">Hey everyone! Just finished the new avatar component. What do you think?</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Avatar size="sm" status="online" variant="primary">
                <AvatarFallback variant="primary">JS</AvatarFallback>
              </Avatar>
              <div className="flex-1 bg-white dark:bg-neutral-800 p-3 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm">Jane Smith</span>
                  <span className="text-xs text-muted-foreground">1 min ago</span>
                </div>
                <p className="text-sm">Looks amazing! Love the animation effects 🎉</p>
              </div>
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
        story: 'Real-world usage examples showing avatars in profile cards, team sections, and message threads with automatic color assignment and utility functions.',
      },
    },
  },
}

export const DesignTokensShowcase: Story = {
  render: () => (
    <div className="space-y-8 p-8 max-w-6xl">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Avatar Design Token Integration</h1>
        <p className="text-muted-foreground">Comprehensive demonstration of avatars using OKLCH design tokens</p>
      </div>
      
      {/* Color Scale Demonstration */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">OKLCH Color Scale Consistency</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Primary Scale</h3>
            <div className="flex items-center gap-3">
              <Avatar variant="primary" size="sm">
                <AvatarFallback variant="primary">P3</AvatarFallback>
              </Avatar>
              <Avatar variant="primary" size="default">
                <AvatarFallback variant="primary">P5</AvatarFallback>
              </Avatar>
              <Avatar variant="primary" size="lg">
                <AvatarFallback variant="primary">P7</AvatarFallback>
              </Avatar>
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Secondary Scale</h3>
            <div className="flex items-center gap-3">
              <Avatar variant="secondary" size="sm">
                <AvatarFallback variant="secondary">S3</AvatarFallback>
              </Avatar>
              <Avatar variant="secondary" size="default">
                <AvatarFallback variant="secondary">S5</AvatarFallback>
              </Avatar>
              <Avatar variant="secondary" size="lg">
                <AvatarFallback variant="secondary">S7</AvatarFallback>
              </Avatar>
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Success Scale</h3>
            <div className="flex items-center gap-3">
              <Avatar variant="success" size="sm">
                <AvatarFallback variant="success">G3</AvatarFallback>
              </Avatar>
              <Avatar variant="success" size="default">
                <AvatarFallback variant="success">G5</AvatarFallback>
              </Avatar>
              <Avatar variant="success" size="lg">
                <AvatarFallback variant="success">G7</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animation Showcase */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Enhanced Animation Effects</h2>
        <div className="grid grid-cols-5 gap-4">
          <div className="text-center space-y-2">
            <Avatar animation="subtle" size="xl" variant="primary">
              <AvatarFallback variant="primary">SU</AvatarFallback>
            </Avatar>
            <p className="text-xs text-muted-foreground">Subtle Scale</p>
          </div>
          <div className="text-center space-y-2">
            <Avatar animation="bounce" size="xl" variant="secondary">
              <AvatarFallback variant="secondary">BO</AvatarFallback>
            </Avatar>
            <p className="text-xs text-muted-foreground">Bounce & Pulse</p>
          </div>
          <div className="text-center space-y-2">
            <Avatar animation="glow" size="xl" variant="success">
              <AvatarFallback variant="success">GL</AvatarFallback>
            </Avatar>
            <p className="text-xs text-muted-foreground">Glow Effect</p>
          </div>
          <div className="text-center space-y-2">
            <Avatar animation="shimmer" size="xl" variant="warning">
              <AvatarFallback variant="warning">SH</AvatarFallback>
            </Avatar>
            <p className="text-xs text-muted-foreground">Shimmer</p>
          </div>
          <div className="text-center space-y-2">
            <Avatar variant="ring" size="xl">
              <AvatarFallback variant="ring">RI</AvatarFallback>
            </Avatar>
            <p className="text-xs text-muted-foreground">Ring Variant</p>
          </div>
        </div>
      </div>
      
      {/* Advanced Features */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Advanced Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <h3 className="font-medium">Status Indicators</h3>
            <div className="flex gap-3">
              <Avatar status="online" size="lg">
                <AvatarFallback>ON</AvatarFallback>
              </Avatar>
              <Avatar status="busy" size="lg" variant="warning">
                <AvatarFallback variant="warning">BS</AvatarFallback>
              </Avatar>
              <Avatar status="away" size="lg" variant="secondary">
                <AvatarFallback variant="secondary">AW</AvatarFallback>
              </Avatar>
            </div>
          </div>
          
          <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <h3 className="font-medium">Badge System</h3>
            <div className="flex gap-3">
              <div className="relative">
                <Avatar size="lg" variant="primary">
                  <AvatarFallback variant="primary">AD</AvatarFallback>
                </Avatar>
                <AvatarBadge variant="warning">
                  <Crown className="size-3" />
                </AvatarBadge>
              </div>
              <div className="relative">
                <Avatar size="lg" variant="success">
                  <AvatarFallback variant="success">VF</AvatarFallback>
                </Avatar>
                <AvatarBadge variant="success">
                  <Shield className="size-3" />
                </AvatarBadge>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <h3 className="font-medium">Interactive Elements</h3>
            <div className="flex gap-3">
              <div className="relative">
                <Avatar size="lg">
                  <AvatarFallback>ED</AvatarFallback>
                </Avatar>
                <AvatarEdit size="sm" />
              </div>
              <AvatarUpload size="lg" variant="glass">
                <AvatarFallback variant="glass">UP</AvatarFallback>
              </AvatarUpload>
            </div>
          </div>
        </div>
      </div>
      
      {/* Design Token Benefits */}
      <div className="space-y-4 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-950/50 dark:to-secondary-950/50 rounded-lg">
        <h2 className="text-xl font-semibold">Design Token Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="space-y-2">
            <h3 className="font-medium">🎨 OKLCH Color Space</h3>
            <p className="text-muted-foreground">Perceptually uniform colors ensuring consistent visual weight across all avatar variants.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">⚡ Smooth Animations</h3>
            <p className="text-muted-foreground">Hardware-accelerated transitions with optimal duration and easing curves.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">🌙 Dark Mode Ready</h3>
            <p className="text-muted-foreground">Automatic dark mode support with properly adjusted contrast ratios.</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'A comprehensive showcase demonstrating the avatar component integration with OKLCH design tokens, animations, and advanced features.',
      },
    },
  },
}

export const UtilityFunctions: Story = {
  render: () => {
    const names = ['John Doe', 'Jane Smith', 'Bob Wilson', 'Alice Johnson', 'Mike Brown']
    
    return (
      <div className="space-y-8 p-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Automatic Initial Generation</h3>
          <div className="flex gap-4">
            {names.map(name => (
              <div key={name} className="text-center space-y-2">
                <Avatar 
                  variant={avatarUtils.getVariantFromString(name)}
                  size="lg"
                >
                  <AvatarFallback variant={avatarUtils.getVariantFromString(name)}>
                    {avatarUtils.getInitials(name)}
                  </AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground">{name}</p>
                <p className="text-xs font-mono bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                  {avatarUtils.getInitials(name)}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Deterministic Color Assignment</h3>
          <p className="text-sm text-muted-foreground">
            Same names always get the same colors, ensuring consistency across your app
          </p>
          <div className="grid grid-cols-5 gap-4">
            {['TeamAlpha', 'ProjectBeta', 'GroupGamma', 'UnitDelta', 'SquadEpsilon'].map(name => (
              <div key={name} className="text-center space-y-2">
                <Avatar 
                  variant={avatarUtils.getVariantFromString(name)}
                  size="lg"
                >
                  <AvatarFallback variant={avatarUtils.getVariantFromString(name)}>
                    {avatarUtils.getInitials(name)}
                  </AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground">{name}</p>
                <p className="text-xs font-mono bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded">
                  {avatarUtils.getVariantFromString(name)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates utility functions for automatic initial generation and deterministic color assignment.',
      },
    },
  },
}