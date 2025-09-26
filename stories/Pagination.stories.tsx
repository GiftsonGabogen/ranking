import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'
import { Pagination } from '@/components/ui/pagination'
import { Card } from '@/components/ui/card'

const meta: Meta<typeof Pagination> = {
  title: 'UI/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A sophisticated pagination component with smooth animations, multiple variants, and enhanced visual effects. Built with design tokens and OKLCH color system for consistent, accessible navigation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1, max: 100 },
      description: 'Current active page number',
    },
    totalPages: {
      control: { type: 'number', min: 1, max: 100 },
      description: 'Total number of pages',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline', 'glass', 'minimal'],
      description: 'Visual style variant of the pagination',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
      description: 'Size of the pagination component',
    },
    showPrevNext: {
      control: { type: 'boolean' },
      description: 'Show previous and next navigation buttons',
    },
    showFirstLast: {
      control: { type: 'boolean' },
      description: 'Show first and last page shortcuts',
    },
    maxVisiblePages: {
      control: { type: 'number', min: 3, max: 15 },
      description: 'Maximum number of page buttons to display',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the entire pagination component',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Interactive wrapper for stories that need state
const PaginationWrapper = ({ 
  initialPage = 1, 
  totalPages = 10,
  ...props 
}: { 
  initialPage?: number
  totalPages?: number
  [key: string]: any 
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage)
  
  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
      {...props}
    />
  )
}

export const Default: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    totalPages: 10,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 p-8 max-w-4xl">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Pagination Variants</h2>
        <p className="text-muted-foreground">Different visual styles using design token system</p>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Default</h3>
          <PaginationWrapper totalPages={10} variant="default" />
        </div>
        
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Outline</h3>
          <PaginationWrapper totalPages={10} variant="outline" />
        </div>
        
        <div className="space-y-3 p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-950/20 dark:to-secondary-950/20 rounded-lg">
          <h3 className="text-lg font-semibold">Glass</h3>
          <PaginationWrapper totalPages={10} variant="glass" />
        </div>
        
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Minimal</h3>
          <PaginationWrapper totalPages={10} variant="minimal" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'All available pagination variants showcasing different visual styles with OKLCH color integration.',
      },
    },
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Pagination Sizes</h2>
        <p className="text-muted-foreground">Different sizes using design token spacing</p>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Small</h3>
          <PaginationWrapper totalPages={10} size="sm" />
        </div>
        
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Default</h3>
          <PaginationWrapper totalPages={10} size="default" />
        </div>
        
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Large</h3>
          <PaginationWrapper totalPages={10} size="lg" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different pagination sizes from small to large using consistent design token spacing.',
      },
    },
  },
}

export const LargePagination: Story = {
  render: () => (
    <div className="space-y-6 p-8 max-w-6xl">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Large Dataset Pagination</h2>
        <p className="text-muted-foreground">Demonstrating pagination with many pages and ellipsis</p>
      </div>
      
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">100 Pages - Current Page 1</h3>
          <PaginationWrapper initialPage={1} totalPages={100} />
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">100 Pages - Current Page 50</h3>
          <PaginationWrapper initialPage={50} totalPages={100} />
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">100 Pages - Current Page 100</h3>
          <PaginationWrapper initialPage={100} totalPages={100} />
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">500 Pages - Current Page 250 (Outline Variant)</h3>
          <PaginationWrapper initialPage={250} totalPages={500} variant="outline" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Large pagination scenarios showing ellipsis behavior and navigation at different positions.',
      },
    },
  },
}

export const CustomConfiguration: Story = {
  render: () => (
    <div className="space-y-8 p-8 max-w-4xl">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Custom Configurations</h2>
        <p className="text-muted-foreground">Various pagination configurations and features</p>
      </div>
      
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">No Previous/Next Buttons</h3>
          <PaginationWrapper totalPages={15} showPrevNext={false} />
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">No First/Last Shortcuts</h3>
          <PaginationWrapper totalPages={20} showFirstLast={false} />
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Maximum 5 Visible Pages</h3>
          <PaginationWrapper totalPages={50} maxVisiblePages={5} initialPage={25} />
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Disabled State</h3>
          <PaginationWrapper totalPages={10} disabled />
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Single Page (Hidden)</h3>
          <div className="p-4 border border-dashed border-neutral-300 dark:border-neutral-600 rounded-lg text-center text-neutral-500">
            <p>Pagination is automatically hidden when totalPages ≤ 1</p>
            <PaginationWrapper totalPages={1} />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Custom pagination configurations including disabled states and visibility options.',
      },
    },
  },
}

