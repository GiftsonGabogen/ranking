import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { UserFlair, createFlairItem, commonFlairs, type FlairItem } from '@/components/ui/user-flair'
import { 
  Crown, 
  Star, 
  Award, 
  Shield, 
  Zap, 
  Sparkles, 
  Medal,
  Trophy,
  Gem,
  Heart,
  ThumbsUp,
  Users,
  CheckCircle,
  Verified,
  Clock,
  Flame,
  Target,
  Calendar,
  Coffee,
  Rocket,
  BookOpen,
  Code,
  Palette,
  MessageCircle,
  TrendingUp,
  Gift,
  Lightbulb
} from 'lucide-react'

const meta: Meta<typeof UserFlair> = {
  title: 'UI/User Flair',
  component: UserFlair,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive user flair/badges system for displaying achievements, roles, status, and special recognition. Built with OKLCH design tokens and sophisticated rarity-based animations.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical', 'compact', 'grid'],
      description: 'Layout arrangement of the flair badges',
    },
    animation: {
      control: { type: 'select' },
      options: ['none', 'subtle', 'glow', 'bounce', 'shimmer'],
      description: 'Animation style for the flair container',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'default', 'lg', 'xl'],
      description: 'Size of individual flair badges',
    },
    variant: {
      control: { type: 'select' },
      options: ['filled', 'iconOnly', 'minimal'],
      description: 'Visual style of flair badges',
    },
    showLabels: {
      control: { type: 'boolean' },
      description: 'Show text labels (ignored in iconOnly mode)',
    },
    maxVisible: {
      control: { type: 'number', min: 1, max: 20, step: 1 },
      description: 'Maximum number of visible flairs before showing "more" button',
    },
    showTooltip: {
      control: { type: 'boolean' },
      description: 'Show tooltips with detailed information on hover',
    },
    showProgress: {
      control: { type: 'boolean' },
      description: 'Show progress bars for flairs with progress data',
    },
    onFlairClick: {
      action: 'flair clicked',
      description: 'Callback when a flair is clicked',
    },
  },
  args: {
    maxVisible: 8,
    showTooltip: true,
    showProgress: false,
    showLabels: true,
    layout: 'horizontal',
    animation: 'subtle',
    size: 'default',
    variant: 'filled',
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Sample flair data for stories
const sampleFlairs: FlairItem[] = [
  createFlairItem('verified-user', 'Verified', 'verified', {
    icon: 'verified',
    description: 'Verified community member',
    rarity: 'uncommon',
    earnedAt: new Date('2024-01-15'),
  }),
  createFlairItem('top-contributor', 'Top 1%', 'achievement', {
    icon: 'topContributor',
    description: 'Top 1% contributor this month',
    rarity: 'epic',
    earnedAt: new Date('2024-08-20'),
  }),
  createFlairItem('moderator', 'Moderator', 'role', {
    icon: 'moderator',
    description: 'Community moderator',
    rarity: 'rare',
    earnedAt: new Date('2024-03-10'),
  }),
  createFlairItem('premium-member', 'Premium', 'premium', {
    icon: 'premium',
    description: 'Premium subscription member',
    rarity: 'rare',
    earnedAt: new Date('2024-06-01'),
  }),
  createFlairItem('early-adopter', 'Early Adopter', 'special', {
    icon: 'early',
    description: 'Joined during beta period',
    rarity: 'legendary',
    earnedAt: new Date('2023-12-01'),
  }),
  createFlairItem('streak-master', '100 Days', 'milestone', {
    icon: 'streakMaster',
    description: '100 day activity streak',
    rarity: 'rare',
    earnedAt: new Date('2024-07-15'),
  }),
  createFlairItem('helpful-votes', '500 Likes', 'achievement', {
    icon: 'helpfulVotes',
    description: 'Received 500+ helpful votes',
    rarity: 'uncommon',
    earnedAt: new Date('2024-05-20'),
    progress: { current: 500, total: 1000 }
  }),
  createFlairItem('community-champion', 'Champion', 'special', {
    icon: <Heart className="h-full w-full" />,
    description: 'Outstanding community contributions',
    rarity: 'legendary',
    earnedAt: new Date('2024-09-01'),
  }),
]

const extendedFlairs: FlairItem[] = [
  ...sampleFlairs,
  createFlairItem('first-post', 'First Post', 'achievement', {
    icon: 'firstPost',
    description: 'Created first post',
    rarity: 'common',
    earnedAt: new Date('2024-01-05'),
  }),
  createFlairItem('year-member', '1 Year', 'milestone', {
    icon: <Calendar className="h-full w-full" />,
    description: 'Member for 1 year',
    rarity: 'uncommon',
    earnedAt: new Date('2024-01-01'),
  }),
  createFlairItem('coffee-lover', 'Coffee Lover', 'special', {
    icon: <Coffee className="h-full w-full" />,
    description: 'Participated in coffee chat events',
    rarity: 'common',
    earnedAt: new Date('2024-04-01'),
  }),
  createFlairItem('rocket-builder', '12 Projects', 'achievement', {
    icon: <Rocket className="h-full w-full" />,
    description: 'Built 12 projects',
    rarity: 'rare',
    earnedAt: new Date('2024-06-15'),
  }),
]

export const Default: Story = {
  args: {
    flairs: sampleFlairs.slice(0, 5),
  },
}

export const AllRarities: Story = {
  render: (args) => {
    const rarityFlairs: FlairItem[] = [
      createFlairItem('common-badge', 'Common', 'achievement', {
        icon: <Award className="h-full w-full" />,
        rarity: 'common',
        description: 'A common achievement badge',
      }),
      createFlairItem('uncommon-badge', 'Uncommon', 'achievement', {
        icon: <Star className="h-full w-full" />,
        rarity: 'uncommon',
        description: 'An uncommon achievement badge',
      }),
      createFlairItem('rare-badge', 'Rare', 'achievement', {
        icon: <Gem className="h-full w-full" />,
        rarity: 'rare',
        description: 'A rare achievement badge',
      }),
      createFlairItem('epic-badge', 'Epic', 'achievement', {
        icon: <Trophy className="h-full w-full" />,
        rarity: 'epic',
        description: 'An epic achievement badge',
      }),
      createFlairItem('legendary-badge', 'Legendary', 'achievement', {
        icon: <Crown className="h-full w-full" />,
        rarity: 'legendary',
        description: 'A legendary achievement badge',
      }),
    ]
    return (
      <div className="space-y-6 p-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Rarity Progression</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Each rarity tier has unique visual effects, animations, and glow intensities.
          </p>
          <UserFlair {...args} flairs={rarityFlairs} />
        </div>
        
        <div className="grid grid-cols-1 gap-4 mt-8">
          {rarityFlairs.map((flair) => (
            <div key={flair.id} className="flex items-center justify-between p-4 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
              <div className="flex items-center gap-3">
                <UserFlair flairs={[flair]} showTooltip={false} />
                <div>
                  <div className="font-medium capitalize">{flair.rarity} Rarity</div>
                  <div className="text-sm text-muted-foreground">{flair.description}</div>
                </div>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                {flair.rarity === 'legendary' && 'Animated glow + shimmer'}
                {flair.rarity === 'epic' && 'Strong glow + pulse'}
                {flair.rarity === 'rare' && 'Medium glow + ring'}
                {flair.rarity === 'uncommon' && 'Subtle glow + ring'}
                {flair.rarity === 'common' && 'Basic hover effect'}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Showcases all rarity tiers from common to legendary, each with progressively more sophisticated visual effects and animations.',
      },
    },
  },
}

export const IconOnly: Story = {
  render: (args) => (
    <div className="space-y-8 p-8 max-w-4xl">
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-2xl font-bold">Icon-Only Mode</h2>
        <p className="text-muted-foreground">Clean, minimal flair display showing only icons with type-based colors</p>
      </div>
      
      <div className="space-y-6">
        {/* Different sizes */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Size Variations</h3>
          <div className="grid grid-cols-1 gap-4">
            {(['xs', 'sm', 'default', 'lg', 'xl'] as const).map((size) => (
              <div key={size} className="flex items-center gap-4 p-4 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
                <div className="w-16 text-sm font-medium capitalize">{size === 'default' ? 'Default' : size}</div>
                <UserFlair {...args} flairs={sampleFlairs.slice(0, 6)} variant="iconOnly" size={size} />
              </div>
            ))}
          </div>
        </div>

        {/* Different layouts */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Layout Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 p-4 border rounded-lg">
              <h4 className="font-medium">Horizontal</h4>
              <UserFlair {...args} flairs={sampleFlairs.slice(0, 8)} variant="iconOnly" layout="horizontal" />
            </div>
            <div className="space-y-3 p-4 border rounded-lg">
              <h4 className="font-medium">Compact</h4>
              <UserFlair {...args} flairs={sampleFlairs.slice(0, 8)} variant="iconOnly" layout="compact" />
            </div>
            <div className="space-y-3 p-4 border rounded-lg">
              <h4 className="font-medium">Grid</h4>
              <UserFlair {...args} flairs={sampleFlairs.slice(0, 8)} variant="iconOnly" layout="grid" />
            </div>
            <div className="space-y-3 p-4 border rounded-lg">
              <h4 className="font-medium">Vertical</h4>
              <UserFlair {...args} flairs={sampleFlairs.slice(0, 4)} variant="iconOnly" layout="vertical" />
            </div>
          </div>
        </div>

        {/* Type-based colors */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Type-Based Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { type: 'achievement', color: 'Warning', icon: <Award className="h-full w-full" /> },
              { type: 'role', color: 'Primary', icon: <Shield className="h-full w-full" /> },
              { type: 'status', color: 'Success', icon: <CheckCircle className="h-full w-full" /> },
              { type: 'premium', color: 'Warning', icon: <Gem className="h-full w-full" /> },
              { type: 'milestone', color: 'Secondary', icon: <Medal className="h-full w-full" /> },
              { type: 'special', color: 'Primary', icon: <Sparkles className="h-full w-full" /> },
              { type: 'verified', color: 'Primary', icon: <Verified className="h-full w-full" /> },
              { type: 'legendary', color: 'Error', icon: <Crown className="h-full w-full" /> },
            ].map((item) => (
              <div key={item.type} className="text-center p-4 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
                <UserFlair 
                  flairs={[createFlairItem(`${item.type}-demo`, item.type, item.type as any, { icon: item.icon, rarity: 'uncommon' })]} 
                  variant="iconOnly" 
                  size="lg"
                />
                <div className="mt-2 text-sm font-medium capitalize">{item.type}</div>
                <div className="text-xs text-muted-foreground">{item.color}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Rarity effects */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Rarity Effects</h3>
          <div className="flex justify-center gap-6 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            {[
              { rarity: 'common', label: 'Common' },
              { rarity: 'uncommon', label: 'Uncommon' },
              { rarity: 'rare', label: 'Rare' },
              { rarity: 'epic', label: 'Epic' },
              { rarity: 'legendary', label: 'Legendary' },
            ].map((item) => (
              <div key={item.rarity} className="text-center">
                <UserFlair 
                  flairs={[createFlairItem(`${item.rarity}-demo`, item.label, 'achievement', { 
                    icon: <Crown className="h-full w-full" />, 
                    rarity: item.rarity as any 
                  })]} 
                  variant="iconOnly" 
                  size="xl"
                />
                <div className="mt-2 text-sm capitalize">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-world example */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">User Profile Integration</h3>
          <div className="p-6 border rounded-xl bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-xl font-bold">
                JD
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold">John Developer</h4>
                <p className="text-muted-foreground">Full Stack Engineer</p>
                <div className="mt-2">
                  <UserFlair flairs={sampleFlairs} variant="iconOnly" size="default" maxVisible={10} />
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
        story: 'Icon-only mode removes all backgrounds, borders, and text, showing clean semantic icons with type-based colors and rarity effects.',
      },
    },
  },
}

export const StyleComparison: Story = {
  render: (args) => (
    <div className="space-y-8 p-8 max-w-4xl">
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-2xl font-bold">Style Comparison</h2>
        <p className="text-muted-foreground">Compare all three visual styles side by side</p>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">🎨 Filled Style (Default)</h3>
          <div className="p-6 border rounded-lg bg-gradient-to-r from-primary-50/50 to-secondary-50/50 dark:from-primary-950/20 dark:to-secondary-950/20">
            <UserFlair {...args} flairs={sampleFlairs.slice(0, 6)} variant="filled" />
            <p className="text-sm text-muted-foreground mt-3">
              Full background colors, borders, and shadows with gradient effects
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">🔗 Minimal Style</h3>
          <div className="p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <UserFlair {...args} flairs={sampleFlairs.slice(0, 6)} variant="minimal" />
            <p className="text-sm text-muted-foreground mt-3">
              Subtle borders with transparent backgrounds and gentle hover effects
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">🎯 Icon Only Style</h3>
          <div className="p-6 border rounded-lg bg-white dark:bg-neutral-950">
            <UserFlair {...args} flairs={sampleFlairs.slice(0, 6)} variant="iconOnly" />
            <p className="text-sm text-muted-foreground mt-3">
              Pure icons with semantic colors and drop-shadow effects
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 rounded-lg border">
        <h3 className="text-lg font-semibold mb-4">🎯 Use Cases</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-primary-700 dark:text-primary-300 mb-2">Filled Style</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>• Hero sections</li>
              <li>• Achievement galleries</li>
              <li>• Primary user profiles</li>
              <li>• Marketing pages</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-secondary-700 dark:text-secondary-300 mb-2">Minimal Style</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>• Secondary displays</li>
              <li>• Compact layouts</li>
              <li>• Filter tags</li>
              <li>• Settings pages</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-success-700 dark:text-success-300 mb-2">Icon Only</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>• Navigation bars</li>
              <li>• Dense layouts</li>
              <li>• Quick glances</li>
              <li>• Mobile interfaces</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Side-by-side comparison of all three visual styles with use case recommendations.',
      },
    },
  },
}

export const AllTypes: Story = {
  render: (args) => {
    const typeFlairs: FlairItem[] = [
      createFlairItem('achievement-type', 'Achievement', 'achievement', {
        icon: <Award className="h-full w-full" />,
        description: 'User achievement badge',
        rarity: 'uncommon',
      }),
      createFlairItem('role-type', 'Role', 'role', {
        icon: <Shield className="h-full w-full" />,
        description: 'User role badge',
        rarity: 'rare',
      }),
      createFlairItem('status-type', 'Status', 'status', {
        icon: <CheckCircle className="h-full w-full" />,
        description: 'User status badge',
        rarity: 'common',
      }),
      createFlairItem('premium-type', 'Premium', 'premium', {
        icon: <Gem className="h-full w-full" />,
        description: 'Premium membership badge',
        rarity: 'rare',
      }),
      createFlairItem('milestone-type', 'Milestone', 'milestone', {
        icon: <Medal className="h-full w-full" />,
        description: 'Milestone achievement badge',
        rarity: 'uncommon',
      }),
      createFlairItem('special-type', 'Special', 'special', {
        icon: <Sparkles className="h-full w-full" />,
        description: 'Special recognition badge',
        rarity: 'epic',
      }),
      createFlairItem('verified-type', 'Verified', 'verified', {
        icon: <Verified className="h-full w-full" />,
        description: 'Verified account badge',
        rarity: 'uncommon',
      }),
      createFlairItem('legendary-type', 'Legendary', 'legendary', {
        icon: <Crown className="h-full w-full" />,
        description: 'Legendary status badge',
        rarity: 'legendary',
      }),
    ]
    return (
      <div className="space-y-6 p-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Badge Types</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Different badge types with semantic colors and meanings.
          </p>
          <UserFlair {...args} flairs={typeFlairs} layout="grid" />
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays all available badge types, each with distinct visual styling and semantic meaning.',
      },
    },
  },
}

export const LayoutVariations: Story = {
  render: (args) => (
    <div className="space-y-8 p-8 max-w-4xl">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Horizontal Layout</h3>
        <div className="p-4 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
          <UserFlair {...args} flairs={sampleFlairs} layout="horizontal" />
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Compact Layout</h3>
        <div className="p-4 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
          <UserFlair {...args} flairs={sampleFlairs} layout="compact" />
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Grid Layout</h3>
        <div className="p-4 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
          <UserFlair {...args} flairs={sampleFlairs} layout="grid" />
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Vertical Layout</h3>
        <div className="p-4 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
          <UserFlair {...args} flairs={sampleFlairs.slice(0, 4)} layout="vertical" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Different layout options for organizing and displaying user flair badges.',
      },
    },
  },
}

export const SizeVariations: Story = {
  render: (args) => {
    const testFlairs = sampleFlairs.slice(0, 3)
    return (
      <div className="space-y-8 p-8">
        {(['xs', 'sm', 'default', 'lg', 'xl'] as const).map((size) => (
          <div key={size} className="space-y-2">
            <h3 className="text-sm font-medium capitalize">{size === 'default' ? 'Default' : size} Size</h3>
            <UserFlair {...args} flairs={testFlairs} size={size} />
          </div>
        ))}
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Different size options for user flair badges, from extra small to extra large.',
      },
    },
  },
}

