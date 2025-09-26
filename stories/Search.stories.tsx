import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Search, SearchSuggestion } from '@/components/ui/search'
import { FormField } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { 
  Search as SearchIcon,
  User, 
  Mail, 
  MapPin, 
  Calendar,
  Star,
  Hash,
  FileText,
  Settings,
  Command,
  Globe,
  Clock,
  Tag,
  Building,
  Briefcase,
  Heart,
  Bookmark,
  Shield,
  Trophy
} from 'lucide-react'
import { useState } from 'react'

// Sample suggestions data for stories
const sampleSuggestions: SearchSuggestion[] = [
  {
    id: 1,
    label: "John Doe",
    value: "john-doe",
    description: "Senior Developer at TechCorp",
    category: "People",
    icon: <User className="w-4 h-4" />,
    meta: "Online"
  },
  {
    id: 2,
    label: "React Documentation",
    value: "react-docs",
    description: "Official React documentation and guides",
    category: "Documentation",
    icon: <FileText className="w-4 h-4" />,
    meta: "Updated 2d ago"
  },
  {
    id: 3,
    label: "Project Alpha",
    value: "project-alpha",
    description: "Next-generation web application",
    category: "Projects",
    icon: <Briefcase className="w-4 h-4" />,
    meta: "Active"
  },
  {
    id: 4,
    label: "New York Office",
    value: "ny-office",
    description: "123 Main Street, New York, NY 10001",
    category: "Locations",
    icon: <MapPin className="w-4 h-4" />,
    meta: "Open"
  },
  {
    id: 5,
    label: "Team Meeting",
    value: "team-meeting",
    description: "Weekly standup at 10:00 AM",
    category: "Events",
    icon: <Calendar className="w-4 h-4" />,
    meta: "Tomorrow"
  },
  {
    id: 6,
    label: "Design System",
    value: "design-system",
    description: "UI components and design tokens",
    category: "Resources",
    icon: <Star className="w-4 h-4" />,
    meta: "Favorite"
  },
  {
    id: 7,
    label: "Settings",
    value: "settings",
    description: "Configure your preferences",
    category: "Navigation",
    icon: <Settings className="w-4 h-4" />
  },
  {
    id: 8,
    label: "Commands",
    value: "commands",
    description: "Keyboard shortcuts and actions",
    category: "Help",
    icon: <Command className="w-4 h-4" />
  },
  {
    id: 9,
    label: "Website Analytics",
    value: "analytics",
    description: "Traffic and performance metrics",
    category: "Tools",
    icon: <Globe className="w-4 h-4" />,
    meta: "Live data"
  },
  {
    id: 10,
    label: "Recent Activity",
    value: "activity",
    description: "Your recent actions and history",
    category: "History",
    icon: <Clock className="w-4 h-4" />,
    meta: "2m ago"
  }
]

const productSuggestions: SearchSuggestion[] = [
  {
    id: 1,
    label: "MacBook Pro 16\"",
    value: "macbook-pro-16",
    description: "Apple M3 Pro chip, 32GB RAM, 1TB SSD",
    category: "Laptops",
    icon: <Trophy className="w-4 h-4" />,
    meta: "$2,899"
  },
  {
    id: 2,
    label: "iPhone 15 Pro",
    value: "iphone-15-pro",
    description: "6.1-inch display, 256GB storage, Titanium",
    category: "Phones",
    icon: <Star className="w-4 h-4" />,
    meta: "$1,199"
  },
  {
    id: 3,
    label: "AirPods Pro",
    value: "airpods-pro",
    description: "Active Noise Cancellation, Spatial Audio",
    category: "Audio",
    icon: <Heart className="w-4 h-4" />,
    meta: "$249"
  },
  {
    id: 4,
    label: "iPad Air",
    value: "ipad-air",
    description: "10.9-inch Liquid Retina display, M2 chip",
    category: "Tablets",
    icon: <Bookmark className="w-4 h-4" />,
    meta: "$599"
  },
  {
    id: 5,
    label: "Apple Watch Series 9",
    value: "apple-watch-9",
    description: "GPS + Cellular, 45mm, Sport Band",
    category: "Wearables",
    icon: <Shield className="w-4 h-4" />,
    meta: "$429"
  }
]

