"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Loading } from "@/components/ui/loading";
import { useAdminAuth } from "@/lib/hooks/useAdminAuth";

interface AdminProtectionProps {
  children: React.ReactNode;
  loadingComponent?: React.ReactNode;
  errorComponent?: React.ReactNode;
}

export function AdminProtection({
  children,
  loadingComponent,
  errorComponent
}: AdminProtectionProps) {
  const { isAdmin, isLoading: authLoading } = useAdminAuth();

  // Loading state
  if (authLoading) {
    return (
      loadingComponent || (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
            <p className="text-muted-foreground">Verifying admin access...</p>
          </div>
        </div>
      )
    );
  }

  // Not admin
  if (!isAdmin) {
    return (
      errorComponent || (
        <div className="container mx-auto py-8">
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-error-600 mb-4">
                  Admin Access Required
                </h1>
                <p className="text-muted-foreground mb-6">
                  You need administrator privileges to access this page.
                </p>
                <button
                  onClick={() => {
                    localStorage.setItem('adminToken', 'demo-admin');
                    window.location.reload();
                  }}
                  className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Demo Admin Login
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    );
  }

  // Admin verified, render children
  return <>{children}</>;
}