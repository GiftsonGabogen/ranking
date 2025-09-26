import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  type DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Search,
  Bell,
  Settings,
  User,
  LogOut,
  Home,
  BarChart3,
  Users,
  FileText,
  ChevronDown,
  Zap,
} from "lucide-react";
import React from "react";

// This is not a component story, but rather a demo of how to build a header using existing components
const HeaderDemo = () => {
  const [notificationCount, setNotificationCount] = React.useState(3);
  const [lastAction, setLastAction] = React.useState("");

  const userMenuItems: DropdownMenuItem[] = [
    {
      key: "profile",
      label: "Your Profile",
      icon: <User className="h-4 w-4" />,
      onClick: () => setLastAction("Profile clicked"),
    },
    {
      key: "settings",
      label: "Settings",
      icon: <Settings className="h-4 w-4" />,
      shortcut: "⌘,",
      onClick: () => setLastAction("Settings clicked"),
    },
    {
      key: "logout",
      label: "Sign Out",
      icon: <LogOut className="h-4 w-4" />,
      variant: "destructive",
      shortcut: "⌘⇧Q",
      onClick: () => setLastAction("Sign out clicked"),
    },
  ];

  const navigationMenuItems: DropdownMenuItem[] = [
    {
      key: "overview",
      label: "Overview",
      onClick: () => setLastAction("Overview clicked"),
    },
    {
      key: "analytics",
      label: "Analytics",
      onClick: () => setLastAction("Analytics clicked"),
    },
    {
      key: "reports",
      label: "Reports",
      onClick: () => setLastAction("Reports clicked"),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <header className="w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md sticky top-0 z-50 shadow-md shadow-neutral-900/5 dark:shadow-neutral-950/20">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto h-16 px-6 gap-6">
          {/* Logo Section */}
          <div className="flex items-center gap-3 transition-all duration-200 hover:scale-105 cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              Ranker
            </span>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50"
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>

            <DropdownMenu
              variant="ghost"
              size="sm"
              items={navigationMenuItems}
              onItemSelect={(item) => setLastAction(`Menu: ${item.label}`)}
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Dashboard
            </DropdownMenu>

            <Button
              variant="ghost"
              size="sm"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              <Users className="h-4 w-4 mr-2" />
              Team
            </Button>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 text-sm bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 focus:bg-white dark:focus:bg-neutral-900"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon-sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>

            {/* Search Button (Mobile) */}
            <Button variant="ghost" size="icon-sm" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>

            {/* Notifications */}
            <Button
              variant="ghost"
              size="icon-sm"
              className="relative"
              onClick={() => {
                setNotificationCount(0);
                setLastAction("Notifications viewed");
              }}
            >
              <Bell className="h-5 w-5" />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-error-500 text-white text-xs rounded-full flex items-center justify-center">
                  {notificationCount > 9 ? "9+" : notificationCount}
                </span>
              )}
            </Button>

            {/* User Profile with Dropdown */}
            <DropdownMenu
              variant="ghost"
              size="sm"
              items={userMenuItems}
              onItemSelect={(item) => setLastAction(`User menu: ${item.label}`)}
            >
              <div className="flex items-center gap-2 hover:bg-neutral-50 dark:hover:bg-neutral-900 rounded-lg px-2 py-1 transition-colors cursor-pointer">
                <Avatar
                  size="sm"
                  status="online"
                  className="ring-2 ring-white dark:ring-neutral-900"
                >
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                    alt="John Doe"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="hidden sm:block text-left">
                  <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    John Doe
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    john.doe@example.com
                  </p>
                </div>
              </div>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Demo Information */}
      <div className="max-w-4xl mx-auto p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">
          Header Demo - Built with Existing Components
        </h3>
        <div className="space-y-3 text-sm">
          <div>
            <strong>Last Action:</strong> {lastAction || "None"}
          </div>
          <div>
            <strong>Notifications:</strong> {notificationCount}
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <h4 className="font-medium">Components Used:</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="p-3 bg-white dark:bg-neutral-800 rounded border">
              <strong>Avatar</strong>
              <p className="text-neutral-600 dark:text-neutral-400">
                User profile with status indicator and fallback initials
              </p>
            </div>
            <div className="p-3 bg-white dark:bg-neutral-800 rounded border">
              <strong>DropdownMenu</strong>
              <p className="text-neutral-600 dark:text-neutral-400">
                Navigation menus and user profile dropdown
              </p>
            </div>
            <div className="p-3 bg-white dark:bg-neutral-800 rounded border">
              <strong>Button</strong>
              <p className="text-neutral-600 dark:text-neutral-400">
                Navigation links, mobile menu, and notification buttons
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/50 rounded border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-700 dark:text-blue-300">
            💡 This header demonstrates how to combine existing UI components
            (Avatar, DropdownMenu, Button) to create a fully functional
            navigation header with user profile dropdown, search, and
            notifications.
          </p>
        </div>
      </div>
    </div>
  );
};

const meta: Meta = {
  title: "Examples/Header with User Profile",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A complete header example built using existing Avatar, DropdownMenu, and Button components. Shows how to combine components to create complex UI patterns.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CompleteHeaderExample: Story = {
  render: () => <HeaderDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "A fully functional header with logo, navigation menus, search bar, notifications, and user profile dropdown with avatar. Built entirely with existing UI components.",
      },
    },
  },
};

