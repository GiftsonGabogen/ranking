import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { 
  Flag, 
  Shield, 
  Crown, 
  Star, 
  Pin, 
  Lock,
  Edit, 
  Eye, 
  MessageSquare,
  ThumbsUp,
  Share,
  Bookmark,
  AlertTriangle,
  CheckCircle,
  Ban,
  UserX,
  Clock,
  Trash2,
  AlertCircle
} from 'lucide-react'

const meta: Meta = {
  title: 'UI/Moderation/Showcase',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A comprehensive showcase of moderation capabilities using existing Button and Badge components in realistic community scenarios.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const CommunityForumShowcase: Story = {
  render: () => (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Community Moderation Showcase</h1>
          <p className="text-lg text-muted-foreground">
            Complete moderation suite using existing Button and Badge components
          </p>
        </div>

        {/* Forum Thread Example */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">Forum Discussion Thread</h2>
          
          {/* Pinned Announcement */}
          <Card className="p-6 bg-warning-50/30 dark:bg-warning-950/30 border-warning-200 dark:border-warning-800">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <Badge variant="warning" icon={<Pin />} pulse>
                  Pinned
                </Badge>
                <div>
                  <h3 className="text-xl font-semibold">📢 Important Community Guidelines Update</h3>
                  <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Badge variant="error" size="xs" icon={<Crown />} />
                      <span>Admin Team</span>
                    </div>
                    <span>•</span>
                    <span>Pinned 2 days ago</span>
                    <span>•</span>
                    <Badge variant="outline" size="sm">Must Read</Badge>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Share className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Flag className="w-4 h-4" />
                  Report
                </Button>
              </div>
            </div>
          </Card>

          {/* Regular Posts */}
          <div className="space-y-4">
            {/* Active Discussion */}
            <Card className="p-6 hover:bg-muted/30 transition-colors">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-semibold">
                      JD
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">John Developer</h4>
                        <Badge variant="success" size="xs" icon={<CheckCircle />} />
                        <Badge variant="gradient" size="xs" icon={<Star />} />
                      </div>
                      <p className="text-sm text-muted-foreground">Posted 3 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Bookmark className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Flag className="w-4 h-4" />
                      Report
                    </Button>
                  </div>
                </div>
                
                <div className="ml-16 space-y-3">
                  <h3 className="text-lg font-medium">Best practices for React component optimization</h3>
                  <p className="text-muted-foreground">
                    I've been working on optimizing our React components and wanted to share some insights...
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <button className="flex items-center gap-1 hover:text-primary-600 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span>24</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-primary-600 transition-colors">
                      <MessageSquare className="w-4 h-4" />
                      <span>8 replies</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-primary-600 transition-colors">
                      <Edit className="w-4 h-4" />
                      <span>View edits</span>
                    </button>
                    <Badge variant="outline" size="xs">
                      <Edit className="w-3 h-3" />
                      Edited 1h ago
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* Locked Thread */}
            <Card className="p-6 bg-error-50/20 dark:bg-error-950/20 opacity-75">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-neutral-400 flex items-center justify-center text-white font-semibold">
                      AU
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold line-through">Anonymous User</h4>
                        <Badge variant="error" size="xs" icon={<Lock />} />
                        <Badge variant="warning" size="xs">Violation</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Locked 1 day ago by moderator</p>
                    </div>
                  </div>
                  <Badge variant="error" icon={<Lock />}>
                    Thread Locked
                  </Badge>
                </div>
                
                <div className="ml-16 space-y-3">
                  <h3 className="text-lg font-medium line-through opacity-60">
                    [REMOVED] Inappropriate discussion topic
                  </h3>
                  <div className="p-3 bg-error-100/50 dark:bg-error-900/50 rounded-md border border-error-200 dark:border-error-800">
                    <div className="flex items-center gap-2 text-sm text-error-600 dark:text-error-400">
                      <AlertTriangle className="w-4 h-4" />
                      <span>This thread has been locked due to community guideline violations</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Moderator Post */}
            <Card className="p-6 bg-secondary-50/30 dark:bg-secondary-950/30 border-secondary-200 dark:border-secondary-800">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary-500 to-secondary-600 flex items-center justify-center text-white font-semibold">
                      SM
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">Sarah Moderator</h4>
                        <Badge variant="secondary" size="xs" icon={<Shield />} pulse />
                        <Badge variant="warning" size="xs" icon={<Pin />} />
                      </div>
                      <p className="text-sm text-muted-foreground">Official response • 2 hours ago</p>
                    </div>
                  </div>
                  <Badge variant="secondary" icon={<Shield />}>
                    Moderator Post
                  </Badge>
                </div>
                
                <div className="ml-16 space-y-3">
                  <h3 className="text-lg font-medium">Weekly Community Roundup</h3>
                  <p className="text-muted-foreground">
                    Thank you all for your continued participation in our community discussions...
                  </p>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <Badge variant="success" size="sm">
                      <CheckCircle className="w-3 h-3" />
                      Official
                    </Badge>
                    <Badge variant="outline" size="sm">
                      <Eye className="w-3 h-3" />
                      1.2k views
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Moderation Dashboard */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">Moderation Dashboard</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Actions */}
            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Recent Actions</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Badge variant="secondary" size="xs" icon={<Shield />} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Thread locked</p>
                      <p className="text-xs text-muted-foreground">by Jane M. • 15min ago</p>
                    </div>
                    <Badge variant="error" size="xs" icon={<Lock />} />
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Badge variant="error" size="xs" icon={<Crown />} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">User banned</p>
                      <p className="text-xs text-muted-foreground">by Admin B. • 1h ago</p>
                    </div>
                    <Badge variant="error" size="xs" icon={<Ban />} />
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Badge variant="default" size="xs" icon={<Shield />} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Post pinned</p>
                      <p className="text-xs text-muted-foreground">by Staff • 2h ago</p>
                    </div>
                    <Badge variant="warning" size="xs" icon={<Pin />} />
                  </div>
                </div>
              </div>
            </Card>

            {/* Pending Reports */}
            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Pending Reports</h3>
                <div className="space-y-3">
                  <div className="p-4 border rounded-lg bg-warning-50/30 dark:bg-warning-950/30">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="warning" size="xs" icon={<Flag />} />
                        <span className="text-sm font-medium">Spam Report</span>
                        <Badge variant="error" size="xs">High Priority</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">5 community reports • Needs review</p>
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                          Review
                        </Button>
                        <Button size="sm" variant="destructive">
                          <Ban className="w-4 h-4" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg bg-error-50/30 dark:bg-error-950/30">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="error" size="xs" icon={<AlertTriangle />} />
                        <span className="text-sm font-medium">Harassment</span>
                        <Badge variant="error" size="xs" pulse>Critical</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">Multiple users affected • Urgent</p>
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="destructive">
                          <UserX className="w-4 h-4" />
                          Ban User
                        </Button>
                        <Button size="sm" variant="warning">
                          <MessageSquare className="w-4 h-4" />
                          Contact
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="justify-start">
                    <Lock className="w-4 h-4" />
                    Lock
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <Pin className="w-4 h-4" />
                    Pin
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <Edit className="w-4 h-4" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <Flag className="w-4 h-4" />
                    Flag
                  </Button>
                  <Button variant="warning" size="sm" className="justify-start">
                    <AlertCircle className="w-4 h-4" />
                    Warn
                  </Button>
                  <Button variant="destructive" size="sm" className="justify-start">
                    <Ban className="w-4 h-4" />
                    Ban
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* User Management */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">User Management</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Staff Directory */}
            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Online Staff</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Alice Admin', role: 'admin', status: 'online' },
                    { name: 'Bob Moderator', role: 'moderator', status: 'online' },
                    { name: 'Charlie Support', role: 'staff', status: 'away' },
                    { name: 'Diana Mod', role: 'moderator', status: 'online' },
                  ].map((member, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white font-semibold text-sm">
                        {member.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{member.name}</span>
                          <Badge 
                            variant={
                              member.role === 'admin' ? 'error' : 
                              member.role === 'moderator' ? 'secondary' : 
                              'default'
                            } 
                            size="xs"
                            icon={
                              member.role === 'admin' ? <Crown /> :
                              member.role === 'moderator' ? <Shield /> :
                              <CheckCircle />
                            }
                            pulse={member.status === 'online'}
                          />
                        </div>
                        <div className="flex items-center gap-1">
                          <div className={`w-2 h-2 rounded-full ${
                            member.status === 'online' ? 'bg-success-500' :
                            member.status === 'away' ? 'bg-warning-500' :
                            'bg-neutral-400'
                          }`} />
                          <span className="text-xs text-muted-foreground capitalize">{member.status}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MessageSquare className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* User Profile */}
            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">User Profile Example</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-xl">
                      JD
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-xl font-semibold">John Developer</h4>
                        <Badge variant="success" size="sm" icon={<CheckCircle />}>
                          Verified
                        </Badge>
                        <Badge variant="gradient" size="sm" icon={<Star />}>
                          VIP
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Active community member since 2022</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Badge variant="success" size="xs" dot pulse />
                        <span className="text-xs text-success-600 dark:text-success-400">Online now</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Posts:</span> 2,847
                    </div>
                    <div>
                      <span className="font-medium">Reputation:</span> 15,234
                    </div>
                    <div>
                      <span className="font-medium">Reports:</span> 0
                    </div>
                    <div>
                      <span className="font-medium">Warnings:</span> 0
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="success" size="sm">Good Standing</Badge>
                    <Badge variant="secondary" size="sm">Trusted Member</Badge>
                    <Badge variant="outline" size="sm">5+ Years</Badge>
                  </div>

                  <div className="flex gap-2 pt-2 border-t">
                    <Button size="sm" variant="outline">
                      <MessageSquare className="w-4 h-4" />
                      Message
                    </Button>
                    <Button size="sm" variant="outline">
                      <Flag className="w-4 h-4" />
                      Report
                    </Button>
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4" />
                      View History
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Design System Integration */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">Design System Integration</h2>
          
          <Card className="p-8 bg-gradient-to-r from-primary-50/50 to-secondary-50/50 dark:from-primary-950/50 dark:to-secondary-950/50">
            <div className="text-center space-y-4 mb-8">
              <h3 className="text-xl font-semibold">Moderation with Existing Components</h3>
              <p className="text-muted-foreground">
                Built using your existing Button and Badge components with OKLCH design tokens
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div className="text-3xl">🔧</div>
                <h4 className="font-semibold">Reusable Components</h4>
                <p className="text-sm text-muted-foreground">
                  All moderation features built using your existing Button and Badge components
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="text-3xl">🎨</div>
                <h4 className="font-semibold">Consistent Design</h4>
                <p className="text-sm text-muted-foreground">
                  OKLCH color system ensures visual hierarchy and semantic meaning across all moderation states
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="text-3xl">⚡</div>
                <h4 className="font-semibold">Ready to Use</h4>
                <p className="text-sm text-muted-foreground">
                  No additional components needed - just combine existing ones with appropriate props
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete moderation showcase demonstrating how to use existing Button and Badge components for all community management needs including user roles, content moderation, and administrative actions.',
      },
    },
  },
}