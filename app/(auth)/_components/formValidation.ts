import { z } from "zod";
import { UseFormSetError } from "react-hook-form";

export function handleZodValidation<T extends Record<string, any>>(
  result: ReturnType<z.ZodSchema<T>['safeParse']>,
  setError: UseFormSetError<T>
): boolean {
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      const fieldName = issue.path[0] as string;
      if (fieldName) {
        setError(fieldName as any, {
          type: "manual",
          message: issue.message,
        });
      }
    });
    return false;
  }
  return true;
}