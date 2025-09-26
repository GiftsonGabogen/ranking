import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'
import { LikeCounter } from '@/components/ui/like-counter'
import { 
  Heart, 
  ThumbsUp, 
  Star, 
  Plus, 
  Minus, 
  TrendingUp,
  MessageCircle,
  Share,
  Bookmark
} from 'lucide-react'

const meta: Meta<typeof LikeCounter> = {
  title: 'UI/LikeCounter',
  component: LikeCounter,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An interactive like/vote counter component with beautiful animations, multiple variants, and comprehensive design token integration. Perfect for social interactions, feedback systems, and engagement tracking.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'outline', 'ghost', 'glass', 'glow', 'success', 'warning', 'destructive', 'fillOnLike', 'fillOnLikeSuccess', 'fillOnLikeWarning', 'fillOnLikeError', 'outlineFill', 'ghostFill'],
      description: 'The visual style variant of the counter',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'default', 'lg', 'xl'],
      description: 'The size of the counter',
    },
    icon: {
      control: { type: 'select' },
      options: ['heart', 'thumbsUp', 'star', 'plus', 'minus', 'trending'],
      description: 'The icon to display',
    },
    count: {
      control: { type: 'number' },
      description: 'The current count value',
    },
    liked: {
      control: { type: 'boolean' },
      description: 'Whether the item is currently liked',
    },
    showCount: {
      control: { type: 'boolean' },
      description: 'Whether to show the count number',
    },
    animated: {
      control: { type: 'boolean' },
      description: 'Enable animations and micro-interactions',
    },
    counterEffect: {
      control: { type: 'select' },
      options: ['bounce', 'pop', 'slide', 'glow', 'none'],
      description: 'Animation effect when count changes',
    },
    maxCount: {
      control: { type: 'number' },
      description: 'Maximum allowed count value',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the counter interaction',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Interactive wrapper for stories
const InteractiveWrapper = ({ 
  initialCount = 42, 
  initialLiked = false, 
  ...props 
}: { 
  initialCount?: number
  initialLiked?: boolean
  [key: string]: any 
}) => {
  const [count, setCount] = useState(initialCount)
  const [liked, setLiked] = useState(initialLiked)

  const handleClick = (newLiked: boolean, newCount: number) => {
    setLiked(newLiked)
    setCount(newCount)
  }

  return (
    <LikeCounter
      count={count}
      liked={liked}
      onClick={handleClick}
      {...props}
    />
  )
}

export const Default: Story = {
  render: () => <InteractiveWrapper />,
  parameters: {
    docs: {
      description: {
        story: 'The default like counter with heart icon and standard styling.',
      },
    },
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6 p-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Variants</h3>
        <div className="space-y-3">
          <InteractiveWrapper variant="default" initialCount={12} />
          <InteractiveWrapper variant="filled" initialCount={24} initialLiked />
          <InteractiveWrapper variant="outline" initialCount={8} />
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Special Effects</h3>
        <div className="space-y-3">
          <InteractiveWrapper variant="ghost" initialCount={156} />
          <InteractiveWrapper variant="glass" initialCount={89} />
          <InteractiveWrapper variant="glow" initialCount={234} initialLiked />
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Semantic Colors</h3>
        <div className="space-y-3">
          <InteractiveWrapper variant="success" initialCount={67} />
          <InteractiveWrapper variant="warning" initialCount={23} />
          <InteractiveWrapper variant="destructive" initialCount={3} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available variants showcasing different visual styles using design tokens.',
      },
    },
  },
}

