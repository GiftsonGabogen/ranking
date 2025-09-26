import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Home,
  User,
  Settings,
  Bell,
  Mail,
  Calendar,
  FileText,
  Image,
  Video,
  Music,
  Download,
  Star,
  Heart,
  Search,
  Filter,
  Grid,
  List,
  BarChart3,
  PieChart,
  Activity,
  TrendingUp,
  Users,
  ShoppingCart,
  CreditCard,
  Package,
  Edit
} from 'lucide-react'

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible tabs component for content organization with multiple visual variants, animations, and accessibility features. Built with design tokens for consistent styling and smooth interactions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'card', 'glass', 'outline'],
      description: 'The visual container variant of the tabs',
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the tabs',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
      description: 'The size of the tabs',
    },
    defaultValue: {
      control: { type: 'text' },
      description: 'The default active tab value',
    },
  },
  args: {
    defaultValue: 'tab1',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Tabs {...args} className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Account</TabsTrigger>
        <TabsTrigger value="tab2">Password</TabsTrigger>
        <TabsTrigger value="tab3">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Account settings content goes here. This could include profile information, 
              preferences, and other account-related options.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="tab2">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Password settings content goes here. This could include current password, 
              new password fields, and security options.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="tab3">
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>
              Manage your application settings and preferences.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              General settings content goes here. This could include theme preferences, 
              notifications, and other application settings.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-12 max-w-4xl">
      {/* Default Variant */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Default Tabs</h3>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList variant="default">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-6">
            <div className="p-6 border rounded-lg">
              <h4 className="font-medium mb-2">Overview Content</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                This is the overview tab with default styling and smooth animations.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="mt-6">
            <div className="p-6 border rounded-lg">
              <h4 className="font-medium mb-2">Analytics Content</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Analytics dashboard with charts and metrics would be displayed here.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="reports" className="mt-6">
            <div className="p-6 border rounded-lg">
              <h4 className="font-medium mb-2">Reports Content</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Generate and view various reports and data exports.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="notifications" className="mt-6">
            <div className="p-6 border rounded-lg">
              <h4 className="font-medium mb-2">Notifications Content</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Manage your notification preferences and settings.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Line Variant */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Line Tabs</h3>
        <Tabs defaultValue="home" className="w-full">
          <TabsList variant="line">
            <TabsTrigger variant="line" value="home">
              <Home className="mr-2" />
              Home
            </TabsTrigger>
            <TabsTrigger variant="line" value="profile">
              <User className="mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger variant="line" value="settings">
              <Settings className="mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>
          <TabsContent value="home" className="mt-8">
            <div className="p-6 border rounded-lg">
              <h4 className="font-medium mb-2 flex items-center">
                <Home className="mr-2 size-4" />
                Home Dashboard
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Welcome to your dashboard! Here you can see an overview of your recent activity.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="profile" className="mt-8">
            <div className="p-6 border rounded-lg">
              <h4 className="font-medium mb-2 flex items-center">
                <User className="mr-2 size-4" />
                User Profile
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Manage your personal information and profile settings.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="settings" className="mt-8">
            <div className="p-6 border rounded-lg">
              <h4 className="font-medium mb-2 flex items-center">
                <Settings className="mr-2 size-4" />
                Application Settings
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Configure your application preferences and advanced settings.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Pills Variant */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Pill Tabs</h3>
        <Tabs defaultValue="files" className="w-full">
          <TabsList variant="pills">
            <TabsTrigger variant="pills" value="files">
              <FileText className="mr-2" />
              Files
            </TabsTrigger>
            <TabsTrigger variant="pills" value="images">
              <Image className="mr-2" />
              Images
            </TabsTrigger>
            <TabsTrigger variant="pills" value="videos">
              <Video className="mr-2" />
              Videos
            </TabsTrigger>
            <TabsTrigger variant="pills" value="music">
              <Music className="mr-2" />
              Music
            </TabsTrigger>
          </TabsList>
          <TabsContent value="files" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4">
                  <FileText className="size-8 text-primary-500" />
                  <div>
                    <h4 className="font-medium">Document Files</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Browse and manage your document files
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="images" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4">
                  <Image className="size-8 text-secondary-500" />
                  <div>
                    <h4 className="font-medium">Image Gallery</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      View and organize your image collection
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="videos" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4">
                  <Video className="size-8 text-success-500" />
                  <div>
                    <h4 className="font-medium">Video Library</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Access your video content and media
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="music" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4">
                  <Music className="size-8 text-warning-500" />
                  <div>
                    <h4 className="font-medium">Music Collection</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Listen to and manage your music library
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Floating Variant */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Floating Tabs</h3>
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList variant="floating">
            <TabsTrigger variant="floating" value="dashboard">
              <BarChart3 className="mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger variant="floating" value="analytics">
              <PieChart className="mr-2" />
              Analytics
            </TabsTrigger>
            <TabsTrigger variant="floating" value="activity">
              <Activity className="mr-2" />
              Activity
            </TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard" className="mt-8">
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2" />
                  Dashboard Overview
                </CardTitle>
                <CardDescription>
                  Monitor key metrics and performance indicators
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <TrendingUp className="size-6 mx-auto mb-2 text-success-500" />
                    <p className="text-sm font-medium">Revenue</p>
                    <p className="text-lg font-bold">$12,345</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Users className="size-6 mx-auto mb-2 text-primary-500" />
                    <p className="text-sm font-medium">Users</p>
                    <p className="text-lg font-bold">1,234</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <ShoppingCart className="size-6 mx-auto mb-2 text-secondary-500" />
                    <p className="text-sm font-medium">Orders</p>
                    <p className="text-lg font-bold">456</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics" className="mt-8">
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="mr-2" />
                  Analytics Reports
                </CardTitle>
                <CardDescription>
                  Detailed analytics and insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  Comprehensive analytics dashboard with detailed reports and insights.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 border rounded">
                    <span className="text-sm">Page Views</span>
                    <span className="text-sm font-medium">45,678</span>
                  </div>
                  <div className="flex justify-between items-center p-2 border rounded">
                    <span className="text-sm">Unique Visitors</span>
                    <span className="text-sm font-medium">12,345</span>
                  </div>
                  <div className="flex justify-between items-center p-2 border rounded">
                    <span className="text-sm">Conversion Rate</span>
                    <span className="text-sm font-medium">3.45%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="activity" className="mt-8">
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="mr-2" />
                  Recent Activity
                </CardTitle>
                <CardDescription>
                  Track recent user activity and events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <div className="size-2 bg-success-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">New user registered</p>
                      <p className="text-xs text-neutral-500">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <div className="size-2 bg-primary-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">Order completed</p>
                      <p className="text-xs text-neutral-500">5 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <div className="size-2 bg-warning-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">System update</p>
                      <p className="text-xs text-neutral-500">1 hour ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Cards Variant */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Card Tabs</h3>
        <Tabs defaultValue="products" className="w-full">
          <TabsList variant="cards">
            <TabsTrigger variant="cards" value="products">
              <Package className="mr-2" />
              Products
            </TabsTrigger>
            <TabsTrigger variant="cards" value="orders">
              <ShoppingCart className="mr-2" />
              Orders
            </TabsTrigger>
            <TabsTrigger variant="cards" value="payments">
              <CreditCard className="mr-2" />
              Payments
            </TabsTrigger>
          </TabsList>
          <TabsContent value="products" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Management</CardTitle>
                <CardDescription>
                  Manage your product catalog and inventory
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Total Products</span>
                    <span className="font-medium">247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">In Stock</span>
                    <span className="font-medium text-success-600">198</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Out of Stock</span>
                    <span className="font-medium text-error-600">49</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="orders" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Management</CardTitle>
                <CardDescription>
                  Track and manage customer orders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Pending Orders</span>
                    <span className="font-medium text-warning-600">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Processing</span>
                    <span className="font-medium text-primary-600">8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Completed</span>
                    <span className="font-medium text-success-600">156</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="payments" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Processing</CardTitle>
                <CardDescription>
                  Monitor payment status and transactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Total Revenue</span>
                    <span className="font-medium">$45,678</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Pending</span>
                    <span className="font-medium text-warning-600">$1,234</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Refunded</span>
                    <span className="font-medium text-error-600">$567</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Comprehensive showcase of all available tab variants with different visual styles and animations.',
      },
    },
  },
}

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="search" className="w-[600px]">
      <TabsList>
        <TabsTrigger value="search">
          <Search className="mr-2" />
          Search
        </TabsTrigger>
        <TabsTrigger value="filter">
          <Filter className="mr-2" />
          Filter
        </TabsTrigger>
        <TabsTrigger value="favorites">
          <Heart className="mr-2" />
          Favorites
        </TabsTrigger>
        <TabsTrigger value="downloads">
          <Download className="mr-2" />
          Downloads
        </TabsTrigger>
      </TabsList>
      <TabsContent value="search" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="mr-2" />
              Search Results
            </CardTitle>
            <CardDescription>
              Find and discover content across the platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Use the search functionality to find specific items, documents, or resources.
            </p>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">Advanced Search</Button>
              <Button size="sm" variant="ghost">Clear Results</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="filter" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="mr-2" />
              Filter Options
            </CardTitle>
            <CardDescription>
              Refine your results with advanced filtering
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Apply filters to narrow down your search results and find exactly what you need.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Date Range</span>
                <Button size="sm" variant="outline">Select</Button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Category</span>
                <Button size="sm" variant="outline">Choose</Button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Status</span>
                <Button size="sm" variant="outline">Filter</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="favorites" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Heart className="mr-2" />
              Favorite Items
            </CardTitle>
            <CardDescription>
              Access your bookmarked and favorite content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Quick access to your most important and frequently used items.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 border rounded">
                <div className="flex items-center">
                  <Star className="size-4 mr-2 text-warning-500" />
                  <span className="text-sm">Important Document</span>
                </div>
                <Button size="sm" variant="ghost">View</Button>
              </div>
              <div className="flex items-center justify-between p-2 border rounded">
                <div className="flex items-center">
                  <Star className="size-4 mr-2 text-warning-500" />
                  <span className="text-sm">Project Files</span>
                </div>
                <Button size="sm" variant="ghost">View</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="downloads" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Download className="mr-2" />
              Download Center
            </CardTitle>
            <CardDescription>
              Manage your downloads and file transfers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Track download progress and access your downloaded files.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="text-sm font-medium">report.pdf</p>
                  <p className="text-xs text-neutral-500">Completed • 2.4 MB</p>
                </div>
                <Button size="sm" variant="outline">Open</Button>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="text-sm font-medium">images.zip</p>
                  <p className="text-xs text-neutral-500">In Progress • 45%</p>
                </div>
                <Button size="sm" variant="outline">Pause</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tabs with icons demonstrating enhanced visual hierarchy and user experience.',
      },
    },
  },
}

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Small Tabs</h3>
        <Tabs defaultValue="tab1" size="sm" className="w-full max-w-md">
          <TabsList size="sm">
            <TabsTrigger value="tab1" size="sm">Overview</TabsTrigger>
            <TabsTrigger value="tab2" size="sm">Details</TabsTrigger>
            <TabsTrigger value="tab3" size="sm">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="mt-4">
            <div className="p-4 border rounded text-sm">
              Small tabs are perfect for compact interfaces and mobile views.
            </div>
          </TabsContent>
          <TabsContent value="tab2" className="mt-4">
            <div className="p-4 border rounded text-sm">
              Details content in a compact format.
            </div>
          </TabsContent>
          <TabsContent value="tab3" className="mt-4">
            <div className="p-4 border rounded text-sm">
              Settings in a space-efficient layout.
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Default Tabs</h3>
        <Tabs defaultValue="tab1" className="w-full max-w-lg">
          <TabsList>
            <TabsTrigger value="tab1">Overview</TabsTrigger>
            <TabsTrigger value="tab2">Details</TabsTrigger>
            <TabsTrigger value="tab3">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="mt-6">
            <div className="p-6 border rounded">
              Default size tabs provide the standard user experience with balanced spacing.
            </div>
          </TabsContent>
          <TabsContent value="tab2" className="mt-6">
            <div className="p-6 border rounded">
              Details content with standard spacing and typography.
            </div>
          </TabsContent>
          <TabsContent value="tab3" className="mt-6">
            <div className="p-6 border rounded">
              Settings with comfortable padding and clear hierarchy.
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Large Tabs</h3>
        <Tabs defaultValue="tab1" size="lg" className="w-full max-w-xl">
          <TabsList size="lg">
            <TabsTrigger value="tab1" size="lg">Overview</TabsTrigger>
            <TabsTrigger value="tab2" size="lg">Details</TabsTrigger>
            <TabsTrigger value="tab3" size="lg">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="mt-8">
            <div className="p-8 border rounded text-base">
              Large tabs are ideal for desktop interfaces where you want prominent navigation.
            </div>
          </TabsContent>
          <TabsContent value="tab2" className="mt-8">
            <div className="p-8 border rounded text-base">
              Details content with generous spacing for better readability.
            </div>
          </TabsContent>
          <TabsContent value="tab3" className="mt-8">
            <div className="p-8 border rounded text-base">
              Settings with ample space for complex form layouts.
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Different tab sizes demonstrating responsive design and spacing hierarchy.',
      },
    },
  },
}

