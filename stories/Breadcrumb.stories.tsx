import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb'
import { 
  Home,
  FolderOpen,
  FileText,
  Settings,
  User,
  ShoppingCart,
  Package,
  Calendar,
  Mail,
  ChevronRight,
  Slash,
  ArrowRight,
  Minus,
  Dot,
  Star
} from 'lucide-react'
import React from 'react'

const meta: Meta<typeof Breadcrumb> = {
  title: 'UI/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A breadcrumb navigation component with multiple variants, sizes, and interactive animations. Built using design tokens for consistent styling and spacing.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <Home className="h-4 w-4" />
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/products">Products</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Current Page</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Extra Small</h3>
        <Breadcrumb>
          <BreadcrumbList size="xs">
            <BreadcrumbItem size="xs">
              <BreadcrumbLink href="/">
                <Home className="h-3 w-3" />
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator size="xs" />
            <BreadcrumbItem size="xs">
              <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator size="xs" />
            <BreadcrumbItem size="xs">
              <BreadcrumbPage>Current</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Small</h3>
        <Breadcrumb>
          <BreadcrumbList size="sm">
            <BreadcrumbItem size="sm">
              <BreadcrumbLink href="/">
                <Home className="h-3.5 w-3.5" />
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator size="sm" />
            <BreadcrumbItem size="sm">
              <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator size="sm" />
            <BreadcrumbItem size="sm">
              <BreadcrumbPage>Current Page</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Default</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="h-4 w-4" />
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Current Page</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Large</h3>
        <Breadcrumb>
          <BreadcrumbList size="lg">
            <BreadcrumbItem size="lg">
              <BreadcrumbLink href="/">
                <Home className="h-5 w-5" />
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator size="lg" />
            <BreadcrumbItem size="lg">
              <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator size="lg" />
            <BreadcrumbItem size="lg">
              <BreadcrumbPage>Current Page</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different breadcrumb sizes from extra small to large, demonstrating consistent spacing using design tokens.',
      },
    },
  },
}

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-6 p-8">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">E-commerce Navigation</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="h-4 w-4" />
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/categories">
                <FolderOpen className="h-4 w-4" />
                Categories
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/categories/electronics">
                <Package className="h-4 w-4" />
                Electronics
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                <ShoppingCart className="h-4 w-4" />
                Product Details
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">User Dashboard</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">
                <Home className="h-4 w-4" />
                Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard/profile">
                <User className="h-4 w-4" />
                Profile
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                <Settings className="h-4 w-4" />
                Account Settings
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Document Navigation</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs">
                <FileText className="h-4 w-4" />
                Documentation
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs/components">
                <FolderOpen className="h-4 w-4" />
                Components
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                <Star className="h-4 w-4" />
                Breadcrumb
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumbs with icons for different navigation contexts, showing semantic usage patterns.',
      },
    },
  },
}

export const CustomSeparators: Story = {
  render: () => (
    <div className="space-y-6 p-8">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Slash Separator</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Current Page</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Arrow Separator</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ArrowRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ArrowRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Current Page</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Dash Separator</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Minus className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Minus className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Current Page</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Dot Separator</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Dot className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Dot className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Current Page</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different separator styles using various icons to customize the breadcrumb appearance.',
      },
    },
  },
}

export const WithEllipsis: Story = {
  render: () => {
    const [expanded, setExpanded] = React.useState(false)

    return (
      <div className="space-y-8 p-8">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Static Ellipsis</h3>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  <Home className="h-4 w-4" />
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbEllipsis />
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/products/category">Category</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Product Details</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Interactive Ellipsis</h3>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  <Home className="h-4 w-4" />
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              {!expanded ? (
                <>
                  <BreadcrumbEllipsis 
                    expanded={expanded}
                    onExpand={() => setExpanded(true)}
                  />
                  <BreadcrumbSeparator />
                </>
              ) : (
                <>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/level1">Level 1</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/level1/level2">Level 2</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/level1/level2/level3">Level 3</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </>
              )}
              <BreadcrumbItem>
                <BreadcrumbLink href="/products/category">Category</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Current Page</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Click the ellipsis to expand hidden breadcrumb items.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Long Navigation Path</h3>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  <Home className="h-4 w-4" />
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbEllipsis />
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin/users/management">User Management</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin/users/management/roles">Role Assignment</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Edit Permissions</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumbs with ellipsis for handling long navigation paths, including interactive expansion.',
      },
    },
  },
}