export const MinimalHeaderExample: Story = {
  render: () => (
    <div className="space-y-6">
      {/* Minimal Header */}
      <header className="w-full border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 h-14 px-4">
        <div className="flex items-center justify-between w-full max-w-6xl mx-auto h-full">
          {/* Simple Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg"></div>
            <span className="font-bold text-neutral-900 dark:text-neutral-100">
              Brand
            </span>
          </div>

          {/* User Avatar with Dropdown */}
          <DropdownMenu
            variant="ghost"
            size="sm"
            items={[
              {
                key: "profile",
                label: "Profile",
                icon: <User className="h-4 w-4" />,
              },
              {
                key: "settings",
                label: "Settings",
                icon: <Settings className="h-4 w-4" />,
              },
              {
                key: "logout",
                label: "Sign Out",
                icon: <LogOut className="h-4 w-4" />,
                variant: "destructive",
              },
            ]}
          >
            <Avatar size="sm" className="cursor-pointer">
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
          </DropdownMenu>
        </div>
      </header>

      <div className="max-w-2xl mx-auto p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Minimal Header</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          A simplified header with just logo and user profile dropdown using
          Avatar and DropdownMenu components.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A minimal header example showing just the essentials: logo and user profile with dropdown menu.",
      },
    },
  },
};

export const DifferentAvatarStates: Story = {
  render: () => {
    const userProfiles = [
      {
        name: "Online User",
        email: "online@example.com",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        status: "online" as const,
        initials: "OU",
      },
      {
        name: "Busy User",
        email: "busy@example.com",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        status: "busy" as const,
        initials: "BU",
      },
      {
        name: "Away User",
        email: "away@example.com",
        status: "away" as const,
        initials: "AU",
      },
      {
        name: "Offline User",
        email: "offline@example.com",
        status: "offline" as const,
        initials: "OF",
      },
    ];

    const menuItems: DropdownMenuItem[] = [
      {
        key: "profile",
        label: "View Profile",
        icon: <User className="h-4 w-4" />,
      },
      {
        key: "settings",
        label: "Settings",
        icon: <Settings className="h-4 w-4" />,
      },
      {
        key: "logout",
        label: "Sign Out",
        icon: <LogOut className="h-4 w-4" />,
        variant: "destructive",
      },
    ];

    return (
      <div className="space-y-8 p-4">
        {userProfiles.map((user, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-lg font-semibold text-center capitalize">
              {user.status} Status
            </h3>

            {/* Header for each user state */}
            <header className="w-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 rounded-lg h-16 px-6">
              <div className="flex items-center justify-between w-full h-full">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-neutral-900 dark:text-neutral-100">
                    Brand
                  </span>
                </div>

                <DropdownMenu
                  variant="ghost"
                  size="sm"
                  items={menuItems}
                >
                  <div className="flex items-center gap-2 hover:bg-neutral-50 dark:hover:bg-neutral-900 rounded-lg px-2 py-1 transition-colors cursor-pointer">
                    <Avatar
                      size="sm"
                      status={user.status}
                      className="ring-2 ring-white dark:ring-neutral-900"
                    >
                      {user.avatar && (
                        <AvatarImage src={user.avatar} alt={user.name} />
                      )}
                      <AvatarFallback>{user.initials}</AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                        {user.name}
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </DropdownMenu>
              </div>
            </header>
          </div>
        ))}

        <div className="max-w-2xl mx-auto p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Avatar Status Examples</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Different user status indicators (online, busy, away, offline) using
            the Avatar component with status props, combined with DropdownMenu
            for user actions.
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Examples showing different user avatar states with status indicators in header context.",
      },
    },
  },
};

export const ResponsiveHeaderExample: Story = {
  render: () => (
    <div className="space-y-6">
      {/* Responsive Header */}
      <header className="w-full border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 h-16 px-4">
        <div className="flex items-center justify-between w-full max-w-6xl mx-auto h-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="font-bold text-neutral-900 dark:text-neutral-100">
              Ranker
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm">
              Home
            </Button>
            <Button variant="ghost" size="sm">
              Analytics
            </Button>
            <Button variant="ghost" size="sm">
              Team
            </Button>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon-sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>

            {/* Desktop Search */}
            <div className="hidden md:block">
              <Button variant="ghost" size="icon-sm">
                <Search className="h-5 w-5" />
              </Button>
            </div>

            {/* Notifications */}
            <Button variant="ghost" size="icon-sm" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </Button>

            {/* User Profile */}
            <DropdownMenu
              variant="ghost"
              size="sm"
              items={[
                {
                  key: "profile",
                  label: "Profile",
                  icon: <User className="h-4 w-4" />,
                },
                {
                  key: "settings",
                  label: "Settings",
                  icon: <Settings className="h-4 w-4" />,
                },
                {
                  key: "logout",
                  label: "Sign Out",
                  icon: <LogOut className="h-4 w-4" />,
                  variant: "destructive",
                },
              ]}
            >
              <Avatar size="sm" className="cursor-pointer">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
                  alt="User"
                />
                <AvatarFallback>RU</AvatarFallback>
              </Avatar>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Responsive Header</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          A responsive header that adapts to different screen sizes. Navigation
          items hide on mobile and are replaced with a hamburger menu button.
        </p>
        <div className="text-xs text-neutral-500 dark:text-neutral-400">
          💡 Try resizing your browser window to see the responsive behavior
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A responsive header that adapts to mobile and desktop screens using existing components.",
      },
    },
  },
};
