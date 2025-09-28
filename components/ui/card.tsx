import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn, cardAnimations, cardVariants } from "@/lib/design-token-utils";
import { SkeletonCard } from "./skeleton";

const cardVariantsCVA = cva(
  "rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900",
  {
    variants: {
      variant: {
        default: [
          cardVariants.surface.default,
          cardAnimations.base,
        ].join(" "),
        animated: [
          cardVariants.surface.default,
          cardAnimations.base,
          cardAnimations.lift,
          cardAnimations.softDepth,
        ].join(" "),
        elevated: [
          cardVariants.surface.elevated,
          cardAnimations.base,
          cardAnimations.elevate,
          cardAnimations.innerLight,
        ].join(" "),
        glass: [
          cardVariants.surface.glass,
          cardAnimations.base,
          cardAnimations.primaryGlow,
          cardAnimations.innerLight,
        ].join(" "),
        outline: [
          cardVariants.surface.outline,
          cardAnimations.base,
          cardAnimations.borderLight,
          cardAnimations.elevate,
        ].join(" "),
        interactive: [
          cardVariants.surface.default,
          cardVariants.interactive.default,
          cardAnimations.base,
          cardAnimations.lift,
          cardAnimations.primaryGlow,
          cardAnimations.innerLight,
        ].join(" "),
        shimmer: [
          cardVariants.surface.elevated,
          cardAnimations.base,
          cardAnimations.shimmer,
          cardAnimations.softDepth,
        ].join(" "),
        gradient: [
          cardVariants.surface.gradient,
          cardAnimations.base,
          cardAnimations.lift,
          cardAnimations.multiGlow,
          cardAnimations.innerLight,
        ].join(" "),
        gradientPrimary: [
          cardVariants.surface.gradientPrimary,
          cardAnimations.base,
          cardAnimations.primaryGlow,
          cardAnimations.innerLight,
        ].join(" "),
        gradientSecondary: [
          cardVariants.surface.gradientSecondary,
          cardAnimations.base,
          cardAnimations.secondaryGlow,
          cardAnimations.innerLight,
        ].join(" "),
        gradientMulti: [
          cardVariants.surface.gradientMulti,
          cardAnimations.base,
          cardAnimations.multiGlow,
          cardAnimations.innerLight,
        ].join(" "),
        gradientWarm: [
          cardVariants.surface.gradientWarm,
          cardAnimations.base,
          cardAnimations.lift,
          cardAnimations.innerLight,
        ].join(" "),
        gradientCool: [
          cardVariants.surface.gradientCool,
          cardAnimations.base,
          cardAnimations.lift,
          cardAnimations.innerLight,
        ].join(" "),
      },
      size: {
        sm: "p-3 gap-2 rounded-md",
        default: "p-6 gap-4 rounded-lg",
        lg: "p-8 gap-5 rounded-xl",
        xl: "p-10 gap-6 rounded-2xl",
        full: "p-6 gap-4 rounded-lg w-full",
      },
      color: {
        default: cardVariants.color.default,
        primary: cardVariants.color.primary,
        secondary: cardVariants.color.secondary,
        success: cardVariants.color.success,
        warning: cardVariants.color.warning,
        error: cardVariants.color.error,
      },
      state: {
        default: "",
        loading: "",
        disabled: cardVariants.interactive.disabled,
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      color: "default",
      state: "default",
    },
  }
);

export interface CardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof cardVariantsCVA> {
  asChild?: boolean;
  skeletonLayout?: "default" | "media" | "avatar" | "product" | "dashboard";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant,
      size,
      color,
      state,
      asChild = false,
      skeletonLayout = "default",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "div";

    // Return skeleton when loading
    if (state === "loading") {
      return (
        <SkeletonCard
          ref={ref}
          layout={skeletonLayout}
          size={size === "sm" ? "sm" : size === "lg" ? "lg" : "md"}
          className={className}
          {...props}
        />
      );
    }

    return (
      <Comp
        ref={ref}
        data-slot="card"
        className={cn(
          cardVariantsCVA({ variant, size, color, state, className })
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-header"
    className={cn("flex flex-col space-y-1.5", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    data-slot="card-title"
    className={cn(
      "text-xl font-semibold leading-none tracking-tight text-neutral-900 dark:text-neutral-50",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="card-description"
    className={cn(
      "text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed",
      className
    )}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-content"
    className={cn("flex-1", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-footer"
    className={cn(
      "flex items-center gap-2 pt-4 border-t border-neutral-200 dark:border-neutral-700",
      className
    )}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

const CardMedia = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    src?: string;
    alt?: string;
    aspectRatio?: "square" | "video" | "wide" | "tall";
  }
>(({ className, src, alt, aspectRatio = "video", children, ...props }, ref) => {
  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[16/9]",
    tall: "aspect-[3/4]",
  };

  if (src) {
    return (
      <div
        ref={ref}
        data-slot="card-media"
        className={cn(
          "relative overflow-hidden rounded-t-lg bg-neutral-100 dark:bg-neutral-800",
          aspectRatioClasses[aspectRatio],
          className
        )}
        {...props}
      >
        <img
          src={src}
          alt={alt || ""}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div
      ref={ref}
      data-slot="card-media"
      className={cn(
        "relative overflow-hidden rounded-t-lg bg-neutral-100 dark:bg-neutral-800",
        aspectRatioClasses[aspectRatio],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
CardMedia.displayName = "CardMedia";

const CardBadge = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & {
    variant?:
      | "default"
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "error";
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  }
>(
  (
    { className, variant = "default", position = "top-right", ...props },
    ref
  ) => {
    const badgeVariants = {
      default:
        "bg-neutral-100 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300",
      primary:
        "bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300",
      secondary:
        "bg-secondary-100 text-secondary-700 dark:bg-secondary-900/50 dark:text-secondary-300",
      success:
        "bg-success-100 text-success-700 dark:bg-success-900/50 dark:text-success-300",
      warning:
        "bg-warning-100 text-warning-700 dark:bg-warning-900/50 dark:text-warning-300",
      error:
        "bg-error-100 text-error-700 dark:bg-error-900/50 dark:text-error-300",
    };

    const positionClasses = {
      "top-right": "top-3 right-3",
      "top-left": "top-3 left-3",
      "bottom-right": "bottom-3 right-3",
      "bottom-left": "bottom-3 left-3",
    };

    return (
      <span
        ref={ref}
        data-slot="card-badge"
        className={cn(
          "absolute px-2 py-1 text-xs font-medium rounded-full z-10",
          positionClasses[position],
          badgeVariants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
CardBadge.displayName = "CardBadge";

const CardActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    justify?: "start" | "center" | "end" | "between";
  }
>(({ className, justify = "end", ...props }, ref) => {
  const justifyClasses = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
  };

  return (
    <div
      ref={ref}
      data-slot="card-actions"
      className={cn(
        "flex items-center gap-2 pt-4",
        justifyClasses[justify],
        className
      )}
      {...props}
    />
  );
});
CardActions.displayName = "CardActions";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardMedia,
  CardBadge,
  CardActions,
};