export const ItemVariants: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Default Variant</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem variant="default">
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem variant="default">
              <BreadcrumbLink href="/products">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem variant="current">
              <BreadcrumbPage>Current Page</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Ghost Variant</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem variant="ghost">
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem variant="ghost">
              <BreadcrumbLink href="/products">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem variant="current">
              <BreadcrumbPage>Current Page</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Mixed Variants with Icons</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem variant="ghost">
              <BreadcrumbLink href="/">
                <Home className="h-4 w-4" />
                Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem variant="default">
              <BreadcrumbLink href="/analytics">
                <Calendar className="h-4 w-4" />
                Analytics
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem variant="ghost">
              <BreadcrumbLink href="/analytics/reports">
                <FileText className="h-4 w-4" />
                Reports
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem variant="current">
              <BreadcrumbPage>
                <Mail className="h-4 w-4" />
                Email Campaign Results
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different breadcrumb item variants including default, ghost, and current states.',
      },
    },
  },
}

export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8 p-8 max-w-4xl">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Real-World Breadcrumb Examples</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Practical implementations showing breadcrumbs in various application contexts
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2 p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
          <h3 className="font-semibold text-sm text-neutral-600 dark:text-neutral-400">E-COMMERCE STORE</h3>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem variant="ghost">
                <BreadcrumbLink href="/">
                  <Home className="h-4 w-4" />
                  Store
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem variant="ghost">
                <BreadcrumbLink href="/categories">
                  <FolderOpen className="h-4 w-4" />
                  Categories
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/categories/electronics">Electronics</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/categories/electronics/smartphones">Smartphones</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem variant="current">
                <BreadcrumbPage>iPhone 15 Pro Max</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="space-y-2 p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
          <h3 className="font-semibold text-sm text-neutral-600 dark:text-neutral-400">ADMIN DASHBOARD</h3>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem variant="ghost">
                <BreadcrumbLink href="/admin">
                  <Settings className="h-4 w-4" />
                  Admin
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ArrowRight className="h-3.5 w-3.5" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin/users">
                  <User className="h-4 w-4" />
                  User Management
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ArrowRight className="h-3.5 w-3.5" />
              </BreadcrumbSeparator>
              <BreadcrumbItem variant="current">
                <BreadcrumbPage>Role Permissions</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="space-y-2 p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
          <h3 className="font-semibold text-sm text-neutral-600 dark:text-neutral-400">FILE SYSTEM NAVIGATION</h3>
          <Breadcrumb>
            <BreadcrumbList size="sm">
              <BreadcrumbItem variant="ghost" size="sm">
                <BreadcrumbLink href="/files">
                  <Home className="h-3.5 w-3.5" />
                  Files
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator size="sm">
                <Slash className="h-3.5 w-3.5" />
              </BreadcrumbSeparator>
              <BreadcrumbItem size="sm">
                <BreadcrumbLink href="/files/documents">
                  <FolderOpen className="h-3.5 w-3.5" />
                  Documents
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator size="sm">
                <Slash className="h-3.5 w-3.5" />
              </BreadcrumbSeparator>
              <BreadcrumbEllipsis />
              <BreadcrumbSeparator size="sm">
                <Slash className="h-3.5 w-3.5" />
              </BreadcrumbSeparator>
              <BreadcrumbItem size="sm">
                <BreadcrumbLink href="/files/documents/projects/2024">2024</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator size="sm">
                <Slash className="h-3.5 w-3.5" />
              </BreadcrumbSeparator>
              <BreadcrumbItem variant="current" size="sm">
                <BreadcrumbPage>
                  <FileText className="h-3.5 w-3.5" />
                  project-summary.pdf
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="space-y-2 p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
          <h3 className="font-semibold text-sm text-neutral-600 dark:text-neutral-400">DOCUMENTATION SITE</h3>
          <Breadcrumb>
            <BreadcrumbList size="lg">
              <BreadcrumbItem variant="ghost" size="lg">
                <BreadcrumbLink href="/docs">
                  <FileText className="h-4 w-4" />
                  Docs
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator size="lg" />
              <BreadcrumbItem size="lg">
                <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator size="lg" />
              <BreadcrumbItem size="lg">
                <BreadcrumbLink href="/docs/components/navigation">Navigation</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator size="lg" />
              <BreadcrumbItem variant="current" size="lg">
                <BreadcrumbPage>
                  <Star className="h-4 w-4" />
                  Breadcrumb
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="space-y-2 p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-neutral-50/50 dark:bg-neutral-900/50">
          <h3 className="font-semibold text-sm text-neutral-600 dark:text-neutral-400">MULTI-LEVEL NAVIGATION</h3>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem variant="ghost">
                <BreadcrumbLink href="/">
                  <Home className="h-4 w-4" />
                  Portal
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Dot className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/workspace">Workspace</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Dot className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbEllipsis />
              <BreadcrumbSeparator>
                <Dot className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/workspace/projects/web-app/features">Features</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Dot className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem variant="current">
                <BreadcrumbPage>Authentication Module</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Real-world breadcrumb implementations across different application types, demonstrating various patterns and use cases.',
      },
    },
  },
}

