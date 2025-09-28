import React from "react";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import SiteHeader from "@/components/layout/site-header";

export default async function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <SiteHeader
        user={session.user}
        showNavigation={true}
        showSearch={true}
        showNotifications={true}
      />
      {children}
    </div>
  );
}