export const FillVariants: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Fill-on-Like Variants</h2>
        <p className="text-muted-foreground">Icons fill with color when liked/voted. Click to see the effect!</p>
      </div>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Heart Icons</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <InteractiveWrapper 
                variant="fillOnLike" 
                icon="heart" 
                initialCount={42} 
                size="lg"
              />
              <span className="text-sm text-muted-foreground">Fill on Like (Primary)</span>
            </div>
            <div className="flex items-center gap-4">
              <InteractiveWrapper 
                variant="fillOnLikeError" 
                icon="heart" 
                initialCount={156} 
                size="lg"
              />
              <span className="text-sm text-muted-foreground">Fill on Like (Error/Red)</span>
            </div>
            <div className="flex items-center gap-4">
              <InteractiveWrapper 
                variant="outlineFill" 
                icon="heart" 
                initialCount={89} 
                size="lg"
              />
              <span className="text-sm text-muted-foreground">Outline Fill</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Star Ratings</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <InteractiveWrapper 
                variant="fillOnLikeWarning" 
                icon="star" 
                initialCount={234} 
                size="lg"
              />
              <span className="text-sm text-muted-foreground">Fill on Like (Warning/Yellow)</span>
            </div>
            <div className="flex items-center gap-4">
              <InteractiveWrapper 
                variant="ghostFill" 
                icon="star" 
                initialCount={67} 
                size="lg"
              />
              <span className="text-sm text-muted-foreground">Ghost Fill</span>
            </div>
            <div className="flex items-center gap-4">
              <InteractiveWrapper 
                variant="fillOnLike" 
                icon="star" 
                initialCount={423} 
                size="lg"
              />
              <span className="text-sm text-muted-foreground">Fill on Like (Primary)</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Thumbs Up</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <InteractiveWrapper 
                variant="fillOnLikeSuccess" 
                icon="thumbsUp" 
                initialCount={78} 
                size="lg"
              />
              <span className="text-sm text-muted-foreground">Fill on Like (Success/Green)</span>
            </div>
            <div className="flex items-center gap-4">
              <InteractiveWrapper 
                variant="outlineFill" 
                icon="thumbsUp" 
                initialCount={134} 
                size="lg"
              />
              <span className="text-sm text-muted-foreground">Outline Fill</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Trending/Popularity</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <InteractiveWrapper 
                variant="fillOnLike" 
                icon="trending" 
                initialCount={512} 
                size="lg"
              />
              <span className="text-sm text-muted-foreground">Fill on Like (Primary)</span>
            </div>
            <div className="flex items-center gap-4">
              <InteractiveWrapper 
                variant="ghostFill" 
                icon="trending" 
                initialCount={298} 
                size="lg"
              />
              <span className="text-sm text-muted-foreground">Ghost Fill</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-primary-50 dark:bg-primary-950/30 rounded-lg">
        <h3 className="font-medium mb-2">✨ Icon Fill Behavior</h3>
        <p className="text-sm text-muted-foreground">
          When using fill variants, icons automatically switch from outline to filled versions when liked/voted. 
          The background color also changes to provide additional visual feedback. Try clicking the examples above!
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of fill-on-like variants that change icon appearance when liked/voted, providing intuitive visual feedback.',
      },
    },
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-6 p-8">
      <div className="text-center space-y-2">
        <InteractiveWrapper size="xs" initialCount={5} />
        <p className="text-xs text-muted-foreground">Extra Small</p>
      </div>
      <div className="text-center space-y-2">
        <InteractiveWrapper size="sm" initialCount={42} />
        <p className="text-xs text-muted-foreground">Small</p>
      </div>
      <div className="text-center space-y-2">
        <InteractiveWrapper size="default" initialCount={156} />
        <p className="text-xs text-muted-foreground">Default</p>
      </div>
      <div className="text-center space-y-2">
        <InteractiveWrapper size="lg" initialCount={1240} />
        <p className="text-xs text-muted-foreground">Large</p>
      </div>
      <div className="text-center space-y-2">
        <InteractiveWrapper size="xl" initialCount={15600} />
        <p className="text-xs text-muted-foreground">Extra Large</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different counter sizes using design token spacing scale.',
      },
    },
  },
}

export const AllIcons: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6 p-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Social Icons</h3>
        <div className="space-y-3">
          <InteractiveWrapper icon="heart" variant="glow" initialCount={2453} />
          <InteractiveWrapper icon="thumbsUp" variant="filled" initialCount={89} initialLiked />
          <InteractiveWrapper icon="star" variant="warning" initialCount={156} />
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Action Icons</h3>
        <div className="space-y-3">
          <InteractiveWrapper icon="plus" variant="success" initialCount={12} />
          <InteractiveWrapper icon="minus" variant="outline" initialCount={5} />
          <InteractiveWrapper icon="trending" variant="glass" initialCount={342} />
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Formatted</h3>
        <div className="space-y-3">
          <InteractiveWrapper 
            icon="heart" 
            variant="destructive" 
            initialCount={1234567} 
            formatCount={(count) => `${(count / 1000000).toFixed(1)}M`}
          />
          <InteractiveWrapper 
            icon="star" 
            variant="warning" 
            initialCount={42500} 
            formatCount={(count) => new Intl.NumberFormat('en-US').format(count)}
          />
          <InteractiveWrapper 
            icon="thumbsUp" 
            variant="primary" 
            initialCount={8900} 
            formatCount={(count) => `+${(count / 1000).toFixed(1)}K`}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different icons and custom count formatting options.',
      },
    },
  },
}

