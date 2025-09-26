import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Flag, 
  AlertTriangle, 
  Shield, 
  Ban, 
  Eye,
  Lock,
  Unlock,
  Pin,
  Trash2,
  UserX,
  MessageSquare,
  AlertCircle,
  CheckCircle,
  Edit
} from 'lucide-react'
import { useState } from 'react'

const meta: Meta = {
  title: 'UI/Moderation/ModerationButtons',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Moderation action buttons using the existing Button component for content management, user actions, and community oversight.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const ReportButtons: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Content Reporting</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" size="sm">
            <Flag className="w-4 h-4" />
            Report Post
          </Button>
          <Button variant="destructive" size="sm">
            <AlertTriangle className="w-4 h-4" />
            Report Abuse
          </Button>
          <Button variant="warning" size="sm">
            <Shield className="w-4 h-4" />
            Flag Content
          </Button>
          <Button variant="ghost" size="sm">
            <Eye className="w-4 h-4" />
            Review
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Icon Only Reports</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="icon-sm" title="Report content">
            <Flag className="w-4 h-4" />
          </Button>
          <Button variant="destructive" size="icon-sm" title="Report abuse">
            <AlertTriangle className="w-4 h-4" />
          </Button>
          <Button variant="warning" size="icon-sm" title="Flag inappropriate">
            <Shield className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon-sm" title="Needs review">
            <Eye className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Severe Actions</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="destructive" size="sm">
            <Ban className="w-4 h-4" />
            Ban User
          </Button>
          <Button variant="destructive" size="sm">
            <UserX className="w-4 h-4" />
            Block Account
          </Button>
          <Button variant="destructive" size="sm">
            <Trash2 className="w-4 h-4" />
            Remove Content
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Report and moderation action buttons for flagging inappropriate content and taking enforcement actions.',
      },
    },
  },
}

export const ThreadModerationButtons: Story = {
  render: () => {
    const [isLocked, setIsLocked] = useState(false)
    const [isPinned, setIsPinned] = useState(false)

    return (
      <div className="flex flex-col gap-6 p-8">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Thread Management</h3>
          <div className="flex flex-wrap gap-3">
            <Button 
              variant={isLocked ? "destructive" : "outline"} 
              size="sm"
              onClick={() => setIsLocked(!isLocked)}
            >
              {isLocked ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
              {isLocked ? 'Unlock Thread' : 'Lock Thread'}
            </Button>
            
            <Button 
              variant={isPinned ? "warning" : "outline"} 
              size="sm"
              onClick={() => setIsPinned(!isPinned)}
            >
              <Pin className="w-4 h-4" />
              {isPinned ? 'Unpin' : 'Pin Thread'}
            </Button>
            
            <Button variant="secondary" size="sm">
              <Edit className="w-4 h-4" />
              Edit Post
            </Button>
            
            <Button variant="destructive" size="sm">
              <Trash2 className="w-4 h-4" />
              Delete
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Bulk Actions</h3>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm">
              <CheckCircle className="w-4 h-4" />
              Approve All
            </Button>
            <Button variant="warning" size="sm">
              <AlertCircle className="w-4 h-4" />
              Mark Pending
            </Button>
            <Button variant="destructive" size="sm">
              <Ban className="w-4 h-4" />
              Reject All
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Quick Actions</h3>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" title="Quick lock">
              <Lock className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" title="Quick pin">
              <Pin className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" title="Quick edit">
              <Edit className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" title="Quick delete">
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive thread management buttons with state changes for locking, pinning, and other moderation actions.',
      },
    },
  },
}