const locationSuggestions: SearchSuggestion[] = [
  {
    id: 1,
    label: "San Francisco, CA",
    value: "san-francisco",
    description: "California, United States",
    category: "Cities",
    icon: <MapPin className="w-4 h-4" />,
    meta: "SF"
  },
  {
    id: 2,
    label: "New York, NY",
    value: "new-york",
    description: "New York, United States",
    category: "Cities",
    icon: <MapPin className="w-4 h-4" />,
    meta: "NYC"
  },
  {
    id: 3,
    label: "London, UK",
    value: "london",
    description: "England, United Kingdom",
    category: "Cities",
    icon: <MapPin className="w-4 h-4" />,
    meta: "LON"
  },
  {
    id: 4,
    label: "Tokyo, Japan",
    value: "tokyo",
    description: "Kantō region, Japan",
    category: "Cities",
    icon: <MapPin className="w-4 h-4" />,
    meta: "TYO"
  }
]

const meta: Meta<typeof Search> = {
  title: 'UI/Search',
  component: Search,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A powerful search component with suggestions, filtering, and keyboard navigation using OKLCH design tokens for consistent styling and animations.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline', 'ghost', 'filled'],
      description: 'The visual style variant of the search input',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'default', 'lg', 'xl'],
      description: 'The size of the search input',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Show loading spinner',
    },
    showClearButton: {
      control: { type: 'boolean' },
      description: 'Show clear button when input has value',
    },
    filterSuggestions: {
      control: { type: 'boolean' },
      description: 'Filter suggestions based on input value',
    },
    highlightMatches: {
      control: { type: 'boolean' },
      description: 'Highlight matching text in suggestions',
    },
    maxSuggestions: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Maximum number of suggestions to show',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Search...',
    suggestions: sampleSuggestions,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6 w-[500px]">
      <div className="space-y-2">
        <label className="text-sm font-medium">Default</label>
        <Search variant="default" placeholder="Default search" suggestions={sampleSuggestions.slice(0, 5)} />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Outline</label>
        <Search variant="outline" placeholder="Outline search" suggestions={sampleSuggestions.slice(0, 5)} />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Ghost</label>
        <Search variant="ghost" placeholder="Ghost search" suggestions={sampleSuggestions.slice(0, 5)} />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Filled</label>
        <Search variant="filled" placeholder="Filled search" suggestions={sampleSuggestions.slice(0, 5)} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available search variants showcasing different visual styles using design token semantic colors.',
      },
    },
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 w-[500px]">
      <Search size="xs" placeholder="Extra small search" suggestions={sampleSuggestions.slice(0, 3)} />
      <Search size="sm" placeholder="Small search" suggestions={sampleSuggestions.slice(0, 3)} />
      <Search size="default" placeholder="Default search" suggestions={sampleSuggestions.slice(0, 3)} />
      <Search size="lg" placeholder="Large search" suggestions={sampleSuggestions.slice(0, 3)} />
      <Search size="xl" placeholder="Extra large search" suggestions={sampleSuggestions.slice(0, 3)} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different search sizes from extra small to extra large using design token spacing.',
      },
    },
  },
}

export const WithLoading: Story = {
  render: () => {
    const [loading, setLoading] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    
    const handleSearch = (value: string) => {
      setSearchValue(value)
      if (value.trim()) {
        setLoading(true)
        // Simulate API call
        setTimeout(() => setLoading(false), 1500)
      } else {
        setLoading(false)
      }
    }
    
    return (
      <div className="space-y-4 w-[500px]">
        <Search
          placeholder="Search with loading state..."
          suggestions={sampleSuggestions}
          loading={loading}
          onChange={handleSearch}
          value={searchValue}
        />
        <Button onClick={() => setLoading(!loading)}>
          Toggle Loading
        </Button>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Search component with loading state that shows a spinner while processing requests.',
      },
    },
  },
}