export const AnimationShowcase: Story = {
  render: (args) => {
    const animationFlairs = sampleFlairs.slice(0, 4)
    return (
      <div className="space-y-8 p-8 max-w-4xl">
        {(['none', 'subtle', 'glow', 'bounce', 'shimmer'] as const).map((animation) => (
          <div key={animation} className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold capitalize">{animation} Animation</h3>
              <span className="text-sm text-muted-foreground">
                Hover to see effect
              </span>
            </div>
            <div className="p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
              <UserFlair {...args} flairs={animationFlairs} animation={animation} />
            </div>
          </div>
        ))}
      </div>
    )
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Different animation styles that can be applied to the flair container. Hover over each section to see the effects.',
      },
    },
  },
}

export const WithProgress: Story = {
  render: (args) => {
    const progressFlairs: FlairItem[] = [
      createFlairItem('progress-1', 'Almost There', 'achievement', {
        icon: <Target className="h-full w-full" />,
        description: 'Close to reaching the goal',
        rarity: 'common',
        progress: { current: 85, total: 100 },
      }),
      createFlairItem('progress-2', 'Halfway', 'milestone', {
        icon: <TrendingUp className="h-full w-full" />,
        description: 'Halfway to completion',
        rarity: 'uncommon',
        progress: { current: 50, total: 100 },
      }),
      createFlairItem('progress-3', 'Getting Started', 'achievement', {
        icon: <Lightbulb className="h-full w-full" />,
        description: 'Just getting started',
        rarity: 'common',
        progress: { current: 15, total: 100 },
      }),
      createFlairItem('progress-4', 'Complete', 'achievement', {
        icon: <CheckCircle className="h-full w-full" />,
        description: 'Fully completed',
        rarity: 'rare',
        progress: { current: 100, total: 100 },
      }),
    ]
    return (
      <div className="space-y-6 p-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Progress Indicators</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Flair badges can show progress towards achievement goals with animated progress bars.
          </p>
          <UserFlair {...args} flairs={progressFlairs} showProgress={true} />
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows how flair badges can include progress indicators for achievements or milestones in progress.',
      },
    },
  },
}