export const AnimationEffects: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Counter Effects</h3>
        <div className="space-y-3">
          <InteractiveWrapper counterEffect="bounce" initialCount={12} />
          <InteractiveWrapper counterEffect="pop" variant="filled" initialCount={24} />
          <InteractiveWrapper counterEffect="slide" variant="outline" initialCount={8} />
          <InteractiveWrapper counterEffect="glow" variant="glow" initialCount={156} />
          <InteractiveWrapper counterEffect="none" variant="ghost" initialCount={89} />
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Icon Animations</h3>
        <div className="space-y-3">
          <InteractiveWrapper icon="heart" variant="glow" animated initialCount={42} />
          <InteractiveWrapper icon="star" variant="warning" animated initialCount={156} />
          <InteractiveWrapper icon="thumbsUp" variant="primary" animated initialCount={89} />
          <InteractiveWrapper icon="trending" variant="success" animated initialCount={234} />
          <InteractiveWrapper icon="heart" variant="outline" animated={false} initialCount={12} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different animation effects and icon-specific animations.',
      },
    },
  },
}

export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8 p-8 max-w-4xl">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Real-world Usage Examples</h2>
        <p className="text-muted-foreground">Like counters in different contexts and applications</p>
      </div>
      
      {/* Social Media Post */}
      <div className="space-y-4 p-6 border rounded-lg bg-white dark:bg-neutral-900">
        <h3 className="text-lg font-semibold">Social Media Post</h3>
        <div className="flex items-center gap-6">
          <InteractiveWrapper 
            icon="heart" 
            variant="fillOnLikeError" 
            size="sm" 
            initialCount={1247} 
            counterEffect="bounce"
          />
          <InteractiveWrapper 
            icon="thumbsUp" 
            variant="fillOnLikeSuccess" 
            size="sm" 
            initialCount={89} 
            counterEffect="pop"
          />
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MessageCircle className="h-4 w-4" />
            <span>23</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Share className="h-4 w-4" />
            <span>12</span>
          </div>
        </div>
      </div>

      {/* Product Rating */}
      <div className="space-y-4 p-6 border rounded-lg bg-white dark:bg-neutral-900">
        <h3 className="text-lg font-semibold">Product Rating</h3>
        <div className="flex items-center gap-4">
          <InteractiveWrapper 
            icon="star" 
            variant="fillOnLikeWarning" 
            size="lg" 
            initialCount={4.8} 
            formatCount={(count) => count.toFixed(1)}
            showCount
          />
          <span className="text-sm text-muted-foreground">(2,341 reviews)</span>
        </div>
      </div>

      {/* Article Engagement */}
      <div className="space-y-4 p-6 border rounded-lg bg-white dark:bg-neutral-900">
        <h3 className="text-lg font-semibold">Article Engagement</h3>
        <div className="flex items-center gap-6">
          <InteractiveWrapper 
            icon="heart" 
            variant="glow" 
            size="sm" 
            initialCount={156} 
            counterEffect="glow"
          />
          <div className="flex items-center gap-2">
            <Bookmark className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Save</span>
          </div>
          <InteractiveWrapper 
            icon="trending" 
            variant="success" 
            size="sm" 
            initialCount={89} 
            counterEffect="slide"
          />
        </div>
      </div>

      {/* Gaming Score */}
      <div className="space-y-4 p-6 border rounded-lg bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-950 dark:to-secondary-950">
        <h3 className="text-lg font-semibold">Gaming Score</h3>
        <div className="flex items-center gap-8">
          <InteractiveWrapper 
            icon="plus" 
            variant="success" 
            size="lg" 
            initialCount={12500} 
            maxCount={99999}
            formatCount={(count) => count.toLocaleString()}
          />
          <InteractiveWrapper 
            icon="star" 
            variant="glow" 
            size="lg" 
            initialCount={89} 
            counterEffect="bounce"
          />
        </div>
      </div>

      {/* Voting System */}
      <div className="space-y-4 p-6 border rounded-lg bg-white dark:bg-neutral-900">
        <h3 className="text-lg font-semibold">Community Voting</h3>
        <div className="flex items-center gap-4">
          <InteractiveWrapper 
            icon="plus" 
            variant="success" 
            size="default" 
            initialCount={234} 
            counterEffect="pop"
          />
          <InteractiveWrapper 
            icon="minus" 
            variant="destructive" 
            size="default" 
            initialCount={12} 
            counterEffect="pop"
          />
          <div className="ml-4 text-sm text-muted-foreground">
            Net Score: +222
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Real-world usage examples showing the like counter in different application contexts.',
      },
    },
  },
}

