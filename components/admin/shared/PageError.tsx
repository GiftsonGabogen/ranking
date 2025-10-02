"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PageErrorProps {
  title: string;
  message: string;
  onRetry?: () => void;
  retryText?: string;
}

export function PageError({ title, message, onRetry, retryText = "Try Again" }: PageErrorProps) {
  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardContent className="p-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-error-600 mb-4">{title}</h1>
            <p className="text-muted-foreground mb-6">{message}</p>
            {onRetry && (
              <Button onClick={onRetry} variant="outline">
                {retryText}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}