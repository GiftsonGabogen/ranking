import { z } from "zod";

export const itemSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be less than 100 characters"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(500, "Description must be less than 500 characters"),
  imageUrl: z
    .url("Must be a valid URL")
    .max(500, "URL must be less than 500 characters")
    .optional()
    .or(z.literal("")),
  metadata: z
    .record(z.string(), z.any())
    .optional(),
  position: z
    .number()
    .min(1, "Position must be at least 1")
    .max(1000, "Position must be less than 1000")
    .optional(),
});

export type ItemFormData = z.infer<typeof itemSchema>;