export const VerticalOrientation: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Vertical Default</h3>
        <Tabs defaultValue="dashboard" orientation="vertical" className="flex w-full max-w-4xl h-96">
          <TabsList variant="default" orientation="vertical" className="w-48">
            <TabsTrigger value="dashboard" className="w-full justify-start">
              <BarChart3 className="mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="users" className="w-full justify-start">
              <Users className="mr-2" />
              Users
            </TabsTrigger>
            <TabsTrigger value="settings" className="w-full justify-start">
              <Settings className="mr-2" />
              Settings
            </TabsTrigger>
            <TabsTrigger value="notifications" className="w-full justify-start">
              <Bell className="mr-2" />
              Notifications
            </TabsTrigger>
          </TabsList>
          <div className="flex-1 ml-6">
            <TabsContent value="dashboard" className="mt-0 h-full">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="mr-2" />
                    Dashboard Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Main dashboard with key metrics and performance indicators.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="users" className="mt-0 h-full">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2" />
                    User Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Manage user accounts, permissions, and access controls.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="settings" className="mt-0 h-full">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="mr-2" />
                    System Settings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Configure system settings and application preferences.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="notifications" className="mt-0 h-full">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="mr-2" />
                    Notification Center
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Manage notifications and alert preferences.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Vertical Cards</h3>
        <Tabs defaultValue="inbox" orientation="vertical" className="flex w-full max-w-4xl h-96">
          <TabsList variant="cards" orientation="vertical" className="w-52 gap-2">
            <TabsTrigger variant="cards" value="inbox" className="w-full justify-start">
              <Mail className="mr-2" />
              Inbox (12)
            </TabsTrigger>
            <TabsTrigger variant="cards" value="sent" className="w-full justify-start">
              <FileText className="mr-2" />
              Sent
            </TabsTrigger>
            <TabsTrigger variant="cards" value="drafts" className="w-full justify-start">
              <Edit className="mr-2" />
              Drafts (3)
            </TabsTrigger>
            <TabsTrigger variant="cards" value="archive" className="w-full justify-start">
              <Package className="mr-2" />
              Archive
            </TabsTrigger>
          </TabsList>
          <div className="flex-1 ml-6">
            <TabsContent value="inbox" className="mt-0 h-full">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="mr-2" />
                    Inbox Messages
                  </CardTitle>
                  <CardDescription>12 new messages</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-sm">Welcome to our platform!</p>
                          <p className="text-xs text-neutral-500">from: support@company.com</p>
                        </div>
                        <span className="text-xs text-neutral-400">2h ago</span>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-sm">Your order has been shipped</p>
                          <p className="text-xs text-neutral-500">from: orders@shop.com</p>
                        </div>
                        <span className="text-xs text-neutral-400">5h ago</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="sent" className="mt-0 h-full">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="mr-2" />
                    Sent Messages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    View all messages you've sent.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="drafts" className="mt-0 h-full">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Edit className="mr-2" />
                    Draft Messages
                  </CardTitle>
                  <CardDescription>3 draft messages</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Continue working on your saved drafts.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="archive" className="mt-0 h-full">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Package className="mr-2" />
                    Archived Messages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Access your archived correspondence.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Vertical tab orientation for sidebar-style navigation and complex layouts.',
      },
    },
  },
}