export const AnimationShowcase: Story = {
  render: () => (
    <div className="space-y-8 p-8 max-w-4xl">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Breadcrumb Animations</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Subtle animations and hover effects using design token animations
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Hover Effects</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            Links scale up on hover, current page is highlighted, separators rotate
          </p>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem variant="ghost">
                <BreadcrumbLink href="/">
                  <Home className="h-4 w-4" />
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hover:rotate-12 transition-transform duration-200" />
              <BreadcrumbItem>
                <BreadcrumbLink href="/products" className="hover:scale-110 transition-transform duration-200">
                  <Package className="h-4 w-4" />
                  Products
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hover:rotate-12 transition-transform duration-200" />
              <BreadcrumbItem>
                <BreadcrumbLink href="/products/featured" className="hover:scale-110 transition-transform duration-200">
                  Featured
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hover:rotate-12 transition-transform duration-200" />
              <BreadcrumbItem variant="current">
                <BreadcrumbPage className="animate-in fade-in-0 zoom-in-95 duration-200">
                  Current Item
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Focus States</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            Tab through the breadcrumbs to see focus ring animations
          </p>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="focus-visible:ring-2 focus-visible:ring-primary-500/20 focus-visible:ring-offset-2 focus-visible:rounded-sm transition-all duration-200">
                  <Settings className="h-4 w-4" />
                  Settings
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/account" className="focus-visible:ring-2 focus-visible:ring-primary-500/20 focus-visible:ring-offset-2 focus-visible:rounded-sm transition-all duration-200">
                  <User className="h-4 w-4" />
                  Account
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem variant="current">
                <BreadcrumbPage>Privacy & Security</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Interactive Ellipsis</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            Ellipsis has hover animations and click interactions
          </p>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem variant="ghost">
                <BreadcrumbLink href="/">
                  <Home className="h-4 w-4" />
                  Root
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbEllipsis className="hover:scale-110 hover:rotate-90 hover:bg-primary-50 dark:hover:bg-primary-950/50 transition-all duration-300" />
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/deep/nested/path" className="hover:shadow-sm hover:shadow-primary-500/20 transition-all duration-200">
                  Deep Path
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem variant="current">
                <BreadcrumbPage>Final Destination</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Staggered Animation</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            Breadcrumb items animate in with staggered delays
          </p>
          <div className="animate-in fade-in-0 slide-in-from-top-4 duration-500">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="animate-in fade-in-0 slide-in-from-left-8 duration-300" style={{ animationDelay: '0ms' }}>
                  <BreadcrumbLink href="/">
                    <Home className="h-4 w-4" />
                    Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="animate-in fade-in-0 duration-300" style={{ animationDelay: '100ms' }} />
                <BreadcrumbItem className="animate-in fade-in-0 slide-in-from-left-8 duration-300" style={{ animationDelay: '150ms' }}>
                  <BreadcrumbLink href="/analytics">Analytics</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="animate-in fade-in-0 duration-300" style={{ animationDelay: '250ms' }} />
                <BreadcrumbItem className="animate-in fade-in-0 slide-in-from-left-8 duration-300" style={{ animationDelay: '300ms' }}>
                  <BreadcrumbLink href="/analytics/reports">Reports</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="animate-in fade-in-0 duration-300" style={{ animationDelay: '400ms' }} />
                <BreadcrumbItem className="animate-in fade-in-0 zoom-in-95 duration-200" style={{ animationDelay: '500ms' }} variant="current">
                  <BreadcrumbPage>Monthly Revenue</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Demonstration of various animations and interactive effects available in the breadcrumb component.',
      },
    },
  },
}

