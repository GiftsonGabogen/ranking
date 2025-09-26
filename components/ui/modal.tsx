"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/design-token-utils"

const Modal = DialogPrimitive.Root
const ModalTrigger = DialogPrimitive.Trigger
const ModalClose = DialogPrimitive.Close

const modalOverlayVariants = cva(
  "fixed inset-0 z-modalBackdrop bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
  {
    variants: {
      blur: {
        none: "backdrop-blur-none",
        sm: "backdrop-blur-sm", 
        md: "backdrop-blur-md",
        lg: "backdrop-blur-lg",
      },
      darkness: {
        light: "bg-black/30",
        normal: "bg-black/50",
        dark: "bg-black/70",
        darker: "bg-black/80",
      }
    },
    defaultVariants: {
      blur: "sm",
      darkness: "normal",
    },
  }
)

const modalContentVariants = cva(
  "fixed left-[50%] top-[50%] z-modal grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-xl duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 dark:bg-neutral-950 outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default: "border-neutral-200 dark:border-neutral-800",
        glass: "bg-white/90 dark:bg-neutral-950/90 backdrop-blur-lg border border-white/20 dark:border-neutral-700/50 shadow-2xl shadow-neutral-900/25",
        gradient: "bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900 border border-neutral-200/50 dark:border-neutral-700/50",
        elevated: "shadow-2xl shadow-neutral-900/20 border-neutral-100 dark:border-neutral-700 bg-white dark:bg-neutral-900",
      },
      size: {
        xs: "max-w-sm",
        sm: "max-w-md", 
        default: "max-w-lg",
        lg: "max-w-xl",
        xl: "max-w-2xl",
        "2xl": "max-w-4xl",
        "3xl": "max-w-6xl",
        full: "max-w-[95vw] max-h-[95vh] overflow-auto",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
      },
      animation: {
        default: "duration-300",
        fast: "duration-200",
        slow: "duration-500",
        bounce: "duration-500 data-[state=open]:animate-bounce-in data-[state=closed]:animate-bounce-out",
        slide: "duration-400 data-[state=open]:animate-slide-up data-[state=closed]:animate-slide-down",
        scale: "duration-300 data-[state=open]:animate-scale-in data-[state=closed]:animate-scale-out",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "lg",
      animation: "default",
    },
  }
)

const ModalOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> &
    VariantProps<typeof modalOverlayVariants>
>(({ className, blur, darkness, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(modalOverlayVariants({ blur, darkness, className }))}
    {...props}
  />
))
ModalOverlay.displayName = DialogPrimitive.Overlay.displayName

const ModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> &
    VariantProps<typeof modalContentVariants>
>(({ className, variant, size, rounded, animation, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <ModalOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(modalContentVariants({ variant, size, rounded, animation, className }))}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-md p-1 opacity-70 ring-offset-background transition-all duration-200 hover:opacity-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:scale-110 active:scale-95">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
))
ModalContent.displayName = DialogPrimitive.Content.displayName

const ModalHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
))
ModalHeader.displayName = "ModalHeader"

const ModalFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
))
ModalFooter.displayName = "ModalFooter"

const ModalTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight text-foreground",
      className
    )}
    {...props}
  />
))
ModalTitle.displayName = DialogPrimitive.Title.displayName

const ModalDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(
      "text-sm text-muted-foreground",
      className
    )}
    {...props}
  />
))
ModalDescription.displayName = DialogPrimitive.Description.displayName

export {
  Modal,
  ModalOverlay,
  ModalTrigger,
  ModalClose,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalDescription,
}