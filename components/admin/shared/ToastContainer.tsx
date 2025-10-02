"use client";

import React from "react";
import {
  Toast,
  ToastTitle,
  ToastDescription,
  ToastContainer as UIToastContainer,
} from "@/components/ui/toast";
import { useToast, type ToastState } from "@/lib/hooks/useToast";

interface ToastContainerProps {
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";
}

export function ToastContainer({ position = "top-right" }: ToastContainerProps) {
  const { toasts, removeToast } = useToast();

  return (
    <UIToastContainer position={position}>
      {toasts.map((toast: ToastState) => (
        <Toast
          key={toast.id}
          variant={toast.variant}
          onClose={() => removeToast(toast.id)}
        >
          <ToastTitle>{toast.title}</ToastTitle>
          {toast.description && (
            <ToastDescription>{toast.description}</ToastDescription>
          )}
        </Toast>
      ))}
    </UIToastContainer>
  );
}