export const WithContent: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5
    const totalItems = 47
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    
    const startItem = (currentPage - 1) * itemsPerPage + 1
    const endItem = Math.min(currentPage * itemsPerPage, totalItems)
    
    const generateItems = () => {
      const items = []
      for (let i = startItem; i <= endItem; i++) {
        items.push({
          id: i,
          title: `Item ${i}`,
          description: `This is the description for item number ${i}. Lorem ipsum dolor sit amet.`,
        })
      }
      return items
    }
    
    return (
      <div className="space-y-6 p-8 max-w-4xl">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Pagination with Content</h2>
          <p className="text-muted-foreground">Real-world pagination example with content list</p>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <p>Showing {startItem}-{endItem} of {totalItems} items</p>
            <p>Page {currentPage} of {totalPages}</p>
          </div>
          
          <div className="space-y-3">
            {generateItems().map((item) => (
              <Card key={item.id} className="p-4 hover:shadow-md transition-shadow">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              variant="outline"
            />
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Complete pagination example integrated with content list showing real-world usage.',
      },
    },
  },
}

export const AnimationShowcase: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(5)
    
    return (
      <div className="space-y-8 p-8 max-w-4xl">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Animation Showcase</h2>
          <p className="text-muted-foreground">Enhanced animations and visual effects</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hover Effects & Micro-Animations</h3>
            <div className="p-6 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700 rounded-lg">
              <Pagination
                currentPage={currentPage}
                totalPages={20}
                onPageChange={setCurrentPage}
                variant="default"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Glass Effect with Backdrop Blur</h3>
            <div className="p-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg">
              <Pagination
                currentPage={currentPage}
                totalPages={20}
                onPageChange={setCurrentPage}
                variant="glass"
                size="lg"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Minimal with Underline Animation</h3>
            <div className="p-6 border border-neutral-200 dark:border-neutral-700 rounded-lg">
              <Pagination
                currentPage={currentPage}
                totalPages={20}
                onPageChange={setCurrentPage}
                variant="minimal"
                size="lg"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-primary-50 dark:bg-primary-950/30 rounded-lg">
          <h4 className="font-medium mb-2">✨ Animation Features</h4>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• Hardware-accelerated transitions with transform-gpu</li>
            <li>• Anti-blur optimizations with scale animations</li>
            <li>• Staggered entrance animations with delay</li>
            <li>• Smooth hover effects with shadow and translation</li>
            <li>• Icon animations for navigation buttons</li>
            <li>• Ellipsis rotation and scale effects</li>
          </ul>
        </div>
      </div>
    )
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive showcase of pagination animations and visual effects including hover states, transitions, and micro-animations.',
      },
    },
  },
}

export const ResponsiveDesign: Story = {
  render: () => (
    <div className="space-y-8 p-4 max-w-6xl">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Responsive Design</h2>
        <p className="text-muted-foreground">Pagination adapts to different screen sizes</p>
      </div>
      
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Mobile (Labels Hidden)</h3>
          <div className="max-w-sm border-2 border-dashed border-neutral-300 dark:border-neutral-600 rounded-lg p-4">
            <PaginationWrapper totalPages={20} size="sm" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Tablet</h3>
          <div className="max-w-2xl border-2 border-dashed border-neutral-300 dark:border-neutral-600 rounded-lg p-4">
            <PaginationWrapper totalPages={20} />
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Desktop (Full Labels)</h3>
          <div className="border-2 border-dashed border-neutral-300 dark:border-neutral-600 rounded-lg p-4">
            <PaginationWrapper totalPages={20} size="lg" />
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
        <h4 className="font-medium mb-2">📱 Responsive Features</h4>
        <ul className="text-sm space-y-1 text-muted-foreground">
          <li>• Previous/Next button labels hidden on small screens</li>
          <li>• Adaptive spacing and sizing based on container width</li>
          <li>• Touch-friendly hit targets for mobile devices</li>
          <li>• Optimized ellipsis placement for narrow screens</li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Responsive pagination behavior across different screen sizes and devices.',
      },
    },
  },
}

