import React from "react";
import SiteHeader from "@/components/layout/site-header";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <SiteHeader
        user={null}
        showNavigation={false}
        showSearch={false}
        showNotifications={false}
      />
      {children}
    </div>
  );
}