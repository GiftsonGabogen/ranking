"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  color?: "default" | "success" | "warning" | "error";
  variant?: "default" | "animated";
}

export function StatsCard({
  title,
  value,
  icon: Icon,
  color = "default",
  variant = "default"
}: StatsCardProps) {
  const getColorClasses = () => {
    switch (color) {
      case "success":
        return {
          value: "text-success-600",
          dot: "bg-success-500"
        };
      case "warning":
        return {
          value: "text-warning-600",
          dot: "bg-warning-500"
        };
      case "error":
        return {
          value: "text-error-600",
          dot: "bg-error-500"
        };
      default:
        return {
          value: "text-neutral-600",
          dot: "bg-neutral-500"
        };
    }
  };

  const colorClasses = getColorClasses();

  return (
    <Card variant={variant}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              {title}
            </p>
            <p className={`text-2xl font-bold ${colorClasses.value}`}>
              {value}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Icon className="h-6 w-6 text-muted-foreground" />
            <div className={`h-3 w-3 rounded-full ${colorClasses.dot}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}