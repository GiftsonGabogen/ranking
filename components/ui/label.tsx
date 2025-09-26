"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn, spacingClasses, typographyClasses } from "@/lib/design-token-utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        spacingClasses.gap.sm,
        typographyClasses.size.sm,
        typographyClasses.weight.medium,
        className
      )}
      {...props}
    />
  )
}

export { Label }
