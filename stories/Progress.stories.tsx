import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Progress, UploadProgress, TaskProgress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { 
  Upload, 
  Download, 
  Save, 
  RefreshCw,
  FileText,
  Image,
  Video,
  Music,
  Archive,
  CheckCircle,
  XCircle,
  Clock
} from 'lucide-react'

const meta: Meta<typeof Progress> = {
  title: 'UI/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive progress bar component system with multiple variants, animations, and specialized components for upload and task progress tracking using design tokens.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error', 'glass', 'gradient'],
      description: 'The visual variant using design token semantic colors',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'default', 'lg', 'xl'],
      description: 'The size/thickness of the progress bar',
    },
    animation: {
      control: { type: 'select' },
      options: ['none', 'pulse', 'shimmer', 'glow', 'slide'],
      description: 'The animation type for the progress bar',
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'The current progress value',
    },
    max: {
      control: { type: 'number' },
      description: 'The maximum progress value',
    },
    showLabel: {
      control: { type: 'boolean' },
      description: 'Whether to show the label text',
    },
    showPercentage: {
      control: { type: 'boolean' },
      description: 'Whether to show the percentage value',
    },
    indeterminate: {
      control: { type: 'boolean' },
      description: 'Whether to show indeterminate (unknown duration) progress',
    },
  },
  args: {
    value: 45,
    max: 100,
    showPercentage: true,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 45,
    label: 'Loading progress',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Default</h3>
        <Progress variant="default" value={45} showPercentage />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Primary</h3>
        <Progress variant="primary" value={60} showPercentage />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Secondary</h3>
        <Progress variant="secondary" value={75} showPercentage />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Success</h3>
        <Progress variant="success" value={100} showPercentage />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Warning</h3>
        <Progress variant="warning" value={85} showPercentage />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Error</h3>
        <Progress variant="error" value={30} showPercentage />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Glass</h3>
        <div className="p-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg">
          <Progress variant="glass" value={70} showPercentage />
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Gradient</h3>
        <Progress variant="gradient" value={55} showPercentage />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available progress bar variants with design token colors and dark mode support.',
      },
    },
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <div className="space-y-2">
        <h3 className="text-xs font-medium text-muted-foreground">Extra Small (xs)</h3>
        <Progress size="xs" value={45} showPercentage />
      </div>
      <div className="space-y-2">
        <h3 className="text-xs font-medium text-muted-foreground">Small (sm)</h3>
        <Progress size="sm" value={45} showPercentage />
      </div>
      <div className="space-y-2">
        <h3 className="text-xs font-medium text-muted-foreground">Default</h3>
        <Progress size="default" value={45} showPercentage />
      </div>
      <div className="space-y-2">
        <h3 className="text-xs font-medium text-muted-foreground">Large (lg)</h3>
        <Progress size="lg" value={45} showPercentage />
      </div>
      <div className="space-y-2">
        <h3 className="text-xs font-medium text-muted-foreground">Extra Large (xl)</h3>
        <Progress size="xl" value={45} showPercentage />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different progress bar sizes from extra small to extra large.',
      },
    },
  },
}

export const AllAnimations: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">No Animation</h3>
        <Progress animation="none" value={45} showPercentage />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Pulse Animation</h3>
        <Progress animation="pulse" value={60} showPercentage />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Shimmer Animation</h3>
        <Progress animation="shimmer" value={75} showPercentage />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Glow Animation</h3>
        <Progress animation="glow" variant="primary" value={85} showPercentage />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Slide Animation</h3>
        <Progress animation="slide" variant="success" value={95} showPercentage />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different animation effects for progress bars including pulse, shimmer, glow, and slide animations.',
      },
    },
  },
}

export const IndeterminateProgress: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Default Indeterminate</h3>
        <Progress indeterminate label="Processing..." />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Primary Indeterminate</h3>
        <Progress variant="primary" indeterminate label="Uploading files..." />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Success Indeterminate</h3>
        <Progress variant="success" indeterminate label="Saving changes..." />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Large Indeterminate</h3>
        <Progress variant="gradient" size="lg" indeterminate label="Installing updates..." />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Indeterminate progress bars for when the duration is unknown. Features a sliding animation.',
      },
    },
  },
}