export const DesignTokenShowcase: Story = {
  render: () => (
    <div className="space-y-8 p-8 max-w-6xl">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Breadcrumb Design Token Integration</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Comprehensive demonstration using OKLCH colors, spacing tokens, and typography scales
        </p>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Size Variations with Design Tokens</h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2 p-4 bg-neutral-50 dark:bg-neutral-900/50 rounded-lg">
              <div className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">XS - Typography: 12px, Spacing: 4px</div>
              <Breadcrumb>
                <BreadcrumbList size="xs">
                  <BreadcrumbItem size="xs">
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator size="xs" />
                  <BreadcrumbItem size="xs">
                    <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator size="xs" />
                  <BreadcrumbItem size="xs" variant="current">
                    <BreadcrumbPage>Current</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <div className="space-y-2 p-4 bg-neutral-50 dark:bg-neutral-900/50 rounded-lg">
              <div className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">SM - Typography: 14px, Spacing: 6px</div>
              <Breadcrumb>
                <BreadcrumbList size="sm">
                  <BreadcrumbItem size="sm">
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator size="sm" />
                  <BreadcrumbItem size="sm">
                    <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator size="sm" />
                  <BreadcrumbItem size="sm" variant="current">
                    <BreadcrumbPage>Current Page</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <div className="space-y-2 p-4 bg-neutral-50 dark:bg-neutral-900/50 rounded-lg">
              <div className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">Default - Typography: 14px, Spacing: 8px</div>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem variant="current">
                    <BreadcrumbPage>Current Page</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <div className="space-y-2 p-4 bg-neutral-50 dark:bg-neutral-900/50 rounded-lg">
              <div className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">LG - Typography: 16px, Spacing: 10px</div>
              <Breadcrumb>
                <BreadcrumbList size="lg">
                  <BreadcrumbItem size="lg">
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator size="lg" />
                  <BreadcrumbItem size="lg">
                    <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator size="lg" />
                  <BreadcrumbItem size="lg" variant="current">
                    <BreadcrumbPage>Current Page</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Color Token Usage</h2>
          <div className="space-y-3">
            <div className="p-4 bg-primary-50 dark:bg-primary-950/20 border border-primary-200 dark:border-primary-800 rounded-lg">
              <div className="text-sm text-primary-700 dark:text-primary-300 font-medium mb-2">Primary Color Scheme</div>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="text-primary-700 dark:text-primary-300 hover:text-primary-600 dark:hover:text-primary-400">
                      <Home className="h-4 w-4" />
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="text-primary-400 dark:text-primary-600" />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/products" className="text-primary-700 dark:text-primary-300 hover:text-primary-600 dark:hover:text-primary-400">
                      Products
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="text-primary-400 dark:text-primary-600" />
                  <BreadcrumbItem variant="current">
                    <BreadcrumbPage className="text-primary-800 dark:text-primary-200 font-semibold">Current</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <div className="p-4 bg-secondary-50 dark:bg-secondary-950/20 border border-secondary-200 dark:border-secondary-800 rounded-lg">
              <div className="text-sm text-secondary-700 dark:text-secondary-300 font-medium mb-2">Secondary Color Scheme</div>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="text-secondary-700 dark:text-secondary-300 hover:text-secondary-600 dark:hover:text-secondary-400">
                      <Settings className="h-4 w-4" />
                      Settings
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="text-secondary-400 dark:text-secondary-600" />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/account" className="text-secondary-700 dark:text-secondary-300 hover:text-secondary-600 dark:hover:text-secondary-400">
                      Account
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="text-secondary-400 dark:text-secondary-600" />
                  <BreadcrumbItem variant="current">
                    <BreadcrumbPage className="text-secondary-800 dark:text-secondary-200 font-semibold">Preferences</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Semantic Colors in Context</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-success-50 dark:bg-success-950/20 border border-success-200 dark:border-success-800 rounded-lg">
              <div className="text-sm text-success-700 dark:text-success-300 font-medium mb-2">Success Context</div>
              <Breadcrumb>
                <BreadcrumbList size="sm">
                  <BreadcrumbItem size="sm">
                    <BreadcrumbLink href="/" className="text-success-700 dark:text-success-300">Dashboard</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator size="sm" className="text-success-400 dark:text-success-600" />
                  <BreadcrumbItem size="sm" variant="current">
                    <BreadcrumbPage className="text-success-800 dark:text-success-200">Payment Successful</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <div className="p-4 bg-error-50 dark:bg-error-950/20 border border-error-200 dark:border-error-800 rounded-lg">
              <div className="text-sm text-error-700 dark:text-error-300 font-medium mb-2">Error Context</div>
              <Breadcrumb>
                <BreadcrumbList size="sm">
                  <BreadcrumbItem size="sm">
                    <BreadcrumbLink href="/" className="text-error-700 dark:text-error-300">System</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator size="sm" className="text-error-400 dark:text-error-600" />
                  <BreadcrumbItem size="sm" variant="current">
                    <BreadcrumbPage className="text-error-800 dark:text-error-200">Error Log</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-950 dark:to-secondary-950 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Design Token Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="space-y-2">
              <h3 className="font-medium">🎨 OKLCH Color Space</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Perceptually uniform colors ensuring consistent contrast and accessibility across all breadcrumb states.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">📐 Mathematical Spacing</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Consistent spacing scale from design tokens ensures perfect visual hierarchy across all sizes.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">🎭 Theme Consistency</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Automatic light/dark mode support with properly balanced color relationships.
              </p>
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
        story: 'Comprehensive showcase of the breadcrumb component integration with the OKLCH design token system.',
      },
    },
  },
}