export const ModerationDashboard: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8 max-w-4xl">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Moderation Dashboard</h2>
        <p className="text-muted-foreground">Action buttons for community management</p>
      </div>

      {/* Pending Reports Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Pending Reports Queue</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg bg-warning-50/30 dark:bg-warning-950/30">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant="warning" size="sm">
                    <Flag className="w-3 h-3" />
                    Spam Report
                  </Badge>
                  <Badge variant="outline" size="xs">High Priority</Badge>
                </div>
                <span className="text-xs text-muted-foreground">5 reports</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Multiple users reported promotional content in discussion thread
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="success">
                  <CheckCircle className="w-4 h-4" />
                  Approve
                </Button>
                <Button size="sm" variant="destructive">
                  <Ban className="w-4 h-4" />
                  Remove
                </Button>
                <Button size="sm" variant="outline">
                  <Eye className="w-4 h-4" />
                  Review
                </Button>
              </div>
            </div>
          </div>

          <div className="p-4 border rounded-lg bg-error-50/30 dark:bg-error-950/30">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant="error" size="sm">
                    <AlertTriangle className="w-3 h-3" />
                    Harassment
                  </Badge>
                  <Badge variant="error" size="xs">Critical</Badge>
                </div>
                <span className="text-xs text-muted-foreground">12 reports</span>
              </div>
              <p className="text-sm text-muted-foreground">
                User engaging in targeted harassment across multiple threads
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="destructive">
                  <UserX className="w-4 h-4" />
                  Ban User
                </Button>
                <Button size="sm" variant="warning">
                  <Lock className="w-4 h-4" />
                  Suspend
                </Button>
                <Button size="sm" variant="outline">
                  <MessageSquare className="w-4 h-4" />
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Quick Moderation Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Button variant="outline" className="justify-start h-12">
            <Lock className="w-4 h-4" />
            Lock Thread
          </Button>
          <Button variant="outline" className="justify-start h-12">
            <Pin className="w-4 h-4" />
            Pin Post
          </Button>
          <Button variant="outline" className="justify-start h-12">
            <Shield className="w-4 h-4" />
            Add Warning
          </Button>
          <Button variant="outline" className="justify-start h-12">
            <Edit className="w-4 h-4" />
            Edit Content
          </Button>
          <Button variant="warning" className="justify-start h-12">
            <AlertTriangle className="w-4 h-4" />
            Issue Warning
          </Button>
          <Button variant="warning" className="justify-start h-12">
            <Ban className="w-4 h-4" />
            Temporary Ban
          </Button>
          <Button variant="destructive" className="justify-start h-12">
            <UserX className="w-4 h-4" />
            Permanent Ban
          </Button>
          <Button variant="destructive" className="justify-start h-12">
            <Trash2 className="w-4 h-4" />
            Delete Content
          </Button>
        </div>
      </div>

      {/* Batch Operations */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Batch Operations</h3>
        <div className="p-4 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">23 items selected</span>
              <Badge variant="secondary" size="sm">Batch Mode</Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button size="sm" variant="success">
                <CheckCircle className="w-4 h-4" />
                Approve Selected (23)
              </Button>
              <Button size="sm" variant="destructive">
                <Trash2 className="w-4 h-4" />
                Delete Selected (23)
              </Button>
              <Button size="sm" variant="warning">
                <Lock className="w-4 h-4" />
                Lock Selected (23)
              </Button>
              <Button size="sm" variant="outline">
                <Eye className="w-4 h-4" />
                Review Later (23)
              </Button>
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
        story: 'Comprehensive moderation dashboard showing report management, quick actions, and batch operations using existing Button components.',
      },
    },
  },
}

export const InteractiveReportFlow: Story = {
  render: () => {
    const [reportStep, setReportStep] = useState<'initial' | 'reporting' | 'success'>('initial')
    
    const handleReport = async () => {
      setReportStep('reporting')
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setReportStep('success')
      setTimeout(() => setReportStep('initial'), 3000)
    }

    return (
      <div className="flex flex-col gap-6 p-8">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-bold">Interactive Report Flow</h2>
          <p className="text-muted-foreground">Click to see the reporting state changes</p>
        </div>

        <div className="p-6 border rounded-lg bg-background max-w-md mx-auto">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-400 to-neutral-500 flex items-center justify-center text-white font-semibold">
                U
              </div>
              <div>
                <h4 className="font-medium">Sample Post Content</h4>
                <p className="text-sm text-muted-foreground">This might be inappropriate content...</p>
              </div>
            </div>
            
            <div className="flex justify-end">
              {reportStep === 'initial' && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReport}
                >
                  <Flag className="w-4 h-4" />
                  Report
                </Button>
              )}
              
              {reportStep === 'reporting' && (
                <Button
                  variant="outline"
                  size="sm"
                  disabled
                  className="animate-pulse"
                >
                  <div className="w-4 h-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Reporting...
                </Button>
              )}
              
              {reportStep === 'success' && (
                <Button
                  variant="success"
                  size="sm"
                  disabled
                >
                  <CheckCircle className="w-4 h-4" />
                  Reported
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demonstration of the report button state flow from initial state through reporting to success confirmation.',
      },
    },
  },
}