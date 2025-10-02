"use client";

import React from "react";
import { Loading } from "@/components/ui/loading";

interface PageLoadingProps {
  message?: string;
  size?: "sm" | "lg" | "xl" | "xs" | "default";
}

export function PageLoading({ message, size = "lg" }: PageLoadingProps) {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loading size={size} />
          {message && (
            <p className="text-muted-foreground mt-4">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
}