export const CustomSuggestions: Story = {
  render: () => (
    <div className="space-y-6 w-[500px]">
      <div className="space-y-2">
        <label className="text-sm font-medium">Product Search</label>
        <Search
          placeholder="Search products..."
          suggestions={productSuggestions}
          onSuggestionSelect={(suggestion) => {
            console.log('Selected product:', suggestion)
          }}
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium">Location Search</label>
        <Search
          placeholder="Search locations..."
          suggestions={locationSuggestions}
          variant="outline"
          onSuggestionSelect={(suggestion) => {
            console.log('Selected location:', suggestion)
          }}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Search components with custom suggestion data for different use cases like products and locations.',
      },
    },
  },
}

export const KeyboardNavigation: Story = {
  render: () => (
    <div className="space-y-4 w-[500px]">
      <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
        <h3 className="font-medium mb-2">Keyboard Navigation</h3>
        <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
          <li><kbd className="px-1.5 py-0.5 bg-neutral-200 dark:bg-neutral-700 rounded text-xs">↑↓</kbd> Navigate suggestions</li>
          <li><kbd className="px-1.5 py-0.5 bg-neutral-200 dark:bg-neutral-700 rounded text-xs">Enter</kbd> Select highlighted suggestion</li>
          <li><kbd className="px-1.5 py-0.5 bg-neutral-200 dark:bg-neutral-700 rounded text-xs">Esc</kbd> Close suggestions</li>
          <li><kbd className="px-1.5 py-0.5 bg-neutral-200 dark:bg-neutral-700 rounded text-xs">Tab</kbd> Close and move to next element</li>
        </ul>
      </div>
      <Search
        placeholder="Try keyboard navigation..."
        suggestions={sampleSuggestions}
        onSuggestionSelect={(suggestion) => {
          alert(`Selected: ${suggestion.label}`)
        }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Search component with full keyboard navigation support for accessibility.',
      },
    },
  },
}

export const SearchConfiguration: Story = {
  render: () => {
    const [filterEnabled, setFilterEnabled] = useState(true)
    const [highlightEnabled, setHighlightEnabled] = useState(true)
    const [maxSuggestions, setMaxSuggestions] = useState(5)
    const [showClear, setShowClear] = useState(true)
    
    return (
      <div className="space-y-6 w-[600px]">
        <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg space-y-4">
          <h3 className="font-medium">Configuration Options</h3>
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filterEnabled}
                onChange={(e) => setFilterEnabled(e.target.checked)}
                className="rounded"
              />
              <span className="text-sm">Filter suggestions</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={highlightEnabled}
                onChange={(e) => setHighlightEnabled(e.target.checked)}
                className="rounded"
              />
              <span className="text-sm">Highlight matches</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={showClear}
                onChange={(e) => setShowClear(e.target.checked)}
                className="rounded"
              />
              <span className="text-sm">Show clear button</span>
            </label>
            <label className="flex items-center space-x-2">
              <span className="text-sm">Max suggestions:</span>
              <input
                type="number"
                value={maxSuggestions}
                onChange={(e) => setMaxSuggestions(Number(e.target.value))}
                min="1"
                max="20"
                className="w-16 px-2 py-1 border rounded"
              />
            </label>
          </div>
        </div>
        
        <Search
          placeholder="Configurable search..."
          suggestions={sampleSuggestions}
          filterSuggestions={filterEnabled}
          highlightMatches={highlightEnabled}
          maxSuggestions={maxSuggestions}
          showClearButton={showClear}
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive configuration panel to test different search component options.',
      },
    },
  },
}

