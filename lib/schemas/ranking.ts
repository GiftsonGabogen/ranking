import { z } from "zod";

export const rankingSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title must be less than 100 characters"),
  description: z.string().min(1, "Description is required").max(500, "Description must be less than 500 characters"),
  isActive: z.boolean(),
  allowSuggestions: z.boolean(),
  cycleLength: z.number().min(1, "Cycle length must be at least 1 day").max(365, "Cycle length must be less than 365 days"),
});

export type RankingFormData = z.infer<typeof rankingSchema>;