export const ContainerVariants: Story = {
  render: () => (
    <div className="space-y-12 max-w-4xl">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Card Container</h3>
        <Tabs defaultValue="tab1" variant="card" className="w-full">
          <TabsList>
            <TabsTrigger value="tab1">Overview</TabsTrigger>
            <TabsTrigger value="tab2">Analytics</TabsTrigger>
            <TabsTrigger value="tab3">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <div className="p-6">
              <h4 className="font-medium mb-2">Card Container Tabs</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                The entire tabs component is wrapped in a card with subtle shadows and borders.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="tab2">
            <div className="p-6">
              <h4 className="font-medium mb-2">Analytics Dashboard</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                View comprehensive analytics and performance metrics.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="tab3">
            <div className="p-6">
              <h4 className="font-medium mb-2">Configuration</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Adjust settings and preferences for your application.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Glass Container</h3>
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-950 dark:to-secondary-950 p-8 rounded-xl">
          <Tabs defaultValue="tab1" variant="glass" className="w-full">
            <TabsList>
              <TabsTrigger value="tab1">Dashboard</TabsTrigger>
              <TabsTrigger value="tab2">Reports</TabsTrigger>
              <TabsTrigger value="tab3">Export</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <div className="p-6">
                <h4 className="font-medium mb-2">Glass Effect Container</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Semi-transparent background with backdrop blur creates a modern glass effect.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="tab2">
              <div className="p-6">
                <h4 className="font-medium mb-2">Report Generation</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Generate detailed reports with customizable parameters and filters.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="tab3">
              <div className="p-6">
                <h4 className="font-medium mb-2">Data Export</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Export your data in various formats including CSV, JSON, and PDF.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Outline Container</h3>
        <Tabs defaultValue="tab1" variant="outline" className="w-full">
          <TabsList>
            <TabsTrigger value="tab1">Projects</TabsTrigger>
            <TabsTrigger value="tab2">Tasks</TabsTrigger>
            <TabsTrigger value="tab3">Team</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <div className="p-6">
              <h4 className="font-medium mb-2">Project Management</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Outline container provides clear boundaries with minimal visual weight.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="tab2">
            <div className="p-6">
              <h4 className="font-medium mb-2">Task Tracking</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Monitor task progress and manage your workflow efficiently.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="tab3">
            <div className="p-6">
              <h4 className="font-medium mb-2">Team Collaboration</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Collaborate with team members and share resources.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Different container variants that wrap the entire tabs component with various visual treatments.',
      },
    },
  },
}

