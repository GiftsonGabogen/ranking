import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import SiteHeader from "@/components/layout/site-header";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <SiteHeader
        user={null}
        showNavigation={false}
        showSearch={false}
        showNotifications={false}
      />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Zap className="h-8 w-8 text-white" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Welcome to <span className="text-primary-600">Ranker</span>
          </h1>

          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
            The ultimate platform for creating, managing, and analyzing rankings.
            Turn your data into actionable insights with powerful ranking tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
            </Link>

            <Link href="/login">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