export const StatesAndInteractions: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Interactive States</h3>
        <div className="space-y-3">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Normal State</p>
            <InteractiveWrapper initialCount={42} />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Liked State</p>
            <InteractiveWrapper initialCount={43} initialLiked />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Disabled State</p>
            <LikeCounter count={42} liked={false} disabled onClick={() => {}} />
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Count Variations</h3>
        <div className="space-y-3">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Small Numbers</p>
            <InteractiveWrapper initialCount={8} />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Large Numbers</p>
            <InteractiveWrapper initialCount={15600} />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">No Count Display</p>
            <InteractiveWrapper initialCount={42} showCount={false} />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">With Max Count</p>
            <InteractiveWrapper initialCount={99} maxCount={100} />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different states and count variations of the like counter.',
      },
    },
  },
}

export const AccessibilityDemo: Story = {
  render: () => (
    <div className="space-y-6 p-8">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold">Accessibility Features</h2>
        <p className="text-muted-foreground">Focus states, keyboard navigation, and screen reader support</p>
      </div>
      
      <div className="grid grid-cols-3 gap-6">
        <div className="space-y-3">
          <h3 className="font-medium">Focus States</h3>
          <InteractiveWrapper 
            variant="outline" 
            initialCount={42} 
            className="focus-visible:ring-2 focus-visible:ring-primary-500" 
          />
        </div>
        
        <div className="space-y-3">
          <h3 className="font-medium">High Contrast</h3>
          <InteractiveWrapper 
            variant="outline" 
            initialCount={156} 
            className="contrast-more:border-4 contrast-more:border-black dark:contrast-more:border-white" 
          />
        </div>
        
        <div className="space-y-3">
          <h3 className="font-medium">Reduced Motion</h3>
          <InteractiveWrapper 
            initialCount={89} 
            className="motion-reduce:transition-none motion-reduce:animate-none" 
            animated={false}
          />
        </div>
      </div>
      
      <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
        <h3 className="font-medium mb-2">Keyboard Navigation</h3>
        <p className="text-sm text-muted-foreground">
          Use <kbd className="px-1 py-0.5 text-xs bg-white dark:bg-neutral-800 border rounded">Tab</kbd> to focus, 
          <kbd className="px-1 py-0.5 text-xs bg-white dark:bg-neutral-800 border rounded ml-1">Space</kbd> or 
          <kbd className="px-1 py-0.5 text-xs bg-white dark:bg-neutral-800 border rounded ml-1">Enter</kbd> to activate.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features including focus states, high contrast support, and reduced motion preferences.',
      },
    },
  },
}

