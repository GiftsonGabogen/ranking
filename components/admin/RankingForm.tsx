"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input, FormField } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Loading } from "@/components/ui/loading";
import { X, Type, FileText, Calendar } from "lucide-react";
import { rankingSchema, type RankingFormData } from "@/lib/schemas/ranking";

interface RankingFormProps {
  initialData?: Partial<RankingFormData>;
  onSubmit: (data: RankingFormData) => Promise<void>;
  onCancel: () => void;
  isLoading?: boolean;
}

export function RankingForm({ initialData, onSubmit, onCancel, isLoading = false }: RankingFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<RankingFormData>({
    mode: "onChange",
    defaultValues: {
      title: initialData?.title || "",
      description: initialData?.description || "",
      isActive: initialData?.isActive ?? true,
      allowSuggestions: initialData?.allowSuggestions ?? true,
      cycleLength: initialData?.cycleLength || 30,
    },
  });

  const isActive = watch("isActive");
  const allowSuggestions = watch("allowSuggestions");

  const onFormSubmit: SubmitHandler<RankingFormData> = async (data) => {
    try {
      // Validate with Zod schema
      const result = rankingSchema.safeParse(data);

      if (!result.success) {
        result.error.issues.forEach((issue: any) => {
          setError(issue.path[0] as keyof RankingFormData, {
            message: issue.message,
          });
        });
        return;
      }

      await onSubmit(result.data);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          {initialData ? "Edit Ranking" : "Create New Ranking"}
        </h2>
      </div>

      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
        <FormField label="Title" error={errors.title?.message}>
          <Input
            {...register("title")}
            type="text"
            placeholder="Enter ranking title"
            disabled={isSubmitting || isLoading}
            variant={errors.title ? "destructive" : "default"}
            isInvalid={!!errors.title}
            leftIcon={<Type className="h-4 w-4" />}
            rightIcon={errors.title ? <X className="h-4 w-4" /> : undefined}
          />
        </FormField>

        <FormField label="Description" error={errors.description?.message}>
          <textarea
            {...register("description")}
            placeholder="Enter ranking description"
            disabled={isSubmitting || isLoading}
            className={`
              w-full p-3 border rounded-md min-h-[120px] resize-y
              ${errors.description
                ? "border-error-500 focus:border-error-500 focus:ring-error-500"
                : "border-neutral-300 focus:border-primary-500 focus:ring-primary-500"
              }
              focus:outline-none focus:ring-2 focus:ring-offset-2
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
          />
        </FormField>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch
                id="isActive"
                checked={isActive}
                onCheckedChange={(checked) => setValue("isActive", checked)}
                disabled={isSubmitting || isLoading}
              />
              <Label htmlFor="isActive" className="text-sm font-medium">
                Active Status
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="allowSuggestions"
                checked={allowSuggestions}
                onCheckedChange={(checked) => setValue("allowSuggestions", checked)}
                disabled={isSubmitting || isLoading}
              />
              <Label htmlFor="allowSuggestions" className="text-sm font-medium">
                Allow Suggestions
              </Label>
            </div>
          </div>

          <FormField label="Cycle Length (days)" error={errors.cycleLength?.message}>
            <Input
              {...register("cycleLength", { valueAsNumber: true })}
              type="number"
              placeholder="30"
              min="1"
              max="365"
              disabled={isSubmitting || isLoading}
              variant={errors.cycleLength ? "destructive" : "default"}
              isInvalid={!!errors.cycleLength}
              leftIcon={<Calendar className="h-4 w-4" />}
              rightIcon={errors.cycleLength ? <X className="h-4 w-4" /> : undefined}
            />
          </FormField>
        </div>

        <div className="flex gap-4 pt-4">
          <Button
            type="submit"
            className="flex-1"
            disabled={isSubmitting || isLoading}
          >
            {isSubmitting || isLoading ? (
              <>
                <Loading
                  type="spinner"
                  size="sm"
                  variant="neutral"
                  text={initialData ? "Updating..." : "Creating..."}
                />
              </>
            ) : (
              initialData ? "Update Ranking" : "Create Ranking"
            )}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={isSubmitting || isLoading}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}