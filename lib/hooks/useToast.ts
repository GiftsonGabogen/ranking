import { useState } from "react";

export interface ToastState {
  id: number;
  variant: "success" | "destructive";
  title: string;
  description?: string;
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastState[]>([]);

  const addToast = (
    variant: "success" | "destructive",
    title: string,
    description?: string
  ) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, variant, title, description }]);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return { toasts, addToast, removeToast };
}