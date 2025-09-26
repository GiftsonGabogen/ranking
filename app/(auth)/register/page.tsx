"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input, FormField } from "@/components/ui/input";
import {
  Toast,
  ToastTitle,
  ToastDescription,
  ToastContainer,
} from "@/components/ui/toast";
import { Loading } from "@/components/ui/loading";
import { X, Mail, User, Lock } from "lucide-react";
import { useToast } from "../_components/useToast";
import { handleZodValidation } from "../_components/formValidation";
import { signUp } from "@/lib/auth-client";
import { registerSchema, type RegisterFormData } from "@/lib/schemas/auth";

export default function RegisterPage() {
  const { toasts, addToast, removeToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<RegisterFormData>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    try {
      // Validate with Zod schema
      const result = registerSchema.safeParse(data);

      if (!handleZodValidation(result, setError)) {
        return;
      }

      if (!result.success) {
        return;
      }

      console.log("Valid data:", result.data);

      // Use better-auth signUp
      await signUp.email(
        {
          email: result.data.email,
          password: result.data.password,
          name: result.data.username,
        },
        {
          onRequest: (ctx) => {
            // Loading state is already handled by isSubmitting
          },
          onSuccess: (ctx) => {
            addToast(
              "success",
              "Registration Successful!",
              "Welcome! Your account has been created."
            );
            reset();
          },
          onError: (ctx) => {
            addToast(
              "destructive",
              "Registration Failed",
              ctx.error.message || "Something went wrong. Please try again."
            );
          },
        }
      );
    } catch (error) {
      addToast(
        "destructive",
        "Server Error",
        "Something went wrong on our end. Please try again later."
      );
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Register</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormField label="Email" error={errors.email?.message}>
            <Input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              disabled={isSubmitting}
              variant={errors.email ? "destructive" : "default"}
              isInvalid={!!errors.email}
              leftIcon={<Mail className="h-4 w-4" />}
              rightIcon={errors.email ? <X className="h-4 w-4" /> : undefined}
            />
          </FormField>

          <FormField label="Username" error={errors.username?.message}>
            <Input
              {...register("username")}
              type="text"
              placeholder="Enter your username"
              disabled={isSubmitting}
              variant={errors.username ? "destructive" : "default"}
              isInvalid={!!errors.username}
              leftIcon={<User className="h-4 w-4" />}
              rightIcon={
                errors.username ? <X className="h-4 w-4" /> : undefined
              }
            />
          </FormField>

          <FormField label="Password" error={errors.password?.message}>
            <Input
              {...register("password")}
              type="password"
              placeholder="Enter your password"
              disabled={isSubmitting}
              variant={errors.password ? "destructive" : "default"}
              isInvalid={!!errors.password}
              leftIcon={<Lock className="h-4 w-4" />}
              rightIcon={
                errors.password ? <X className="h-4 w-4" /> : undefined
              }
            />
          </FormField>

          <FormField
            label="Confirm Password"
            error={errors.confirmPassword?.message}
          >
            <Input
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirm your password"
              disabled={isSubmitting}
              variant={errors.confirmPassword ? "destructive" : "default"}
              isInvalid={!!errors.confirmPassword}
              leftIcon={<Lock className="h-4 w-4" />}
              rightIcon={
                errors.confirmPassword ? <X className="h-4 w-4" /> : undefined
              }
            />
          </FormField>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loading
                  type="spinner"
                  size="sm"
                  variant="neutral"
                  text="
                Creating Account..."
                />
              </>
            ) : (
              "Register"
            )}
          </Button>
        </form>
      </div>

      {/* Toast Notifications */}
      <ToastContainer position="top-right">
        {toasts.map((toast) => (
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
      </ToastContainer>
    </>
  );
}
