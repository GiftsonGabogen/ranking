import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Badge } from '@/components/ui/badge'
import { 
  Shield, 
  Crown, 
  Star, 
  CheckCircle, 
  UserCheck, 
  Zap,
  Pin,
  Lock,
  Flag,
  AlertTriangle,
  Eye,
  Clock,
  Edit,
  MessageSquare
} from 'lucide-react'

const meta: Meta = {
  title: 'UI/Moderation/ModerationBadges',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Moderation status badges using the existing Badge component to show user roles, content status, and moderation states.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const UserRoleBadges: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Staff & Moderator Roles</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="secondary" icon={<Shield />}>
            Moderator
          </Badge>
          <Badge variant="error" icon={<Crown />}>
            Admin
          </Badge>
          <Badge variant="warning" icon={<Crown />}>
            Owner
          </Badge>
          <Badge variant="default" icon={<UserCheck />}>
            Staff
          </Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Special User Status</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="success" icon={<CheckCircle />}>
            Verified
          </Badge>
          <Badge variant="gradient" icon={<Star />}>
            VIP Member
          </Badge>
          <Badge variant="shine" icon={<Zap />}>
            Premium
          </Badge>
          <Badge variant="glass" icon={<Star />}>
            Contributor
          </Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Animated Role Badges</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="secondary" icon={<Shield />} pulse>
            Active Moderator
          </Badge>
          <Badge variant="error" icon={<Crown />} pulse>
            Online Admin
          </Badge>
          <Badge variant="gradient" icon={<Star />} pulse>
            Live VIP
          </Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Compact Role Indicators</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" size="xs" icon={<Shield />} />
          <Badge variant="error" size="xs" icon={<Crown />} />
          <Badge variant="success" size="xs" icon={<CheckCircle />} />
          <Badge variant="gradient" size="xs" icon={<Star />} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'User role and status badges for displaying moderator privileges, special memberships, and verification status.',
      },
    },
  },
}

export const ContentStatusBadges: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Post Status</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="warning" icon={<Pin />}>
            Pinned
          </Badge>
          <Badge variant="error" icon={<Lock />}>
            Locked
          </Badge>
          <Badge variant="muted" icon={<Eye />}>
            Hidden
          </Badge>
          <Badge variant="outline" icon={<Clock />}>
            Pending Review
          </Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Moderation Flags</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="warning" icon={<Flag />}>
            Flagged
          </Badge>
          <Badge variant="error" icon={<AlertTriangle />}>
            Reported
          </Badge>
          <Badge variant="secondary" icon={<Edit />}>
            Edited
          </Badge>
          <Badge variant="success" icon={<CheckCircle />}>
            Approved
          </Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Priority Indicators</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="error" pulse>
            Critical
          </Badge>
          <Badge variant="warning">
            High Priority
          </Badge>
          <Badge variant="outline">
            Low Priority
          </Badge>
          <Badge variant="muted">
            Normal
          </Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Activity Status</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="success" dot pulse>
            Live Discussion
          </Badge>
          <Badge variant="warning" dot>
            Under Review
          </Badge>
          <Badge variant="error" dot>
            Locked Thread
          </Badge>
          <Badge variant="muted" dot>
            Archived
          </Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Content status badges showing post states, moderation flags, priorities, and activity indicators.',
      },
    },
  },
}

export const ForumIntegration: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8 max-w-4xl">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Forum Integration Examples</h2>
        <p className="text-muted-foreground">Badges in realistic forum contexts</p>
      </div>

      {/* User Profile Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">User Profiles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg bg-background">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary-500 to-secondary-600 flex items-center justify-center text-white font-semibold">
                JM
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium">Jane Moderator</h4>
                  <Badge variant="secondary" size="xs" icon={<Shield />} />
                  <Badge variant="success" size="xs" icon={<CheckCircle />} />
                </div>
                <p className="text-sm text-muted-foreground">Community Moderator</p>
                <div className="flex items-center gap-1 mt-1">
                  <Badge variant="success" size="xs" dot />
                  <span className="text-xs text-success-600 dark:text-success-400">Online</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border rounded-lg bg-background">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-error-500 to-error-600 flex items-center justify-center text-white font-semibold">
                BA
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium">Bob Admin</h4>
                  <Badge variant="error" size="xs" icon={<Crown />} pulse />
                  <Badge variant="gradient" size="xs" icon={<Star />} />
                </div>
                <p className="text-sm text-muted-foreground">Site Administrator</p>
                <div className="flex items-center gap-1 mt-1">
                  <Badge variant="success" size="xs" dot pulse />
                  <span className="text-xs text-success-600 dark:text-success-400">Active now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thread Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Thread Status Examples</h3>
        <div className="space-y-3">
          <div className="p-4 border rounded-lg bg-warning-50/30 dark:bg-warning-950/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Badge variant="warning" icon={<Pin />} size="sm" />
                <div>
                  <h4 className="font-semibold">📌 Important Community Update</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>by Admin Team</span>
                    <span>•</span>
                    <Badge variant="secondary" size="xs" icon={<Crown />} />
                    <span>•</span>
                    <span>2 hours ago</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="success" size="sm">
                  <MessageSquare className="w-3 h-3" />
                  24 replies
                </Badge>
              </div>
            </div>
          </div>

          <div className="p-4 border rounded-lg bg-error-50/30 dark:bg-error-950/30 opacity-75">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Badge variant="error" icon={<Lock />} size="sm" />
                <div>
                  <h4 className="font-semibold line-through">🔒 Locked Discussion Thread</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Locked by</span>
                    <Badge variant="secondary" size="xs" icon={<Shield />} />
                    <span>Jane Moderator</span>
                    <span>•</span>
                    <Badge variant="warning" size="xs">Rule violation</Badge>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="muted" size="sm">
                  <Eye className="w-3 h-3" />
                  1.2k views
                </Badge>
              </div>
            </div>
          </div>

          <div className="p-4 border rounded-lg bg-background">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Badge variant="secondary" icon={<Edit />} size="sm" />
                <div>
                  <h4 className="font-semibold">Discussion: Best Practices Guide</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>by Expert User</span>
                    <span>•</span>
                    <Badge variant="success" size="xs" icon={<CheckCircle />} />
                    <span>•</span>
                    <Badge variant="outline" size="xs">Last edited 30min ago</Badge>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="gradient" size="sm">
                  <Star className="w-3 h-3" />
                  Featured
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Moderation Queue */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Moderation Queue</h3>
        <div className="p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Pending Review Items</h4>
              <Badge variant="warning" size="sm">
                <Clock className="w-3 h-3" />
                12 pending
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 border rounded-lg bg-background">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="warning" size="xs" icon={<Flag />} />
                    <span className="text-sm font-medium">Spam Report</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Badge variant="error" size="xs">High Priority</Badge>
                    <Badge variant="outline" size="xs">5 reports</Badge>
                  </div>
                </div>
              </div>

              <div className="p-3 border rounded-lg bg-background">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="error" size="xs" icon={<AlertTriangle />} />
                    <span className="text-sm font-medium">Content Report</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Badge variant="error" size="xs" pulse>Critical</Badge>
                    <Badge variant="outline" size="xs">12 reports</Badge>
                  </div>
                </div>
              </div>

              <div className="p-3 border rounded-lg bg-background">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" size="xs" icon={<Edit />} />
                    <span className="text-sm font-medium">Edit Review</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Badge variant="outline" size="xs">Normal</Badge>
                    <Badge variant="success" size="xs">Auto-approved</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive examples of moderation badges integrated into forum user profiles, thread listings, and moderation queues.',
      },
    },
  },
}