export const RealWorldExamples: Story = {
  render: () => {
    const [selectedUser, setSelectedUser] = useState<SearchSuggestion | null>(null)
    const [selectedProduct, setSelectedProduct] = useState<SearchSuggestion | null>(null)
    
    return (
      <div className="space-y-8 w-[700px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Global Search */}
          <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <h3 className="font-medium flex items-center gap-2">
              <SearchIcon className="w-4 h-4" />
              Global Search
            </h3>
            <Search
              placeholder="Search anything..."
              suggestions={sampleSuggestions}
              size="lg"
              onSuggestionSelect={(suggestion) => {
                console.log('Global search:', suggestion)
              }}
            />
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Search across users, docs, projects, and more
            </p>
          </div>

          {/* User Selection */}
          <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <h3 className="font-medium flex items-center gap-2">
              <User className="w-4 h-4" />
              Assign User
            </h3>
            <Search
              placeholder="Search users..."
              suggestions={sampleSuggestions.filter(s => s.category === 'People')}
              variant="outline"
              onSuggestionSelect={setSelectedUser}
            />
            {selectedUser && (
              <div className="text-xs text-neutral-600 dark:text-neutral-400">
                Selected: <strong>{selectedUser.label}</strong>
              </div>
            )}
          </div>

          {/* E-commerce Search */}
          <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <h3 className="font-medium flex items-center gap-2">
              <Tag className="w-4 h-4" />
              Product Search
            </h3>
            <Search
              placeholder="Search products..."
              suggestions={productSuggestions}
              variant="filled"
              onSuggestionSelect={setSelectedProduct}
              emptyStateMessage="No products found"
            />
            {selectedProduct && (
              <div className="text-xs text-neutral-600 dark:text-neutral-400">
                Added: <strong>{selectedProduct.label}</strong> - {selectedProduct.meta}
              </div>
            )}
          </div>

          {/* Command Palette Style */}
          <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <h3 className="font-medium flex items-center gap-2">
              <Command className="w-4 h-4" />
              Command Palette
            </h3>
            <Search
              placeholder="Type a command..."
              suggestions={sampleSuggestions.filter(s => s.category === 'Navigation' || s.category === 'Help')}
              variant="ghost"
              filterSuggestions={false}
              onSuggestionSelect={(suggestion) => {
                alert(`Executing: ${suggestion.label}`)
              }}
            />
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Quick access to app features and settings
            </p>
          </div>
        </div>

        {/* Advanced Search Form */}
        <div className="p-6 border rounded-lg bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-950/30 dark:to-secondary-950/30">
          <h3 className="font-medium mb-4 flex items-center gap-2">
            <Building className="w-4 h-4" />
            Advanced Search Form
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="Primary Search">
              <Search
                placeholder="Main search query..."
                suggestions={sampleSuggestions}
                size="lg"
              />
            </FormField>
            <FormField label="Location Filter">
              <Search
                placeholder="Filter by location..."
                suggestions={locationSuggestions}
                size="lg"
                variant="outline"
              />
            </FormField>
            <FormField label="Category">
              <Search
                placeholder="Select category..."
                suggestions={[
                  { id: 1, label: "Technology", value: "tech", category: "Categories" },
                  { id: 2, label: "Design", value: "design", category: "Categories" },
                  { id: 3, label: "Business", value: "business", category: "Categories" },
                  { id: 4, label: "Marketing", value: "marketing", category: "Categories" },
                ]}
                filterSuggestions={false}
              />
            </FormField>
            <FormField label="Quick Filter">
              <Search
                placeholder="Tags, keywords..."
                suggestions={[
                  { id: 1, label: "#urgent", value: "urgent", icon: <Hash className="w-4 h-4" /> },
                  { id: 2, label: "#featured", value: "featured", icon: <Star className="w-4 h-4" /> },
                  { id: 3, label: "#recent", value: "recent", icon: <Clock className="w-4 h-4" /> },
                ]}
              />
            </FormField>
          </div>
          <div className="mt-4 flex gap-2">
            <Button>Apply Filters</Button>
            <Button variant="outline">Clear All</Button>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world search implementations for different use cases including global search, user selection, e-commerce, and command palettes.',
      },
    },
  },
}