export const AccessibilityFeatures: Story = {
  render: () => (
    <div className="space-y-8 p-8 max-w-4xl">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Accessibility Features</h2>
        <p className="text-muted-foreground">Built-in accessibility support for all users</p>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Keyboard Navigation</h3>
          <div className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
            <PaginationWrapper totalPages={10} />
            <p className="text-sm text-muted-foreground mt-2">
              Use Tab to navigate between elements, Enter/Space to activate
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Focus Indicators</h3>
          <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
            <PaginationWrapper totalPages={10} variant="outline" />
            <p className="text-sm text-muted-foreground mt-2">
              Focus rings are visible and meet accessibility contrast requirements
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Screen Reader Support</h3>
          <div className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
            <PaginationWrapper totalPages={10} variant="minimal" />
            <p className="text-sm text-muted-foreground mt-2">
              Proper ARIA labels and semantic HTML structure for screen readers
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-success-50 dark:bg-success-950/30 rounded-lg">
        <h4 className="font-medium mb-2 text-success-700 dark:text-success-300">♿ Accessibility Features</h4>
        <ul className="text-sm space-y-1 text-success-700 dark:text-success-300">
          <li>• Semantic HTML with proper navigation landmarks</li>
          <li>• ARIA labels for screen reader compatibility</li>
          <li>• Keyboard navigation with visible focus indicators</li>
          <li>• High contrast focus rings meeting WCAG guidelines</li>
          <li>• Proper color contrast ratios for all variants</li>
          <li>• Disabled states with appropriate ARIA attributes</li>
          <li>• Touch-friendly minimum target sizes (44px)</li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive accessibility features including keyboard navigation, focus management, and screen reader support.',
      },
    },
  },
}

export const DesignTokensShowcase: Story = {
  render: () => (
    <div className="space-y-8 p-8 max-w-6xl">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Design Tokens Integration</h1>
        <p className="text-muted-foreground">Comprehensive demonstration of pagination using OKLCH design tokens</p>
      </div>
      
      {/* OKLCH Color Showcase */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">OKLCH Color System</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Primary Color Scale</h3>
            <div className="space-y-2">
              <PaginationWrapper totalPages={5} size="sm" className="justify-start" />
              <p className="text-xs text-muted-foreground">Primary 600/700 gradient with shadow</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Neutral Color Scale</h3>
            <div className="space-y-2">
              <PaginationWrapper totalPages={5} variant="outline" size="sm" className="justify-start" />
              <p className="text-xs text-muted-foreground">Neutral scale with consistent lightness</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Consistent Spacing */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Design Token Spacing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3 text-center">
            <h3 className="text-lg font-medium">Small (h-8, px-2)</h3>
            <PaginationWrapper totalPages={5} size="sm" />
          </div>
          
          <div className="space-y-3 text-center">
            <h3 className="text-lg font-medium">Default (h-9, px-3)</h3>
            <PaginationWrapper totalPages={5} size="default" />
          </div>
          
          <div className="space-y-3 text-center">
            <h3 className="text-lg font-medium">Large (h-10, px-4)</h3>
            <PaginationWrapper totalPages={5} size="lg" />
          </div>
        </div>
      </div>
      
      {/* Enhanced Visual Effects */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Enhanced Visual Effects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 p-6 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700 rounded-lg">
            <h3 className="font-medium">Shadow & Elevation</h3>
            <PaginationWrapper totalPages={8} />
            <p className="text-sm text-muted-foreground">Consistent shadow system with hover elevation</p>
          </div>
          
          <div className="space-y-4 p-6 bg-gradient-to-br from-primary-500 via-purple-500 to-secondary-500 rounded-lg">
            <h3 className="font-medium text-white">Glass Morphism</h3>
            <PaginationWrapper totalPages={8} variant="glass" />
            <p className="text-sm text-white/80">Backdrop blur with translucent surfaces</p>
          </div>
        </div>
      </div>
      
      {/* Real-world Scenarios */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Real-world Usage Scenarios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <h3 className="font-medium">Data Tables</h3>
            <PaginationWrapper totalPages={50} variant="outline" maxVisiblePages={5} initialPage={25} />
            <p className="text-sm text-muted-foreground">Large datasets with condensed navigation</p>
          </div>
          
          <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <h3 className="font-medium">Content Lists</h3>
            <PaginationWrapper totalPages={12} variant="minimal" showFirstLast={false} />
            <p className="text-sm text-muted-foreground">Clean minimal design for content browsing</p>
          </div>
        </div>
      </div>
      
      {/* Design Benefits */}
      <div className="space-y-4 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-950 dark:to-secondary-950 rounded-lg">
        <h2 className="text-xl font-semibold">Design Token Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="space-y-2">
            <h3 className="font-medium">🎨 OKLCH Color Space</h3>
            <p className="text-muted-foreground">Perceptually uniform colors ensuring consistent contrast and accessibility across all variants.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">📏 Mathematical Spacing</h3>
            <p className="text-muted-foreground">Consistent spacing scale creating visual harmony and predictable layouts.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">🌙 Dark Mode Ready</h3>
            <p className="text-muted-foreground">Semantic color tokens with automatic dark mode adaptation and proper contrast ratios.</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive showcase demonstrating the pagination component integration with the OKLCH design token system, showcasing consistent spacing, semantic colors, and enhanced visual effects.',
      },
    },
  },
}