import React from "react";
import SiteHeader from "@/components/layout/site-header";

interface SiteLayoutProps {
  children: React.ReactNode;
  user?: {
    name: string;
    email: string;
    image?: string | null;
  } | null;
  showNavigation?: boolean;
  showSearch?: boolean;
  showNotifications?: boolean;
  className?: string;
}

export default function SiteLayout({
  children,
  user,
  showNavigation = true,
  showSearch = false,
  showNotifications = true,
  className = ""
}: SiteLayoutProps) {
  return (
    <div className={`min-h-screen bg-neutral-50 dark:bg-neutral-950 ${className}`}>
      <SiteHeader
        user={user}
        showNavigation={showNavigation}
        showSearch={showSearch}
        showNotifications={showNotifications}
      />
      {children}
    </div>
  );
}