export const WithLabels: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <div className="space-y-2">
        <Progress value={25} showLabel showPercentage label="Download Progress" />
      </div>
      <div className="space-y-2">
        <Progress 
          variant="success" 
          value={100} 
          showLabel 
          showPercentage 
          label="Upload Complete" 
        />
      </div>
      <div className="space-y-2">
        <Progress 
          variant="warning" 
          value={75} 
          showLabel 
          label="Processing Images"
          formatValue={(value, max) => `${value}/${max} files`}
        />
      </div>
      <div className="space-y-2">
        <Progress 
          variant="primary" 
          value={45} 
          max={250}
          showLabel 
          showPercentage 
          label="Memory Usage" 
          formatValue={(value, max) => `${value}MB / ${max}MB`}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Progress bars with labels and custom value formatting.',
      },
    },
  },
}

export const InteractiveDemo: Story = {
  render: () => {
    const [progress, setProgress] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    const startProgress = () => {
      setIsRunning(true)
      setProgress(0)
      
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer)
            setIsRunning(false)
            return 100
          }
          return prev + Math.random() * 15
        })
      }, 300)
    }

    const resetProgress = () => {
      setProgress(0)
      setIsRunning(false)
    }

    return (
      <div className="space-y-6 w-96">
        <div className="space-y-4">
          <div className="flex gap-2">
            <Button onClick={startProgress} disabled={isRunning} size="sm">
              {isRunning ? (
                <>
                  <RefreshCw className="animate-spin" size={14} />
                  Running...
                </>
              ) : (
                <>
                  <RefreshCw size={14} />
                  Start Progress
                </>
              )}
            </Button>
            <Button variant="outline" onClick={resetProgress} size="sm">
              Reset
            </Button>
          </div>
          
          <div className="space-y-4">
            <Progress 
              value={progress} 
              showLabel 
              showPercentage 
              label="Interactive Progress"
              animation={isRunning ? "shimmer" : "none"}
              variant={progress === 100 ? "success" : "primary"}
            />
            
            <Progress 
              size="lg"
              value={progress} 
              showPercentage 
              animation={isRunning ? "glow" : "none"}
              variant={progress === 100 ? "success" : "gradient"}
            />
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo showing animated progress with start/reset controls.',
      },
    },
  },
}

export const UploadProgressDemo: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <UploadProgress 
        value={25}
        fileName="document.pdf"
        fileSize="2.4 MB"
        uploadSpeed="1.2 MB/s"
        timeRemaining="2 seconds"
        animation="shimmer"
      />
      
      <UploadProgress 
        value={75}
        fileName="presentation-slides.pptx"
        fileSize="15.8 MB"
        uploadSpeed="850 KB/s"
        timeRemaining="5 seconds"
        variant="secondary"
        animation="pulse"
      />
      
      <UploadProgress 
        value={100}
        fileName="project-images.zip"
        fileSize="45.2 MB"
        uploadSpeed="2.1 MB/s"
        timeRemaining="Complete"
        variant="success"
        label="Upload Complete"
      />
      
      <UploadProgress 
        indeterminate
        fileName="video-file.mp4"
        fileSize="128.5 MB"
        label="Processing..."
        variant="warning"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Specialized upload progress component with file information and upload statistics.',
      },
    },
  },
}

export const TaskProgressDemo: Story = {
  render: () => (
    <div className="space-y-6 max-w-lg">
      <TaskProgress 
        value={40}
        title="Building Project"
        description="Compiling TypeScript and bundling assets"
        status="running"
        steps={[
          { label: "Install dependencies", completed: true },
          { label: "Type checking", completed: true },
          { label: "Building components", completed: false },
          { label: "Optimizing assets", completed: false },
          { label: "Generating bundle", completed: false },
        ]}
      />
      
      <TaskProgress 
        value={100}
        title="Deployment Complete"
        description="Successfully deployed to production"
        status="completed"
        steps={[
          { label: "Code review", completed: true },
          { label: "Run tests", completed: true },
          { label: "Build application", completed: true },
          { label: "Deploy to staging", completed: true },
          { label: "Deploy to production", completed: true },
        ]}
      />
      
      <TaskProgress 
        value={65}
        title="Data Migration"
        description="Migrating user data to new schema"
        status="running"
        variant="secondary"
        steps={[
          { label: "Backup existing data", completed: true },
          { label: "Validate schema", completed: true },
          { label: "Migrate user profiles", completed: false },
          { label: "Update indexes", completed: false },
          { label: "Verify integrity", completed: false },
        ]}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Task progress component for tracking multi-step operations with detailed steps and status.',
      },
    },
  },
}