export const DesignTokensShowcase: Story = {
  render: () => (
    <div className="space-y-8 p-8 max-w-6xl">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Design Tokens Integration</h1>
        <p className="text-muted-foreground">Comprehensive demonstration using OKLCH color space and design system tokens</p>
      </div>
      
      {/* Color System */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">OKLCH Color System</h2>
        <div className="grid grid-cols-5 gap-4">
          <div className="text-center space-y-2">
            <InteractiveWrapper variant="default" icon="heart" initialCount={42} />
            <p className="text-xs text-muted-foreground">Primary Scale</p>
          </div>
          <div className="text-center space-y-2">
            <InteractiveWrapper variant="success" icon="thumbsUp" initialCount={156} />
            <p className="text-xs text-muted-foreground">Success Scale</p>
          </div>
          <div className="text-center space-y-2">
            <InteractiveWrapper variant="warning" icon="star" initialCount={89} />
            <p className="text-xs text-muted-foreground">Warning Scale</p>
          </div>
          <div className="text-center space-y-2">
            <InteractiveWrapper variant="destructive" icon="heart" initialCount={23} />
            <p className="text-xs text-muted-foreground">Error Scale</p>
          </div>
          <div className="text-center space-y-2">
            <InteractiveWrapper variant="ghost" icon="plus" initialCount={67} />
            <p className="text-xs text-muted-foreground">Neutral Scale</p>
          </div>
        </div>
      </div>

      {/* Spacing System */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Spacing System</h2>
        <div className="flex items-end gap-6 justify-center">
          <div className="text-center space-y-2">
            <InteractiveWrapper size="xs" initialCount={5} />
            <p className="text-xs text-muted-foreground">h-6 px-2</p>
          </div>
          <div className="text-center space-y-2">
            <InteractiveWrapper size="sm" initialCount={42} />
            <p className="text-xs text-muted-foreground">h-8 px-3</p>
          </div>
          <div className="text-center space-y-2">
            <InteractiveWrapper size="default" initialCount={156} />
            <p className="text-xs text-muted-foreground">h-10 px-4</p>
          </div>
          <div className="text-center space-y-2">
            <InteractiveWrapper size="lg" initialCount={1240} />
            <p className="text-xs text-muted-foreground">h-12 px-5</p>
          </div>
          <div className="text-center space-y-2">
            <InteractiveWrapper size="xl" initialCount={15600} />
            <p className="text-xs text-muted-foreground">h-14 px-6</p>
          </div>
        </div>
      </div>

      {/* Animation System */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Animation System</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center space-y-2">
            <InteractiveWrapper 
              variant="glow" 
              icon="heart" 
              animated 
              counterEffect="bounce" 
              initialCount={42} 
            />
            <p className="text-xs text-muted-foreground">Bounce Effect</p>
          </div>
          <div className="text-center space-y-2">
            <InteractiveWrapper 
              variant="glass" 
              icon="star" 
              animated 
              counterEffect="pop" 
              initialCount={156} 
            />
            <p className="text-xs text-muted-foreground">Pop Effect</p>
          </div>
          <div className="text-center space-y-2">
            <InteractiveWrapper 
              variant="outline" 
              icon="thumbsUp" 
              animated 
              counterEffect="slide" 
              initialCount={89} 
            />
            <p className="text-xs text-muted-foreground">Slide Effect</p>
          </div>
          <div className="text-center space-y-2">
            <InteractiveWrapper 
              variant="filled" 
              icon="trending" 
              animated 
              counterEffect="glow" 
              initialCount={234} 
            />
            <p className="text-xs text-muted-foreground">Glow Effect</p>
          </div>
        </div>
      </div>

      {/* Design Benefits */}
      <div className="space-y-4 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-950 dark:to-secondary-950 rounded-lg">
        <h2 className="text-xl font-semibold">Design Token Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="space-y-2">
            <h3 className="font-medium">🎨 Perceptual Uniformity</h3>
            <p className="text-muted-foreground">OKLCH color space ensures consistent lightness and chroma across all variants and interactions.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">⚡ Performance Optimized</h3>
            <p className="text-muted-foreground">Hardware-accelerated animations with anti-blur optimizations for smooth 60fps interactions.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">♿ Accessibility First</h3>
            <p className="text-muted-foreground">Built-in focus states, keyboard navigation, and respect for user motion preferences.</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive showcase demonstrating the like counter integration with the complete design token system.',
      },
    },
  },
}

export const PlaygroundStory: Story = {
  args: {
    count: 42,
    liked: false,
    icon: 'heart',
    variant: 'default',
    size: 'default',
    showCount: true,
    animated: true,
    counterEffect: 'bounce',
    disabled: false,
  },
  render: (args) => <InteractiveWrapper {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test all component properties and see how they work together.',
      },
    },
  },
}