export const AnimationShowcase: Story = {
  render: () => (
    <div className="space-y-8 w-[600px]">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-semibold">Search Animation & Effects</h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          Smooth transitions and micro-interactions using design token animations
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-medium">Focus & Typing Effects</h3>
          <Search
            placeholder="Focus to see animations..."
            suggestions={sampleSuggestions.slice(0, 4)}
          />
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            Notice the subtle scale effect on focus and icon color transitions
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Dropdown Animations</h3>
          <Search
            placeholder="Type to see dropdown animations..."
            suggestions={sampleSuggestions}
            variant="outline"
          />
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            Smooth fade-in and scale animations with staggered item reveals
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Suggestion Hover Effects</h3>
          <Search
            placeholder="Hover over suggestions..."
            suggestions={sampleSuggestions.slice(0, 6)}
            variant="ghost"
            defaultValue="search"
          />
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            Background transitions and subtle scale effects on hover
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Highlight Animations</h3>
          <Search
            placeholder="Type 'john' or 'react'..."
            suggestions={sampleSuggestions}
            variant="filled"
            highlightMatches={true}
          />
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            Text highlighting with smooth color transitions and emphasis
          </p>
        </div>
      </div>

      <div className="p-4 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-950/30 dark:to-secondary-950/30 rounded-lg">
        <h3 className="font-medium mb-2">Animation Features</h3>
        <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
          <li>• 300ms smooth transitions using design token durations</li>
          <li>• Hardware-accelerated transforms for better performance</li>
          <li>• Easing curves optimized for natural feel</li>
          <li>• Hover states with subtle scaling and color changes</li>
          <li>• Focus indicators with primary color theming</li>
          <li>• Loading spinners with consistent animation timing</li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all search component animations and micro-interactions powered by design token animation utilities.',
      },
    },
  },
}

export const AccessibilityFeatures: Story = {
  render: () => (
    <div className="space-y-6 w-[600px]">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-semibold">Accessibility Features</h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          WCAG compliant search with keyboard navigation and screen reader support
        </p>
      </div>

      <div className="space-y-6">
        <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
          <h3 className="font-medium mb-3">Keyboard Accessibility</h3>
          <Search
            placeholder="Fully keyboard accessible..."
            suggestions={sampleSuggestions}
          />
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-neutral-600 dark:text-neutral-400">
            <div><kbd className="px-1 py-0.5 bg-neutral-200 dark:bg-neutral-700 rounded">↑↓</kbd> Navigate</div>
            <div><kbd className="px-1 py-0.5 bg-neutral-200 dark:bg-neutral-700 rounded">Enter</kbd> Select</div>
            <div><kbd className="px-1 py-0.5 bg-neutral-200 dark:bg-neutral-700 rounded">Esc</kbd> Close</div>
            <div><kbd className="px-1 py-0.5 bg-neutral-200 dark:bg-neutral-700 rounded">Tab</kbd> Navigate out</div>
          </div>
        </div>

        <div className="p-4 bg-success-50 dark:bg-success-950/30 rounded-lg">
          <h3 className="font-medium mb-3 text-success-900 dark:text-success-100">Screen Reader Support</h3>
          <Search
            placeholder="Screen reader friendly..."
            suggestions={sampleSuggestions.slice(0, 4)}
            variant="success"
          />
          <ul className="mt-3 text-xs text-success-800 dark:text-success-200 space-y-1">
            <li>• ARIA labels and roles for assistive technology</li>
            <li>• Live region announcements for suggestions</li>
            <li>• Descriptive text for suggestion metadata</li>
            <li>• Focus management and indication</li>
          </ul>
        </div>

        <div className="p-4 bg-primary-50 dark:bg-primary-950/30 rounded-lg">
          <h3 className="font-medium mb-3 text-primary-900 dark:text-primary-100">Focus Management</h3>
          <Search
            placeholder="Notice focus indicators..."
            suggestions={sampleSuggestions.slice(0, 3)}
            variant="outline"
          />
          <p className="mt-3 text-xs text-primary-800 dark:text-primary-200">
            High contrast focus rings and clear visual hierarchy for keyboard users
          </p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive accessibility features including keyboard navigation, screen reader support, and focus management.',
      },
    },
  },
}