export const RealWorldScenarios: Story = {
  render: () => (
    <div className="space-y-8 max-w-4xl">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Real-World Progress Scenarios</h2>
        <p className="text-muted-foreground">Common use cases with appropriate progress indicators</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* File Operations */}
        <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
          <h3 className="font-semibold flex items-center gap-2">
            <Download size={18} />
            File Operations
          </h3>
          <div className="space-y-4">
            <UploadProgress 
              value={85}
              fileName="quarterly-report.pdf"
              fileSize="3.2 MB"
              uploadSpeed="1.8 MB/s"
              timeRemaining="1 second"
              size="sm"
            />
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  <Image size={14} />
                  Batch image resize
                </span>
                <span className="text-muted-foreground">47/120 files</span>
              </div>
              <Progress 
                value={39} 
                max={120}
                variant="secondary" 
                animation="shimmer"
                size="sm"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  <Archive size={14} />
                  Creating backup
                </span>
              </div>
              <Progress 
                indeterminate
                variant="warning" 
                size="sm"
              />
            </div>
          </div>
        </div>

        {/* System Operations */}
        <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
          <h3 className="font-semibold flex items-center gap-2">
            <RefreshCw size={18} />
            System Operations
          </h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>System Update</span>
                <span className="text-muted-foreground">Installing...</span>
              </div>
              <Progress 
                value={72} 
                variant="primary" 
                animation="glow"
                size="sm"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Database Optimization</span>
                <span className="text-success-600 dark:text-success-400 flex items-center gap-1">
                  <CheckCircle size={12} />
                  Complete
                </span>
              </div>
              <Progress 
                value={100} 
                variant="success"
                size="sm"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Memory Usage</span>
                <span className="text-warning-600 dark:text-warning-400">8.2 GB / 16 GB</span>
              </div>
              <Progress 
                value={51} 
                variant="warning"
                size="sm"
              />
            </div>
          </div>
        </div>

        {/* Build Processes */}
        <div className="space-y-4 p-6 border rounded-lg bg-primary-50/50 dark:bg-primary-900/10">
          <h3 className="font-semibold flex items-center gap-2 text-primary-700 dark:text-primary-400">
            <FileText size={18} />
            Build & Deploy
          </h3>
          <TaskProgress 
            value={85}
            title="Production Deployment"
            description="Building and deploying to production server"
            status="running"
            size="sm"
            steps={[
              { label: "Install dependencies", completed: true },
              { label: "Run tests", completed: true },
              { label: "Build application", completed: true },
              { label: "Deploy to staging", completed: true },
              { label: "Deploy to production", completed: false },
            ]}
          />
        </div>

        {/* Media Processing */}
        <div className="space-y-4 p-6 border rounded-lg bg-secondary-50/50 dark:bg-secondary-900/10">
          <h3 className="font-semibold flex items-center gap-2 text-secondary-700 dark:text-secondary-400">
            <Video size={18} />
            Media Processing
          </h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  <Video size={14} />
                  Video transcoding
                </span>
                <span className="text-muted-foreground">02:35 remaining</span>
              </div>
              <Progress 
                value={63} 
                variant="secondary" 
                animation="shimmer"
                size="lg"
                showPercentage
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  <Music size={14} />
                  Audio extraction
                </span>
              </div>
              <Progress 
                indeterminate
                variant="gradient" 
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
        story: 'Comprehensive real-world scenarios showing file operations, system tasks, build processes, and media processing with appropriate progress indicators.',
      },
    },
  },
}