export const DesignTokensShowcase: Story = {
  render: () => (
    <div className="space-y-12 max-w-6xl">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Design Tokens Integration</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Comprehensive demonstration of the Tabs component using OKLCH design tokens
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Semantic Color Usage</h2>
          
          <Tabs defaultValue="primary" className="w-full" variant="card">
            <TabsList variant="pills">
              <TabsTrigger variant="pills" value="primary">Primary</TabsTrigger>
              <TabsTrigger variant="pills" value="secondary">Secondary</TabsTrigger>
              <TabsTrigger variant="pills" value="success">Success</TabsTrigger>
              <TabsTrigger variant="pills" value="warning">Warning</TabsTrigger>
            </TabsList>
            <TabsContent value="primary">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="h-8 bg-primary-100 dark:bg-primary-900 rounded border border-primary-200 dark:border-primary-800 flex items-center px-3">
                      <span className="text-primary-700 dark:text-primary-300 text-sm">Primary 100/900</span>
                    </div>
                    <div className="h-8 bg-primary-500 rounded flex items-center px-3">
                      <span className="text-white text-sm">Primary 500</span>
                    </div>
                    <div className="h-8 bg-primary-700 dark:bg-primary-300 rounded flex items-center px-3">
                      <span className="text-white dark:text-primary-900 text-sm">Primary 700/300</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="secondary">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="h-8 bg-secondary-100 dark:bg-secondary-900 rounded border border-secondary-200 dark:border-secondary-800 flex items-center px-3">
                      <span className="text-secondary-700 dark:text-secondary-300 text-sm">Secondary 100/900</span>
                    </div>
                    <div className="h-8 bg-secondary-500 rounded flex items-center px-3">
                      <span className="text-white text-sm">Secondary 500</span>
                    </div>
                    <div className="h-8 bg-secondary-700 dark:bg-secondary-300 rounded flex items-center px-3">
                      <span className="text-white dark:text-secondary-900 text-sm">Secondary 700/300</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="success">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="h-8 bg-success-100 dark:bg-success-900 rounded border border-success-200 dark:border-success-800 flex items-center px-3">
                      <span className="text-success-700 dark:text-success-300 text-sm">Success 100/900</span>
                    </div>
                    <div className="h-8 bg-success-500 rounded flex items-center px-3">
                      <span className="text-white text-sm">Success 500</span>
                    </div>
                    <div className="h-8 bg-success-700 dark:bg-success-300 rounded flex items-center px-3">
                      <span className="text-white dark:text-success-900 text-sm">Success 700/300</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="warning">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="h-8 bg-warning-100 dark:bg-warning-900 rounded border border-warning-200 dark:border-warning-800 flex items-center px-3">
                      <span className="text-warning-700 dark:text-warning-300 text-sm">Warning 100/900</span>
                    </div>
                    <div className="h-8 bg-warning-500 rounded flex items-center px-3">
                      <span className="text-white text-sm">Warning 500</span>
                    </div>
                    <div className="h-8 bg-warning-700 dark:bg-warning-300 rounded flex items-center px-3">
                      <span className="text-white dark:text-warning-900 text-sm">Warning 700/300</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Animation & Spacing</h2>
          
          <Tabs defaultValue="animations" className="w-full" variant="glass">
            <TabsList variant="floating">
              <TabsTrigger variant="floating" value="animations">Animations</TabsTrigger>
              <TabsTrigger variant="floating" value="spacing">Spacing</TabsTrigger>
              <TabsTrigger variant="floating" value="effects">Effects</TabsTrigger>
            </TabsList>
            <TabsContent value="animations">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="text-sm">
                      <strong>Transition:</strong> all 200ms ease-out
                    </div>
                    <div className="text-sm">
                      <strong>Hover Effects:</strong> -translate-y-0.5 + shadow-lg
                    </div>
                    <div className="text-sm">
                      <strong>Active States:</strong> Enhanced shadows with color
                    </div>
                    <div className="text-sm">
                      <strong>Content:</strong> fade-in-0 duration-200
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="spacing">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="text-sm">
                      <strong>Small:</strong> px-3 py-1.5 (spacing tokens 3/1.5)
                    </div>
                    <div className="text-sm">
                      <strong>Default:</strong> px-4 py-2 (spacing tokens 4/2)
                    </div>
                    <div className="text-sm">
                      <strong>Large:</strong> px-5 py-2.5 (spacing tokens 5/2.5)
                    </div>
                    <div className="text-sm">
                      <strong>Content Gap:</strong> mt-4, mt-6, mt-8 based on variant
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="effects">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="text-sm">
                      <strong>Shadow System:</strong> Multi-layer shadows with color
                    </div>
                    <div className="text-sm">
                      <strong>Backdrop Blur:</strong> Glass variants with blur-sm
                    </div>
                    <div className="text-sm">
                      <strong>Glow Effects:</strong> Colored shadows on hover/active
                    </div>
                    <div className="text-sm">
                      <strong>Border Radius:</strong> Consistent with design tokens
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-950 dark:to-secondary-950 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Design Token Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="space-y-2">
            <h3 className="font-medium">🎨 OKLCH Color Space</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Perceptually uniform colors ensuring consistent visual weight and contrast across all variants.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">⚡ Smooth Animations</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Carefully tuned timing functions and durations create fluid, responsive interactions.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">📱 Responsive Design</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Token-based spacing scales gracefully across different screen sizes and orientations.
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
        story: 'Comprehensive showcase demonstrating how the Tabs component leverages the OKLCH design token system for consistent colors, spacing, animations, and visual effects.',
      },
    },
  },
}