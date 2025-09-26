"use client";

import React from "react";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  type DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalFooter, ModalTrigger, ModalClose } from "@/components/ui/modal";
import { Toast, ToastTitle, ToastDescription, ToastContainer } from "@/components/ui/toast";
import {
  Bell,
  Settings,
  User,
  LogOut,
  Zap,
  Menu,
  Search,
  Home,
  BarChart3,
  Users,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";

interface SiteHeaderProps {
  user?: {
    name: string;
    email: string;
    image?: string | null;
  } | null;
  showNavigation?: boolean;
  showSearch?: boolean;
  showNotifications?: boolean;
  logoHref?: string;
  className?: string;
}

export default function SiteHeader({
  user,
  showNavigation = true,
  showSearch = false,
  showNotifications = true,
  logoHref = "/",
  className = "",
}: SiteHeaderProps) {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = React.useState(false);
  const [showSignOutModal, setShowSignOutModal] = React.useState(false);
  const [toast, setToast] = React.useState<{
    show: boolean;
    message: string;
    variant: "success" | "destructive" | "warning" | "info";
  }>({ show: false, message: "", variant: "success" });

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);

      // Use Better Auth's signOut method
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            setToast({
              show: true,
              message: "Successfully signed out. Redirecting to login...",
              variant: "success",
            });
            setTimeout(() => {
              window.location.href = "/login"; // Force full page reload to clear all state
            }, 1500);
          },
          onError: () => {
            setIsLoggingOut(false);
            setToast({
              show: true,
              message: "Failed to sign out. Please try again.",
              variant: "destructive",
            });
          },
        },
      });
    } catch (error) {
      console.error("Logout error:", error);
      setIsLoggingOut(false);
      setToast({
        show: true,
        message: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    }
  };

  const showToast = (message: string, variant: "success" | "destructive" | "warning" | "info") => {
    setToast({ show: true, message, variant });
    setTimeout(() => setToast({ show: false, message: "", variant: "success" }), 5000);
  };

  // User menu items (only when user is logged in)
  const userMenuItems: DropdownMenuItem[] = user
    ? [
        {
          key: "profile",
          label: "Your Profile",
          icon: <User className="h-4 w-4" />,
          onClick: () => {
            router.push("/profile");
          },
        },
        {
          key: "settings",
          label: "Settings",
          icon: <Settings className="h-4 w-4" />,
          onClick: () => {
            router.push("/settings");
          },
        },
        {
          key: "logout",
          label: isLoggingOut ? "Signing Out..." : "Sign Out",
          icon: isLoggingOut ? <Loader2 className="h-4 w-4 animate-spin" /> : <LogOut className="h-4 w-4" />,
          variant: "destructive",
          disabled: isLoggingOut,
          onClick: async () => {
            if (isLoggingOut) {
              return;
            }
            setShowSignOutModal(true);
          },
        },
      ]
    : [];

  // Navigation menu items
  const navigationItems = [
    {
      key: "dashboard",
      label: "Dashboard",
      href: "/dashboard",
      icon: <Home className="h-4 w-4" />,
    },
    {
      key: "analytics",
      label: "Analytics",
      href: "/analytics",
      icon: <BarChart3 className="h-4 w-4" />,
    },
    {
      key: "team",
      label: "Team",
      href: "/team",
      icon: <Users className="h-4 w-4" />,
    },
  ];

  // Get user initials for fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header
      className={`w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md sticky top-0 z-50 shadow-sm ${className}`}
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto h-16 px-6 gap-6">
        {/* Logo Section */}
        <Link
          href={logoHref}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
            Ranker
          </span>
        </Link>

        {/* Navigation Menu */}
        {showNavigation && user && (
          <nav className="hidden md:flex items-center gap-2">
            {navigationItems.map((item) => (
              <Link key={item.key} href={item.href}>
                <Button variant="ghost" size="sm" className="gap-2">
                  {item.icon}
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>
        )}

        {/* Search Bar */}
        {showSearch && (
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
        )}

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon-sm"
            className="md:hidden"
            onClick={() => {
              // Handle mobile menu toggle
              console.log("Mobile menu toggled");
            }}
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Search Button (Mobile) */}
          {showSearch && (
            <Button
              variant="ghost"
              size="icon-sm"
              className="md:hidden"
              onClick={() => {
                // Handle mobile search
                console.log("Mobile search toggled");
              }}
            >
              <Search className="h-5 w-5" />
            </Button>
          )}

          {/* Notifications - only show when user is logged in */}
          {showNotifications && user && (
            <Button
              variant="ghost"
              size="icon-sm"
              className="relative"
              onClick={() => {
                router.push("/notifications");
              }}
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary-500 text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </Button>
          )}

          {/* User Profile or Auth Buttons */}
          {user ? (
            <DropdownMenu variant="ghost" size="sm" items={userMenuItems}>
              <div className="flex items-center gap-2 hover:bg-neutral-50 dark:hover:bg-neutral-900 rounded-lg px-2 py-1 transition-colors cursor-pointer">
                <Avatar
                  size="sm"
                  status="online"
                  className="ring-2 ring-white dark:ring-neutral-900"
                >
                  {user.image && (
                    <AvatarImage src={user.image} alt={user.name} />
                  )}
                  <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                </Avatar>
                <div className="hidden sm:block text-left">
                  <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    {user.name}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {user.email}
                  </p>
                </div>
              </div>
            </DropdownMenu>
          ) : (
            /* Show login/signup buttons when not logged in */
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </Link>
              <Link href="/signup">
                <Button variant="default" size="sm">
                  Sign up
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Sign Out Confirmation Modal */}
      <Modal open={showSignOutModal} onOpenChange={setShowSignOutModal}>
        <ModalContent variant="glass" size="sm" className="text-center">
          <ModalHeader>
            <ModalTitle className="flex items-center justify-center gap-2">
              <LogOut className="h-5 w-5 text-error-600" />
              Sign Out
            </ModalTitle>
            <ModalDescription className="mt-2">
              Are you sure you want to sign out? You'll need to sign in again to access your account.
            </ModalDescription>
          </ModalHeader>
          <ModalFooter className="flex justify-center gap-3 mt-6">
            <ModalClose asChild>
              <Button variant="outline" disabled={isLoggingOut}>
                Cancel
              </Button>
            </ModalClose>
            <Button
              variant="destructive"
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="min-w-[100px]"
            >
              {isLoggingOut ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Signing Out...
                </>
              ) : (
                <>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </>
              )}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Toast Container */}
      <ToastContainer position="top-center">
        {toast.show && (
          <Toast
            variant={toast.variant}
            showCloseButton={true}
            onClose={() => setToast({ show: false, message: "", variant: "success" })}
          >
            <ToastTitle className="flex items-center gap-2">
              {toast.variant === "success" && <CheckCircle className="h-4 w-4" />}
              {toast.variant === "destructive" && <AlertCircle className="h-4 w-4" />}
              {toast.variant === "warning" && <AlertCircle className="h-4 w-4" />}
              {toast.variant === "info" && <AlertCircle className="h-4 w-4" />}
              {toast.variant === "success" ? "Success" : toast.variant === "destructive" ? "Error" : toast.variant === "warning" ? "Warning" : "Info"}
            </ToastTitle>
            <ToastDescription>
              {toast.message}
            </ToastDescription>
          </Toast>
        )}
      </ToastContainer>
    </header>
  );
}
