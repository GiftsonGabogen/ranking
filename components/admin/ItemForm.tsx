"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input, FormField } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loading } from "@/components/ui/loading";
import { X, Type, FileText, Image, Hash, Plus, Trash2 } from "lucide-react";
import { itemSchema, type ItemFormData } from "@/lib/schemas/item";

interface ItemFormProps {
  initialData?: Partial<ItemFormData>;
  onSubmit: (data: ItemFormData) => Promise<void>;
  onCancel: () => void;
  isLoading?: boolean;
  maxPosition?: number;
  initialPosition?: number;
}

interface MetadataField {
  key: string;
  value: string;
}

export function ItemForm({
  initialData,
  onSubmit,
  onCancel,
  isLoading = false,
  maxPosition = 1,
  initialPosition
}: ItemFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<ItemFormData>({
    mode: "onChange",
    defaultValues: {
      title: initialData?.title || "",
      description: initialData?.description || "",
      imageUrl: initialData?.imageUrl || "",
      metadata: initialData?.metadata || {},
      position: initialData?.position ?? initialPosition ?? maxPosition,
    },
  });

  const watchedMetadata = watch("metadata") || {};
  const position = watch("position");

  // Convert metadata object to array for display
  const metadataFields: MetadataField[] = Object.entries(watchedMetadata).map(([key, value]) => ({
    key,
    value: typeof value === 'string' ? value : JSON.stringify(value),
  }));

  // Add new metadata field
  const addMetadataField = () => {
    const currentMetadata = watchedMetadata || {};
    const newKey = `field_${Object.keys(currentMetadata).length + 1}`;
    setValue("metadata", {
      ...currentMetadata,
      [newKey]: "",
    });
  };

  // Update metadata field
  const updateMetadataField = (index: number, field: 'key' | 'value', value: string) => {
    const currentMetadata = watchedMetadata || {};
    const fields = metadataFields;
    const oldKey = fields[index].key;
    const newFields = [...fields];
    newFields[index] = { ...newFields[index], [field]: value };

    if (field === 'key') {
      // Key changed, remove old key and add new key
      const { [oldKey]: removedValue, ...restMetadata } = currentMetadata;
      setValue("metadata", {
        ...restMetadata,
        [value]: newFields[index].value,
      });
    } else {
      // Value changed, keep the same key
      setValue("metadata", {
        ...currentMetadata,
        [oldKey]: value,
      });
    }
  };

  // Remove metadata field
  const removeMetadataField = (index: number) => {
    const currentMetadata = watchedMetadata || {};
    const fields = metadataFields;
    const keyToRemove = fields[index].key;
    const { [keyToRemove]: removedValue, ...restMetadata } = currentMetadata;
    setValue("metadata", restMetadata);
  };

  const onFormSubmit: SubmitHandler<ItemFormData> = async (data) => {
    try {
      // Validate with Zod schema
      const result = itemSchema.safeParse(data);

      if (!result.success) {
        result.error.issues.forEach((issue: any) => {
          setError(issue.path[0] as keyof ItemFormData, {
            message: issue.message,
          });
        });
        return;
      }

      // Process metadata - try to parse JSON values, otherwise keep as string
      const processedMetadata = result.data.metadata ? Object.entries(result.data.metadata).reduce((acc, [key, value]) => {
        if (typeof value === 'string') {
          try {
            // Try to parse as JSON
            acc[key] = JSON.parse(value);
          } catch {
            // Keep as string if not valid JSON
            acc[key] = value;
          }
        } else {
          acc[key] = value;
        }
        return acc;
      }, {} as Record<string, any>) : undefined;

      await onSubmit({
        ...result.data,
        metadata: processedMetadata,
      });
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          {initialData ? "Edit Item" : "Add New Item"}
        </h2>
      </div>

      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
        <FormField label="Title" error={errors.title?.message}>
          <Input
            {...register("title")}
            type="text"
            placeholder="Enter item title"
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
            placeholder="Enter item description"
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
          <FormField label="Image URL" error={errors.imageUrl?.message}>
            <Input
              {...register("imageUrl")}
              type="url"
              placeholder="https://example.com/image.jpg"
              disabled={isSubmitting || isLoading}
              variant={errors.imageUrl ? "destructive" : "default"}
              isInvalid={!!errors.imageUrl}
              leftIcon={<Image className="h-4 w-4" />}
              rightIcon={errors.imageUrl ? <X className="h-4 w-4" /> : undefined}
            />
          </FormField>

          <FormField label="Position" error={errors.position?.message}>
            <Input
              {...register("position", { valueAsNumber: true })}
              type="number"
              placeholder="1"
              min="1"
              max={maxPosition}
              disabled={isSubmitting || isLoading}
              variant={errors.position ? "destructive" : "default"}
              isInvalid={!!errors.position}
              leftIcon={<Hash className="h-4 w-4" />}
              rightIcon={errors.position ? <X className="h-4 w-4" /> : undefined}
            />
            <p className="text-xs text-muted-foreground mt-1">
              Position in ranking (1-{maxPosition})
            </p>
          </FormField>
        </div>

        {/* Metadata Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium">Metadata (Optional)</Label>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={addMetadataField}
              className="gap-2"
              disabled={isSubmitting || isLoading}
            >
              <Plus className="h-4 w-4" />
              Add Field
            </Button>
          </div>

          <div className="space-y-3">
            {metadataFields.length === 0 ? (
              <div className="text-center py-4 border-2 border-dashed border-neutral-300 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  No metadata fields added. Click "Add Field" to add custom data.
                </p>
              </div>
            ) : (
              metadataFields.map((field, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={field.key}
                    onChange={(e) => updateMetadataField(index, 'key', e.target.value)}
                    placeholder="Field name"
                    disabled={isSubmitting || isLoading}
                    className="flex-1"
                  />
                  <Input
                    value={field.value}
                    onChange={(e) => updateMetadataField(index, 'value', e.target.value)}
                    placeholder="Field value"
                    disabled={isSubmitting || isLoading}
                    className="flex-1"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => removeMetadataField(index)}
                    disabled={isSubmitting || isLoading}
                    className="text-error-600 hover:text-error-700 hover:bg-error-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))
            )}
          </div>

          {metadataFields.length > 0 && (
            <p className="text-xs text-muted-foreground">
              Add custom key-value pairs for additional item information.
              Values can be text, numbers, or JSON objects.
            </p>
          )}
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
                  text={initialData ? "Updating..." : "Adding..."}
                />
              </>
            ) : (
              initialData ? "Update Item" : "Add Item"
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