export const DesignTokenShowcase: Story = {
  render: () => (
    <div className="space-y-8 max-w-6xl">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Design Token Integration</h1>
        <p className="text-muted-foreground">Progress components using OKLCH color space and consistent design tokens</p>
      </div>
      
      {/* Color Scale Consistency */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">OKLCH Color Scale Consistency</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Primary Scale</h3>
            <div className="space-y-3 p-4 bg-primary-50/50 dark:bg-primary-900/10 rounded-lg">
              <Progress variant="primary" value={45} size="lg" showPercentage />
              <Progress variant="primary" value={75} animation="shimmer" showPercentage />
              <Progress variant="primary" indeterminate size="sm" />
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Semantic Colors</h3>
            <div className="space-y-3 p-4 bg-success-50/50 dark:bg-success-900/10 rounded-lg">
              <Progress variant="success" value={100} size="sm" showPercentage />
              <Progress variant="warning" value={60} size="sm" showPercentage />
              <Progress variant="error" value={25} size="sm" showPercentage />
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Glass & Gradients</h3>
            <div className="space-y-3 p-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg">
              <Progress variant="glass" value={70} size="lg" showPercentage />
              <Progress variant="gradient" value={85} animation="glow" showPercentage />
            </div>
          </div>
        </div>
      </div>

      {/* Animation Showcase */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Animation Effects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 p-6 border rounded-lg">
            <h3 className="text-lg font-medium">Determinate Animations</h3>
            <div className="space-y-3">
              <div className="space-y-1">
                <span className="text-sm text-muted-foreground">Shimmer Effect</span>
                <Progress value={65} animation="shimmer" variant="primary" />
              </div>
              <div className="space-y-1">
                <span className="text-sm text-muted-foreground">Glow Effect</span>
                <Progress value={80} animation="glow" variant="success" />
              </div>
              <div className="space-y-1">
                <span className="text-sm text-muted-foreground">Pulse Effect</span>
                <Progress value={45} animation="pulse" variant="secondary" />
              </div>
            </div>
          </div>
          
          <div className="space-y-4 p-6 border rounded-lg">
            <h3 className="text-lg font-medium">Indeterminate States</h3>
            <div className="space-y-3">
              <div className="space-y-1">
                <span className="text-sm text-muted-foreground">Default Indeterminate</span>
                <Progress indeterminate variant="primary" />
              </div>
              <div className="space-y-1">
                <span className="text-sm text-muted-foreground">Gradient Indeterminate</span>
                <Progress indeterminate variant="gradient" />
              </div>
              <div className="space-y-1">
                <span className="text-sm text-muted-foreground">Glass Indeterminate</span>
                <div className="p-3 bg-gradient-to-r from-primary-400 to-secondary-400 rounded">
                  <Progress indeterminate variant="glass" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specialized Components */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Specialized Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Upload Progress</h3>
            <UploadProgress 
              value={75}
              fileName="design-system.fig"
              fileSize="24.8 MB"
              uploadSpeed="2.1 MB/s"
              timeRemaining="3 seconds"
              variant="primary"
              animation="shimmer"
            />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Task Progress</h3>
            <TaskProgress 
              value={60}
              title="Component Generation"
              description="Creating UI components from design tokens"
              status="running"
              variant="gradient"
              size="sm"
              steps={[
                { label: "Parse design tokens", completed: true },
                { label: "Generate components", completed: false },
                { label: "Apply styling", completed: false },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Accessibility Features */}
      <div className="space-y-4 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-950 dark:to-secondary-950 rounded-lg">
        <h2 className="text-xl font-semibold">Accessibility & UX Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="space-y-2">
            <h3 className="font-medium">🔊 Screen Reader Support</h3>
            <p className="text-muted-foreground">ARIA progressbar with min, max, and current values.</p>
            <Progress value={45} aria-label="File upload progress" showPercentage />
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">🎨 Reduced Motion Respect</h3>
            <p className="text-muted-foreground">Animations respect prefers-reduced-motion.</p>
            <Progress value={70} animation="pulse" variant="success" showPercentage />
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">🌙 Dark Mode Ready</h3>
            <p className="text-muted-foreground">Automatic contrast adjustments for optimal visibility.</p>
            <Progress value={85} variant="secondary" animation="glow" showPercentage />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive showcase of the progress component system with OKLCH design tokens, animations, specialized components, and accessibility features.',
      },
    },
  },
}