"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * Admin Authentication Hook
 *
 * Provides basic admin role protection for admin-only features.
 * This is a simplified version for demo purposes.
 * In production, this would integrate with a proper auth system.
 */
export function useAdminAuth() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkAdminStatus = useCallback(async () => {
    console.log("Auth: Checking admin status...");

    try {
      // For demo purposes, check localStorage or environment
      // In production, this would verify with auth service
      const adminToken = localStorage.getItem("adminToken");
      const isAdminUser = process.env.NEXT_PUBLIC_DEMO_ADMIN === "true" || adminToken === "demo-admin";

      console.log("Auth: Admin status check result:", {
        hasToken: !!adminToken,
        isAdminUser,
        envFlag: process.env.NEXT_PUBLIC_DEMO_ADMIN,
      });

      setIsAdmin(isAdminUser);
    } catch (error) {
      console.error("Auth: Error checking admin status:", error);
      setIsAdmin(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAdminStatus();
  }, [checkAdminStatus]);

  const loginAsAdmin = useCallback(() => {
    console.log("Auth: Logging in as admin (demo mode)");
    localStorage.setItem("adminToken", "demo-admin");
    setIsAdmin(true);
  }, []);

  const logoutAsAdmin = useCallback(() => {
    console.log("Auth: Logging out as admin");
    localStorage.removeItem("adminToken");
    setIsAdmin(false);
  }, []);

  return {
    isAdmin,
    isLoading,
    loginAsAdmin,
    logoutAsAdmin,
    checkAdminStatus,
  };
}