export const RealWorldExample: Story = {
  render: (args) => (
    <div className="space-y-8 p-8 max-w-4xl">
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-2xl font-bold">User Profile Example</h2>
        <p className="text-muted-foreground">Comprehensive user flair showcase in a realistic context</p>
      </div>
      
      {/* User Profile Card */}
      <div className="bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 border rounded-xl p-8 shadow-lg">
        <div className="flex items-start gap-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-2xl font-bold">
              JD
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success-500 rounded-full border-4 border-white dark:border-neutral-900 animate-pulse" />
          </div>
          
          <div className="flex-1">
            <div className="space-y-3">
              <div>
                <h3 className="text-2xl font-bold">John Developer</h3>
                <p className="text-muted-foreground">Full Stack Engineer • Joined Jan 2024</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Achievements & Status</h4>
                <UserFlair {...args} flairs={sampleFlairs} maxVisible={6} />
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">1.2k</div>
                  <div className="text-sm text-muted-foreground">Posts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success-600">95%</div>
                  <div className="text-sm text-muted-foreground">Helpful</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-warning-600">42</div>
                  <div className="text-sm text-muted-foreground">Streak</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Community Leaderboard */}
      <div className="bg-white dark:bg-neutral-900 border rounded-xl p-6 shadow-lg">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Trophy className="w-5 h-5 text-warning-500" />
            Community Leaderboard
          </h3>
          
          <div className="space-y-3">
            {[
              { name: 'John Developer', rank: 1, flairs: sampleFlairs.slice(0, 4) },
              { name: 'Sarah Designer', rank: 2, flairs: sampleFlairs.slice(1, 5) },
              { name: 'Mike Manager', rank: 3, flairs: sampleFlairs.slice(0, 3) },
            ].map((user, index) => (
              <div key={user.name} className="flex items-center justify-between p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800/50">
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                    index === 0 ? 'bg-warning-500' : 
                    index === 1 ? 'bg-neutral-400' : 
                    'bg-error-600'
                  }`}>
                    #{user.rank}
                  </div>
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <UserFlair flairs={user.flairs} size="sm" maxVisible={4} />
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">2,340 pts</div>
                  <div className="text-xs text-muted-foreground">This month</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Achievement Gallery */}
      <div className="bg-white dark:bg-neutral-900 border rounded-xl p-6 shadow-lg">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Achievement Gallery</h3>
          <p className="text-sm text-muted-foreground">
            Showcase of various achievements and special recognitions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium text-primary-700 dark:text-primary-300">Epic & Legendary</h4>
              <UserFlair 
                flairs={extendedFlairs.filter(f => f.rarity === 'epic' || f.rarity === 'legendary')} 
                layout="vertical"
                size="lg"
                animation="glow"
              />
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-secondary-700 dark:text-secondary-300">Recent Achievements</h4>
              <UserFlair 
                flairs={extendedFlairs.filter(f => f.earnedAt && f.earnedAt > new Date('2024-06-01')).slice(0, 5)} 
                layout="compact"
                animation="bounce"
              />
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
        story: 'A comprehensive real-world example showing user flair badges integrated into a user profile, leaderboard, and achievement gallery context.',
      },
    },
  },
}

export const CommonFlairCollections: Story = {
  render: (args) => (
    <div className="space-y-8 p-8 max-w-4xl">
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-2xl font-bold">Common Flair Collections</h2>
        <p className="text-muted-foreground">Pre-built collections for common use cases</p>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">🏆 Achievements</h3>
          <div className="p-6 border rounded-lg bg-gradient-to-r from-warning-50 to-warning-100 dark:from-warning-950/20 dark:to-warning-900/20">
            <UserFlair {...args} flairs={commonFlairs.achievements} />
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">👑 Roles</h3>
          <div className="p-6 border rounded-lg bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-950/20 dark:to-primary-900/20">
            <UserFlair {...args} flairs={commonFlairs.roles} />
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">⭐ Status</h3>
          <div className="p-6 border rounded-lg bg-gradient-to-r from-success-50 to-success-100 dark:from-success-950/20 dark:to-success-900/20">
            <UserFlair {...args} flairs={commonFlairs.status} />
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 rounded-lg border">
        <h3 className="text-lg font-semibold mb-4">💡 Implementation Tip</h3>
        <div className="text-sm text-muted-foreground">
          <p className="mb-2">
            Use the pre-built <code className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded text-xs">commonFlairs</code> collections 
            to quickly implement standard flair systems:
          </p>
          <pre className="p-3 bg-neutral-200 dark:bg-neutral-700 rounded mt-2 text-xs overflow-x-auto">
{`import { UserFlair, commonFlairs } from '@/components/ui/user-flair'

// Use pre-built collections
<UserFlair flairs={commonFlairs.achievements} />
<UserFlair flairs={[...commonFlairs.roles, ...commonFlairs.status]} />`}
          </pre>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Pre-built flair collections for common use cases like achievements, roles, and status indicators.',
      },
    },
  },
}

export const DesignTokenIntegration: Story = {
  render: (args) => (
    <div className="space-y-8 p-8 max-w-6xl">
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-3xl font-bold">Design Token Integration</h1>
        <p className="text-muted-foreground">Comprehensive showcase of OKLCH color system and design token usage</p>
      </div>
      
      {/* OKLCH Color Demonstration */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">OKLCH Color Consistency</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['primary', 'secondary', 'success', 'warning'].map((color) => (
            <div key={color} className="space-y-4">
              <h3 className="text-lg font-medium capitalize">{color} Spectrum</h3>
              <div className="space-y-2">
                <UserFlair 
                  flairs={[
                    createFlairItem(`${color}-light`, 'Light', 'achievement', {
                      icon: <Star className="h-full w-full" />,
                      rarity: 'common',
                    }),
                  ]} 
                  size="lg" 
                />
                <UserFlair 
                  flairs={[
                    createFlairItem(`${color}-medium`, 'Medium', 'role', {
                      icon: <Award className="h-full w-full" />,
                      rarity: 'uncommon',
                    }),
                  ]} 
                  size="lg" 
                />
                <UserFlair 
                  flairs={[
                    createFlairItem(`${color}-intense`, 'Intense', 'premium', {
                      icon: <Crown className="h-full w-full" />,
                      rarity: 'rare',
                    }),
                  ]} 
                  size="lg" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Animation & Effects */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Advanced Visual Effects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <h3 className="text-lg font-medium">Shimmer Effects</h3>
            <UserFlair 
              flairs={[
                createFlairItem('shimmer-premium', 'Premium Shimmer', 'premium', {
                  icon: <Sparkles className="h-full w-full" />,
                  rarity: 'epic',
                }),
                createFlairItem('shimmer-special', 'Special Shimmer', 'special', {
                  icon: <Crown className="h-full w-full" />,
                  rarity: 'legendary',
                }),
              ]}
              animation="shimmer"
              size="lg"
            />
          </div>
          
          <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <h3 className="text-lg font-medium">Glow Effects</h3>
            <UserFlair 
              flairs={[
                createFlairItem('glow-epic', 'Epic Glow', 'achievement', {
                  icon: <Trophy className="h-full w-full" />,
                  rarity: 'epic',
                }),
                createFlairItem('glow-legendary', 'Legendary Glow', 'legendary', {
                  icon: <Crown className="h-full w-full" />,
                  rarity: 'legendary',
                }),
              ]}
              animation="glow"
              size="lg"
            />
          </div>
        </div>
      </div>
      
      {/* Responsive Design */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Responsive & Adaptive Design</h2>
        <div className="space-y-4">
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-medium mb-4">Auto-sizing Based on Container</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded">
                <p className="text-sm font-medium mb-2">Mobile (Compact)</p>
                <UserFlair flairs={sampleFlairs.slice(0, 3)} size="sm" layout="compact" maxVisible={3} />
              </div>
              <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded">
                <p className="text-sm font-medium mb-2">Tablet (Default)</p>
                <UserFlair flairs={sampleFlairs.slice(0, 5)} size="default" maxVisible={5} />
              </div>
              <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded">
                <p className="text-sm font-medium mb-2">Desktop (Large)</p>
                <UserFlair flairs={sampleFlairs} size="lg" layout="grid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Accessibility Features */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Accessibility & UX Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3 p-4 border rounded-lg">
            <h3 className="font-medium">Keyboard Navigation</h3>
            <UserFlair flairs={sampleFlairs.slice(0, 2)} />
            <p className="text-xs text-muted-foreground">Tab through badges, Space/Enter to activate</p>
          </div>
          
          <div className="space-y-3 p-4 border rounded-lg">
            <h3 className="font-medium">Screen Reader Support</h3>
            <UserFlair flairs={sampleFlairs.slice(0, 2)} />
            <p className="text-xs text-muted-foreground">ARIA labels with descriptions and context</p>
          </div>
          
          <div className="space-y-3 p-4 border rounded-lg">
            <h3 className="font-medium">High Contrast Mode</h3>
            <UserFlair flairs={sampleFlairs.slice(0, 2)} />
            <p className="text-xs text-muted-foreground">Maintains readability in all display modes</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive demonstration of the flair component integration with the OKLCH design token system, showcasing color consistency, advanced animations, responsive design, and accessibility features.',
      },
    },
  },
}