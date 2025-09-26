"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input, FormField } from "@/components/ui/input";
import {
  Toast,
  ToastTitle,
  ToastDescription,
  ToastContainer,
} from "@/components/ui/toast";
import { Loading } from "@/components/ui/loading";
import { X, Mail, Lock } from "lucide-react";
import { useToast } from "../_components/useToast";
import { handleZodValidation } from "../_components/formValidation";
import { signIn } from "@/lib/auth-client";
import { loginSchema, type LoginFormData } from "@/lib/schemas/auth";

export default function LoginPage() {
  const { toasts, addToast, removeToast } = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<LoginFormData>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      // Validate with Zod schema
      const result = loginSchema.safeParse(data);

      if (!handleZodValidation(result, setError)) {
        return;
      }

      if (!result.success) {
        return;
      }

      console.log("Valid login data:", result.data);

      // Use better-auth signIn
      await signIn.email(
        {
          email: result.data.email,
          password: result.data.password,
        },
        {
          onRequest: (ctx) => {
            // Loading state is already handled by isSubmitting
          },
          onSuccess: (ctx) => {
            addToast(
              "success",
              "Login Successful!",
              "Welcome back! Redirecting to dashboard..."
            );
            router.push("/dashboard");
          },
          onError: (ctx) => {
            addToast(
              "destructive",
              "Login Failed",
              ctx.error.message || "Invalid credentials. Please try again."
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
        <h1 className="text-2xl font-bold mb-6">Login</h1>

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

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loading
                  type="spinner"
                  size="sm"
                  variant="neutral"
                  text="Logging in..."
                />
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Don't have an account?{" "}
            <a
              href="/register"
              className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Sign up here
            </a>
          </p>
        </div>
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
