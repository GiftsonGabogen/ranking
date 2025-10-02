import { useState, useCallback } from "react";
import { useToast } from "./useToast";

interface UseAdminFormOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
  successMessage?: string;
  errorMessage?: string;
}

interface UseAdminFormReturn<T> {
  isSubmitting: boolean;
  handleSubmit: (data: T, submitFunction: (data: T) => Promise<void>) => Promise<void>;
}

export function useAdminForm<T = any>(options: UseAdminFormOptions<T> = {}): UseAdminFormReturn<T> {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addToast } = useToast();

  const handleSubmit = useCallback(async (
    data: T,
    submitFunction: (data: T) => Promise<void>
  ) => {
    setIsSubmitting(true);
    try {
      await submitFunction(data);

      if (options.onSuccess) {
        options.onSuccess(data);
      }

      if (options.successMessage) {
        addToast("success", "Success", options.successMessage);
      }
    } catch (error) {
      console.error("Form submission error:", error);

      if (options.onError) {
        options.onError(error as Error);
      }

      const errorMessage = error instanceof Error
        ? error.message
        : options.errorMessage || "Operation failed";

      addToast("destructive", "Operation Failed", errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  }, [addToast, options]);

  return {
    isSubmitting,
    handleSubmit,
  };
}