export const DesignTokensShowcase: Story = {
  render: () => (
    <div className="space-y-8 p-8 max-w-4xl">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Design Tokens in Search Components</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Comprehensive demonstration of search components using OKLCH design tokens
        </p>
      </div>

      {/* Color Variants */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Semantic Color Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="Default Theme" hint="Primary brand colors">
            <Search 
              variant="default"
              placeholder="Search with default theme..."
              suggestions={sampleSuggestions.slice(0, 3)}
            />
          </FormField>
          
          <FormField label="Outline Style" hint="Minimal with borders">
            <Search 
              variant="outline"
              placeholder="Search with outline style..."
              suggestions={sampleSuggestions.slice(0, 3)}
            />
          </FormField>
          
          <FormField label="Ghost Style" hint="Subtle background">
            <Search 
              variant="ghost"
              placeholder="Search with ghost style..."
              suggestions={sampleSuggestions.slice(0, 3)}
            />
          </FormField>
          
          <FormField label="Filled Style" hint="Filled background">
            <Search 
              variant="filled"
              placeholder="Search with filled style..."
              suggestions={sampleSuggestions.slice(0, 3)}
            />
          </FormField>
        </div>
      </div>

      {/* Size Scale */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Design Token Spacing Scale</h2>
        <div className="space-y-3">
          <div className="grid grid-cols-[80px_1fr_auto] gap-4 items-center">
            <span className="text-sm font-medium">XS</span>
            <Search size="xs" placeholder="Extra small search" suggestions={sampleSuggestions.slice(0, 2)} />
            <span className="text-xs text-neutral-600 dark:text-neutral-400">h-7</span>
          </div>
          <div className="grid grid-cols-[80px_1fr_auto] gap-4 items-center">
            <span className="text-sm font-medium">SM</span>
            <Search size="sm" placeholder="Small search" suggestions={sampleSuggestions.slice(0, 2)} />
            <span className="text-xs text-neutral-600 dark:text-neutral-400">h-8</span>
          </div>
          <div className="grid grid-cols-[80px_1fr_auto] gap-4 items-center">
            <span className="text-sm font-medium">Default</span>
            <Search size="default" placeholder="Default search" suggestions={sampleSuggestions.slice(0, 2)} />
            <span className="text-xs text-neutral-600 dark:text-neutral-400">h-10</span>
          </div>
          <div className="grid grid-cols-[80px_1fr_auto] gap-4 items-center">
            <span className="text-sm font-medium">LG</span>
            <Search size="lg" placeholder="Large search" suggestions={sampleSuggestions.slice(0, 2)} />
            <span className="text-xs text-neutral-600 dark:text-neutral-400">h-12</span>
          </div>
          <div className="grid grid-cols-[80px_1fr_auto] gap-4 items-center">
            <span className="text-sm font-medium">XL</span>
            <Search size="xl" placeholder="Extra large search" suggestions={sampleSuggestions.slice(0, 2)} />
            <span className="text-xs text-neutral-600 dark:text-neutral-400">h-14</span>
          </div>
        </div>
      </div>

      {/* Feature Showcase */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Advanced Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <h3 className="font-medium">Rich Suggestions</h3>
            <Search
              placeholder="Search with rich data..."
              suggestions={sampleSuggestions}
              size="lg"
            />
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Icons, descriptions, categories, and metadata
            </p>
          </div>
          
          <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <h3 className="font-medium">Text Highlighting</h3>
            <Search
              placeholder="Type 'john' to see highlights..."
              suggestions={sampleSuggestions}
              highlightMatches={true}
              size="lg"
            />
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Smart text matching with visual emphasis
            </p>
          </div>
          
          <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <h3 className="font-medium">Loading States</h3>
            <Search
              placeholder="Search with loading spinner..."
              suggestions={sampleSuggestions}
              loading={true}
              size="lg"
            />
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Smooth loading indicators and transitions
            </p>
          </div>
          
          <div className="space-y-4 p-6 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
            <h3 className="font-medium">Empty States</h3>
            <Search
              placeholder="Search for 'xyz' to see empty state..."
              suggestions={[]}
              emptyStateMessage="No matching results found"
              size="lg"
            />
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Helpful messages when no results are found
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="space-y-4 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-950/30 dark:to-secondary-950/30 rounded-lg">
        <h2 className="text-xl font-semibold">Design Token Benefits in Search</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="space-y-2">
            <h3 className="font-medium">🎨 Consistent Theming</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              OKLCH colors ensure perfect visual harmony across all search states and suggestions.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">⚡ Smooth Animations</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Design token durations create fluid interactions for dropdown, hover, and focus states.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">♿ Accessibility First</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              High contrast ratios and consistent focus indicators for inclusive user experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'A comprehensive showcase demonstrating search components with OKLCH design tokens, semantic colors, smooth animations, and accessibility features.',
      },
    },
  },
}